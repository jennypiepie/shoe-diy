import React from 'react';
import { useSnapshot } from "valtio";
import Store from '../stores/Store';
import './works.css'

function Works() {
    const snap = useSnapshot(Store)
    return (
    <div className="content">
        {snap.imgUrls.map((imgUrl) => (
            <div className='works-card'>
                <div className="image">
                    <img src={imgUrl} alt=''/>
                </div>
            </div>
        ))}
    </div>
    );
}

export default Works;
