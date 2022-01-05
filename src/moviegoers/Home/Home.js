import React, { useEffect, useState } from "react";
import './style.css'
// import Header from "../Header/Header";
import SimpleImageSlider from "react-simple-image-slider";
import { Add, Desc, Icons, Info, Play, Text, TextP, TextT } from "./styled";

import img1 from '../../img/jogoperigoso.PNG'
import img2 from '../../img/alugue.PNG';
import img3 from '../../img/Capturar3.PNG';
import img4 from '../../img/theboys.PNG';

import { api, apiKey } from "../../service/api";
import { MovieGenres } from "./movieG";

// herader imports
import './style.css';
import logo from '../../img/prime-video-1.png';
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput";

// paginação
import Pagination from "./Pagination";


function Home(){

    // Header

    const language = 'pt-BR';

    const [ genresS, setGenresS ] = useState([]);

    const [ text, setText ] = useState('');
    
    const [ info, setInfo ] = useState([]);

    // Search

    useEffect(() => {
        if (text){
            console.log(text)
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=${language}&query=${text}&page=1&include_adult=false`)
                .then((response) => response.json())
                .then((response) => {
                    setInfo(response)
                    console.log(response)
                });
        }
    },[text])

    // Gêneros

    useEffect(()=>{

        try{
            api.get(`/genre/movie/list?api_key=${apiKey}&language=${language}`).then(({data})=>{
                setGenresS(data);
            })
        }catch (error) {
            console.log('Error');
        }
    },[]);







    const images = [
        { url : img1 },
        { url : img2 },
        { url : img3 },
        { url : img4 }
    ];

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
            <header>
                <div className='logo'>
                    <img src={logo} alt='imagens'/>
                </div>
                <nav>
                    <Link className='link' to='/'>
                        <div className='item'>
                            <p><span className='sublinhado'>Inicio</span></p>
                        </div>
                    </Link>
                    <div className='item'>
                        <p><span className='sublinhado'>Lista +</span></p>
                    </div>
                    <div className='itemsCategoria'>
                        <p><span className='sublinhado'>Categorias</span></p>
                        <div className='containerSubmenu'>
                            <div className='title'><h3>Gêneros</h3></div>
                            <ul className='subCategoria'>
                                
                                    {genresS.length !== 0 ? (
                                        genresS.genres.map((item)=>{
                                            return(
                                            <Link className='link' to={`/filmes?id=${item.id}&name=${item.name}`}>
                                                <li className='subItem' key={item.id}>
                                                    <span>{item.name}</span>
                                                </li>
                                            </Link>
                                            )
                                                
                                        })) : (
                                            <p></p>
                                        )
                                    }
                                
                            </ul>
                        </div> 
                    </div>
                </nav>
                {/* input */}
                <form className='formInput'>
                    <SearchInput value={text} onChange={(search) => setText(search)}/>
                </form>
            </header>

            <div className='slide'>
                <SimpleImageSlider
                width={'100%'} height={270}
                images={images} showBullets={true}
                showNavs={true}
                navSize={45}
                navStyle={2}
                navMargin={3}
                autoPlay={true}/>
            </div>
            <div className='container center'>
                
                <div className="results">
                {info.results && (
                        info.results.map((movieSearch)=>{
                            return  <div className='searchCard' key={movieSearch.id}>
                                        <div className='primelogo'>
                                            <img src='https://m.media-amazon.com/images/G/01/digital/video/web/cues/v3/prime.svg' alt='Prime' />
                                        </div>
                                        <img src={`https://image.tmdb.org/t/p/original/${movieSearch.backdrop_path}`} alt={movieSearch.title}/>
                                        <h4>{movieSearch.title}</h4>
                                    </div>
                        }))
                        }
                </div>
                <h2>Em alta</h2>
                <div className='destaques'>
                    {trending.length !== 0 ? (
                        trendingMovie().map((item)=>{
                            return  <div className='card' key={item.id}>
                                        <div className='primelogo'>
                                            <img src='https://m.media-amazon.com/images/G/01/digital/video/web/cues/v3/prime.svg' alt='Prime' />
                                        </div>
                                        <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title}/>
                                        <h4>{item.title}</h4>
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
                                <MovieGenres name={item.name} id={item.id}/>
                            </div>
                        )
                    })) : (
                        <p></p>
                    )}
                <Pagination/>
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