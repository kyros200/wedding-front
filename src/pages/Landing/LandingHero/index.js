import Link from '../../../components/shared/Link'
import Hatch from '../../../components/shared/Hatch'
import Hero from '../../../components/shared/Hero'
import rightArrow from '../../../images/right-arrow.svg';
import './LandingHero.scss';

const LandingHero = () => {
    const listTexts = [
        "Casamento teste (frase longa grande)"
    ]
    
    return (
        <Hero
            mainText={listTexts[Math.floor(Math.random() * listTexts.length)]}
        >
            <Link className='main-link' to="/quiz">
                Quiz
                <img className='image' src={rightArrow} alt="Arrow"/>
            </Link>
        </Hero>
    )
}

export default LandingHero;