import React from 'react';
import Part from './Part'

const Content = ({ course }) => {
  
  let courseinfo = [course]
  
    return (
      <div>
        {courseinfo.map(course => 
        
         <Part key={course.id} part={course.parts} /> )}
        
      </div>
    )
  }

export default Content