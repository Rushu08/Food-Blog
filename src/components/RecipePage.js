import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrophy} from '@fortawesome/free-solid-svg-icons';

export default function RecipePage() {
  const [items,setItems]=useState([]);

  useEffect(()=>{
      getPopular();
  },[])
  
  const getPopular=async ()=>{
      const api=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_FOODBLOG}&sort=popularity&number=50`)
      const data=await api.json();
      setItems(data.results)
      console.log(data.results)
  }

  return (
    <>
    <h1 className='grid-title'><FontAwesomeIcon icon={faTrophy} /> TOP RECIPES</h1>
    <div className='Grid blogcontainer'>
      {
        items.map((item)=>{
          return(
            <Link key={item.id}  to={'/RecipeDetails/'+ item.id}>
                <div key={item.id} className='grid-card'>
                  <img src={item.image} alt=""/>
                  <h4>{item.title}</h4>
                </div>
            </Link>
           
          )
        })
      }
    </div>
    </>
  )
}
