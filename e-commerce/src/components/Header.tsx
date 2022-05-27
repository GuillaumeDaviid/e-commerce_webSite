import '../styles/Header.scss'
import cart from '../images/cart.png'
import { Link } from "react-router-dom";

function Header () {
    return(
        <div className="header">
            <div>
            <Link to="/"><h1 data-testid="website_title" className='header__link__title'>COMMERCIA</h1></Link>
            </div>


            <div className="header__link">
                <div>
        <nav>
            <li className='menu-deroulant'><Link to="/" className='link'>Produits</Link>
            <ul className='sous-menu'>
                <li><Link data-testid="nav_element" to="/product/id=vetement">Vetements</Link></li>
                <li><Link data-testid="nav_element" to="/product/id=sport">Sport</Link></li>
                <li><Link data-testid="nav_element" to="product/id=informatique">Informatique</Link></li>
                <li><Link data-testid="nav_element" to="/product/id=bricolage">Bricolage</Link></li>
                <li><Link data-testid="nav_element" to="/product/id=plante">Plantes</Link></li>
            </ul>
            </li>
        </nav>
        </div>
        <div>
            <Link to="pack" className='link'>Pack</Link>
        </div>
        <div>
            <Link data-testid="cartLink" to="cart" className='link'><img className='cart_icon' src={cart} alt="cart" /></Link>
        </div>
            </div>

        </div>
    )
}

export default Header