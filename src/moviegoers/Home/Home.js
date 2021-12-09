import React from "react";
import './style.css'
import SimpleImageSlider from "react-simple-image-slider";
import img1 from '../../img/jogoperigoso.PNG'
import img2 from '../../img/alugue.PNG';
import img3 from '../../img/Capturar3.PNG';
import img4 from '../../img/theboys.PNG';
import imgCard from '../../img/marvel.jpg'
import Header from "../Header/Header";



function Home(){

    const images = [
        { url : img1 },
        { url : img2 },
        { url : img3 },
        { url : img4 }
    ];

    const imagesFilmes = [
        { url : imgCard }
        // { nome : teste},
        // { nome : teste},
        // { nome : teste},
        // { nome : teste}
    ];

    return(
        <>
            <Header/>
            <div className='slide'>
                <SimpleImageSlider
                width={'100%'} height={270}
                images={images} showBullets={true}
                showNavs={true}
                navSize={45}
                navStyle={2}
                navMargin={3}/>
            </div>
            <div className='container center'>
                <h2>Em alta</h2>
                <div className='destaques'>
                    <div className='card'>
                        <img src={imagesFilmes} alt='teste' />
                    </div>
                    <div className='card'>
                    <img src={imagesFilmes} alt='teste n vai' />
                    </div>
                    <div className='card'>
                        teste3
                    </div>
                    <div className='card'>
                        teste4
                    </div>
                    <div className='ultimoCard'>
                        teste5
                    </div>
                </div>
                <div className='destaques'></div>
            </div>
        </>
    )
}

export default Home;