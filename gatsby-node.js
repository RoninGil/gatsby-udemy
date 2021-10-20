const path = require('path')

exports.createPages = async({graphql, actions})  => {
    const {createPage} = actions //createPage es la funcion que nos permite crear las paginas dinamicamente

    const result = await graphql(`
    query GetRecipesTags {
        allContentfulRecipe {
          nodes {
            content {
              tags
            }
          }
        }
      }
      
    `)
    result.data.allContentfulRecipe.nodes.forEach( recipe => {
        recipe.content.tags.forEach(tag => {
          const slug = tag.toLowerCase().replace(' ', '-')
            createPage({
                path:`/tags/${slug}`, //el path es generado dinamicamente segun los tags que se tengan y se obtengan desde graphql
                component: path.resolve(`src/templates/tag-template.js`), //el component que se va a renderizar es el tag-template
                context:{
                    tag: slug
                }
            })
        })
    })
}