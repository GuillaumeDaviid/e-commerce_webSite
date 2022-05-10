import '../styles/Cart.scss'

function Cart () {
    return(
        <div className="Cart">
            <h2>Panier</h2>
            <p>Votre panier est vide</p>
            <div className='Cart_content'>
                <button className='Cart_content-btn'>Commander</button>
            </div>
        </div>
    )
}

export default Cart