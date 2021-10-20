import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

const Gallery = () => {
    const images = useStaticQuery(data)
    
    return (
        <Wrapper>
            {images.allFile.nodes.map((image, index) => {
              const pathImage = getImage(image) //se le pasa la ruta hasta el objeto que contiene childImageSharp... en este caso hasta cada uno de los nodes
                return <article key={index} className="item">
                    <p>{image.name}</p>
                    <GatsbyImage className="gallery-img" image={pathImage} alt={image.name}/>
                </article>
            })}
        </Wrapper>
    )
}

const data = graphql`
query MyQuery {
    allFile(filter: {sourceInstanceName: {eq: "images"}, extension: {ne: "svg"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
        name
      }
    }
  }
  
`
const Wrapper = styled.section`
display: flex;
flex-wrap: wrap;
.item{
    margin-right: 1rem;
}
.gallery-img{
    border-radius: 1rem;
}
`

export default Gallery
