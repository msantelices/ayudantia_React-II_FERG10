import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

const Card = ({ pokemon })=> {
    const { favorites, toggleFavoritePokemon } = useContext(GlobalContext)

    const isFavorite = ()=> {
        return favorites.includes(pokemon)
    }

    return (
        <div 
            className={`card ${ isFavorite() ? 'favorite' : '' }`} 
            onClick={()=> toggleFavoritePokemon(pokemon)}>
            <img src={pokemon.sprite} alt={pokemon.name} />
            <h3>{pokemon.number} - {pokemon.name}</h3>
        </div>
    )
}

export default Card