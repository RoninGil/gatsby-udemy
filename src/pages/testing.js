import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Gallery from '../examples/Gallery'

const Testing = () => {
    return (
        <Layout>
          <SEO title="Testing"/>
          <main className="page">
            <Gallery/>
          </main>
        </Layout>
    )
}


export default Testing
