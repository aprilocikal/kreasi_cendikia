import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import {
  collection,
  getDocs,
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
      const portSnap = await getDocs(collection(db, "kci_portfolio"));
      if (!portSnap.empty) {
        const portData = portSnap.docs.map((d) => ({
          ...d.data(),
          id: d.id,
        }));
        setPortfolio(portData);
        saveLocal("kci_portfolio", portData);
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
  // CRUD ACTIONS: PORTOFOLIO
  // ==========================================
  const addPortfolio = async (item) => {
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
  const updateLegality = async (key, updatedFields) => {
    setLegality((prev) => {
      const updated = {
        ...prev,
        [key]: {
          ...(prev[key] || {}),
          ...updatedFields,
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

  const resetAllToDefaults = async () => {
    setPortfolio(DEFAULT_PORTFOLIO);
    setServices(DEFAULT_SERVICES);
    setLegality(DEFAULT_LEGALITY);
    saveLocal("kci_portfolio", DEFAULT_PORTFOLIO);
    saveLocal("kci_services", DEFAULT_SERVICES);
    saveLocal("kci_legality", DEFAULT_LEGALITY);
    await seedToFirebase();
  };

  return (
    <DataContext.Provider
      value={{
        portfolio,
        services,
        legality,
        loading,
        firebaseStatus,
        refreshFromFirebase,
        seedToFirebase,
        resetAllToDefaults,
        addPortfolio,
        updatePortfolio,
        deletePortfolio,
        addService,
        updateService,
        deleteService,
        updateLegality,
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
