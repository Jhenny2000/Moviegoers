import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react/cjs/react.development";
import Header from "../Header/Header";
import { api, apiKey, language } from "../../service/api";
import { Add, Desc, Icons, Info, Play, Text, TextP, TextT } from "../Home/styled";
import '../Home/style.css';

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

    return(
        <>
            <Header/>
            <div className="container center">
                <h1>{myName}</h1>
                <br/>
                <div className='destaques'>
                {filmes.length !== 0 ? (
                    filmes.results.map((filme) =>{
                        return <div className='card' key={filme.id}>
                        <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
                        <h4>{filme.title}</h4>
                        <div className='descricao'>
                            <Icons>
                                <Play/>
                                <Text>Reproduzir</Text>
                                <Add/>
                                <Desc/>
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
                    </div>
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