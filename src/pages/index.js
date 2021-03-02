import Layout from '../components/layout';
import React from 'react';
import SEO from '../components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Feature from "../components/feature";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="banner" style={{position: "relative", zIndex: "1", overflow: "hidden"}}>
      <StaticImage src="../images/portico--banner.jpg" alt="" layout="fullWidth"
		   style={{position:"absolute",width:"100%",height:"100%",zIndex:"-1"}}/>
        <div className="container">
          <div style={{
               backgroundColor: "rgba(255,255,255,0.8)",
	       margin: "50px auto 0",
               padding: "25px 100px 100px",
	       width: "75%"
	       }}>
            <h1>@OVC</h1>
            <p>
	      Canada's oldest veterinary college.
            </p>
          </div>
	</div>
    </div>
    <div className="feature-container"
	 style={{
	 display:"grid",
	 gridTemplateColumns:"repeat(3,1fr)",
	 gridTemplateRows:"repeat(2, 1fr)"}}>
      <Feature title="Explore" index="0"
	       subtitle="See what we're all about"
	       description="Sign up for insider advice that can help you now and in the future."
	       />
      <Feature title="Learn" index="1"
	       subtitle="Study at a world-leading veterinary college"
	       description="Sign up for insider advice that can help you now and in the future."
	       />
      <Feature title="Work" index="2"
	       subtitle="Be part of our team"
	       description="Sign up for insider advice that can help you now and in the future."
	       />
      <Feature title="Collaborate" index="3"
	       subtitle="Work with our leading researchers"
	       description="Sign up for insider advice that can help you now and in the future."
	       />
      <Feature title="Get Care" index="4"
	       subtitle="Seek the best care at one of our hospitals"
	       description="Sign up for insider advice that can help you now and in the future."
	       />
      <Feature title="Give" index="5"
	       subtitle="Donate to our causes"
	       description="Sign up for insider advice that can help you now and in the future."
	       />
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

// -*- create-lockfiles: nil; -*-
