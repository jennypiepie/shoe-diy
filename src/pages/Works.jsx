import React from 'react';
import { useSnapshot } from "valtio";
import Store from '../stores/Store';
import './works.css'

function Works() {
    const snap = useSnapshot(Store)
    return (
        <div className='card'>
            <div className="card-item">
                <img src={snap.imgUrl} alt='' />
            </div>
            {/* (imgUrl)=>(<img src={snap.imgUrl} alt=''/>) */}
        </div>
    );
}

export default Works;
