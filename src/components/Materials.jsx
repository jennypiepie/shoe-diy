import * as THREE from 'three'
// import empty from '../assets/textures/empty.png'

const textureLoader = new THREE.TextureLoader()

// const colorTexture = textureLoader.load(empty)

const leatherColorTexture = textureLoader.load('/materials/leather/color.jpg')
const leatherNormalTexture = textureLoader.load('/materials/leather/normal.jpg')
const leatherRoughnessTexture = textureLoader.load('/materials/leather/roughness.jpg')
const leatherAOTexture = textureLoader.load('/materials/leather/ao.jpg')

const denminColorTexture = textureLoader.load('/materials/denmin/color.jpg')
const denminNormalTexture = textureLoader.load('/materials/denmin/normal.jpg')
const denminRoughnessTexture = textureLoader.load('/materials/denmin/roughness.jpg')
const denminAOTexture = textureLoader.load('/materials/denmin/ao.jpg')

const fabricColorTexture = textureLoader.load('/materials/fabric/color.jpg')
const fabricNormalTexture = textureLoader.load('/materials/fabric/normal.jpg')
const fabricRoughnessTexture = textureLoader.load('/materials/fabric/roughness.jpg')
const fabricAOTexture = textureLoader.load('/materials/fabric/ao.jpg')

export const leather = new THREE.MeshStandardMaterial({
    name:'body',
    map: leatherColorTexture,
    normalMap: leatherNormalTexture,
    roughnessMap: leatherRoughnessTexture,
    aoMap:leatherAOTexture,
    visible: true
})

export const denmin = new THREE.MeshStandardMaterial({
    name:'body',
    map: denminColorTexture,
    normalMap: denminNormalTexture,
    roughnessMap: denminRoughnessTexture,
    aoMap:denminAOTexture,
    visible: true
})

export const fabric = new THREE.MeshStandardMaterial({
    name:'body',
    map: fabricColorTexture,
    normalMap: fabricNormalTexture,
    roughnessMap: fabricRoughnessTexture,
    aoMap:fabricAOTexture,
    visible: true
})



