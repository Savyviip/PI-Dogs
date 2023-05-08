import React from "react";
import style from "./Detail.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { dogs } = useSelector((state) => state);
    const dog = dogs.filter((element) =>
        element.id === Number(id)
    )
    console.log(dog)

    const { age, height, image, name, temperaments, weight, } = dog[0];

    return (
        <>
            {/* <div className="btnClose" onClick={() => navigate(-1)}> Volver  </div> // navigate vuelve 1- menos */}
            <div className={style.conteiner}>
                <img src={image} alt='' />
                <h1>Codigo: {id}</h1>
                <h1>Name: {name}</h1>
                <h1>Age: {age}</h1>
                <h1>Altura {height}</h1>
                <h1>Peso {weight}</h1>
                <h1>Temperamentos {temperaments.join(", ")}</h1>
            </div>
        </>
    );
}