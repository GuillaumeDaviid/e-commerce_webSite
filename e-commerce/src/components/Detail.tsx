import {useParams} from "react-router-dom";
import { productList } from '../datas/productList'
import { useStore } from 'react-redux';
import '../styles/Detail.scss'
import { changeQuantity, changeTotal } from "../redux/store";
import { addCommand } from "../redux/command";

function Detail () {
    const store = useStore();
    let {id} = useParams()

    const item = productList.map((data, index) => 
    id?.substring(3) === data.id ? <div className='Template__item' key={index}><img  className='Detail_item-img' src={data.image} alt={data.name}/>
    <p className='Detail_item-name' data-testid="nameElement">{data.name}</p>
    <p className='Detail_item-price' data-testid="priceElement">{data.price} €</p>
    <button className="Detail-btn" data-testid="btnElement" onClick={() => {
        store.dispatch(changeTotal(data.price));
        store.dispatch(changeQuantity());
        store.dispatch(addCommand(data.name, data.price, data.id));
    }}>Ajouter au Panier</button>
    </div> : <div key={index}></div>)

    return (
        <div className="Detail">
            Detail du produit {id?.substring(3)}
            {item}
        </div>
    )
}

export default Detail