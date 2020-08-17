import React from 'react'
import Category from '../components/Category'

const CategoryContainer = (props) => {
    let { selectedCategory, setSelectedCategory, categories } = props
    
    
    return (
        <div className="Categories">
            <h3> CategoryContainer</h3>
            {categories.map(category => <button className={category === selectedCategory ? 'selected' : undefined} onClick={() => setSelectedCategory(category)} key={category} >{category}</button>)}
        </div>
    )

}


export default CategoryContainer