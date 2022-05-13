import '../styles/Cart.scss'
import img from "../images/running.jpg"
import { useStore, useSelector } from 'react-redux';

function Cart () {

    const store = useStore();
    const command = useSelector((state:any) => state.command);

    const listCommand = command[0].map((data:any) => data.quantity > 0 ? <div>{data.name}  {data.price}€ {data.quantity}</div> : <div></div>)

    return(
        <div className="Cart">
            <h2>Panier</h2>
            <p>Votre panier est vide</p>
            <div className='Cart_content'>
                <div className='Cart_content-elt'>
                <img className='Template__item__img' src={img} alt="im"/>
                <div>
                <p>Nom du produit</p>
                <p>20 €</p>
                </div>
            </div>
                 <div className='Cart_content-quantity'>
                     <button>-</button><p>1</p><button>+</button>
                </div>
                <div className='Cart_content-total'>
                    <p>TOTAL :</p>
                    <p>20 €</p>
                </div>
                {listCommand}
                <button className='Cart_content-btn'>Commander</button>
            </div>
        </div>
    )
}

export default Cart