import { createContext, useState } from "react"

export const GlobalContext = createContext()

const GlobalProvider = ({children})=> {
    const [pokemons, setPokemons] = useState([])
    const [favorites, setFavorites] = useState([])
    const [search, setSearch] = useState("")

    const toggleFavoritePokemon = (pokemon)=> { 
        // const index = favorites.findIndex((pkmn)=> pkmn.number === pokemon.number)
        // if(index !== -1) {
        //     const updateFavorites = [...favorites]
        //     updateFavorites.splice(index, 1)
        //     setFavorites(updateFavorites)
        // } else {
        //     const updateFavorites = [...favorites, pokemon]
        //     setFavorites(updateFavorites)
        // }

        const isFavorite = favorites.includes(pokemon)
        if(isFavorite) {
            const updateFavorites = favorites.filter((pkmn)=> pkmn !== pokemon)
            setFavorites(updateFavorites)
        } else {
            const updateFavorites = [...favorites, pokemon]
            setFavorites(updateFavorites)
        }
    }

    const state = { pokemons, setPokemons, search, setSearch, favorites, toggleFavoritePokemon }

    return (
        <GlobalContext.Provider value={state}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider