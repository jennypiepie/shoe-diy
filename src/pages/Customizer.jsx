import './customizer.css'
import { Suspense, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { Canvas} from '@react-three/fiber'
import { OrbitControls,ContactShadows,Environment} from '@react-three/drei'
import { useSnapshot } from "valtio";
import Store from '../stores/Store';
import Picker from '../components/Picker.jsx'
import Shoes from '../components/Shoes.jsx'
import Loading from '../components/Loading';

function Customizer() {
    const snap = useSnapshot(Store)
    const canvasRef = useRef()
    const navigate = useNavigate();
    const presetColors = ["#db858f", "#30432d", "#e9b229", "#5b4691", "#c7e3e9","#063a78", "#d6d3c6", "#74433f"];
    const isShow = snap.current ? 'block' : 'none' 
    const title = snap.current || 'shoes'
    const save = () => { 
      Store.screenshot = true
      setTimeout(() => navigate('/works'), 500)
    }

    return (
      <div className="wrapper">
        <Picker 
          color={snap.items[snap.current]}
          onChange={(color) => (Store.items[snap.current] = color)}
          presetColors={presetColors}
          isShow={isShow}
        />
        <div className="card">
          <h1>Click to change the color of {title}</h1>
          <div className="product-canvas">
            <Canvas ref={canvasRef} shadows camera={{ position: [0, 0, 2], fov: 50 }}>
              <Suspense fallback={<Loading/>}>
                <ambientLight intensity={0.7}/>
                <spotLight intensity={0.3} angle={0.1}
                  penumbra={1} position={[10,15,10]} castShadow />
                <Shoes />
                <Environment preset="city" />
                <ContactShadows position={[0, -0.8, 0]} opacity={0.5} scale={20} blur={1.5} far={0.8} />
              </Suspense>
              <OrbitControls enablePan={true}
                enableZoom={true} enableRotate={true} />
            </Canvas>
          </div>
          <button className='save' onClick={save}><span>SAVE</span></button>
        </div>
        
      </div>
    );
}

export default Customizer;