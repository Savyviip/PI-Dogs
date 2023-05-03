import './App.css';
import Cards from './Components/Cards';
import { Route, Routes } from "react-router-dom";
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addDogs } from './Redux/action';



function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get("http://localHost:3001/dogs")
      .then(({ data }) => {
        dispatch(addDogs(data))
      })
      .catch((error) => console.log(error))
  }, [dispatch])


  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      <Routes >
        <Route path='/home' element={<Cards></Cards>}></Route>
      </Routes>

      {/* dog={dogs} onClose={onClose} */}
    </div>
  );
}

export default App;
