import React from 'react'

const Category = (props) => {
    return (
        <div className="category-item">
            <h6> Category</h6>
            <div>{props.task.category}</div>
        </div>
    )

}


export default Category