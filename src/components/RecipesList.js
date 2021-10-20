import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

const RecipesList = ({recipes=[]}) => {
    return (
        <div className="recipes-list">
            {recipes.map(recipe => {
                const {id, title, image, prepTime, cookTime} = recipe
                const pathImage = getImage(image)
                const slug = title.replace(' ', '-').toLowerCase()
                return <Link to={`/${slug}`} key={id} className="recipe">
                    <GatsbyImage image = {pathImage} className="recipe-img" alt={title}/>
                    <h5>{title}</h5>
                    <p>Prep: {prepTime}min | Cook: {cookTime}min</p>
                </Link>
            })}
        </div>
    )
}

export default RecipesList
