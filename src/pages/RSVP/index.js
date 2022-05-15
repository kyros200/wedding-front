import {Link} from 'react-router-dom'

const RSVP = () => {
    return (
        <div className='rsvp-container'>
            <div className='content'>
                <div className='buttons'>
                    página específica de RSVP. Percebam que o cabeçalho e Rodapé estão ainda na página!
                    <br />
                    <Link to="/">Voltar pra página principal</Link>
                </div>
            </div>
        </div>
    )
}

export default RSVP;