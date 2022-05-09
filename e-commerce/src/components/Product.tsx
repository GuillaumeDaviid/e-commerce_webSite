import '../styles/Product.scss'
import {useParams, Link} from "react-router-dom";
import Template from './Template'

function Product () {
    let { id } = useParams()

    const title = id === "id=vetement" ? <h1>Vetements</h1> : id === "id=informatique" ? <h1>Informatique</h1> : id === "id=sport" ? <h1>Sport</h1> 
    : id === "id=bricolage" ? <h1>Bricolage</h1> : id === "id=plante" ? <h1>Plantes</h1> : <div></div>
    return(
        <div className="Product">
            <Link to="/" className='Product_back'>retour</Link>
            {title}
            <Template category={`${id?.substring(3)}`}/>
        </div>
    )
}

export default Product