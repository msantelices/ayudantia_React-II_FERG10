import { Link } from "react-router-dom"

const Navbar = ()=> {
    return (
        <header>
            <div className="logo">
                <img src="/pokeball.svg" alt="Pokeball" />
                <h1>Pokedex</h1>
            </div>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/favoritos">Favoritos</Link>
            </nav>
        </header>
    )
}

export default Navbar