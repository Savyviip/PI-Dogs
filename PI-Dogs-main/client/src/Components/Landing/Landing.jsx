import React from "react";
import image from "../Images/image-background2.jpg";
import CustomButton from "./CustomButton";

export default function Landing() {
    return (
        <div>
            {/* <h1>Bienvenido a mi landing page</h1> */}
            <CustomButton></CustomButton>
            <img src={image} alt="ImageLanding" />
            {/* <p>Este es un ejemplo de cómo poner un fondo de pantalla en tu landing page</p>
            <button>Empezar</button> */}
        </div>
    );
}