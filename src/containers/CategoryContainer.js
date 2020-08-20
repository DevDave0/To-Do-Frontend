import React from 'react'
// import Category from '../components/Category'

const CategoryContainer = (props) => {
    let { selectedCategory, setSelectedCategory, categories } = props
    
    
    return (
        <div className="categories">
            <h4> Filter Categories</h4>
            {categories.map(category => <button className={category === selectedCategory ? 'selected' : undefined} onClick={() => setSelectedCategory(category)} key={category} >{category}</button>)}
        </div>
    )

}


export default CategoryContainer