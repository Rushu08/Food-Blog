import chef1 from '../images/pexels-cottonbro-3298641.jpg'
import chef2 from '../images/pexels-cottonbro-3298638.jpg'

export default function Profile() {
  return (
    <>
        <div className='profile blogcontainer'>
            <div className="profile-content">
                <h2>Hi I'm Hrishabh</h2>
                <h3>nice to meet you</h3>
                <p>I’m a post graduate student, now full time blogger. My family and I live in Virar. Favorite things include my camera, lake days, and dark chocolate.</p>
                <button className='profile-btn'>LEARN MORE</button>
            </div>     
            <img src={chef2} className="profile-img" alt=""></img>
            <img src={chef1} className="profile-img" alt=""></img>
        </div>    
    </>
  )
}
