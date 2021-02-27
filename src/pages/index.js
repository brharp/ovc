import Layout from '../components/layout';
import React from 'react';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<div className="container page-container">
			<h1>Gatsby UG Starter Theme</h1>
			<p>The University of Guelph, and everyone who studies here, explores here, teaches here and works here, is committed to one simple purpose: To Improve Life.</p>
			{data.allNodeArticle.edges.map(({ node }) => (
				<div key={node.id}>
					<h3>
						{node.title}{" "}
						<span>
							— {node.revision_timestamp}
						</span>
					</h3>
					<p>{node.body.processed}</p>
				</div>
			))}
		</div>
	</Layout>
)

export default IndexPage

export const query = graphql`
	query {
		allNodeArticle {
			edges {
				node {
					title
					id
					revision_timestamp
					body {
						processed
					}
				}
			}
		}
	}
`