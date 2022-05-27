import { productList } from '../datas/productList'
import '../styles/Template.scss'
import { Link } from "react-router-dom"

type Props = {
    category: string,
  };

function Template ({category}:Props) {

    const item = productList.map((data) => 
    category === data.category ? <div className='Template__item'><Link data-testid="linkElement" to={`/detail/id=${data.id}`}><img data-testid="imgElement" className='Template__item__img' src={data.image} alt={data.name}/>
    <p data-testid="nameElement" className='item-name'>{data.name}</p>
    <p data-testid="priceElement" className='item-price'>{data.price} €</p></Link>
    </div> : <div></div>)


    return(
        <div data-testid="divElement" className='Template'>
            {item}
        </div>
    )
}

export default Template