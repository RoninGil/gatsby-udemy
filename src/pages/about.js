import React from 'react'
import Layout from '../components/Layout'
import {StaticImage} from 'gatsby-plugin-image'
import { graphql, Link, useStaticQuery } from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from '../components/SEO'

const About = () => {
    const data = useStaticQuery(query)
    const recipes = data.allContentfulRecipe.nodes
    return (
        <div>
            <Layout>
              <SEO title="About"/>
                <main className="page">
                    <section className="about-page">
                        <article>
                            <h2>
                            I'm baby coloring book poke taxidermy
                            </h2>
                            <p>
                            Taxidermy forage glossier letterpress heirloom before they sold out you probably haven't heard of them banh mi biodiesel chia.
                            </p>
                            <p>
                            Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.
                            </p>
                            <Link to="/contact" className="btn">Contact</Link>
                        </article>
                        <StaticImage src="../assets/images/about.jpeg" alt="Person Pouring Salt in Bowl"
                        className="about-img"
                        placeholder="blurred"
                        />
                    </section>
                    <section className="featured-recipes">
                        <h5>Look at this!!!</h5>
                        <RecipesList recipes={recipes}/>
                    </section>
                </main>
                <h1>about page</h1>
            </Layout>
            
        </div>
    )
}

const query = graphql`
query {
    allContentfulRecipe(
      filter: {featured: {eq: true}}
      sort: {fields: title, order: ASC}
    ) {
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
          gatsbyImageData(width: 200, placeholder: TRACED_SVG, layout: FIXED, height: 200)
        }
      }
    }
  }
  
`

export default About
