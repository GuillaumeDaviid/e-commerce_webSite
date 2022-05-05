import { productList } from '../datas/productList'
import img from "../images/running.jpg"
import '../styles/Template.scss'

type Props = {
    category: string,
  };

function Template ({category}:Props) {

    const item = productList.map((data) => 
    category === data.category ? <div className='Template__item'><img  className='Template__item__img' src={img} alt={data.name}/>
    <p>{data.name}</p>
    <p className='item-price'>{data.price} €</p>
    </div> : <div></div>)


    return(
        <div className='Template'>
            {item}
        </div>
    )
}

export default Template