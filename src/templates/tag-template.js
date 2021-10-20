import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import RecipesList from '../components/RecipesList'
import SEO from '../components/SEO'

const TagTemplate = ({data, pageContext}) => {
    const recipes = data.allContentfulRecipe.nodes
    console.log(data)
    return (
        <Layout>
          <SEO title={pageContext.tag}/>
            <main className="page">
                <h2>{pageContext.tag}</h2>
                <div className="tag-recipes">
                    <RecipesList recipes={recipes}></RecipesList>
                </div>
            </main>
        </Layout>
    )
}

export const data = graphql`
query GetRecipeByTags($tag: String) {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {content: {tags: {eq: $tag}}}
    ) {
      nodes {
        cookTime
        id
        prepTime
        title
        image {
          gatsbyImageData
        }
      }
    }
  }  
`

export default TagTemplate
