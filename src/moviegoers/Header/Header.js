import React, { useEffect, useState } from "react";
import './style.css'
import logo from '../../img/prime-video-1.png'
import { Link } from "react-router-dom";
import { api, apiKey } from "../../service/api";
import MovieGenres from "../Home/movieG";

function Header(){

    const language = 'pt-BR';

    const [ genresS, setGenresS ] = useState([]);

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
                                            <Link className='link' to='/filmes'>
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
                    <input type='text' placeholder='Search'/>
                </form>
            </header>
        </>
    )
}

export default Header;