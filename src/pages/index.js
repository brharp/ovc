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
import Footer from "../components/home/footer"


// Index page component
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ImproveLife />
    <MoreInfo />
    <News/>
    <Events/>
    <Footer/>
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

