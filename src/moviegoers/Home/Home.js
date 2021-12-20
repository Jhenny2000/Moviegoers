import React, { useEffect, useState } from "react";
import './style.css'
import Header from "../Header/Header";
import SimpleImageSlider from "react-simple-image-slider";
import { Add, Desc, Icons, Info, Play, Text, TextP, TextT } from "./styled";

import img1 from '../../img/jogoperigoso.PNG'
import img2 from '../../img/alugue.PNG';
import img3 from '../../img/Capturar3.PNG';
import img4 from '../../img/theboys.PNG';

import { api, apiKey, language } from "../../service/api";
import movieGenres, { MovieGenres } from "./movieG";


function Home(){

    const images = [
        { url : img1 },
        { url : img2 },
        { url : img3 },
        { url : img4 }
    ];

    // const imagesFilmes = [
    //     { url : imgCard1 },
    //     { url : imgCard2 },
    //     { url : imgCard3 },
    //     { url : imgCard4 },
    //     { url : imgCard5 }
    // ];

    const [ genresM, setGenresM ] = useState([]);

    const [ trending, setTrending ] = useState([])

    
    function trendingMovie(){
        const trenMovieList = [];
        for(let i = 0; i < 5; i++){
            trenMovieList.push(trending.results[i]);
        }
        return trenMovieList;
    }


    // Em alta

    useEffect(()=>{

        try{
            api.get(`/trending/movie/week?api_key=${apiKey}&language=${language}`).then(({data})=>{
                setTrending(data);
            })
        }catch(error){
            console.log('Error')
        }
    },[]);


    // Gêneros

    useEffect(()=>{

        try{
            api.get(`/genre/movie/list?api_key=${apiKey}&language=${language}`).then(({data})=>{
                setGenresM(data);
            })
        }catch (error) {
            console.log('Error');
        }
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
                    genresM.genres.map((item, i)=>{
                        return(
                            <div key={i}>
                                <MovieGenres name={item.name} id={item.id} />
                            </div>
                        )
                    })) : (
                        <p></p>
                    )}
            </div>
        </>
    )
}

export default Home;

// <h2 key={item.id}>{item.name}</h2>
// {/* <div className='destaques'>
// <div className='card'>
//     <div className='primelogo'>
//         <img src='https://m.media-amazon.com/images/G/01/digital/video/web/cues/v3/prime.svg' alt='Prime' />
//     </div>
//     <img alt='teste'/> {/*src={imgCard1}*/}
//     <div className='descricao'>
//         <Icons>
//             <Play/>
//             <Text>Reproduzir</Text>
//             <Add/>
//             <Desc/>
//         </Icons>
//         <Info>
//             <TextP>
//                 1200+ votos
//             </TextP>
//             {/* <div className='imgRI'>
//                 <img className='iconIdade' src={RIdade} alt=''/>
//             </div> */}
//             <TextT>
//                 1hr 54min
//             </TextT>
//         </Info>
//     </div>
// </div>
// </div> */}