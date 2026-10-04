import React from 'react'
import imag from '../assets/mernime.jpg'
import './project.css'
import { FaGithub } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";



const Project = ({Project}) => {
    return (
        <div className='container'>
            <h2 className='HeadingSec'>


                My Projects
            </h2>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {
                    Project.map((pro, i) => (

                    
                
                    <div className="card" key={pro.id}>
                        <img src={imag} alt={pro.title} />
                        <h4>
                           {pro.title}<br/>
                           <i>{pro.category}</i>
                        </h4>
                        <p>{pro.description}</p>
                        

                        <div className="">
                           <a href={pro.github}className="icons" title='github link' target='_blank'><FaGithub /></a>
                           <a href={pro.liveDemo}className="icons" title='Live demo' target='_blank'><FaLocationArrow /></a>
                           <span>{pro.role}</span>

                        </div>
                        <div className="features">{pro.features.map((e, i) => (<span key={`${pro.id}-${i}`}>  {e},&nbsp;&nbsp; </span>))}</div>
                    </div>
                  ))
                }
            </div>
        </div>
    )
}

export default Project
