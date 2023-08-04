import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

export default function RecipeDetails() {
    const [recipeDet,setRecipeDet]=useState([]);
    const [activeTab,setActiveTab]=useState("instructions")
    const params = useParams();

    const getRecipeDet = async()=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_FOODBLOG}`)
        const recipe = await data.json();
        setRecipeDet(recipe)
        console.log(recipe)
    };

   useEffect(()=>{
    getRecipeDet();
   },[params.name]);

  return (
    <>
          <div className='recipe-details blogcontainer'>
          <div className='rd-img'>
            <h1>{recipeDet.title}</h1>
            <img src={recipeDet.image} alt=""/>
          </div>
          <div className='rd-content'>
            <button className={activeTab === 'instructions' ? 'active' :''} onClick={()=> setActiveTab("instructions")}>INSTRUCTIONS</button>
            <button className={activeTab === 'ingredients' ? 'active' :''}  onClick={()=> setActiveTab("ingredients")}>INGREDIENTS</button>
          
              {
                activeTab === 'instructions'  && 
                (
                  <div>
                      <h3 dangerouslySetInnerHTML={{__html:recipeDet.summary}}></h3>
                      <h3 dangerouslySetInnerHTML={{__html:recipeDet.instructions}}></h3>
                </div>
                )}
                {
                  activeTab === 'ingredients'  && 
                  (
                    <ul>
                    {
                      recipeDet.extendedIngredients.map((ingredient)=>(
                        <li key={ingredient.id}>{ingredient.original}</li>)
                      
                      )
                    }
                  </ul>
                  ) }       
                
          </div>
      </div>
      
    </>
  )
}
