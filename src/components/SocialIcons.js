import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter,faInstagram,faPinterest,faFacebook} from '@fortawesome/free-brands-svg-icons'
import emailjs from 'emailjs-com'

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w3n433k', 'template_lq4in2q', e.target, 'O4zppRTVlOJw0UKPe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

export default function SocialIcons() {
  return (
   <>
        <div className='social-sect blogcontainer'>
            <div className='social-icons'>
                <h1>follow us</h1>
                <FontAwesomeIcon  icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faPinterest} />
                <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div >
                <form onSubmit={sendEmail} className='email'>
                        <h2>sign up <span>FOR EMAIL UPDATES</span></h2>
                        <input type="text" placeholder='name' name="name" autoComplete='off'/>
                        <input type="email" placeholder='email' name="email" autoComplete='off'/>
                        <input type="submit" value="Send" />
                </form>
            </div>
        </div>
        
   </>
  )
}
