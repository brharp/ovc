// Framework and plugin imports
import Layout from '../components/layout';
import React from 'react';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

// Custom component imports
import Hero from "../components/home/hero"
import ImproveLife from "../components/home/improvelife"
import MoreInfo from "../components/home/moreinfo"
import Events from "../components/events/events"
import News from "../components/news/news"
import QuickLinks from "../components/home/quicklinks"


// Index page component
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <ImproveLife />
    <MoreInfo />
    <News/>
    <Events/>
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

