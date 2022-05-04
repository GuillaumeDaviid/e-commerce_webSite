import '../styles/Footer.scss'

function Footer () {
    return(
        <div className="Footer">

            <div className='Footer__block'>
            <div className='Footer__social'>
            <h2>Réseaux sociaux</h2>
            <img className="img_social" alt="twitter" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" />
            <img className='img_social' alt="facebook" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" />

            </div>

            <div className='Footer__link'>
                <h2>Liens Rapides</h2>
                <div className='Footer__link__block'>
                <a href="https://github.com/GuillaumeDaviid" className='Footer-link' target='_blank' rel='noreferrer'>Github</a>
                <a href="https://www.guillaumedavid.com/" className='Footer-link' target='_blank' rel='noreferrer'>guillaumedavid.com</a>
                <a href="https://www.malt.fr/profile/guillaumedavid2" className='Footer-link' target='_blank' rel='noreferrer'>Malt</a>
                </div>
            </div>
            </div>

            <p>© 2022, commercia</p>
        </div>
    )
}

export default Footer