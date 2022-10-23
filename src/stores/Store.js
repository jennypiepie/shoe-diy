import { proxy } from "valtio";


const empty = '/textures/empty.png'
const texture1 = '/textures/texture1.jpg'
const texture2 = '/textures/texture2.jpg'
const texture3 = '/textures/texture3.jpg'
const texture4 = '/textures/texture4.jpg'
const texture5 = '/textures/texture5.jpg'
const texture6 = '/textures/texture6.jpg'
const texture7 = '/textures/texture7.jpg'

const denmin = '/textures/denmin.jpg'
const fabric = '/textures/fabric.jpg'
const leather = '/textures/leather.jpg'

const Store = proxy({
  current: 'body',
  screenshot: false,
  animate:false,
  imgUrls: [],
  works: [],
  active:'color',
  color: {
    laces: '#ffffff',
    body: '#ffffff',
    caps: '#ffffff',
    inner: '#ffffff',
    sole: '#ffffff',
    stripes: '#ffffff',
    band: '#ffffff',
    patch: '#ffffff'
  },
  pattern: {
    body: empty
  },
  material: {
    body:empty
  },
  laces: {
    color: ["#ffffff","#000000","#B7B7B7","#D84040", "#FFB9B9", "#E77933", "#FDF772", "#1C7A1F","#A6E9AF","#B3EEE5","#70cccc","#309AC2", "#8FA3DC", "#734F7A", "#F24473"]
  },
  body:{
    color:["#ffffff","#000000","#B7B7B7","#D84040", "#FFB9B9", "#E77933", "#FDF772", "#1C7A1F","#A6E9AF","#B3EEE5","#70cccc","#309AC2", "#8FA3DC", "#734F7A", "#F24473"],
    pattern:[empty,texture1,texture2,texture3,texture4,texture5,texture6,texture7],
    material: [empty,denmin,fabric,leather]
  },
  caps: {
    color: ["#ffffff","#000000","#B7B7B7","#D84040", "#FFB9B9", "#E77933", "#FDF772", "#1C7A1F","#A6E9AF","#B3EEE5","#70cccc","#309AC2", "#8FA3DC", "#734F7A", "#F24473"]
  },
  inner: {
    color: ["#ffffff","#000000","#B7B7B7","#D84040", "#FFB9B9", "#E77933", "#FDF772", "#1C7A1F","#A6E9AF","#B3EEE5","#70cccc","#309AC2", "#8FA3DC", "#734F7A", "#F24473"]
  },
  sole: {
    color: ["#000000","#F1E1E1","#767676","#BFB686","#FAFF98"]
  },
  stripes: {
    color: ["#ffffff","#000000","#B7B7B7","#D84040", "#FFB9B9", "#E77933", "#FDF772", "#1C7A1F","#A6E9AF","#B3EEE5","#70cccc","#309AC2", "#8FA3DC", "#734F7A", "#F24473"]
  },
  band: {
    color: ["#ffffff","#000000","#B7B7B7","#D84040", "#FFB9B9", "#E77933", "#FDF772", "#1C7A1F","#A6E9AF","#B3EEE5","#70cccc","#309AC2", "#8FA3DC", "#734F7A", "#F24473"]
  },
  patch: {
    color: ["#ffffff","#000000","#B7B7B7","#D84040", "#FFB9B9", "#E77933", "#FDF772", "#1C7A1F","#A6E9AF","#B3EEE5","#70cccc","#309AC2", "#8FA3DC", "#734F7A", "#F24473"]
  }
})

export default Store