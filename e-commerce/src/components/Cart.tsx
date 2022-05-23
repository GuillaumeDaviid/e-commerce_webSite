import '../styles/Cart.scss'
import { useSelector, useStore } from 'react-redux';
import { addCommand, lessCommand } from "../redux/command";

function Cart () {
    const store = useStore();

    const command = useSelector((state:any) => state.command);

    const listCommand = command[0].map((data:any) => data.quantity > 0 ? <div className='Cart_content-elt'><div className='content-info'>
        <p>{data.name}</p><p>{data.price} €</p></div>
        <div className='Cart_content-quantity'>
            <button onClick={() => store.dispatch(lessCommand(data.name, data.price, data.id))}>-</button>
            <p>{data.quantity}</p>
            <button onClick={() => store.dispatch(addCommand(data.name, data.price, data.id))}>+</button>
        </div>
    </div> 
    : <div></div>)

  // const quantity = command[0].reduce((total:number, currentValue:any) => total = total + currentValue.quantity,0)

   const price = command[0].reduce((total:number, currentValue:any) => total = total + currentValue.price * currentValue.quantity,0)

    return(
        <div className="Cart">
            <h2>Panier</h2>
            <p>Votre panier est vide</p>
            <div className='Cart_content'>
             {listCommand}
                 
                <div className='Cart_content-total'>
                    <p>TOTAL :</p>
                    <p>{price} €</p>
                </div>
                <button className='Cart_content-btn'>Commander</button>
            </div>
        </div>
    )
}

export default Cart