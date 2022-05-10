import '../styles/Cart.scss'
import img from "../images/running.jpg"

function Cart () {
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
                <button className='Cart_content-btn'>Commander</button>
            </div>
        </div>
    )
}

export default Cart