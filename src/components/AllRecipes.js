import {useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

export default function AllRecipes() {

  const params = useParams();
  const [recipes,setRecipes]=useState([]);

  useEffect(()=>{
    getPopular();
},[params.itemname])

const getPopular=async ()=>{
    const api=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_FOODBLOG}&query=${params.itemname}&number=20`)
    const data=await api.json();
    setRecipes(data.results);
}
  return (
   <>
    <div  className='Rtitle'>
    <FontAwesomeIcon  icon={faStar} />
      <h1>{params.itemname} RECIPES</h1>
      <FontAwesomeIcon  icon={faStar} />
    </div>
    <div className='Grid blogcontainer'>
      {
        recipes.map((recipe)=>{
          return(
            <Link key={recipe.id}  to={'/RecipeDetails/'+ recipe.id}>
                <div key={recipe.id} className='grid-card'>
                  <img src={recipe.image} alt=""/>
                  <h4>{recipe.title}</h4>
                </div>
            </Link>           
          )
        })
      }
    </div>
   </>
  )
}
