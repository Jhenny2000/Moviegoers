import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react/cjs/react.development";
import Header from "../Header/Header";
import { api, apiKey, language } from "../../service/api";
import { Add, Desc, Icons, Info, Play, Text, TextP, TextT } from "../Home/styled";
import '../Home/style.css';

// Modal
import Modal from './Modal';

// paginação
import Pagination from "../Pagination";

function Filmes(){
    const [ current, setCurrent ] = useState(1);

    const [ totalPages, setTotalPages] = useState(null);

    const offset = 1;

    const [filmes, setFilmes] = useState([])

   

    const urlParams = new URLSearchParams(useLocation().search);
    const myId = urlParams.get('id');
    const myName = urlParams.get('name');
        console.log(myId);

    useEffect(()=> {
        if(current){
            try{
                api.get(`discover/movie?api_key=${apiKey}&language=${language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${current}&with_genres=${myId}&with_watch_monetization_types=flatrate`).then(({data})=>{
                    setFilmes(data);
                    setTotalPages(data.total_pages);
                })
            }catch (error) {
                console.log('Error');
            }
        }
        
    },[current])

    function PageNext(){
        setCurrent((page) => page + 1 )
    }

    function PageBack(){
        setCurrent((page) => page - 1 )
    }

     // Modal
    const [ cardId, setCardId ] = useState(null);


    // // search
    // const [ text, setText ] = useState('');
    // const [ info, setInfo ] = useState([]);

    // useEffect(() => {
    //     setInfo({});
    //     if (text){
    //         console.log(text)
    //         fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=${language}&query=${text}&page=1&include_adult=false`)
    //             .then((response) => response.json())
    //             .then((response) => {
    //                 setInfo(response)
    //                 console.log(response)
    //             });
    //     }
    // },[text])


    return(
        <>
            <Header/>
            <div className="container center">
                {/* <div className="results">
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
                </div> */}
                <h1>{myName}</h1>
                <br/>
                <div className='destaques'>
                {filmes.length !== 0 ? (
                    filmes.results.map((filme) =>{
                        return (
                            <div className='card' key={filme.id}> {/*onChange={() => CardId()}*/}
                                <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
                                <h4>{filme.title}</h4>
                                <div className='descricao'>
                                    <Icons>
                                        <Play/>
                                        <Text>Reproduzir</Text>
                                        <Add/>
                                        <Desc onClick={() => setCardId(filme.id)}/>
                                    </Icons>
                                    <Info>
                                        <TextP>
                                            {filme.vote_count}+ votos
                                        </TextP>
                                        <TextT>
                                            {/* {movie.runtime}min */}
                                        </TextT>
                                    </Info>
                                </div>
                                <Modal isOpen={Boolean(cardId === filme.id)} onClickClose={() => setCardId(null)} filmeId={filme.id}/>
                            </div>
                        )
                    } )

                ):(<></>)
                }
                </div>
            </div>
            <div className="containerPagination center">
                <Pagination current={current} total={totalPages} offset={offset} next={PageNext} back={PageBack}/>
            </div>
        </>
    )
}

export default Filmes;