import React from "react";
import './Home/style.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// máximo de buttons da pagina
// const MaxItems = 9;
// máximo de botoês que quero que fiquem a minha esquerda
// const MaxLeft = (MaxItems - 1) / 2;

const Pagination = ({ current, total, offset, next, back }) => {

    // offset numero de items que vou pular é como um 'skep'. Indica em qual  pagina estou, e tem a 
    // verificação se ele existe pois se for 0 ele estará na page 1
    // const currentPage = offset ? offset / limit + 1 : 1;
    // conta para pegar o total de pages, caso o total de pages for um numero impar ele aredonda para um numero maior
    const pages = Math.floor(total / offset + 1);

    

    // Math.max - vai pegar o maior valor entre o currentPage  e o MaxLeft, pois se ele for 3 ele vai adicionar o 1
    // const first = Math.max(currentPage - MaxLeft, 1)

//     function onPageChange(page) {
//     setOffset((page - 1) * limit);
//   }

    return(
        <>
        {/* Criando um array a partir de uma quantidade */}
            <div >
                <div>
                    { current > 1 && (
                        <IoIosArrowBack onClick={() => back(current)}/>
                    )}
                </div>
                <div>
                    { offset * (current - 1 ) + 1}
                    de{ total }
                </div>
                <div>
                    { pages > current && (
                        <IoIosArrowForward onClick={() => next(current)}/>
                    )}
                </div>
                {/* utilizando a contagem do index pois ele começa do 0 até o 8 e soma-la com o first que é a 
                primeira page que aparece na listagem de buttons */}
                
            </div>
        </>
    )
}

export default Pagination;

{/* <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                >
                    A
                </button> */}


                // {Array.from({ length: Math.min(MaxItems, pages) })
                // .map(( _, index ) => index + first )
                // .map((page) => (
                //     <li key={page}>
                //         <button onClick={() => onPageChange(page)}
                //         className={
                //         page === currentPage
                //         ? 'pagination__item--active'
                //         : null
                //         }>
                //             {page}
                //         </button>
                //     </li>
                // ))}
                // <li>
                // <button
                // onClick={() => onPageChange(currentPage + 1)}
                // disabled={currentPage === pages}
                // >
                //     P
                // </button>
                // </li>