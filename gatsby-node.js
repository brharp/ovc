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

//
// Get current date string (for filtering events, etc.)
//
function getCurrentDateString() {
  const date = new Date()
  const timezoneOffset = date.getTimezoneOffset()
  const now = (new Date(date.getTime() - timezoneOffset * 60 * 1000)
                  .toISOString().substring(0, 19))
            + (timezoneOffset > 0 ? "-" : "+")
            + (timezoneOffset / 60 < 10 ? "0" : "")
            + (timezoneOffset / 60)
            + ":"
            + (timezoneOffset % 60 < 10 ? "0" : "")
            + (timezoneOffset % 60)
  return now
}

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions
  const now = getCurrentDateString()

  //
  // Create home page
  //
  createPage({
    path: "/",
    component: path.resolve("./src/templates/index.js"),
    context: {
      now: now
    },
  })
  
  //
  // Create article pages
  //
  const articleQueryResult = await graphql(`
    query {
      allNodeArticle {
        edges { node { fields { slug } } }
      }
    }
  `)
  articleQueryResult.data.allNodeArticle.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/article.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })


  //
  // Create news feed pages
  //
  const articles = articleQueryResult.data.allNodeArticle.edges
  const articlesPerPage = 5
  const numArticlePages = Math.ceil(articles.length / articlesPerPage)
  Array.from({ length: numArticlePages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/newsfeed" : `/newsfeed/${i + 1}`,
      component: path.resolve("./src/templates/newsfeed.js"),
      context: {
        limit: articlesPerPage,
        skip: i * articlesPerPage,
        numPages: numArticlePages,
        currentPage: i + 1,
      },
    })
  })    


  //
  // Create event pages
  //
  const eventsQueryResult = await graphql(`
    query { allNodeEvent( filter: {field_date: {end_value: {gte: "${now}"}}} ) {
      edges { node { id fields { slug } } } } 
    }
  `)
  eventsQueryResult.data.allNodeEvent.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/event.js`),
      context: {
        id: node.id,
        slug: node.fields.slug,
      },
    })
  })

  //
  // Create events listing pages
  //
  const events = eventsQueryResult.data.allNodeEvent.edges
  const eventsPerPage = 2
  const numEventPages = Math.ceil(events.length / eventsPerPage)
  Array.from({ length: numEventPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/events/" : `/events/${i + 1}`,
      component: path.resolve("./src/templates/events.js"),
      context: {
        limit: eventsPerPage,
        skip: i * eventsPerPage,
        numPages: numEventPages,
        currentPage: i + 1,
        now: now,
      },
    })
  })    


  //
  // Create portal pages (deprecated)
  //
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


  //
  // Create basic pages
  //
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


  //
  // Create tag taxonomy pages
  //
  const tagQueryResult = await graphql(`
    query { allTaxonomyTermTags { edges { node { drupal_id } } } }
  `)
  tagQueryResult.data.allTaxonomyTermTags.edges.forEach(({node}) => {
    createPage({
      path: `/news/${node.drupal_id}`,
      component: path.resolve(`./src/templates/tag.js`),
      context: {
        tag: node.drupal_id
      }
    })
  })


  //
  // Create news category pages
  //
  const newsCategoryQueryResult = await graphql(`
    query { allTaxonomyTermNewsCategory { edges { node { drupal_id } } } }
  `)
  newsCategoryQueryResult.data.allTaxonomyTermNewsCategory.edges.forEach(({node}) => {
    createPage({
      path: `/news/${node.drupal_id}`,
      component: path.resolve(`./src/templates/category.js`),
      context: {
        tag: node.drupal_id
      }
    })
  })
}

