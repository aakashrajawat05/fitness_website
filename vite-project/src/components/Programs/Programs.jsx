import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png';

const Programs = () => {
  return (
    <div id='programs'>
        <div className="Programs" >
            <div className="programs-header">
                <span className='shape-text'>Explore our</span>
                <span>Programs</span>
                <span className='shape-text'>to shape you</span>
            </div>
          <div className="program-categories">
            {
              programsData.map((program,index)=>(
                <div className="category" key={program.id || index}>
                  {program.image}
                  <span>{program.heading}</span>
                  <span>{program.details}</span>
                  <div className="join-now"><span>Join Now </span> <img src={RightArrow} alt="" /></div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Programs