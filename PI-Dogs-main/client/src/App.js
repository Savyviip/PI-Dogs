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

function App() {
  const dispatch = useDispatch()
  const location = useLocation() // en que direccion estoy
  
  useEffect(() => {
    axios.get("http://localHost:3001/dogs")
      .then(({ data }) => {
        dispatch(addDogs(data))
      })
      .catch((error) => console.log(error))
  }, [dispatch])

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
      </Routes>

      {/* dog={dogs} onClose={onClose} */}
    </div>
  );
}

export default App;

// 26 - mientras no sea "/" renderiza Nav 