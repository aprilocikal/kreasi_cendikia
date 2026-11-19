import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Html } from '@react-three/drei'
import {
  Box,
  RotateCcw,
  Sun,
  Moon,
  Maximize2,
  Trees,
  Sparkles,
  PhoneCall,
  CheckCircle2
} from 'lucide-react'
import * as THREE from 'three'
import './Interactive3DViewer.css'

// 3D Tree Component
function ModelTree({ position, scale = 1 }) {
  return (
    <group position={position} scale={scale}>
      {/* Trunk */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.08, 0.12, 1.2, 8]} />
        <meshStandardMaterial color="#6E5039" roughness={0.9} />
      </mesh>
      {/* Canopy Layers */}
      <mesh position={[0, 1.3, 0]}>
        <coneGeometry args={[0.65, 0.9, 8]} />
        <meshStandardMaterial color="#4D7C48" roughness={0.7} />
      </mesh>
      <mesh position={[0, 1.8, 0]}>
        <coneGeometry args={[0.5, 0.75, 8]} />
        <meshStandardMaterial color="#659A60" roughness={0.7} />
      </mesh>
      <mesh position={[0, 2.2, 0]}>
        <coneGeometry args={[0.35, 0.6, 8]} />
        <meshStandardMaterial color="#8BA888" roughness={0.7} />
      </mesh>
    </group>
  )
}

// 3D Rest Area Pavilion Structure (Inspired by KM 130 & KM 68 PDF)
function PavilionModel({ nightMode }) {
  return (
    <group position={[0, 0, 0]}>
      {/* Ground Grass Lawn */}
      <mesh position={[0, -0.05, 0]} receiveShadow>
        <cylinderGeometry args={[4.2, 4.4, 0.15, 64]} />
        <meshStandardMaterial color={nightMode ? '#283C26' : '#7FA67A'} roughness={0.8} />
      </mesh>

      {/* Concrete Patio / Pedestrian Plinth */}
      <mesh position={[0, 0.08, 0]} receiveShadow>
        <boxGeometry args={[4.0, 0.12, 2.8]} />
        <meshStandardMaterial color="#DFDDD7" roughness={0.5} />
      </mesh>

      {/* Circular Pond / Water Basin (PDF Rest Area KM 68) */}
      <group position={[1.4, 0.14, 0]}>
        {/* Pond rim */}
        <mesh>
          <cylinderGeometry args={[0.85, 0.92, 0.16, 32]} />
          <meshStandardMaterial color="#A4A29E" roughness={0.4} />
        </mesh>
        {/* Water Surface */}
        <mesh position={[0, 0.08, 0]}>
          <cylinderGeometry args={[0.78, 0.78, 0.02, 32]} />
          <meshStandardMaterial
            color="#3A8891"
            roughness={0.1}
            metalness={0.8}
            transparent
            opacity={0.85}
          />
        </mesh>
        {/* Water fountain jet */}
        <mesh position={[0, 0.25, 0]}>
          <cylinderGeometry args={[0.02, 0.06, 0.35, 8]} />
          <meshStandardMaterial color="#EBF4F6" transparent opacity={0.7} />
        </mesh>
      </group>

      {/* Modern Canopy Pavilion (PDF Rest Area KM 130) */}
      <group position={[-0.8, 0.14, 0]}>
        {/* Pavilion Deck Floor */}
        <mesh position={[0, 0.02, 0]}>
          <boxGeometry args={[2.0, 0.05, 2.2]} />
          <meshStandardMaterial color="#8C6D53" roughness={0.6} />
        </mesh>

        {/* 4 Steel Pillars */}
        {[
          [-0.9, -0.9],
          [0.9, -0.9],
          [-0.9, 0.9],
          [0.9, 0.9],
        ].map(([px, pz], idx) => (
          <mesh key={idx} position={[px, 0.75, pz]}>
            <cylinderGeometry args={[0.04, 0.04, 1.4, 8]} />
            <meshStandardMaterial color="#2E3732" roughness={0.3} metalness={0.6} />
          </mesh>
        ))}

        {/* Modern Slanted Roof Canopy */}
        <mesh position={[0, 1.5, 0]} rotation={[0.08, 0, 0]}>
          <boxGeometry args={[2.3, 0.08, 2.5]} />
          <meshStandardMaterial
            color={nightMode ? '#1C2621' : '#2A3C32'}
            roughness={0.3}
            metalness={0.4}
          />
        </mesh>

        {/* Glass / Translucent Skylight Stripe */}
        <mesh position={[0, 1.55, 0]} rotation={[0.08, 0, 0]}>
          <boxGeometry args={[0.6, 0.09, 2.45]} />
          <meshStandardMaterial color="#94C3B8" transparent opacity={0.6} />
        </mesh>

        {/* Seating Benches inside Pavilion */}
        <mesh position={[0, 0.22, 0]}>
          <boxGeometry args={[1.2, 0.15, 0.5]} />
          <meshStandardMaterial color="#B08968" roughness={0.7} />
        </mesh>

        {/* Pavilion Warm Downlight */}
        <pointLight
          position={[0, 1.3, 0]}
          intensity={nightMode ? 2.5 : 0.8}
          color="#FFB366"
          distance={3}
        />
      </group>

      {/* Decorative Garden Pathways (Stone pavers) */}
      {[-0.6, -0.3, 0, 0.3, 0.6, 0.9].map((offset, i) => (
        <mesh key={i} position={[0.3, 0.145, -0.9 + offset * 1.6]}>
          <boxGeometry args={[0.35, 0.02, 0.25]} />
          <meshStandardMaterial color="#B8B5AD" roughness={0.8} />
        </mesh>
      ))}

      {/* Garden Trees along perimeter */}
      <ModelTree position={[-1.7, 0, -1.2]} scale={1.1} />
      <ModelTree position={[-1.6, 0, 1.3]} scale={0.95} />
      <ModelTree position={[1.8, 0, -1.3]} scale={1.05} />
      <ModelTree position={[2.0, 0, 1.1]} scale={0.85} />

      {/* Shrub / Bonsai Planter */}
      <group position={[0.2, 0.14, 0.8]}>
        <mesh position={[0, 0.12, 0]}>
          <cylinderGeometry args={[0.22, 0.18, 0.22, 16]} />
          <meshStandardMaterial color="#424D46" />
        </mesh>
        <mesh position={[0, 0.32, 0]}>
          <dodecahedronGeometry args={[0.2, 1]} />
          <meshStandardMaterial color="#62925D" roughness={0.6} />
        </mesh>
      </group>
    </group>
  )
}

