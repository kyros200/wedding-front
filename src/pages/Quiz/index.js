import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';

const Quiz = () => {
    return (
        <div className='rsvp-container'>
            <div className='content'>
                <div className='buttons'>
                    Teste Quiz
                    <button onClick={() => toast.success("teste")}>teste</button>
                    <button onClick={() => toast.error("teste erro")}>teste erro</button>
                    <br /><br />
                    <Link to="/">Voltar pra página principal</Link>
                </div>
            </div>
        </div>
    )
}

export default Quiz;