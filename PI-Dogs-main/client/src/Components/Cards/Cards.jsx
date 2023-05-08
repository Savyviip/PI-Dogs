import React, { useState } from "react";
import Card from "../Card/Card.jsx";
import { useDispatch, useSelector } from "react-redux";
import style from "./Cards.module.css";

export default function Cards(props) {
    const { dogs } = useSelector((state) => state);
    const dispatch = useDispatch();

    // definimos el número máximo de botones a mostrar
    const pageNumberLimit = 3;

    // definimos el estado para el número actual de página
    const [currentPage, setCurrentPage] = useState(1);

    // función para cambiar de página
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // obtenemos el índice del primer y último elemento a mostrar
    const indexOfLastDog = currentPage * 8;
    const indexOfFirstDog = indexOfLastDog - 8;
    const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);

    // obtenemos el número total de páginas
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(dogs.length / 8); i++) {
        pageNumbers.push(i);
    }

    // definimos el índice del último botón a mostrar
    const indexOfLastPage = currentPage * pageNumberLimit;
    const indexOfFirstPage = indexOfLastPage - pageNumberLimit;
    const currentPages = pageNumbers.slice(indexOfFirstPage, indexOfLastPage);

    // función para avanzar o retroceder en el paginado
    const next = () => {
        if (pageNumbers.indexOf(currentPage) < pageNumbers.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prev = () => {
        if (pageNumbers.indexOf(currentPage) > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className={style.conteiner}>
            <div className={style.cards} >
                {currentDogs.map((dog) => {
                    console.log(dog)
                    const { id, name, age, height, weight, image, temperaments } = dog;
                    return (
                        <Card
                            key={id}
                            id={id}
                            name={name}
                            age={age}
                            height={height}
                            weight={weight}
                            image={image}
                            temperaments={temperaments}
                        />
                    );
                })}

                <div className={style.pagination}>
                    <button onClick={prev}>Anterior</button>
                    {currentPages.map((number) => (
                        <button
                            key={number}
                            onClick={() => paginate(number)}
                            className={number === currentPage ? style.active : null}
                        >
                            {number}
                        </button>
                    ))}
                    {pageNumbers.indexOf(currentPage) < pageNumbers.length - 1 && (
                        <button onClick={next}>Siguiente</button>
                    )}
                </div>
            </div>


        </div>
    );
}