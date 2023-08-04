import { Link } from "react-router-dom";


export default function Card(props){
    return (
        <>
            <Link to={'/AllRecipes/' + props.name}>
                <div className = 'card'>
                    <div className = "image">
                        <img src ={props.img} alt=""></img>
                    </div>
                    <div className = "content">
                        <h3>{props.title}</h3>
                    </div>
                </div> 
            </Link>        
        </>
    )
}