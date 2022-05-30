import adidas from '../images/adidas.jpg'
import chaussures from '../images/chaussures.png'
import sport from '../images/sport.jpg'
import chevron from '../images/chevron.png'
import '../styles/Carrousel.scss'
import { useState } from 'react'

function Carrousel () {
    const [p, setp] = useState(0);
    const [nbr, setNbr] = useState(1);

    function handleClickRight() {
        let carrousel = document.getElementById('carrousel');
        if (carrousel){
            if (nbr < 3){
                setNbr(nbr + 1);
                const newp = p - 1
                setp(newp);
                carrousel.style.transform = "translate("+newp*100+"%)";
                carrousel.style.transition = "all 0.5s ease";
            }
        }
    }

    function handleClickLeft() {
        let carrousel = document.getElementById('carrousel');
        if (carrousel){
            if (nbr > 1){
                setNbr(nbr - 1);
                const newp = p + 1;
                setp(newp);
            carrousel.style.transform = "translate("+newp*100+"%)";
            carrousel.style.transition = "all 0.5s ease";
            }
            
        }
    }


    return (
        <div className="carrousel">
            <div className='carrousel_items' id="carrousel">
            <img className='carrousel_image-item' src={adidas} alt="sport" data-testid="imgElement"/>
            <img className='carrousel_image-item' src={chaussures} alt="sport" data-testid="imgElement"/>
            <img className='carrousel_image-item' src={sport} alt="sport" data-testid="imgElement"/>
            </div>
            <div className='carrousel_right' data-testid="chevron" onClick={handleClickRight}><img  className='chevron-right' src={chevron} alt="chevron"/></div>
            <div className='carrousel_left' data-testid="chevron"  onClick={handleClickLeft}><img src={chevron} alt="chevron"/></div>
        </div>
    )
}

export default Carrousel