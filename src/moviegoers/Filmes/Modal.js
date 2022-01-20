import { React, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import './modal.css'
import { api, apiKey, language } from "../../service/api";
import ReactPlayer from "react-player";
import { IoCloseCircle } from 'react-icons/io5';


const portalRoot = document.getElementById('portal-root')

const Modal = ( { children, isOpen, onClickClose, filmeId } ) => {
    const [filmesDesc, setFilmesDesc] = useState([]);
    const [ trailerMovie, setTrailerMovie ] = useState([]);

    // Api para a descrição dos filmes
    useEffect(()=> {
        try{
            api.get(`https://api.themoviedb.org/3/movie/${filmeId}?api_key=${apiKey}&language=${language}`).then(({data})=>{
                setFilmesDesc(data);
                console.log(data.results);
            })
        }catch (error) {
            console.log('Error');
        }
        
    },[])

    // api para o video dos trailers de cada filme
    useEffect(() => {
        try{
            api.get(`https://api.themoviedb.org/3/movie/${filmeId}/videos?api_key=${apiKey}&language=${language}`).then(({data}) => {
                setTrailerMovie(data);
            })
        }catch (error) {
            console.log('Error')
        }
    },[])

    function getDescById(){
        const desc = []
        desc.push(filmesDesc);
        return desc
    }

    if(!isOpen){
        return null;
    }

    function getTrailer(){
        const movieTrailer = []
        for( let i = 0; i < 1; i++ ){
            movieTrailer.push(trailerMovie.results[i])
        }
        return movieTrailer;
    }
    

    return ReactDOM.createPortal(
        <div className="modal__overlay">
            <div className="modal">
                <IoCloseCircle size={40} type="button" className="close-button" onClick={onClickClose}/>
                {children}
                {/* titulo */}
                {getDescById().map((itemDesc) => {
                    return <div className="modalTitle">
                                <h1 className="titleMovieDesc">{itemDesc.title}</h1>
                                {/* <p>{itemDesc.overview}</p> */}
                            </div>
                })}
                {/* Trailer */}
                {getTrailer(trailerMovie.results).map((movieTrailer) => {
                    return  <div className="movieVideo">
                                { trailerMovie.results.length > 0 ? (
                                <ReactPlayer width={800} height={450} url={`https://www.youtube.com/watch?v=${movieTrailer.key}`}/>
                                )
                                :   (<div className="semVideo">
                                        <h2>Não possui Trailer</h2>
                                    </div>)
                                }
                            </div>
                })}
                {/* Descrição do filme */}
                {getDescById().map((itemDesc) => {
                    return  <div className="modalConteudo">
                                {/* <h1>{itemDesc.title}</h1> */}
                                <p>{itemDesc.overview}</p>
                            </div>
                })}
            </div>
        </div>,
        portalRoot,
    );
};

export default Modal;
