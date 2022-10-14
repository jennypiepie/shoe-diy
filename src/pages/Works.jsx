import React from 'react';
import { useSnapshot } from "valtio";
import Store from '../stores/Store';
import './works.css'
  

function Works() {
    const snap = useSnapshot(Store)

    // function download(url) {
    //     var oA = document.createElement("a");
    //     oA.download = 'shoes';// 设置下载的文件名，默认是'下载'
    //     oA.href = snap.works[0].imgUrl;
    //     document.body.appendChild(oA);
    //     oA.click();
    //     oA.remove(); // 下载之后把创建的元素删除
    // }
    
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
                        <li className="symbol" style={{background:work.color[key]}}>{key}</li>
                    )
                    )}
                    <div className="wrap" style={{width:'100%'}}></div>
                    <div className="symbol"><img src={work.pattern} alt="" /></div>
                    <div className="wrap" style={{width:'100%'}}></div>
                    <div className="symbol"><img src={work.material} alt="" /></div>
                    {/* <div className="button" onClick={download}>111</div> */}
                </div>
            </div>
        ))}
    </div>
    );
}

export default Works;
