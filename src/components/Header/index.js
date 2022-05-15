import Link from '../shared/Link'
import './Header.scss'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='content'>
                <Link className='title' to="/">
                    Cabeçalho.
                </Link>
                <div className='buttons'>
                    <Link to="/rsvp">Confirmar presença</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;