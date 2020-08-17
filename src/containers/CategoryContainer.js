import React from 'react'
import Category from '../components/Category'

const CategoryContainer = (props) => {
    return (
        <div className="Categories">
            <h1> CategoryContainer</h1>
            {props.tasks.map(task => <Category key={task.id} task={task} />)}

        </div>
    )

}


export default CategoryContainer