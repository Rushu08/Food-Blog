import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Hero() {
    const [Urltype,setUrlType]=useState([]);
    let params = useParams();

    const getType =async(name)=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_FOODBLOG}&query=${name}&number=4`)
        const type = await data.json();
        setUrlType(type.results)
    }

    useEffect(()=>{
        getType(params.type);
    },[params.type])

  return (
    <>
        <div className='hero-grid'>
            {
                Urltype.map((item)=>{
                    return(
                        <Link key={item.id}  to={'/RecipeDetails/'+ item.id}>
                            <div className='hero-card'>
                                <img  src={item.image} alt=""/>
                                <p>{item.title}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    </>

  )
}
