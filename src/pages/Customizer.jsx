import './customizer.css'
import { Suspense, useRef,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Canvas} from '@react-three/fiber'
import { OrbitControls,ContactShadows,Environment} from '@react-three/drei'
import { useSnapshot } from "valtio";
import Store from '../stores/Store';
import Shoes from '../components/Shoes.jsx'
import Loading from '../components/Loading';
import Picker from '../components/Picker';

function Customizer() {
  const snap = useSnapshot(Store)
  const canvasRef = useRef()
  const navigate = useNavigate();
  const [re,setRe]=useState(0)
  const title = snap.current || 'shoes'

  const save = () => {  
      Store.screenshot = true
      setTimeout(() => navigate('/works'), 500)

  }

  useEffect(() => {
    Store.active = snap.current !== 'body' ? 'color' : snap.active
  },[snap.current])

    return (
      <div className="wrapper">
        <div className="title">To design the {snap.active} of the {title}</div>
        <div className="options">
          <div className="option" onClick={()=>Store.active='color'} style={{backgroundColor:snap.active==='color'?'#ff6aaa':'#8df1e7'}}>
            <svg t="1665580784318" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3381" width="200" height="200"><path d="M689.43872 675.84v122.88c0 90.48064-74.97728 163.84-167.46496 163.84C267.61216 962.56 61.44 760.832 61.44 512S267.63264 61.44 521.97376 61.44c169.3696 0 319.81568 88.064 397.4144 222.74048 33.15712 57.56928 47.2064 113.02912 42.1888 166.37952 0 56.54528-46.87872 102.4-104.67328 102.4h-41.8816c-69.36576 0-125.58336 55.00928-125.58336 122.88zM491.52 860.16a81.92 81.92 0 1 0 0-163.84 81.92 81.92 0 0 0 0 163.84z m-204.8-163.84a81.92 81.92 0 1 0 0-163.84 81.92 81.92 0 0 0 0 163.84z m-20.48-245.76a81.92 81.92 0 1 0 0-163.84 81.92 81.92 0 0 0 0 163.84z m204.8-122.88a81.92 81.92 0 1 0 0-163.84 81.92 81.92 0 0 0 0 163.84z m225.28 61.44a81.92 81.92 0 1 0 0-163.84 81.92 81.92 0 0 0 0 163.84z" p-id="3382"></path></svg>
            <span className='option-text'>color</span>
          </div>
          <div className="option" onClick={() =>{Store.active='pattern';Store.current='body'}} style={{backgroundColor:snap.active==='pattern'?'#ff6aaa':'#8df1e7'}}>
            <svg t="1665580649995" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2173" width="200" height="200"><path d="M896 213.333333a85.333333 85.333333 0 0 0-85.333333-85.333333H213.333333a85.333333 85.333333 0 0 0-85.333333 85.333333v597.333334a85.333333 85.333333 0 0 0 85.333333 85.333333h597.333334a85.333333 85.333333 0 0 0 85.333333-85.333333z m-183.466667 298.666667L810.666667 413.866667v196.266666L712.533333 512l-100.266666 100.266667 100.266666 100.266666 98.133334-98.133333V810.666667l-98.133334-98.133334-98.133333 98.133334h-4.266667L512 712.533333 413.866667 810.666667h-4.266667l-98.133333-98.133334L213.333333 810.666667v-196.266667l98.133334 98.133333 100.266666-100.266666L311.466667 512 213.333333 610.133333V413.866667L311.466667 512l100.266666-100.266667L311.466667 311.466667 213.333333 409.6V213.333333l98.133334 98.133334L409.6 213.333333h4.266667L512 311.466667 610.133333 213.333333h4.266667l98.133333 98.133334L810.666667 213.333333v196.266667l-98.133334-98.133333-100.266666 100.266666z m-298.666666-100.266667L512 512l100.266667-100.266667L512 311.466667z m0 200.533334L512 712.533333l100.266667-100.266666L512 512z" p-id="2174"></path></svg>
            <span className='option-text'>pattern</span>
          </div>
          <div className="option" onClick={()=>{Store.active='material';Store.current='body'}} style={{backgroundColor:snap.active==='material'?'#ff6aaa':'#8df1e7'}}>
            <svg t="1665579816116" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2032" width="200" height="200"><path d="M899.020283 345.039731c-1.661845-1.35499-165.908687-137.529751-156.206546-309.037684A34.074721 34.074721 0 0 0 708.790734 0h-168.677279c-16.621899 0-30.840673 12.122505-33.61961 28.513401-1.74804 10.315852-46.404094 252.617697-359.961858 252.617697-18.818155 0-34.078168 15.256566-34.078169 34.07472v674.716014c0 18.818155 15.256566 34.078168 34.078169 34.078168h337.358006a34.078168 34.078168 0 0 0 32.764552-24.713912l68.552835-239.933199 33.626506 235.392431a34.078168 34.078168 0 0 0 33.733387 29.258128h224.904188c18.818155 0 34.078168-15.256566 34.078169-34.078169V371.432727a34.074721 34.074721 0 0 0-12.529347-26.392996z m-55.62699 610.80738h-161.274828l-52.048162-364.326788a34.074721 34.074721 0 0 0-31.409562-29.178828 34.029899 34.029899 0 0 0-35.088377 24.634613L458.179663 955.843663H180.606707V348.394451c172.097508-9.1367 268.694842-86.902088 320.129293-152.779421 38.098316-48.793428 57.119892-97.697185 66.011798-127.462141h107.944081c8.278195 159.802613 128.734384 282.310249 168.701414 318.74672v568.947502z" fill="" p-id="2033"></path><path d="M258.982357 812.72501a23.85196 23.85196 0 0 0-23.85196 23.85196v30.668283a23.85196 23.85196 0 1 0 47.707367 0v-30.668283a23.858855 23.858855 0 0 0-23.855407-23.85196zM258.982357 676.419232a23.85196 23.85196 0 0 0-23.85196 23.855408v30.668283a23.85196 23.85196 0 1 0 47.707367 0v-30.668283a23.858855 23.858855 0 0 0-23.855407-23.855408zM258.982357 540.113455a23.85196 23.85196 0 0 0-23.85196 23.855407v30.668283a23.85196 23.85196 0 1 0 47.707367 0v-30.668283a23.858855 23.858855 0 0 0-23.855407-23.855407zM258.982357 403.807677a23.85196 23.85196 0 0 0-23.85196 23.855407v30.668283a23.85196 23.85196 0 1 0 47.707367 0v-30.668283a23.858855 23.858855 0 0 0-23.855407-23.855407z" fill="" p-id="2034"></path></svg>
            <span className='option-text'>material</span>
          </div>
        </div>
        {/* <Picker color={Store.color[snap.current]} onChange={(color)=>Store.color[snap.current]=color} /> */}
        <div className="card">
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
              <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
            </Canvas>
          </div>
          <div className="selector">
            {snap.active === 'color' ?
              Store[snap.current][snap.active].map((item) =>
              (<div className="selector-item"
                  style={{ background:item}}
                  onClick={() => Store[snap.active][snap.current] = item}
                ></div>))
              :
              Store.body[snap.active].map((item) =>
              (<div className="selector-item"
                  style={{ backgroundImage: `url(${item})`,backgroundSize: '100%,100%'}}
                  onClick={() => {Store[snap.active].body = item;setRe(re + 1)}}
                ></div>))
            }
          </div>
          <button className='animate'
            onClick={() => Store.animate = !snap.animate}
            style={{borderRadius:snap.animate ?'10px':'25px',backgroundColor:snap.animate?'#d63928':'#44d26e'}}>
            <span>{snap.animate ? 'Pause' : 'Play'}</span>
          </button>
          <button className='save'
            style={{ display: snap.active === 'material' ? 'inline-block' : 'none' }}
            onClick={save}>
            <span>SAVE</span>
          </button>
        </div>
      </div>
    );
}

export default Customizer;