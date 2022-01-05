import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react/cjs/react.development";
import Header from "../Header/Header";
import { api, apiKey, language } from "../../service/api";
import { Add, Desc, Icons, Info, Play, Text, TextP, TextT } from "../Home/styled";
import '../Home/style.css';

function Filmes(){

    const [filmes, setFilmes] = useState([])

    const urlParams = new URLSearchParams(useLocation().search);
    const myId = urlParams.get('id');
    const myName = urlParams.get('name');
        console.log(myId);

    useEffect(()=> {
        try{
            api.get(`/discover/movie?with_genres=${myId}&language=${language}&api_key=${apiKey}`).then(({data})=>{
                setFilmes(data);
            })
        }catch (error) {
            console.log('Error');
        }
    },[])

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
        </>
    )
}

export default Filmes;