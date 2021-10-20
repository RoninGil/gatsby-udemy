import React from 'react'
import styled from 'styled-components'
import {StaticImage} from 'gatsby-plugin-image'
const Images = () => {
    return (
        <Wrapper>
            <article>
                {/* tambien se puede mandar un url */}
                <h1>Gatsby image: constrained / default</h1>
                <StaticImage src="../assets/images/recipes/recipe-1.jpeg" alt="food"
                placeholder="tracedSVG"
                layout="constrained"
                className="example-img"
                as="section"
                />
            </article>
            <article>
                {/* tambien se puede mandar un url */}
                <h1>Gatsby image: fixed</h1>
                <StaticImage src="../assets/images/recipes/recipe-2.jpg" alt="food"
                placeholder="blurred"
                layout="fixed"
                width={200}
                className="example-img"
                as="div"
                />
            </article>
            <article>
                {/* tambien se puede mandar un url */}
                <h1>Gatsby image: full width</h1>
                <StaticImage src="../assets/images/recipes/recipe-3.jpeg" alt="food"
                placeholder="dominantColor"
                layout="fullWidth"
                className="example-img"
                as="article"
                />
            </article>
            
            
        </Wrapper>
    )
}

const Wrapper = styled.section`
width: 70vw;
margin: 0 auto;
display: grid;
text-align: center;
gap: 2rem;
article{
    border: 2px solid red;
}
.example-img{
    border-radius: 1rem;
    height: 300px;
}
@media (min-width: 992px){
    grid-template-columns: 1fr 1fr 1fr;
    .example-img{
        height: 200px;
    }
}
`

export default Images
