import style from "./Card.module.css";

export default function Card({ image, id, name, temperament, weight }) {

    return (

        <div className={style.container}>
            <div>
                <img src={image} alt="dog" />
                {/* onClick={() => props.onClose(props.id)} */}
                <h2>ID: {id}</h2>
                <h2>Nombre: {name}</h2>
                <h2>Temperamento: {temperament}</h2>
                <h2>Peso: {weight}</h2>

                {/* <button  className={style.closeButton}>X</button> */}

            </div>
        </div>
    );
}
