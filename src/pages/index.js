import Layout from '../components/layout';
import React from 'react';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<div className="container page-container">
			<h1>{data.site.siteMetadata.title}</h1>
		</div>
	</Layout>
)

export default IndexPage

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`