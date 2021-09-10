// Framework and plugin imports
import Layout from '../components/layout';
import React from 'react';
import Seo from '../components/seo';
import { graphql } from 'gatsby';

// Custom component imports
import Hero from "../components/home/hero"
import ImproveLife from "../components/home/improvelife"
import MoreInfo from "../components/home/moreinfo"
import Events from "../components/views/events"
import News from "../components/news/news"
import Footer from "../components/home/footer"


// Index page component
const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <ImproveLife />
    <MoreInfo />
    <News/>
    <Events {...data} />
    <Footer/>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query($now: Date!) {
    site {
      siteMetadata {
        title
        slogan
      }
    }
    allNodeEvent(
      limit: 4, 
      sort: {fields: field_date___value, order: ASC},
      filter: {field_date: {end_value: {gte: $now}}}
    ) {
      edges {
        node {
          field_date {
            value
            month: value(formatString: "MMM")
            date: value(formatString: "D")
          }
          title
        }
      }
    }
  }
`

