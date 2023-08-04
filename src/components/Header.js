import FoodLogo from '../images/ruchir.png'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return(
                <>
            <header>
                <nav className="nav blogcontainer">
                    <img className="logo" src={FoodLogo} alt=""></img>
                    <div className='nav-items'>
                        <NavLink to="/">HOME</NavLink>
                        <NavLink to="/About">About</NavLink>
                        <NavLink to="/RecipePage">Recipes</NavLink>
                        <NavLink to="/StartHere">Start Here</NavLink>
                    </div>
                    
                </nav>
            </header>            
        </>
    )    
}