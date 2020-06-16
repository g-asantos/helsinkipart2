import React from 'react';


const Total = ({ course }) => {
    let exercises = []
    console.log(course)
    
    course.parts.forEach(course => {
      exercises.push(course.exercises)
    })
    
    
    const sum = exercises.reduce((a,b,c) => {
      return (a + b + c)})
    
    return(
      <p>Number of exercises {sum}</p>
    ) 
  }

export default Total