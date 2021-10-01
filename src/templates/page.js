import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import Banner from "../components/shared/banner"

const GeneralText = ({processed}) => (
  <div dangerouslySetInnerHTML={{__html: processed}}></div>
)

const Widget = ({widget}) => {
  switch (widget.internal.type) {
  case "paragraph__general_text":
    return <GeneralText processed={widget.field_general_text.processed} />
  default:
    return <></>
  }
}

const Page = ({id, pageTitle, siteTitle, image, widgets, updated, source}) => (
  <Layout>
    <Helmet>
      <title>{pageTitle} | {siteTitle}</title>
    </Helmet>
    <Banner id={`banner__${id}`}>
      <GatsbyImage image={getImage(image)} className="cover-img"
                   alt={pageTitle} style={{height: "600px"}} />
      <Banner.Overlay>
        <Banner.Title>
          {pageTitle}
        </Banner.Title>
      </Banner.Overlay>
    </Banner>
    <Container className="my-4">
      <Row>
        <Col md={8}>
          {widgets.map((widget) => <Widget widget={widget} />)} 
        </Col>
      </Row>
    </Container>
    <div className="container my-4 pt-4">
      <p className="small">
       Updated {updated} &nbsp;
       <a href={source}>
         Edit this page
       </a>
      </p>
    </div>
  </Layout>
)

export const query = graphql`
  query($slug: String) {
    nodePage(fields: {slug: {eq: $slug}}) {
      id
      title
      relationships {
        field_widgets {
          ... on paragraph__general_text {
            internal {
              type
            }
            field_general_text {
              processed
            }
          }
        }
      }
      drupal_internal__nid
      revision_timestamp(fromNow: true)
      fields {
        slug
      }
      relationships {
        field_hero_image {
          relationships {
            field_media_image {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
    sitePlugin(name: {eq: "gatsby-source-drupal"}) {
      pluginOptions {
        baseUrl
        apiBase
      }
    }
    site {
      siteMetadata {
        title
      }
      buildTime(fromNow: true)
    }
  }
`

const PageTemplate = ({data}) => (
  <Page id={data.nodePage.id}
        pageTitle={data.nodePage.title}
        siteTitle={data.site.siteMetadata.title}
        image={data.nodePage.relationships.field_hero_image?.relationships.field_media_image.localFile}
        widgets={data.nodePage.relationships.field_widgets}
        updated={data.nodePage.revision_timestamp}
        source={`${data.sitePlugin.pluginOptions.baseUrl}.${data.nodePage.fields.slug}`}
  ></Page>
)

export default PageTemplate

