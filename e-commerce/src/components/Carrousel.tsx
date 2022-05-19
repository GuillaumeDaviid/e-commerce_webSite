import adidas from '../images/adidas.jpg'
import chaussures from '../images/chaussures.png'
import sport from '../images/sport.jpg'
import chevron from '../images/chevron.png'
import '../styles/Carrousel.scss'

function Carrousel () {
    return (
        <div className="carrousel">
            <img className='carrousel_image-item' src={adidas} alt="sport"/>
            <img className='carrousel_image-item' src={chaussures} alt="sport"/>
            <img className='carrousel_image-item' src={sport} alt="sport"/>
            <div className='carrousel_right'><img  className='chevron-right' src={chevron} alt="chevron"/></div>
            <div className='carrousel_left'><img src={chevron} alt="chevron"/></div>
        </div>
    )
}

export default Carrousel