import {useRef} from 'react';
import { useSnapshot } from "valtio";
import Store from '../stores/Store';
import { useNavigate } from 'react-router-dom';
import './works.css'
  

function Works() {
    const navigate = useNavigate()
    const snap = useSnapshot(Store)
    const ref = useRef(null)

    function download(url) {
        ref.current.download = 'shoes';
        ref.current.href = snap.works[0].imgUrl;
    }
    
    const getName = (url)=>{
        const name = url.split('/').pop().split('.')[0]
        return name
    }
    
    return (
    <div className="content">
        {snap.works.map((work) => (
            <div className='works-card'>
                <div className="image">
                    <img src={work.imgUrl} alt=''/>
                </div>
                <div className="symbols">
                    {Object.keys(work.color).map((key) =>
                    (   
                      <div className='symbol'>
                        <div className="symbol-name">{key}</div>
                        <div className="symbol-content" style={{background:work.color[key]}}></div>
                      </div>
                    )
                    )}
                    <div className="symbol">
                        <div className="symbol-name">pattern|material</div>
                        <div className="symbol-content">
                            <img src={getName(work.material) !== 'empty' ? work.material : work.pattern} alt="" />
                        </div>
                    </div>
                    <a className="download" ref = {ref} onClick={download}>
                        <img src='/imgs/download.png' alt='download'></img>
                    </a>
                </div>
            </div>
        ))}
        <button className='back' onClick={() => navigate('/customizer')}>
            <span>ONE MORE</span>
        </button>
    </div>
    );
}

export default Works;
