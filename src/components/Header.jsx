import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <Link to="/">A propos</Link>
            <Link to="/">Accueil</Link>
        </nav>
    )
}

export default Header