import { React, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import './modal.css'
import { api, apiKey, language } from "../../service/api";
import ReactPlayer from "react-player";


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
    

    return ReactDOM.createPortal(
        <div className="modal__overlay">
            {trailerMovie.results.map((movieTrailer) => {
                getDescById().map((itemDesc) => {
                return <div className="modal">
                    <button type="button" className="close-button" onClick={onClickClose}>X</button>
                    {children}
                    {/* <div className="movieVideo"> */}
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${movieTrailer.key}`}/>
                        {/* </div> */}
                    <h1>{itemDesc.title}</h1>
                </div>
            })
            })}
        </div>,
        portalRoot,
    );
};

export default Modal;
