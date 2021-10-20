import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const FetchData = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        info:siteMetadata {
          title
          author
          description
          person {
            name
            age
          }
          simpleData
          complexData {
            desc
            date
            id
          }
        }
      }
    }
  `)
  return <div>
      <p>AUTHOR: {data.site.info.author}</p>
      <p>DESCRIPTION: {data.site.info.description}</p>
      <p>TITLE: {data.site.info.title}</p>
      <p>SIMPLE DATA:</p> <ul>
          {data.site.info.simpleData.map(value => {
          return <li>{value}</li>
      })}
      </ul>
      <p>COMPLEX DATA:</p> <ul>
          {data.site.info.complexData.map(({desc, date, id}, index) => {
            return <>
            <p key={index}> Item {id}: {desc} </p>
            <p> created on: {date}</p>
            </>
          })}
      </ul>
      </div>
}

export default FetchData
