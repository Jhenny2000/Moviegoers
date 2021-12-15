import React, { useEffect, useState } from "react";
import './style.css'
import logo from '../../img/prime-video-1.png'
import { Link } from "react-router-dom";
import { api, apiKey } from "../../service/api";

function Header(){

    const language = 'pt-BR';

    const [ genresS, setGenresS ] = useState([]);


    function getGenres(){
        const teste = []
        for(let i = 0; i < 7; i++){
            teste.push(genresS.genres[i])
        }
        console.log(teste)
        return teste
    }


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
                                <Link className='link' to='/filmes'>
                                    {genresS.length !== 0 ? (
                                        getGenres().map((item)=>{
                                            return <li className='subItem' key={item.id}>{item.name}</li>
                                                
                                        })) : (
                                            <p></p>
                                        )
                                    }
                                </Link>
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

{/* // <ul className='subCategoria'> */}
{/* <Link className='link' to='/filmes'> */}
{/* // </Link> */}
                                    {/* // </ul> */}