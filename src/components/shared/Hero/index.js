import './Hero.scss';

const Hero = ({ mainText, children}) => {
    return (
        <div className='landing-hero-container'>
            <div className='content'>
                <div className='left' data-aos="fade-right" data-aos-duration="3000">
                    {mainText}
                </div>
                <div className='right'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Hero;