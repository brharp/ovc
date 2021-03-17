const fs = require("fs")
const yaml = require("js-yaml")
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `node__article`) {
	const slug = node.path.alias
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
}
