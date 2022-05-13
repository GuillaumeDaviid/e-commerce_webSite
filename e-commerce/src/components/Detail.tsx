import {useParams} from "react-router-dom";
import { productList } from '../datas/productList'
import { useStore, useSelector } from 'react-redux';
import '../styles/Detail.scss'
import { changeQuantity, changeTotal } from "../redux/store";
import { addCommand } from "../redux/command";

function Detail () {
    const store = useStore();
    let {id} = useParams()

    const totalPrice = useSelector((state:any) => state.totalPrice);
    const quantity = useSelector((state:any) => state.quantity);
    const command = useSelector((state:any) => state.command);
 
    console.log(totalPrice + '  ' + quantity + '   ' + command);

    const object = command.map((data:any) => <div>{data.name}  {data.price}€ {data.quantity}</div>)

    const item = productList.map((data) => 
    id?.substring(3) === data.id ? <div className='Template__item'><img  className='Detail_item-img' src={data.image} alt={data.name}/>
    <p className='Detail_item-name'>{data.name}</p>
    <p className='Detail_item-price'>{data.price} €</p>
    <button className="Detail-btn" onClick={() => {
        store.dispatch(changeTotal(data.price));
        store.dispatch(changeQuantity());
        store.dispatch(addCommand(data.name, data.price, data.id));
    }}>Ajouter au Panier</button>
    </div> : <div></div>)

    return (
        <div className="Detail">
            Detail du produit {id?.substring(3)}
            {item}
            {object}
        </div>
    )
}

export default Detail