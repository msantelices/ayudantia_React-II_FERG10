import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

import Card from '../components/Card.jsx'

const FavGallery = ()=> {
    const { favorites } = useContext(GlobalContext)

    return (
        <section className='gallery fav-gallery'>
            {
                favorites.map((pokemon)=>{
                    return (
                        <Card key={pokemon.number} pokemon={pokemon} />
                    )
                })
            }

            {
                favorites.length === 0 &&
                <h3>No hay favoritos</h3>
            }
        </section>
    )
}

export default FavGallery