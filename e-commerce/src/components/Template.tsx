import { productList } from '../datas/productList'
import img from "../images/running.jpg"
import '../styles/Template.scss'
import { Link } from "react-router-dom"

type Props = {
    category: string,
  };

function Template ({category}:Props) {

    const item = productList.map((data) => 
    category === data.category ? <div className='Template__item'><Link to={`/${category}`}><img  className='Template__item__img' src={img} alt={data.name}/>
    <p className='item-name'>{data.name}</p>
    <p className='item-price'>{data.price} €</p></Link>
    </div> : <div></div>)


    return(
        <div className='Template'>
            {item}
        </div>
    )
}

export default Template