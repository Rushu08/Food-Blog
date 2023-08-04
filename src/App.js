import Header from "./components/Header"
import Home from "./components/Home"
import About  from "./components/About"
import RecipePage  from "./components/RecipePage"
import StartHere from "./components/StartHerePage"
import Footer from "./components/Footer"
import {Routes,Route} from "react-router-dom"
import Hero from "./components/Hero"
import RecipeDetails from "./components/RecipeDetails"
import ShowRecipes from "./components/ShowRecipes"
import AllRecipes from "./components/AllRecipes"

export default function App(){
return(
    <>
            <Header/>   
            <Routes>
                    <Route path="/" element={<Home/> }>
                        <Route index element={<Hero/> }/>
                        <Route path="/:type" element={<Hero/> }/>
                        <Route path="/:type" element={<Hero/> }/>
                        <Route path="/:type" element={<Hero/> }/>
                    </Route>
                    <Route path="/About" element={<About/> }/>
                    <Route path="/RecipePage" element={<RecipePage/> }/>
                    <Route path="/StartHere" element={<StartHere/> }/>
                    <Route path="/RecipeDetails/:name" element={<RecipeDetails/>}/>
                    <Route path="/ShowRecipes/:cusine" element={<ShowRecipes/>}/>
                    <Route path="/AllRecipes/:itemname" element={<AllRecipes/> }/>                                      
            </Routes>             
           <Footer/>
       
    </>
)
}