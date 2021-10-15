import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function NewsCategoryBlock () {
  const data = useStaticQuery(graphql`
    query {
      allTaxonomyTermNewsCategory {
        edges {
          node {
            drupal_id
            name
          }
        }
      }
    }
  `)
  return data.allTaxonomyTermNewsCategory.edges.map(({node}, index) => (
    <Link to={`/news/${node.drupal_id}`} className="btn btn-sm btn-secondary mr-1 mb-1" key={index}
      >{node.name}</Link>
  ))
}

