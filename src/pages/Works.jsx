import React from 'react';
import { useSnapshot } from "valtio";
import Store from '../stores/Store';
import './works.css'

function Works() {
    const snap = useSnapshot(Store)
    return (
        <div className='works-card'>
            {snap.imgUrls.map((imgUrl)=>(
                <div className="card-item">
                    <img src={imgUrl} alt=''/>
                </div>
            ))}
        </div>
    );
}

export default Works;
