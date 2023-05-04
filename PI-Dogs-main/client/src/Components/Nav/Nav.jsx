import SearchBar from "../SearchBar/SearchBar";
import React from 'react';
import style from "./Nav.modules.css";



export default function Nav({ onSearch }) {
    return (

        <div className={style.nav}>
            <div>
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    )
}