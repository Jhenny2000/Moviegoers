import React, { useEffect, useState } from "react";
import './style.css'
import Header from "../Header/Header";
import SimpleImageSlider from "react-simple-image-slider";
import { Add, Desc, Icons, Info, Play, Text, TextP, TextT } from "./styled";

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
import RIdade from '../../img/idade.png'
import { api, apiKey } from "../../service/api";


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

    const language = 'pt-BR';

    const [ genresM, setGenresM ] = useState([]);

    const [ trending, setTrending ] = useState([])

    // function getGenresM(){
    //     const listCatMovie = [];
    //     for(let i = 0; i < 5; i++){
    //         listCatMovie.push(genresM.genres[i]);
    //     }
    //     return listCatMovie;
    // }
    function trendingMovie(){
        const trenMovieList = [];
        for(let i = 0; i < 5; i++){
            trenMovieList.push(trending.results[i]);
        }
        return trenMovieList;
    }

    useEffect(()=>{

        try{
            api.get(`/trending/movie/week?api_key=${apiKey}&language=${language}`).then(({data})=>{
                setTrending(data);
            })
        }catch(error){
            console.log('Error')
        }
    },[]);

    useEffect(()=>{

        try{
            api.get(`/genre/movie/list?api_key=${apiKey}&language=${language}`).then(({data})=>{
                setGenresM(data);
            })
        }catch (error) {
            console.log('Error');
        }
    },[]);


    async function getMoviesId(id){

        const movies = await api.get(`/discover/movie?with_genres=${id}&language=${language}&api_key=${apiKey}`)

        const movieData = { id : { results : movies}}

        return movieData
    }

    useEffect(()=>{
        getMoviesId()
    },[]);



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
                    {trending.length !== 0 ? (
                        trendingMovie().map((item)=>{
                            return  <div className='card' key={item.id}>
                                        <div className='primelogo'>
                                            <img src='https://m.media-amazon.com/images/G/01/digital/video/web/cues/v3/prime.svg' alt='Prime' />
                                        </div>
                                        <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title}/>
                                        <div className='descricao'>
                                            <Icons>
                                                <Play/>
                                                <Text>Reproduzir</Text>
                                                <Add/>
                                                <Desc/>
                                            </Icons>
                                            <Info>
                                                <TextP>
                                                    {item.vote_count}+ votos
                                                </TextP>
                                                <TextT>
                                                    {item.runtime}min
                                                </TextT>
                                            </Info>
                                        </div>
                                    </div>
                        })):(

                            <p></p>
                    )}
                </div>

                {genresM.length !== 0 ? (
                    genresM.genres.map((item)=>{
                        return(
                            <>
                                <h2 key={item.id}>{item.name}</h2>
                                <div className='destaques'>
                                    <div className='card'>
                                        <div className='primelogo'>
                                            <img src='https://m.media-amazon.com/images/G/01/digital/video/web/cues/v3/prime.svg' alt='Prime' />
                                        </div>
                                        <img src={imgCard1} alt='teste'/>
                                        <div className='descricao'>
                                            <Icons>
                                                <Play/>
                                                <Text>Reproduzir</Text>
                                                <Add/>
                                                <Desc/>
                                            </Icons>
                                            <Info>
                                                <TextP>
                                                    1200+ votos
                                                </TextP>
                                                <div className='imgRI'>
                                                    <img className='iconIdade' src={RIdade}/>
                                                </div>
                                                <TextT>
                                                    1hr 54min
                                                </TextT>
                                            </Info>
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
                            </>
                        )
                    })) : (
                        <p></p>
                    )}
                
                {/* <div className='destaques'>
                    <div className='card'>
                        <img src={imgCard5} alt='teste' />
                    </div>
                    <div className='card'>
                        <img src={imgCard3} alt='teste n vai' />
                    </div>
                    <div className='card'>
                        <img src={imgCard1} alt='teste n vai' />
                    </div>
                    <div className='card'>
                        <img src={imgCard4} alt='teste n vai' />
                    </div>
                    <div className='card'>
                        <img src={imgCard2} alt='teste n vai' />
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Home;