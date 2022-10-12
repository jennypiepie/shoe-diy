import { proxy } from "valtio";
import texture1 from '../assets/textures/texture1.jpg'
import texture2 from '../assets/textures/texture2.jpg'
import texture3 from '../assets/textures/texture3.jpg'
import texture4 from '../assets/textures/texture4.jpg'

const Store = proxy({
  current: 'mesh',
  color: {
    laces: '#ffffff',
    mesh: '#ffffff',
    caps: '#ffffff',
    inner: '#ffffff',
    sole: '#ffffff',
    stripes: '#ffffff',
    band: '#ffffff',
    patch: '#ffffff'
  },
  pattern: {
    laces:null,
    mesh: texture1,
    caps: null,
    inner: null,
    sole: null,
    stripes: null,
    band:null,
    patch:null
  },
  laces: {
    color: ['#ffffff','#000000','#70cccc']
  },
  mesh:{
    color:["#db858f", "#30432d", "#e9b229", "#5b4691", "#c7e3e9","#063a78", "#d6d3c6", "#74433f","#063a78", "#d6d3c6", "#74433f"],
    pattern:[texture1,texture2,texture3,texture4],
    material: []
  },
  caps: {
    color: ["#db858f", "#30432d", "#e9b229", "#5b4691"],
    pattern:[texture1,texture2,texture3,texture4],
  },
  inner: {
    color: ["#c7e3e9", "#063a78"],
    pattern:[texture1,texture2,texture3,texture4],
  },
  sole: {
    color: ["#db858f"],
    pattern:[texture1,texture2,texture3,texture4],
  },
  stripes: {
    color: ["#d6d3c6", "#74433f"],
    pattern:[texture1,texture2,texture3,texture4],
  },
  band: {
    color: ["#d6d3c6", "#74433f"],
    pattern:[texture1,texture2,texture3,texture4],
  },
  patch: {
    color: ["#d6d3c6", "#74433f"],
    pattern:[texture1,texture2,texture3,texture4],
  },
  screenshot:false,
  imgUrls:[]
})

export default Store