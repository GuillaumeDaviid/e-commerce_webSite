import '../styles/Contact.scss'

function Contact () {

    return(
        <div className="Contact">
            <h2>Contact</h2>
            <p>Site crée à titre d'exemple pour mon portofolio</p>

            <div className='Contact_link'>

            <p>Vous pouvez me contacter via :</p>

            <div className='Contact_link-elt'>
            <a href="https://www.linkedin.com/in/guillaume-david-5541271b9/" target="_blank">Linkedin</a>
            <a href="https://www.guillaumedavid.com" target="_blank">guillaumedavid.com</a>
            <a href='https://www.malt.fr/profile/guillaumedavid2' target="_blank">Malt</a>
            </div>

            </div>
        </div>
    )
}

export default Contact