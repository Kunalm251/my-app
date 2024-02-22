import React from 'react';
import video from './assets/Video.mp4';
import './BgVideo.css';
import { Link } from 'react-router-dom';

function BgVideo(){
    return (
        <div className="bgContainer">
            <div className="overlays">
                <video src={video} autoPlay loop muted />
                <div className="container">
                <h1 className="wlc">Beyond The Sky</h1>
               <p className='title'>Where Fashion Touches the Horizon</p>
               <Link style={{textDecoration:"none"}} to='/ShopCategory'><button className='shop-now-btn'>Shop Now</button></Link>

                </div>
            </div>
        </div>
    );
}

export default BgVideo;