import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter,faInstagram,faPinterest,faFacebook} from '@fortawesome/free-brands-svg-icons'
import Pasta from '../images/pasta.jpg'

export default function StartHerePage() {
  return (
    <>
      <div className='about-me'>
      <img src={Pasta} alt="" />
          <div className='am-content'>
              <h1>Welcome to Ruchir</h1>
              <h2>LET'S TALK ABOUT FOOD <span>shall we ?</span></h2>
              
              <p>Well, we hope that’s why you’re here. Our recipes are designed for real, actual, every day life, and we try to focus on real foods and healthy recipes (which honestly means a lot of different things to us, including the perfect chocolate chip cookie and cheese on cheese on cheese, because health is all about balance, right?).</p>
              <p>This is the place to find those recipes — everything from our most popular, to meal prep, to Instant Pot recipes, or if you just, like, have some sad greens in your fridge to use up and you need some inspiration.</p>
              <p>You’re here! Have fun. We hope you find something (many things) you love.</p>
          </div>
         
      </div>
      <div className='SH-socials'>
                <h1>follow us</h1>
                <FontAwesomeIcon  icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faPinterest} />
                <FontAwesomeIcon icon={faFacebook} />
            </div>
    </>
  )
}
