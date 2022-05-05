import '../styles/Home.scss'
import Template from './Template'

function Home () {
    return(
        <div className='Home'>
            <div className='Home__mainImg'>Image princiaple</div>

            <h2>Vetements</h2>
            <Template category="vetement"/>
            <h2>Informatique</h2>
            <h2>Sport</h2>
            <h2>Bricolage</h2>
            <h2>Plantes</h2>
        </div>
    )
}

export default Home