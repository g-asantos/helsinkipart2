import React from 'react';

const Part = (props) => {
    
    return (
        <div>
        {props.part.map(part =>

                <p key={part.id}>{part.name} {part.exercises}</p>
        
        )}
        </div>
    )
}

export default Part