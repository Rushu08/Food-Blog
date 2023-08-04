import Card from "./Card"
import Genre from "./Genre"
import Curry from '../images/curry.jpg'
import Cake from '../images/cake.jpg'
import Seafood from '../images/seafood.jpg'
import Tacos from '../images/tacos.jpg'
import Salad from '../images/salad.jpg'
import Soup from '../images/soup.jpg'
import Pizza from '../images/pizza.jpg'
import Burger from '../images/burger.jpg'
import InstantPot from '../images/instantpot.jpg'
import QuickEasy from '../images/quickandeasy.jpg'
import Pasta from '../images/pasta2.jpg'
import Slowcooker from '../images/slowcooker.jpg'
import Quinoa from '../images/quinoa.jpg'
import {  useNavigate } from "react-router-dom";

export default function Reccomendation (){
    let navigate=useNavigate();
    return(
        <>
            <div className="wrapper-1">
                <div className="card-body blogcontainer">
                    <Card img={Curry} title="curry" name="curry" />
                    <Card img={Cake} title="cake" name="cake" />
                    <Card img={Seafood} title="Fish & Seafood" name="Seafood" />
                    <Card img={Tacos} title="Tacos" name="Tacos" />
                </div>
                <div className="genre blogcontainer">
                    <Genre img={Soup} name ="Soups"/>
                    <Genre img={Salad} name ="Salads"/>
                    <Genre img={InstantPot} name ="Instant pot"/>
                    <Genre img={QuickEasy} name ="quick and easy"/>
                    <Genre img={Pasta} name ="pasta"/>
                    <Genre img={Slowcooker} name ="Slow cooker"/>
                    <Genre img={Pizza} name ="pizza"/>
                    <Genre img={Burger} name ="burger"/>
                    <Genre img={Quinoa} name ="quinoa"/>
                </div>
                <div className="btn">
                            <button className="more-post-btn" onClick={()=> navigate("/RecipePage") } >VIEW ALL RECIPES</button>
                </div>
            </div>          
        </>
    )
}