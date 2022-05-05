import { productList } from '../datas/productList'

type Props = {
    category: string,
  };

function Template ({category}:Props) {

    const item = productList.map((data) => 
    category === data.category ? <div></div> : <div></div>)


    return(
        <div className='Template'>
            si category = vetement alors affiche ... photo, nom, prix, stock ... 
            {item}
        </div>
    )
}

export default Template