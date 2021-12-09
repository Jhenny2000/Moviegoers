import React from "react";
import './style.css'
import logo from '../../img/prime-video-1.png'
import { Link } from "react-router-dom";

function Header(){
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
                                <Link className='link' to='/filmes'><li className='subItem'>Filmes</li></Link>
                                <li className='subItem'>Comédia</li>
                                <li className='subItem'>Drama</li>
                                <li className='subItem'>Documentários</li>
                                <li className='subItem'>Para crianças e toda a família</li>
                                <li className='subItem'>Fantasia</li>
                                <li className='subItem'>Terror</li>
                            </ul>
                            <ul className='subCategoria2'>
                                <li className='subItem'>Ação e aventura</li>
                                <li className='subItem'>Comédia</li>
                                <li className='subItem'>Drama</li>
                                <li className='subItem'>Documentários</li>
                                <li className='subItem'>Para crianças e toda a família</li>
                                <li className='subItem'>Fantasia</li>
                                <li className='subItem'>Terror</li>
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