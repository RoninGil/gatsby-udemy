import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import RecipesList from './RecipesList'
import TagsList from './TagsList'

const query = graphql`
query {
    allContentfulRecipe{
      nodes {
        cookTime
        createdAt(fromNow: true)
        id
        prepTime
        servings
        featured
        title
        updatedAt(fromNow: true)
        spaceId
        content {
          tags
        }
        description {
          description
        }
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`

const AllRecipes = () => {

    const data = useStaticQuery(query)
    const recipes = data.allContentfulRecipe.nodes
    console.log(recipes)
    return (
        <div className="recipes-container">
            <TagsList recipes={recipes}/>
            <RecipesList recipes={recipes}/>
        </div>
    )
}

export default AllRecipes
