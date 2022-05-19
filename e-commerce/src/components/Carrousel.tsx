import adidas from '../images/adidas.jpg'
import chaussures from '../images/chaussures.png'
import sport from '../images/sport.jpg'
import '../styles/Carrousel.scss'

function Carrousel () {
    return (
        <div className="carrousel">
            <img className='carrousel_image-item' src={adidas} alt="sport"/>
            <img className='carrousel_image-item' src={chaussures} alt="sport"/>
            <img className='carrousel_image-item' src={sport} alt="sport"/>
            <div className='carrousel_right'></div>
            <div className='carrousel_left'></div>
        </div>
    )
}

export default Carrousel