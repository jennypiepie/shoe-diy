import { proxy } from "valtio";

const Store = proxy({
  current: null,
  items: {
    laces: '#ffffff',
    mesh: '#ffffff',
    caps: '#ffffff',
    inner: '#ffffff',
    sole: '#ffffff',
    stripes: '#ffffff',
    band: '#ffffff',
    patch: '#ffffff'
  },
  screenshot:false,
  imgUrls:[]
})

export default Store