// Framework and plugin imports
import Layout from '../components/layout';
import React from 'react';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

// Custom component imports
import Hero from "../components/hero";
import MoreInfo from "../components/moreinfo";
import Events from "../components/events"
import News from "../components/news"
import QuickLinks from "../components/quicklinks"


// Index page component
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <MoreInfo />
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
        slogan
      }
    }
  }
`

