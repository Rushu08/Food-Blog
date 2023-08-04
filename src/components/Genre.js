import { Link } from "react-router-dom";


export default function Genre(props){
    return(
        <>
        <Link to={'/AllRecipes/'+ props.name}>
                <div className="genre-item">
                        <div className= "circle">
                            <img src={props.img} alt=""/>
                        </div>
                        <span>{props.name}</span>
                    </div>
        </Link>
            
            
        </>
    )
}