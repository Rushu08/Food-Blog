import { useEffect,useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import indianspice from '../images/indianspice.jpg'

export default function Recipes() {
    const [popular,setPopular]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        getPopular();
    },[])
    
    const getPopular=async ()=>{
        const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_FOODBLOG}&number=3`)
        const data=await api.json();
        setPopular(data.recipes)
        console.log(data.recipes)
    }

    
    return(
        <>
        <div className="recipe-section">
            <div>
                <h3>THE LATEST AND GREATEST</h3>
                {
                    popular.map((recipe)=>{
                        return (
                            <div key={recipe.id} className="popular-section">
                                 <Link key={recipe.id}  to={'/RecipeDetails/'+ recipe.id}>
                                    <img src={recipe.image} alt={recipe.title}/>
                                    <div className="information">
                                        <h2>{recipe.title}</h2>
                                        <p>SOUCRE:-{recipe.sourceName}</p>
                                        <p>DURATION:-{recipe.readyInMinutes}minutes</p>                            
                                    </div>         
                                 </Link>                                               
                            </div>
                        )
                    })
                }
                <div className="btn">
                        <button className="more-post-btn" onClick={()=> navigate("/RecipePage") }>VIEW MORE POSTS</button>
                </div>
                
            </div>

            <div className="healthy-collection">
                <Link to={'/AllRecipes/healthy'}>
                    <div  className="healthy-indian">
                        <img src={indianspice} alt=""></img>                    
                        <p className="HI-title">20 HEALTHY <br/> MEALS</p>                
                    </div>
                </Link>
                

                <div className="recipe-collection">
                    <p>RECIPES COLLECTION</p>
                    <ol>
                       <Link to="/ShowRecipes/indian"><li>Indian</li></Link>
                       <Link to="/ShowRecipes/American"><li>American</li></Link>
                       <Link to="/ShowRecipes/Korean"><li>Korean</li></Link>
                       <Link to="/ShowRecipes/British"><li>British</li></Link>
                       <Link to="/ShowRecipes/Italian"><li>Italian </li></Link>
                       <Link to="/ShowRecipes/Thai"><li>Thai</li></Link>
                    </ol>
                </div>
            </div>
            
        </div>
        
        

        </>
    )
}