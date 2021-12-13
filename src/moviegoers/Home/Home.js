import React from "react";
import './style.css'
import Header from "../Header/Header";
import SimpleImageSlider from "react-simple-image-slider";
import { Add, Desc, Icons, Play, Text } from "./styled";

import img1 from '../../img/jogoperigoso.PNG'
import img2 from '../../img/alugue.PNG';
import img3 from '../../img/Capturar3.PNG';
import img4 from '../../img/theboys.PNG';

// img Cards
import imgCard1 from '../../img/marvel.jpg';
import imgCard2 from '../../img/Angelina-Jolie-Eternos-1.jpg';
import imgCard3 from '../../img/a-garota.jpg';
import imgCard4 from '../../img/CAPA.png';
import imgCard5 from '../../img/cientifica.jpg';

// logo 'prime'


function Home(){

    const images = [
        { url : img1 },
        { url : img2 },
        { url : img3 },
        { url : img4 }
    ];

    const imagesFilmes = [
        { url : imgCard1 },
        { url : imgCard2 },
        { url : imgCard3 },
        { url : imgCard4 },
        { url : imgCard5 }
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
                        <div className='primelogo'>
                            <img src='https://m.media-amazon.com/images/G/01/digital/video/web/cues/v3/prime.svg' alt='Prime' />
                        </div>
                        <img src={imgCard1} alt='teste' />
                        <div className='descricao'>
                            <Icons>
                                <Play/>
                                <Text>Reproduzir</Text>
                                <Add/>
                                <Desc/>
                            </Icons>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='primelogo'>
                            <img src='https://m.media-amazon.com/images/G/01/digital/video/web/cues/v3/prime.svg' alt='Prime' />
                        </div>
                        <img src={imgCard2} alt='teste n vai' />
                    </div>
                    <div className='card'>
                        <div className='primelogo'>
                            <img src='https://m.media-amazon.com/images/G/01/digital/video/web/cues/v3/prime.svg' alt='Prime' />
                        </div>
                        <img src={imgCard3} alt='teste n vai' />
                    </div>
                    <div className='card'>
                        <div className='primelogo'>
                            <img src='https://m.media-amazon.com/images/G/01/digital/video/web/cues/v3/prime.svg' alt='Prime' />
                        </div>
                        <img src={imgCard4} alt='teste n vai' />
                    </div>
                    <div className='card'>
                        <div className='primelogo'>
                            <img src='https://m.media-amazon.com/images/G/01/digital/video/web/cues/v3/prime.svg' alt='Prime' />
                        </div>
                        <img src={imgCard5} alt='teste n vai' />
                    </div>
                </div>
                <div className='destaques'>
                    <div className='card'>
                        <img src={imgCard1} alt='teste' />
                    </div>
                    <div className='card'>
                        <img src={imgCard2} alt='teste n vai' />
                    </div>
                    <div className='card'>
                        <img src={imgCard3} alt='teste n vai' />
                    </div>
                    <div className='card'>
                        <img src={imgCard4} alt='teste n vai' />
                    </div>
                    <div className='card'>
                        <img src={imgCard5} alt='teste n vai' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;