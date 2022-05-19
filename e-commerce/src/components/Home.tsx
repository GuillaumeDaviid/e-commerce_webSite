import '../styles/Home.scss'
import Template from './Template'
import Carrousel from './Carrousel'

function Home () {
    return(
        <div className='Home'>
            <Carrousel />

            <h2>Vetements</h2>
            <Template category="vetement"/>
            <h2>Informatique</h2>
            <Template category="informatique"/>
            <h2>Sport</h2>
            <Template category="sport"/>
            <h2>Bricolage</h2>
            <Template category="bricolage"/>
            <h2>Plantes</h2>
            <Template category="plante"/>
        </div>
    )
}

export default Home