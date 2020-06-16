import React from 'react'





const PersonForm = (props) => {
    
    return (
        <form onSubmit={props.addInfo}>
            <h2>add a new</h2>
            <div>
                name: <input value={props.valueName} onChange={props.nameChange} />
            </div>
            <div>
                number: <input value={props.valueNumber} onChange={props.numberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>

    )
}

export default PersonForm

