import {useParams} from "react-router-dom";

function Detail () {
    let {id} = useParams()
    return (
        <div>Detail du produit {id?.substring(3)}</div>
    )
}

export default Detail