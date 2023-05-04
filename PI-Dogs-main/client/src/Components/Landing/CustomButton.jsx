import React from "react";
import style from "./CustomButton.module.css";
import { Link } from "react-router-dom";

export default function CustomButton() {
    return (
        <div className={style.contenedor}>
            {/* <h1>Bienvenido a mi landing page</h1> */}

            <p>VEAN A LAS MASCOTITAS MAS BONITAS</p>

            <Link to="/home">
                <button className={style.customButton}>HOME</button>
            </Link>
        </div>
    );
}

{/* <Link to="/home"></Link>Home */ }