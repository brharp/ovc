// Framework and plugin imports
import Layout from '../components/layout';
import React from 'react';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { getImage } from "gatsby-plugin-image";
import styled from "styled-components";

// Custom component imports
import Feature from "../components/feature";
import Article from "../components/article";
import Rule from "../components/rule";
import Events from "../components/events"
import News from "../components/news"

// Data imports
import IndexData from "../../content/index.yml";
import FeatureData from "../../content/features.yml";

// Style components
const FeatureGrid = styled.div`
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 3fr 5fr 3fr;
    grid-template-rows: repeat(2, 1fr);
    opacity: 0.9;
  }
`

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
    <div className="feature-wrapper" style={{position: "relative", zIndex: "1", overflow: "hidden"}}>
      <StaticImage src="../images/people.jpg" alt="" layout="fullWidth"
                   style={{position:"absolute",width:"100%",height:"100%",zIndex:"-1"}}/>
      <FeatureGrid>
        {
          FeatureData.map((data,index) => {
            return <Feature index={index} title={data.title} subtitle={data.subtitle}
                            description={data.description} />
          })
        }
      </FeatureGrid>
    </div>
    <div className="news container" style={{padding: "24px"}}>
      <h1>Featured news</h1>
      <Rule width="25%"/>
      <News/>
    </div>
    <div style={{position: "relative", zIndex: "1", overflow: "hidden"}}>
      <StaticImage src="../images/university-centre.jpg" alt="" layout="fullWidth"
                   style={{position:"absolute",width:"100%",height:"100%",zIndex:"-1"}}/>
      <div style={{background: "rgba(0, 0, 0, .5)"}}>
        <div className="container">
          <Events/>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        {
          IndexData.footer.sections.map((section, index) => {
            return <div key={index} className="col-md-6">
              <h2>{section.heading}</h2>
                {
                  section.links.map((link, index) => {
                    return <li key={index}><a href={link.url}>{link.title}</a></li>
                  })
                }
            </div>
          })
        }
      </div>
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

