import React from "react";
import './style.css'
import logo from '../img/prime-video-1.png'

function Header(){
    return(
        <>
            <header>
                <div className='logo'>
                    <img src={logo} alt='imagens'/>
                </div>
                <nav>
                    <div className='item'>
                        <p><span className='sublinhado'>Inicio</span></p>
                    </div>
                    <div className='item'>
                        <p><span className='sublinhado'>Categorias</span></p>  
                    </div>
                    <div className='item'>
                        <p><span className='sublinhado'>Lista +</span></p>
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