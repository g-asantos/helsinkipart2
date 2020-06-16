import React from 'react'


const Persons = (props) => {
    
    return (
        
            <div key={props.name}>{props.name}  {props.number}<button onClick={props.click}>delete</button></div>
    )
  }

export default Persons