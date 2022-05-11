import {useParams, Link} from "react-router-dom";
import { productList } from '../datas/productList'
import img from "../images/running.jpg"
import '../styles/Detail.scss'

function Detail () {
    let {id} = useParams()

    const item = productList.map((data) => 
    id?.substring(3) === data.id ? <div className='Template__item'><img  className='detail_item-img' src={img} alt={data.name}/>
    <p className='item-name'>{data.name}</p>
    <p className='item-price'>{data.price} €</p>
    </div> : <div></div>)

    return (
        <div className="Detail">
            Detail du produit {id?.substring(3)}
            {item}
            <button>Ajouter au Panier</button>
        </div>
    )
}

export default Detail