import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
    return(
        <div className='hero'>
      <div className="hero-left">
        <h2>A Fresh Start</h2>
        <div>
            <div className="hero-hand-icon">
                <p>your</p>
                {/* <img src={hand_icon} alt="" /> */}
            </div>
            <p>new fashion</p>
            <p>adventure</p>
        </div>
        <div className="hero-latest-btn">
            <div>
              <Link to='/items'>
              <button>Explore</button>
              </Link>
              </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={'https://img01.ztat.net/banner/45f001af81e942799e3f88a7adb9a3ba/be8051f0cf2f47278b9385509fae02ee.jpg?imwidth=1200'} alt="" />
      </div>
    </div>
    )
}