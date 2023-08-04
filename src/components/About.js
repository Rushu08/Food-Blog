import React from 'react'
import chef from '../images/pexels-cottonbro-3338672.jpg'

export default function About() {
  return (
   <>
      <div className='about-me blogcontainer'>
          <img src={chef} alt="" />
          <div className='am-content'>
              <h1>About Me</h1>
              <h2>HI, MY NAME IS <span>HRISHABH</span></h2>
              <p>And Ruchir is my little corner of the internet!</p>
              <p>I'm the voice, author, and creator behind Ruchir. What started as a casual hobby over 10 years ago in 2010 while I was working as a post graduate student has now grown into a full-blown business (!!) that reaches millions of people with fun recipes each month, with content that has been featured on The Zee TV, Google, HBO, Brit + Co, Discovery, Huffington Post, The Everymom, PureWow, and more.</p>
              <p>I live in Virar, Mumbai with my Family and our dog Sage. My favorite things in life are a big plate of pad Thai, sunny days, and going to the dog park.</p>

          </div>
      </div>
   </>
  )
}
