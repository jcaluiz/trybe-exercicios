import { Component } from "react";
import pokemons from './data'
import Pokemon from "./Pokemon";

class Pokedex extends Component {
    render() {
        return (
            pokemons.map(pokemon => 
                <div key={pokemon.id}>
                  <Pokemon pokemons={pokemon}/>
                </div>
              )
        )
    }
}

export default Pokedex