export default function Interactive3DViewer() {
  const [nightMode, setNightMode] = useState(false)
  const [cameraView, setCameraView] = useState('perspektif')
  const controlsRef = useRef()

  const setView = (type) => {
    setCameraView(type)
    if (!controlsRef.current) return
    if (type === 'perspektif') {
      controlsRef.current.reset()
      controlsRef.current.object.position.set(4, 3, 5)
    } else if (type === 'top') {
      controlsRef.current.object.position.set(0, 7, 0.1)
    } else if (type === 'pond') {
      controlsRef.current.object.position.set(2.5, 1.2, 2)
    }
  }

  return (
    <section id="model-3d" className="border-t border-[var(--border-warm)] bg-[var(--bg-canvas)] py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[var(--brand-primary)] uppercase">
            <Box size={14} />
            <span>Simulasi 3 Dimensi Interaktif</span>
          </div>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight tracking-tight text-[var(--ink-primary)] text-balance">
            Visualisasi Desain 3D: Pavilion &amp; Landscape Rest Area
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink-secondary)]">
            Diadaptasi dari pengalaman perencanaan Rest Area KM 130 Merak &amp; KM 68 Cipali (Astra Toll Road),
            kami memodelkan setiap detail tata ruang, hardscape, kolam, dan vegetasi secara 3D presisi tinggi sebelum proses konstruksi fisik dimulai.
          </p>
        </div>

        {/* 3D Canvas Box */}
        <div className={`mt-10 model3d-canvas-wrapper ${nightMode ? 'night' : ''}`}>
          <Canvas
            shadows
            camera={{ position: [4, 3.2, 4.8], fov: 45 }}
            style={{ width: '100%', height: '100%' }}
          >
            <color attach="background" args={[nightMode ? '#101913' : '#faf7f0']} />
            
            <ambientLight intensity={nightMode ? 0.35 : 0.95} />
            <directionalLight
              position={nightMode ? [3, 8, 2] : [6, 9, 5]}
              intensity={nightMode ? 0.45 : 1.3}
              color={nightMode ? '#A9C2D4' : '#FFF9EB'}
              castShadow
            />
            {nightMode && (
              <pointLight position={[0, 4, 0]} intensity={1.8} color="#75dc66" distance={8} />
            )}

            <Suspense fallback={null}>
              <PavilionModel nightMode={nightMode} />
            </Suspense>

            <OrbitControls
              ref={controlsRef}
              enableZoom={true}
              enablePan={false}
              minDistance={3.5}
              maxDistance={8.5}
              maxPolarAngle={Math.PI / 2.05}
              autoRotate={true}
              autoRotateSpeed={0.8}
            />
          </Canvas>

          {/* Interactive Control Overlay */}
          <div className="model3d-toolbar">
            <div className="view-switch-group">
              <button
                className={`view-btn ${cameraView === 'perspektif' ? 'active' : ''}`}
                onClick={() => setView('perspektif')}
              >
                Perspektif
              </button>
              <button
                className={`view-btn ${cameraView === 'top' ? 'active' : ''}`}
                onClick={() => setView('top')}
              >
                Site Plan (Atas)
              </button>
              <button
                className={`view-btn ${cameraView === 'pond' ? 'active' : ''}`}
                onClick={() => setView('pond')}
              >
                Kolam / Pond
              </button>
            </div>

            <div className="mode-switch-group">
              <button
                className={`mode-btn ${nightMode ? 'active' : ''}`}
                onClick={() => setNightMode(!nightMode)}
                title="Ganti Mode Pencahayaan Siang / Malam"
              >
                {nightMode ? <Sun size={15} /> : <Moon size={15} />}
                <span>{nightMode ? 'Siang' : 'Malam'}</span>
              </button>
              <button
                className="mode-btn"
                onClick={() => setView('perspektif')}
                title="Reset Sudut Pandang"
              >
                <RotateCcw size={15} />
              </button>
            </div>
          </div>

          <div className="model3d-hint-badge">
            <Sparkles size={13} className="text-[var(--accent-cta)]" />
            <span>Klik &amp; geser kursor untuk memutar model 360&deg; · Scroll untuk zoom</span>
          </div>
        </div>

        {/* Features breakdown grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-elevated)] p-6 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--bg-sage-soft)] text-[var(--accent-cta)]">
                <CheckCircle2 size={18} />
              </div>
              <h4 className="font-display text-base font-semibold text-[var(--ink-primary)]">
                Simulasi Skala Nyata
              </h4>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-[var(--ink-secondary)]">
              Memastikan proporsi kanopi arsitektural, jalur sirkulasi pejalan kaki, dan drainase air terencana dengan akurasi tinggi.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-elevated)] p-6 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--bg-sage-soft)] text-[var(--accent-cta)]">
                <CheckCircle2 size={18} />
              </div>
              <h4 className="font-display text-base font-semibold text-[var(--ink-primary)]">
                Harmonisasi Material
              </h4>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-[var(--ink-secondary)]">
              Perpaduan elemen kayu, struktur baja, batu alam, serta seleksi vegetasi tropis segar langsung dari nursery Cigombong.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-elevated)] p-6 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--bg-sage-soft)] text-[var(--accent-cta)]">
                <CheckCircle2 size={18} />
              </div>
              <h4 className="font-display text-base font-semibold text-[var(--ink-primary)]">
                Kesiapan Eksekusi Fisik
              </h4>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-[var(--ink-secondary)]">
              Model 3D langsung menjadi acuan teknis tim pelaksana lapangan untuk menjamin hasil konstruksi identik dengan konsep.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
