const fs = require('fs')
const yaml = require('js-yaml')
const path = require('path')
const slugify = require('slugify')

function isDrupalNode(node) {
  return node.internal.owner === `gatsby-source-drupal` &&
         node.internal.type.substring(0, 6) === `node__`
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (isDrupalNode(node)) {
      const slug = node.path.alias || '/node/' + node.drupal_internal__nid
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create article pages
  const result = await graphql(`
    query {
      allNodeArticle {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
  }`)
  result.data.allNodeArticle.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/article.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  // Create portal pages
  const portals = await graphql(`
    query {
      allPortalsYaml {
        edges {
          node {
            id
            path
          }
        }
      }
    }
  `)
  portals.data.allPortalsYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.path,
      component: path.resolve(`./src/templates/portal.js`),
      context: {
        id: node.id,
      },
    })
  })


  // Create basic pages
  const pageQueryResult = await graphql(`
    query { allNodePage { edges { node { fields { slug } } } } }
  `)
  pageQueryResult.data.allNodePage.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

