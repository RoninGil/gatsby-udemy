import React from 'react'
import AllRecipes from '../components/AllRecipes'
import Layout from '../components/Layout'
import RecipesList from '../components/RecipesList'
import SEO from '../components/SEO'
const Recipes = () => {
    return (
        <div>
            <Layout>
            <SEO title="Recipes"/>
                <main className="page">
                    <AllRecipes/>
                </main>
            </Layout>
            
        </div>
    )
}

export default Recipes
