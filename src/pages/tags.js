import { graphql, useStaticQuery, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import setupTags from '../utils/setupTags'
const Tags = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulRecipe {
          nodes {
            content {
              tags
            }
          }
        }
      }
      
    `)
    const tagsArray = data.allContentfulRecipe.nodes
    const newTags = setupTags(tagsArray)
    console.log(newTags)
    return (
        <div>
            <Layout>
            <SEO title="Tags"/>
                <main className="page">
                    <section className="tags-page">
                        {newTags.map((tag, index) => {
                            const [text, value] = tag
                            return <Link to={`/tags/${text}`} key={index} className="tag">
                                <h5>{text}</h5>
                                <p>{value} recipe</p>
                            </Link>
                        })}
                    </section>
                </main>
            </Layout>
            
        </div>
    )
}

export default Tags
