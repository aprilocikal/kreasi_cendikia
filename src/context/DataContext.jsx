import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../services/firebase";
import {
  GALLERY_ITEMS as DEFAULT_PORTFOLIO,
  SERVICES as DEFAULT_SERVICES,
  LEGALITY_DATA as DEFAULT_LEGALITY,
  PORTFOLIO_CATEGORIES as DEFAULT_CATEGORIES,
} from "../data/kciData";

const DataContext = createContext(null);

export function DataProvider({ children }) {
  // 1. Initial State from localStorage (cached) or default fallback from kciData.js
  const [portfolio, setPortfolio] = useState(() => {
    try {
      const cached = localStorage.getItem("kci_portfolio");
      return cached ? JSON.parse(cached) : DEFAULT_PORTFOLIO;
    } catch {
      return DEFAULT_PORTFOLIO;
    }
  });

  const [services, setServices] = useState(() => {
    try {
      const cached = localStorage.getItem("kci_services");
      return cached ? JSON.parse(cached) : DEFAULT_SERVICES;
    } catch {
      return DEFAULT_SERVICES;
    }
  });

  const [legality, setLegality] = useState(() => {
    try {
      const cached = localStorage.getItem("kci_legality");
      return cached ? JSON.parse(cached) : DEFAULT_LEGALITY;
    } catch {
      return DEFAULT_LEGALITY;
    }
  });

  const [categories, setCategories] = useState(() => {
    try {
      const cached = localStorage.getItem("kci_categories");
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return Array.from(new Set(["Semua", ...parsed]));
        }
      }
    } catch {}
    return DEFAULT_CATEGORIES;
  });

  const [loading, setLoading] = useState(true);
  const [firebaseStatus, setFirebaseStatus] = useState("connecting"); // 'connecting' | 'connected' | 'offline'

  // Helper to persist to localStorage
  const saveLocal = (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.warn(`Could not save to localStorage for ${key}`, e);
    }
  };

  // Seed default data to Firebase Firestore
  const seedToFirebase = useCallback(async () => {
    try {
      setFirebaseStatus("connecting");
      // Seed Portfolio
      for (const item of DEFAULT_PORTFOLIO) {
        await setDoc(doc(db, "kci_portfolio", item.id), item);
      }
      // Seed Services
      for (const item of DEFAULT_SERVICES) {
        await setDoc(doc(db, "kci_services", item.id), item);
      }
      // Seed Legality
      for (const [key, item] of Object.entries(DEFAULT_LEGALITY)) {
        await setDoc(doc(db, "kci_legality", key), item);
      }
      // Seed Categories
      await setDoc(doc(db, "kci_settings", "categories"), {
        list: DEFAULT_CATEGORIES,
      });
      setFirebaseStatus("connected");
      return { success: true };
    } catch (error) {
      console.error("Error seeding to Firebase:", error);
      setFirebaseStatus("offline");
      return { success: false, error: error.message };
    }
  }, []);

  // Fetch all collections from Firebase Firestore
  const refreshFromFirebase = useCallback(async () => {
    setLoading(true);
    try {
      // 1. Portfolio
      let currentPortData = [];
      const portSnap = await getDocs(collection(db, "kci_portfolio"));
      if (!portSnap.empty) {
        currentPortData = portSnap.docs.map((d) => ({
          ...d.data(),
          id: d.id,
        }));
        setPortfolio(currentPortData);
        saveLocal("kci_portfolio", currentPortData);
      } else {
        // If collection doesn't exist yet, seed it!
        seedToFirebase();
      }

      // 2. Services
      const servSnap = await getDocs(collection(db, "kci_services"));
      if (!servSnap.empty) {
        const servData = servSnap.docs.map((d) => ({
          ...d.data(),
          id: d.id,
        }));
        // Sort by number if available
        servData.sort((a, b) => (a.number || "").localeCompare(b.number || ""));
        setServices(servData);
        saveLocal("kci_services", servData);
      }

      // 3. Legality
      const legSnap = await getDocs(collection(db, "kci_legality"));
      if (!legSnap.empty) {
        const legData = {};
        legSnap.docs.forEach((d) => {
          legData[d.id] = d.data();
        });
        setLegality(legData);
        saveLocal("kci_legality", legData);
      }

      // 4. Categories
      try {
        const catSnap = await getDoc(doc(db, "kci_settings", "categories"));
        let firestoreCats = [];
        if (catSnap.exists() && Array.isArray(catSnap.data()?.list)) {
          firestoreCats = catSnap.data().list;
        }
        const itemCats = currentPortData.map((p) => p.category).filter(Boolean);
        const combined = Array.from(
          new Set(["Semua", ...DEFAULT_CATEGORIES, ...firestoreCats, ...itemCats])
        );
        setCategories(combined);
        saveLocal("kci_categories", combined);
      } catch (catErr) {
        console.warn("Could not fetch categories from Firebase:", catErr);
      }

      setFirebaseStatus("connected");
    } catch (error) {
      console.warn("Firebase fetch failed or Firestore not initialized yet. Using local fallback cache:", error);
      setFirebaseStatus("offline");
    } finally {
      setLoading(false);
    }
  }, [seedToFirebase]);

  useEffect(() => {
    refreshFromFirebase();
  }, [refreshFromFirebase]);

  // ==========================================
  // CRUD ACTIONS: CATEGORIES
  // ==========================================
  const addCategory = async (newCat) => {
    const trimmed = typeof newCat === "string" ? newCat.trim() : "";
    if (!trimmed) return "";

    let isNew = false;
    setCategories((prev) => {
      if (prev.includes(trimmed)) return prev;
      isNew = true;
      const updated = [...prev, trimmed];
      saveLocal("kci_categories", updated);
      setDoc(doc(db, "kci_settings", "categories"), { list: updated }).catch((e) =>
        console.warn("Could not save categories to Firestore:", e)
      );
      return updated;
    });
    return trimmed;
  };

  const deleteCategory = async (catName) => {
    if (!catName || catName === "Semua") return;
    setCategories((prev) => {
      const updated = prev.filter((c) => c !== catName);
      saveLocal("kci_categories", updated);
      setDoc(doc(db, "kci_settings", "categories"), { list: updated }).catch((e) =>
        console.warn("Could not delete category in Firestore:", e)
      );
      return updated;
    });
  };

  // ==========================================
  // CRUD ACTIONS: PORTOFOLIO
  // ==========================================
  const addPortfolio = async (item) => {
    if (item.category) {
      addCategory(item.category);
    }

    const newItem = {
      ...item,
      id: item.id || `p-${Date.now()}`,
    };

    // Update local immediately for instant UI responsiveness
    setPortfolio((prev) => {
      const updated = [newItem, ...prev];
      saveLocal("kci_portfolio", updated);
      return updated;
    });

    // Write to Firebase
    try {
      await setDoc(doc(db, "kci_portfolio", newItem.id), newItem);
      setFirebaseStatus("connected");
    } catch (err) {
      console.warn("Could not save to Firebase, saved locally:", err);
      setFirebaseStatus("offline");
    }
    return newItem;
  };

  const updatePortfolio = async (id, updatedFields) => {
    if (updatedFields.category) {
      addCategory(updatedFields.category);
    }

    setPortfolio((prev) => {
      const updated = prev.map((item) =>
        item.id === id ? { ...item, ...updatedFields } : item
      );
      saveLocal("kci_portfolio", updated);
      return updated;
    });

    try {
      await setDoc(doc(db, "kci_portfolio", id), updatedFields, { merge: true });
      setFirebaseStatus("connected");
    } catch (err) {
      console.warn("Could not update Firebase, updated locally:", err);
      setFirebaseStatus("offline");
    }
  };

  const deletePortfolio = async (id) => {
    setPortfolio((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      saveLocal("kci_portfolio", updated);
      return updated;
    });

    try {
      await deleteDoc(doc(db, "kci_portfolio", id));
      setFirebaseStatus("connected");
    } catch (err) {
      console.warn("Could not delete from Firebase, deleted locally:", err);
      setFirebaseStatus("offline");
    }
  };

  // ==========================================
  // CRUD ACTIONS: SERVICES (LAYANAN)
  // ==========================================
  const addService = async (item) => {
    const newItem = {
      ...item,
      id: item.id || `srv-${Date.now()}`,
      number: item.number || String(services.length + 1).padStart(2, "0"),
    };

    setServices((prev) => {
      const updated = [...prev, newItem];
      saveLocal("kci_services", updated);
      return updated;
    });

    try {
      await setDoc(doc(db, "kci_services", newItem.id), newItem);
      setFirebaseStatus("connected");
    } catch (err) {
      console.warn("Could not save service to Firebase:", err);
      setFirebaseStatus("offline");
    }
    return newItem;
  };

  const updateService = async (id, updatedFields) => {
    setServices((prev) => {
      const updated = prev.map((item) =>
        item.id === id ? { ...item, ...updatedFields } : item
      );
      saveLocal("kci_services", updated);
      return updated;
    });

    try {
      await setDoc(doc(db, "kci_services", id), updatedFields, { merge: true });
      setFirebaseStatus("connected");
    } catch (err) {
      console.warn("Could not update service on Firebase:", err);
      setFirebaseStatus("offline");
    }
  };

  const deleteService = async (id) => {
    setServices((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      saveLocal("kci_services", updated);
      return updated;
    });

    try {
      await deleteDoc(doc(db, "kci_services", id));
      setFirebaseStatus("connected");
    } catch (err) {
      console.warn("Could not delete service from Firebase:", err);
      setFirebaseStatus("offline");
    }
  };

  // ==========================================
  // CRUD ACTIONS: LEGALITAS
  // ==========================================
  const addLegalityDoc = async (key, data) => {
    const docKey = key?.trim() || `doc_${Date.now()}`;
    const payload = { ...data, id: docKey };
    setLegality((prev) => {
      const updated = {
        ...prev,
        [docKey]: payload,
      };
      saveLocal("kci_legality", updated);
      return updated;
    });

    try {
      await setDoc(doc(db, "kci_legality", docKey), payload);
      setFirebaseStatus("connected");
    } catch (err) {
      console.warn("Could not add legality doc to Firebase:", err);
      setFirebaseStatus("offline");
    }
    return docKey;
  };

  const updateLegality = async (key, updatedFields) => {
    setLegality((prev) => {
      const updated = {
        ...prev,
        [key]: {
          ...(prev[key] || {}),
          ...updatedFields,
          id: key,
        },
      };
      saveLocal("kci_legality", updated);
      return updated;
    });

    try {
      await setDoc(doc(db, "kci_legality", key), updatedFields, { merge: true });
      setFirebaseStatus("connected");
    } catch (err) {
      console.warn("Could not update legality on Firebase:", err);
      setFirebaseStatus("offline");
    }
  };

  const deleteLegalityDoc = async (key) => {
    setLegality((prev) => {
      const updated = { ...prev };
      delete updated[key];
      saveLocal("kci_legality", updated);
      return updated;
    });

    try {
      await deleteDoc(doc(db, "kci_legality", key));
      setFirebaseStatus("connected");
    } catch (err) {
      console.warn("Could not delete legality doc from Firebase:", err);
      setFirebaseStatus("offline");
    }
  };

  const resetAllToDefaults = async () => {
    setPortfolio(DEFAULT_PORTFOLIO);
    setServices(DEFAULT_SERVICES);
    setLegality(DEFAULT_LEGALITY);
    setCategories(DEFAULT_CATEGORIES);
    saveLocal("kci_portfolio", DEFAULT_PORTFOLIO);
    saveLocal("kci_services", DEFAULT_SERVICES);
    saveLocal("kci_legality", DEFAULT_LEGALITY);
    saveLocal("kci_categories", DEFAULT_CATEGORIES);
    await seedToFirebase();
  };

  return (
    <DataContext.Provider
      value={{
        portfolio,
        services,
        legality,
        categories,
        loading,
        firebaseStatus,
        refreshFromFirebase,
        seedToFirebase,
        resetAllToDefaults,
        addPortfolio,
        updatePortfolio,
        deletePortfolio,
        addCategory,
        deleteCategory,
        addService,
        updateService,
        deleteService,
        updateLegality,
        addLegalityDoc,
        deleteLegalityDoc,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
