import React, { useEffect, useState } from "react";
import { toFirstCharUppercase } from "../Constans";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { IPokemon } from "../types";
import arrowLeft from "../assets/icons/arrowLeft.svg";
import Pokeball from "../assets/icons/Pokeball.svg";
import height from "../assets/icons/height.svg";
import weight from "../assets/icons/weight.svg";
import ProgressBar from "./ProgressBar";

export const Pokemon = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);
  const [initialize, setInitialize] = useState<Boolean>(false);
  const pokemonStats = ["HP", "ATK", "DEF", "SATK", "SDEF", "SPD"];

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );
        const { data } = response;
        const fullImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

        const abMap = (array: any) => {
          let abilities = [];
          for (const el of array) {
            abilities.push(el.ability.name);
          }
          return abilities;
        };
        const stMap = (array: any) => {
          let stats = [];
          for (const el of array) {
            stats.push(el.base_stat);
          }
          return stats;
        };
        const tyMap = (array: any) => {
          let types = [];
          for (const el of array) {
            types.push(el.type.name);
          }
          return types;
        };

        const newPokemon: IPokemon = {
          name: data.name,
          id: data.id,
          abilities: abMap(data.abilities),
          height: data.height,
          weight: data.weight,
          stats: stMap(data.stats),
          types: tyMap(data.types),
          fullImageUrl,
        };

        console.log(newPokemon);
        setPokemon(newPokemon);
        setInitialize(true);
      } catch (error) {
        setPokemon(null);
      }
    })();
  }, [pokemonId]);

  if (!initialize) {
    return <>Loading ..</>;
  }
  return (
    <>
      {pokemon === null && <h1> Pokemon not found </h1>}
      {pokemon !== undefined && pokemon && (
        <div key={pokemon.id} className={`pokemon ${pokemon.types[0]}`}>
          <img src={Pokeball} alt="" className="pokemon-decor" />
          <div className="pokemon-title">
            <Link to="/">
              {" "}
              <img src={arrowLeft} alt="" />
            </Link>
            <h1>{toFirstCharUppercase(pokemon.name)}</h1>{" "}
            <h2># {`${pokemon.id}`}</h2>
          </div>

          <div className="pokemon-info">
            <img
              style={{ width: "300px", height: "300px" }}
              src={pokemon.fullImageUrl}
              className="pokemon-img"
            />
            <div className="pokemon-types">
              {pokemon.types.map((type) => {
                return (
                  <h2 key={type} className={`pokemon-type ${type}`}>
                    {type}
                  </h2>
                );
              })}
            </div>
            <h2 className="pokemon-h2">About</h2>
            <div className={`about-groups `}>
              <div className="about-group">
                <div className="about-group-group">
                  <img src={height} alt="pokemon weight" />
                  <h2>{pokemon.height} cm</h2>
                </div>
                <p>Height</p>
              </div>
              <div className="vl"></div>
              <div className="about-group">
                <div className="about-group-group">
                  <img src={weight} alt="pokemon weight" />
                  <h2>{pokemon.weight} kg</h2>
                </div>
                <p>Weight</p>
              </div>
              <div className="vl"></div>
              <div className="about-group">
                <div>
                  {pokemon.abilities.map((ability) => {
                    return <h2 key={ability}>{ability}</h2>;
                  })}
                </div>
                <p>Types</p>
              </div>
            </div>
            <h4 className="pokemon-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              asperiores excepturi laudantium autem. Iure voluptate esse
              possimus aut tenetur eum ut!
            </h4>
            <div className="pokemon-stats">
              <h4 className="stats-title pokemon-h2">Base Stats</h4>
              <div className="stats-bars">
                <div className="stats-bar">
                  {pokemonStats.map((name, i) => (
                    <h2 key={i}>{name}</h2>
                  ))}
                </div>

                <div className="stats-bar">
                  {pokemon.stats.map((st, i) => (
                    <p key={i}>{+st<100? '0': ''}{st}</p>
                  ))}
                </div>
                <div className="stats-bar">
                  {pokemon.stats.map((st, i) => (
                    <ProgressBar key={i}
                      className={`${pokemon.types[0]}`}
                      completed={st}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
