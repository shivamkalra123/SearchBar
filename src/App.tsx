import React from "react";
import { Route, Routes } from "react-router-dom";
import { Pokedex } from "./Components/Pokedex";
import { Pokemon } from "./Components/Pokemon";
import './styles/css/styles.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Pokedex />} />
        <Route path={"/:pokemonId"} element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App;
