"use client";

import React, { useState } from "react";
import Pokedex from "./Pokedex";
import styles from "./PokedexContainer.module.css";

const PokedexContainer: React.FC = () => {
  const initialNumbers = [1, 155, 255, 390, 420, 535]; // Números iniciais para cada Pokedex
  const [currentPokemons, setCurrentPokemons] =
    useState<number[]>(initialNumbers);

  const handleNextPokemon = () => {
    setCurrentPokemons((prevPokemons) =>
      prevPokemons.map((prevPokemon) =>
        prevPokemon < 600 ? prevPokemon + 1 : 1
      )
    );
  };

  // Função auxiliar para dividir o array em grupos de 3
  const chunk = (arr: any[], size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );

  const pokemonRows = chunk(currentPokemons, 3); // Dividir em grupos de 3 Pokémons

  return (
    <div>
      {pokemonRows.map((row, rowIndex) => (
        <div className={styles["pokedex-row"]} key={rowIndex}>
          {row.map((currentPokemon, index) => (
            <Pokedex key={index} currentPokemon={currentPokemon} />
          ))}
        </div>
      ))}
      <div className={styles["button-container"]}>
        <button
          className={styles["pokedex-button"]}
          onClick={handleNextPokemon}
        >
          Next Pokémon
        </button>
      </div>
    </div>
  );
};

export default PokedexContainer;
