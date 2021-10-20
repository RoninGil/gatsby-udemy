import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import {BsClockHistory, BsClock, BsPeople} from 'react-icons/bs'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const RecipeTemplate = ({data}) => {
    const {title, cooktime, content, description, prepTime, servings, image} = data.contentfulRecipe
    console.log(image)
    const pathToImage = getImage(image)
    const {tags, ingredients, instructions, tools} = content
    return (
        <Layout>
            <SEO title={title} description={description.description}/>
            <main className="page">
                <div className="recipe-page">
                    {/* hero */ }
                    <section className="recipe-hero">
                        <GatsbyImage image={pathToImage} alt={title} class="about-img"/>
                        <article className="recipe-info">
                            <h2>{title}</h2>
                            <p>{description.description}</p>
                            <div className="recipe-icons">
                                <article>
                                    <BsClock/>
                                    <h5>Prep Time</h5>
                                    <p>{prepTime}</p>
                                </article>
                                <article>
                                    <BsClockHistory/>
                                    <h5>Cook Time</h5>
                                    <p>{cooktime}</p>
                                </article>
                                <article>
                                    <BsPeople/>
                                    <h5>Servings</h5>
                                    <p>{servings}</p>
                                </article>
                            </div>
                            {/* tags */}
                            <p className="recipe-tags">
                                Tags: {tags.map( (tag, index) => {
                                    return <Link to={`/${tag}`} key={index}>
                                        {tag}
                                    </Link>
                                })}

                            </p>
                        </article>
                    </section>
                    {/* rest of the content */}
                    <section className="recipe-content">
                        <article>
                            <h4> Instructions </h4>
                            {instructions.map( (item, index) => {
                                return <div key={index} className="single-instruction">
                                    <header>
                                        <p>Step {index+1}</p>
                                        <div></div>
                                    </header>
                                    <p>{item}</p>
                                </div>
                            })}
                        </article>
                        <article className="second-columns">
                            <div>
                                <h4>ingredients</h4>
                                {ingredients.map((item, index) => {
                                    return <p key={index} className="single-ingredient" >
                                        {item}
                                    </p>
                                })}
                            </div>
                            <div>
                                <h4>tools</h4>
                                {tools.map((item, index) => {
                                    return <p key={index} className="single-tool" >
                                        {item}
                                    </p>
                                })}
                            </div>
                        </article>
                    </section>
                </div>
            </main>
        </Layout>
    )
}

export const data = graphql`
query getSingleRecipe($title: String) {
    contentfulRecipe(title: {eq: $title}) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
      
    `

export default RecipeTemplate
