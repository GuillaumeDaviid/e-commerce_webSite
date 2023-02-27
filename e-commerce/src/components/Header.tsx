import '../styles/Header.scss'
import { useSelector } from 'react-redux';
import cart from '../images/cart.png'
import { Link } from "react-router-dom";

function Header () {

    const command = useSelector((state:any) => state.command);
    const totalQuantity = command[0].reduce((total:number, currentValue:any) => total = total + currentValue.quantity,0)


    const quantity = totalQuantity > 0 && <div className='cart_quantity'>{totalQuantity}</div>

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
            <Link to="contact" className='link'>Contact</Link>
        </div>
        <div>
            
            <Link data-testid="cartLink" to="cart" className='link'>{quantity}<img className='cart_icon' src={cart} alt="cart" /></Link>
        </div>
            </div>

        </div>
    )
}

export default Header