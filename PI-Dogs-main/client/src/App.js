import './App.css';
import Cards from './Components/Cards/Cards';
import { Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addDogs } from './Redux/action';
import Nav from "./Components/Nav/Nav";
import Landing from "./Components/Landing/Landing";
import Detail from './Components/Detail/Detail';
import Formulario from './Components/Form/form';

function App() {
  const dispatch = useDispatch()
  const location = useLocation() // en que direccion estoy

  // solicita GET a la api, obtiene datos de los perros y los agrega a Redux
  useEffect(() => {
    axios.get("http://localHost:3001/dogs")
      .then(({ data }) => {
        dispatch(addDogs(data))
      })
      .catch((error) => console.log(error))
  }, [dispatch])

  // busca perros por nombre en la api y actualiza el estado de redux 
  async function onSearch(name) {
    try {
      const { data } = await axios.get(`http://localhost:3001/dogsname?name=${name}`)
      dispatch(addDogs(data))
    } catch ({ response }) {
      alert(response.data.error)
    }
  }

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch}></Nav>}
      <Routes >
        <Route path="/" element={<Landing></Landing>}></Route>
        {/* <Route path="/home" component={CustomButton} */}
        <Route path='/home' element={<Cards></Cards>}></Route>
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/form' element={<Formulario />} />
      </Routes>

      {/* dog={dogs} onClose={onClose} */}
    </div>
  );
}

export default App;

// 35 - mientras no sea "/" renderiza Nav 