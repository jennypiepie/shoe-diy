import { proxy } from "valtio";
import empty from '../assets/textures/empty.png'
// import empty from '../assets/textures/empty.jpg'


import texture1 from '../assets/textures/texture1.png'
import texture2 from '../assets/textures/texture2.png'
import texture3 from '../assets/textures/texture3.png'
import texture4 from '../assets/textures/texture4.png'
import texture5 from '../assets/textures/texture5.png'
import texture6 from '../assets/textures/texture6.png'
import texture7 from '../assets/textures/texture7.png'
import texture8 from '../assets/textures/texture8.png'
import texture9 from '../assets/textures/texture9.png'
import texture10 from '../assets/textures/texture10.png'


import denmin from '../assets/textures/denmin.jpg'
import fabric from '../assets/textures/fabric.jpg'
import leather from '../assets/textures/leather.jpg'

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
    pattern:[empty,texture1,texture2,texture3,texture4,texture5,texture6,texture7,texture8,texture9,texture10],
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