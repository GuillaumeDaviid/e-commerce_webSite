import '../styles/Header.scss'
import { Link } from "react-router-dom";

function Header () {
    return(
        <div className="header">
            <div>
            <Link to="/"><h1>Commercia</h1></Link>
            </div>


            <div className="header__link">
            <Link to="/product">Produits</Link>
            <Link to="pack">Pack</Link>
            <Link to="cart">Panier</Link>
            </div>

        </div>
    )
}

export default Header