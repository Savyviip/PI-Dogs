import style from "./SearchBar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function SearchBar({ onSearch }) {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        setName(event.target.value);
    }

    function submit() {
        onSearch(name)
        navigate("/home") // me manda al home para buscar el perro
    }

    return (
        <div className="SearchBar" style={{ padding: "10px" }}>
            <input type='search'
                onChange={handleChange}
            />

            <button className={style.styleButton}
                onClick={submit}>
                Agregar
            </button>

        </div>
    );
}