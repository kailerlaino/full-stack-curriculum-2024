import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid2 } from "@mui/material";
import PokemonCard from "./PokemonCard";

function PokemonList() {

  const [pokemon, setPokemon] = useState([])

  function fetchPokemon() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response => {
      setPokemon(response.data.results)
      console.log(response.data.results)
    })
  }

  return (
    <Grid2 container justifyContent="center">
      {pokemon.map((pokemon, index) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} index={index}/>
      ))}
    </Grid2>
  );
}

export default PokemonList;