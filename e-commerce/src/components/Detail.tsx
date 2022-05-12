import {useParams} from "react-router-dom";
import { productList } from '../datas/productList'
import img from "../images/running.jpg"
import '../styles/Detail.scss'

function Detail () {
    let {id} = useParams()

    const item = productList.map((data) => 
    id?.substring(3) === data.id ? <div className='Template__item'><img  className='Detail_item-img' src={data.image} alt={data.name}/>
    <p className='Detail_item-name'>{data.name}</p>
    <p className='Detail_item-price'>{data.price} €</p>
    <button className="Detail-btn">Ajouter au Panier</button>
    </div> : <div></div>)

    return (
        <div className="Detail">
            Detail du produit {id?.substring(3)}
            {item}
        </div>
    )
}

export default Detail