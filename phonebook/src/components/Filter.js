import React from 'react';


const Filter = (filter) => {
    
    return (
      <div>
        filter shown with <input type="text" onKeyUp={filter.filter}/>      
      </div>
    )
  }

export default Filter