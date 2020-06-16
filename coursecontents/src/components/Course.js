import React from 'react';
import Header from './Header'
import Content from './Content'
import Total from './Total'


const Course = (props) => {
    
    return (
        <div>
            {props.course.map(course =>
                <div key={course.id}>
                <Header course={course} />
                <Content course={course} />
                <Total course={course} />
                </div>)}
            




            
            
        </div>
    )
}



export default Course