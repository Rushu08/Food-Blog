import React from 'react'
import { Outlet,NavLink} from 'react-router-dom'

export default function Suggestions() {
  return (
   <>
   <h1 className='sg-title'>CHOOSE YOUR FAVOURITE</h1>
   <div className='wrapper3'>
        <nav className='suggestions blogcontainer'>
            <NavLink  to="/Wine">Wine</NavLink>
            <NavLink to="/Dessert">Dessert</NavLink>
            <NavLink to="/Vegan">Vegan</NavLink>
        </nav>
          <Outlet/> 
   </div>
    
        
   </>
  )
}
