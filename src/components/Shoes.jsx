import { useState, useRef, useEffect } from 'react'
import { useFrame,useThree} from '@react-three/fiber'
import { useGLTF, useTexture} from '@react-three/drei'
import { useSnapshot } from "valtio";
import Store from '../stores/Store';
import { leather, denmin, fabric } from './Materials'

function Shoes(props) {
  const ref = useRef()
  const snap = useSnapshot(Store)
  const { nodes, materials } = useGLTF('/shoe-draco.glb')
  const [hovered, set] = useState(null)
  const colorMap = useTexture(Store.pattern.body)
  const material = {
    'leather': leather,
    'denmin': denmin,
    'fabric':fabric
  }

  const { gl, scene, camera } = useThree()
  if (snap.screenshot===true) {
    gl.render(scene, camera)
    Store.works.unshift({
      imgUrl: gl.domElement.toDataURL(),
      color: snap.color,
      pattern: snap.pattern.body,
      material:snap.material.body
    })
    Store.screenshot = false
  }

  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.color[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="32" y="60">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
    if (hovered) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(cursor)}'), auto`
      return () => (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(auto)}'), auto`)
    }
  }, [hovered])

  useFrame((state) => {
    if (snap.animate) {
      const t = state.clock.getElapsedTime()
      ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
      ref.current.rotation.x = Math.cos(t / 4) / 8
      ref.current.rotation.y = Math.sin(t / 4) / 8
      ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    }
  })


  return (
    <group ref={ref} {...props} dispose={null}
      onPointerOver={(e) => { e.stopPropagation(); set(e.object.material.name==='mesh'?'body':e.object.material.name)}}
      onPointerOut={(e) => { e.intersections.length === 0 && set(null) }}
      onPointerDown={(e) => { e.stopPropagation(); Store.current = e.object.material.name==='mesh'?'body':e.object.material.name;}}
      // onPointerMissed={(e) => { Store.current = 'body' }}
    >
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={snap.color.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={material[snap.material.body]||materials.mesh} 
        material-color={snap.color.body} material-map={colorMap} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={snap.color.caps}/>
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={snap.color.inner}/>
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={snap.color.sole}/>
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={snap.color.stripes}/>
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={snap.color.band}/>
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={snap.color.patch}/>
    </group>
  )
}

export default Shoes;
