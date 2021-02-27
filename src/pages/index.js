import Layout from '../components/layout';
import React from 'react';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
        <Layout>
			<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
			<div className="container page-container">
				<h1>Gatsby UG Starter Theme</h1>
				<p>The University of Guelph, and everyone who studies here, explores here, teaches here and works here, is committed to one simple purpose: To Improve Life.</p>
			</div>
        </Layout>
	)

export default IndexPage

