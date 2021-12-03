import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function NewsCategoryBlock () {
  const data = useStaticQuery(graphql`
    query {
      allTaxonomyTermNewsCategory {
        edges {
          node {
            drupal_id
            drupal_internal__tid
            name
          }
        }
      }
    }
  `)
  return <div className="mb-4">
  { data.allTaxonomyTermNewsCategory.edges.map(({node}, index) => (
    <Link to={`/news/category/${node.drupal_internal__tid}`} className="btn btn-sm btn-secondary mr-1 mb-1" key={index}
      >{node.name}</Link>
  ))} </div>
}

