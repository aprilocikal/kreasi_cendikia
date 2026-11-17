import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function FloatingTopiary({ position, color, size = 1, speed = 1 }) {
  const meshRef = useRef()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.004 * speed
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.8 * speed) * 0.0015
    }
  })

  return (
    <Float speed={speed * 1.2} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={size}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color={color}
          roughness={0.4}
          metalness={0.1}
          wireframe={false}
          transparent
          opacity={0.75}
        />
      </mesh>
    </Float>
  )
}

function LandscapeContourRing({ position, radius, color, rotSpeed = 0.005 }) {
  const ringRef = useRef()
  useFrame(() => {
    if (ringRef.current) {
      ringRef.current.rotation.z += rotSpeed
    }
  })

  return (
    <mesh ref={ringRef} position={position} rotation={[-Math.PI / 3, 0, 0]}>
      <ringGeometry args={[radius - 0.04, radius, 64]} />
      <meshBasicMaterial color={color} side={THREE.DoubleSide} transparent opacity={0.35} />
    </mesh>
  )
}

function NaturePollenParticles() {
  const count = 65
  const positions = useMemo(() => {
    const coords = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      coords[i * 3] = (Math.random() - 0.5) * 16
      coords[i * 3 + 1] = (Math.random() - 0.5) * 10
      coords[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    return coords
  }, [])

  const pointsRef = useRef()
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        color="#8BA888"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export default function ThreeHero() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 8, 5]} intensity={1.1} color="#FAF7F2" />
      <pointLight position={[-4, -3, -2]} intensity={0.5} color="#E28743" />

      {/* Stylized Floating Geometric Landscape Foliage (Sage & Tint) */}
      <FloatingTopiary position={[3.6, 1.2, -1]} color="#8BA888" size={1.4} speed={0.9} />
      <FloatingTopiary position={[-3.8, -1.0, -1.5]} color="#A3BEA0" size={1.1} speed={1.1} />
      <FloatingTopiary position={[2.8, -2.2, -2]} color="#D6E6D4" size={0.85} speed={0.7} />
      <FloatingTopiary position={[-2.9, 2.0, -2.5]} color="#E28743" size={0.65} speed={1.3} />

      {/* Contour Landscape rings */}
      <LandscapeContourRing position={[3.6, 1.2, -1]} radius={2.2} color="#8BA888" rotSpeed={0.003} />
      <LandscapeContourRing position={[-3.8, -1.0, -1.5]} radius={1.8} color="#C1D7BE" rotSpeed={-0.004} />

      {/* Soft Nature Floating Particles */}
      <NaturePollenParticles />
    </Canvas>
  )
}
