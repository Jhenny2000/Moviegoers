import React, {useState, useEffect} from "react";
import './style.css'
import { Add, Desc, Icons, Info, Play, Text, TextP, TextT } from "./styled";
import { api, apiKey, language } from "../../service/api";

export function MovieGenres({ name, id }){

    const [ movie, setMovie ] = useState([]);


    const getMoviesId = async () =>{

        const url = await api.get(`/discover/movie?with_genres=${id}&language=${language}&api_key=${apiKey}`)

        setMovie(url.data.results);
    }

    useEffect(()=>{
        getMoviesId(id)
    }, [id]);

    function getMoviesGenres(){
        const movieGenre = []
        for( let i = 0; i < 5; i++ ){
            movieGenre.push(movie[i])
        }
        return movieGenre;
    }

    const filmes = movie.length > 0 ? (getMoviesGenres().map( movie => {
        return(
            <div className='card' key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title}/>
                <h4>{movie.title}</h4>
                <div className='descricao'>
                    <Icons>
                        <Play/>
                        <Text>Reproduzir</Text>
                        <Add/>
                        {/* <Desc/> */}
                    </Icons>
                    <Info>
                        <TextP>
                            {movie.vote_count}+ votos
                        </TextP>
                        <TextT>
                            {/* {movie.runtime}min */}
                        </TextT>
                    </Info>
                </div>
            </div>
            )
    })) : ( <></> );

    return (
        <>
            <h2>{name}</h2>
            <div className='destaques'>
                {filmes}
            </div>
        </>
    )

};

export default MovieGenres;