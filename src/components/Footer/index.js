import Link from '../shared/Link'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='content'>
                <Link className='title' to="/">
                    Rodapé.
                </Link>
                <div className='right'>
                    <div className='text'>
                        Frase de efeito.
                    </div>
                    <Link className={"button"} to="/rsvp">Confirmar presença</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;