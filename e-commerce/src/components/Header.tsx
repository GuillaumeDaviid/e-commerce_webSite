import '../styles/Header.scss'
import { Link } from "react-router-dom";

function Header () {
    return(
        <div className="header">
            <div>
            <Link to="/"><h1 className='header__link__title'>COMMERCIA</h1></Link>
            </div>


            <div className="header__link">
            <Link to="/product" className='link'>Produits</Link>
            <Link to="pack" className='link'>Pack</Link>
            <Link to="cart" className='link'>Panier</Link>
            </div>

        </div>
    )
}

export default Header