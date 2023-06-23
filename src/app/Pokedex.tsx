"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Pokedex.module.css";

interface PokemonData {
  id: number;
  name: string;
  sprites: {
    versions: {
      "generation-v": {
        "black-white": {
          animated: {
            front_default: string;
          };
        };
      };
    };
  };
}

interface PokedexProps {
  currentPokemon: number;
}

const Pokedex: React.FC<PokedexProps> = ({ currentPokemon }) => {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${currentPokemon}`
        );
        setPokemonData(response.data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchPokemonData();
  }, [currentPokemon]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  const { id, name, sprites } = pokemonData;
  const animatedSprite =
    sprites?.versions?.["generation-v"]?.["black-white"]?.animated
      ?.front_default;

  return (
    <div className={styles.pokedex}>
      <div className={styles.pokemonInfo}>
        <div className={styles.pokemonName}>{name}</div>
        <div className={styles.pokemonNumber}>No. {id}</div>
      </div>
      {animatedSprite && (
        <img src={animatedSprite} alt={name} className={styles.pokemonImage} />
      )}
    </div>
  );
};

export default Pokedex;
