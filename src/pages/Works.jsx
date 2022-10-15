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
                        <div className="symbol-content"><img src={getName(work.material)!=='empty'?work.material:work.pattern} alt="" /></div>
                    </div>
                </div>
            </div>
        ))}
    </div>
    );
}

export default Works;
