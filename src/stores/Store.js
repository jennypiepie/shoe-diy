import { proxy } from "valtio";
import empty from '../assets/textures/Empty.png'
import texture1 from '../assets/textures/texture1.jpg'
import texture2 from '../assets/textures/texture2.jpg'
import texture3 from '../assets/textures/texture3.jpg'
import texture4 from '../assets/textures/texture4.jpg'

import denmin from '../assets/textures/denmin.jpg'
import fabric from '../assets/textures/fabric.jpg'
import leather from '../assets/textures/leather.jpg'

const Store = proxy({
  current: 'body',
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
    body: empty,
  },
  material: {
    body:''
  },
  laces: {
    color: ['#ffffff','#000000','#70cccc']
  },
  body:{
    color:["#ffffff", "#30432d", "#e9b229", "#5b4691", "#c7e3e9","#063a78", "#d6d3c6", "#74433f","#063a78", "#d6d3c6", "#db858f"],
    pattern:[empty,texture1,texture2,texture3,texture4],
    material: [empty,denmin,fabric,leather]
  },
  caps: {
    color: ["#db858f", "#30432d", "#e9b229", "#5b4691"]
  },
  inner: {
    color: ["#c7e3e9", "#063a78"]
  },
  sole: {
    color: ["#db858f"]
  },
  stripes: {
    color: ["#d6d3c6", "#74433f"]
  },
  band: {
    color: ["#d6d3c6", "#74433f"]
  },
  patch: {
    color: ["#d6d3c6", "#74433f"]
  },
  screenshot:false,
  imgUrls:[]
})

export default Store