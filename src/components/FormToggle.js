import React from 'react'

const FormToggle = (props) => {
    let { on, toggle } = props
    return(
        <button onClick={toggle} className={`toggle ${on ? "on" : "off  "}`}>{on ? "Close" : "Create a new task" }</button>
    )
}

export default FormToggle