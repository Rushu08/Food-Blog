import foodcollage from '../images/foodcollage.jpg'
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

export default function Cookbook() {
  return (
   <>
        <div className='wrapper-2'>
            <div className="cookbook blogcontainer">
                <div className='cb-show'>
                    <img className="cb-img"src={foodcollage} alt=""></img>
                    <p className="cb-title">TOP 25 <br/> RECIPES <br/> COOKBOOK</p>
                </div>
                <div className="cb-content">
                    <h2>get it now</h2>
                    <h1>Ruchir Cookbook</h1>
                    <p>The eBook includes our most popular 25 recipes in a beautiful, easy to download format. Enter your email and we'll send it right over!</p>
                    <form onSubmit={sendEmail}>
                            <input type="text" placeholder='name' name="name" autoComplete='off'/>
                            <input type="email" placeholder='email' name="email" autoComplete='off'/>
                            <input type="submit" value="Send" />
                    </form>
                        
                </div>
            </div>
        </div>
        
        
   </>
  )
}
