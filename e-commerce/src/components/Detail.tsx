import {useParams} from "react-router-dom";
import { productList } from '../datas/productList'
import { useDispatch, useStore, useSelector } from 'react-redux';
import '../styles/Detail.scss'
import { changeTotal } from "../redux/store";

function Detail () {
    const store = useStore();
    let {id} = useParams()

    const dispatch = useDispatch();
    const totalPrice = useSelector((state:any) => state.totalPrice);

    console.log(totalPrice);

    const item = productList.map((data) => 
    id?.substring(3) === data.id ? <div className='Template__item'><img  className='Detail_item-img' src={data.image} alt={data.name}/>
    <p className='Detail_item-name'>{data.name}</p>
    <p className='Detail_item-price'>{data.price} €</p>
    <button className="Detail-btn" onClick={() => {
        store.dispatch(changeTotal())
    }}>Ajouter au Panier</button>
    </div> : <div></div>)

    return (
        <div className="Detail">
            Detail du produit {id?.substring(3)}
            {item}
        </div>
    )
}

export default Detail