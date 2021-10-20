import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import RecipesList from '../components/RecipesList'
import SEO from '../components/SEO'

const Contact = () => {
    const data = useStaticQuery(query)
    const recipes = data.allContentfulRecipe.nodes
    return (
        <div>
            <Layout>
              <SEO title="Contact"/>
                <main className="page">
                    <section className="contact-page">
                        <article className="contact-info">
                            <h3>Want To Get In Touch?</h3>
                            <p>Four dollar toast biodiesel plaid salvia actually pickled banjo bespoke mlkshk intelligentsia edison bulb synth.</p>
                            <p>Cardigan prism bicycle rights put a bird on it deep </p>
                            <p>Hashtag swag health goth air plant, raclette listicle fingerstache cold-pressed fanny pack bicycle rights cardigan poke.</p>
                        </article>
                        <article>
                            <form className="form contact-form"
                            action="https://formspree.io/f/mwkajogj"
                            method="POST">
                                <div className="form-row">
                                    <label htmlFor="name">your name</label>
                                    <input type="text" name="name" id="name"/>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="email">your email</label>
                                    <input type="text" name="email" id="email"/>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="message">message</label>
                                    <textarea name="message" id="message"></textarea>
                                </div>
                                <button type="submit" className="btn block">Submit</button>
                            </form>
                        </article>
                        
                    </section>
                    <section className="featured-recipes">
                        <h5>Look at this!!!</h5>
                        <RecipesList recipes={recipes}/>
                    </section>
                </main>
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

export default Contact
