import React from "react";

// máximo de buttons da pagina
const MaxItems = 9;
// máximo de botoês que quero que fiquem a minha esquerda
const MaxLeft = (MaxItems - 1) / 2;

const Pagination = ({ limit, total, offset, setOffset }) => {

    // offset numero de items que vou pular é como um 'skep'. Indica em qual  pagina estou, e tem a 
    // verificação se ele existe pois se for 0 ele estará na page 1
    const currentPage = offset ? (offset / limit) + 1 : 1;
    // conta parapegar o total de pages, caso o total de pages for um numero impar ele aredonda para um numero maior
    const pages = Math.ceil(total / limit);
    // Math.max - vai pegar o maior valor entre o currentPage  e o MaxLeft, pois se ele for 3 ele vai adicionar o 1
    const first = Math.max(currentPage - MaxLeft, 1)

    return(
        <>
        {/* Criando um array a partir de uma quantidade */}
            <ul>
                {/* utilizando a contagem do index pois ele começa do 0 até o 8 e soma-la com o first que é a 
                primeira page que aparece na listagem de buttons */}
                {Array.from({ length: MaxItems })
                .map(( _, index ) => index + first )
                .map((page) => (
                    <li key={page}>
                        <button onClick={() => setOffset((page - 1) * limit)}>
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Pagination;