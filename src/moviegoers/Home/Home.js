import React from "react";
import './style.css'
import SimpleImageSlider from "react-simple-image-slider";
import img1 from '../../img/jogoperigoso.PNG'
import img2 from '../../img/alugue.PNG';
import img3 from '../../img/Capturar3.PNG';
import img4 from '../../img/theboys.PNG';
import Header from "../Header/Header";

function Home(){

    const images = [
        { url : img1 },
        { url : img2 },
        { url : img3 },
        { url : img4 }
    ];

    return(
        <>
            <Header/>
            <div className='slide'>
                <SimpleImageSlider
                width={1366} height={270}
                images={images} showBullets={true}
                showNavs={true}
                navSize={45}
                navStyle={2}
                navMargin={3}/>
            </div>
            <div className='destaques'>
                <h1>Destaques</h1>
            </div>
        </>
    )
}

export default Home;