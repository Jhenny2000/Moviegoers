import React from "react";
import Header from "../Header/Header";
import MovieGenres from "../Home/movieG";
// import { Add, Desc, Icons, Info, Play, Text, TextP, TextT } from "../Home/styled";
import '../Home/style.css'

function Filmes(){
    return(
        <>
            <Header/>
            <h1>Filmes</h1>
            <MovieGenres/>
        </>
    )
}

export default Filmes;