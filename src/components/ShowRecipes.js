import {useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

export default function ShowRecipes() {
   const params = useParams();
   const [cusines,setCusines]=useState([]);

   useEffect(()=>{
    getPopular();
},[])

const getPopular=async ()=>{
    const api=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_FOODBLOG}&cuisine=${params.cusine}&number=20`)
    const data=await api.json();
    setCusines(data.results);
}

  return (
    <>
    <div  className='Rtitle'>
    <FontAwesomeIcon  icon={faStar} />
      <h1>{params.cusine} RECIPES</h1>
      <FontAwesomeIcon  icon={faStar} />
    </div>
        <div className='Grid blogcontainer'>
      {
        cusines.map((cusine)=>{
          return(
            <Link key={cusine.id}  to={'/RecipeDetails/'+ cusine.id}>
                <div key={cusine.id} className='grid-card'>
                  <img src={cusine.image} alt=""/>
                  <h4>{cusine.title}</h4>
                </div>
            </Link>
           
          )
        })
      }
    </div>
    </>  
    )
}
