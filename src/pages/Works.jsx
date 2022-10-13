import React from 'react';
import { useSnapshot } from "valtio";
import Store from '../stores/Store';
import './works.css'

function Works() {
    const snap = useSnapshot(Store)
    return (
    <div className="content">
        {snap.works.map((work) => (
            <div className='works-card'>
                <div className="image">
                    <img src={work.imgUrl} alt=''/>
                </div>
                {Object.keys(work.color).map((key) =>
                (
                    <li style={{background:work.color[key]}}>{key}</li>
                )
                )}
                <div className="pattern"><img src={work.pattern} alt="" /></div>
            </div>
        ))}
    </div>
    );
}

export default Works;
