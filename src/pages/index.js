// Framework and plugin imports
import Layout from '../components/layout';
import React from 'react';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

// Custom component imports
import Features from "../components/features";
import Events from "../components/events"
import News from "../components/news"
import QuickLinks from "../components/quicklinks"


// Index page component
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
             width: "75%"}}>
          <h1>@OVC</h1>
          <p>
            Canada's oldest veterinary college.
          </p>
        </div>
      </div>
    </div>
    <Features />
    <News/>
    <div style={{position: "relative", zIndex: "1", overflow: "hidden"}}>
      <StaticImage src="../images/university-centre.jpg" alt="" layout="fullWidth"
                   style={{position:"absolute",width:"100%",height:"100%",zIndex:"-1"}}/>
      <div style={{background: "rgba(0, 0, 0, .5)"}}>
        <div className="container">
          <Events/>
        </div>
      </div>
    </div>
    <QuickLinks/>
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

