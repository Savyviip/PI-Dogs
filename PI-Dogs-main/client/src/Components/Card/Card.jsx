// import { Temperaments } from "../../../../api/src/db";
import { Link } from "react-router-dom";
import style from "./Card.module.css";


export default function Card({ image, id, name, temperaments, weight }) {
    console.log(temperaments)
    return (

        <div className={style.container}>
            <div>
                <img src={image} alt="dog" />
                {/* onClick={() => props.onClose(props.id)} */}
                <h2>ID: {id}</h2>
                <h2>Nombre: {name}</h2>
                <h2>Temperamento: {temperaments !==null ? temperaments.join(", ") : null}</h2>
                <h2>Peso: {weight}</h2>
                <button className={style.customButton}>
                    <Link to={`/detail/${id}`}>Ver</Link>
                </button>
                {/* <button  className={style.closeButton}>X</button> */}

            </div>
        </div>
    );
}
