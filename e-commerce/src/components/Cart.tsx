import '../styles/Cart.scss'
import { useSelector } from 'react-redux';

function Cart () {

    const command = useSelector((state:any) => state.command);

    const listCommand = command[0].map((data:any) => data.quantity > 0 ? <div className='Cart_content-elt'><div className='content-info'>
        <p>{data.name}</p><p>{data.price} €</p></div>
        <div className='Cart_content-quantity'>
            <button>-</button><p>{data.quantity}</p><button>+</button>
        </div>
    </div> 
    : <div></div>)

    return(
        <div className="Cart">
            <h2>Panier</h2>
            <p>Votre panier est vide</p>
            <div className='Cart_content'>
               {/* <div className='Cart_content-elt'>
                <img className='Template__item__img' src={img} alt="im"/>
                <div>
                <p>Nom du produit</p>
                <p>20 €</p>
                </div>
    </div>*/} {listCommand}
                 
                <div className='Cart_content-total'>
                    <p>TOTAL :</p>
                    <p>20 €</p>
                </div>
                <button className='Cart_content-btn'>Commander</button>
            </div>
        </div>
    )
}

export default Cart