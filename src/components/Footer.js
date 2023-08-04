import React from 'react'
import emailjs from 'emailjs-com'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub,faReddit,faApple,faAmazon,faTwitter,faInstagram,faPinterest,faFacebook} from "@fortawesome/free-brands-svg-icons"
import FoodLogo from '../images/ruchir.png'

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

export default function Footer() {
  return (
   <>
    <div className='Footer'>
        <div className='foot-1'>
                <div className='foot-links'>
                    <p>RUCHIR</p>
                    <ul>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Recipe Index</li>
                        <li>Blogging Resources</li>
                        <li>Income Reports</li>
                        <li>Sponsored Content</li>
                        <li>Media Mentions</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='recipe-links'>
                    <p>FOOD & RECIPES</p>
                        <ul>
                            <li>Sugar Free January</li>
                            <li>Freezer Meals 101</li>
                            <li>Quick and Easy Recipes</li>
                            <li>Instant Pot Recipes</li>
                            <li>Pasta Recipes</li>
                            <li>Soup Recipes</li>
                            <li>Taco Recipes</li>
                            <li>Meal prep Recipes</li>
                        </ul>
                </div>
                <div className='foot-col-3'>
                    <div className='foot-email'>
                        <h2>sign up <span>FOR EMAIL UPDATES</span></h2>
                        <p>Get a Free eCookbook with our top 25 recipes.</p>
                        <form onSubmit={sendEmail}>
                                    <input type="text" placeholder='name' name="name" autoComplete='off'/>
                                    <input type="email" placeholder='email' name="email" autoComplete='off'/>
                                    <input type="submit" value="Send" />
                        </form>
                    </div>                    
                    <div className='brands'>
                        <p>OUR OTHER BRANDS</p>
                        <FontAwesomeIcon icon={faAmazon}/>
                        <FontAwesomeIcon icon={faGithub}/>
                        <FontAwesomeIcon icon={faReddit}/>
                        <FontAwesomeIcon icon={faApple}/>
                    </div>
                </div>
            </div>
            <div className='foot-2 blogcontainer'>
                        <FontAwesomeIcon icon={faTwitter}/>
                        <FontAwesomeIcon icon={faInstagram}/>
                        <FontAwesomeIcon icon={faPinterest}/>
                        <FontAwesomeIcon icon={faFacebook}/>
                        <div className='foot-2-cprg'>
                           <img src={FoodLogo} alt=""/>
                            <span>RUCHIR<br/> All Rights Reserved.An elite CafeMedia food publisher.</span>     
                        </div>                        
                        <p>Privacy Policy &nbsp;&nbsp;    Terms & services</p>
            </div>
    </div>    
       
  
   </>
  )
}
