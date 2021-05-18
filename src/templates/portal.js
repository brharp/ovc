import { graphql } from "gatsby"
import { getImage} from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"
import Banner from "../components/shared/banner"
import Topics from "../components/shared/topics"
import CallToAction from "../components/shared/calltoaction"
import Resources from "../components/shared/resources"
import Spotlight from "../components/shared/spotlight"
import Partners from "../components/shared/partners"
import Process from "../components/shared/process"

class PortalPage extends React.Component {
  render() {
    const data = this.props.data
    const portal = data.nodePortal
    const topics = portal.relationships.field_topics
    const resources = portal.relationships.field_resources
    const process = portal.relationships.field_process
    const call_to_action = portal.relationships.field_call_to_action
    return (
      <Layout>
        <Banner image={getImage(portal.relationships.field_image.localFile)}>
          <h1>{portal.title}</h1>
          <p dangerouslySetInnerHTML={{__html: portal.body.processed}}></p>
        </Banner>
        { topics && <Topics topics={topics} /> }
        { resources && <Resources resources={resources} /> }
        { portal.spotlight && <Spotlight items={portal.spotlight} /> }
        { portal.partners && <Partners partners={portal.partners} /> }
        { process && process.map((process, index) => <Process key={index} process={process} />) }
        { call_to_action && call_to_action.map((cta, index) => <CallToAction key={index} cta={cta} />) }
      </Layout>
    )
  }
}

export default PortalPage

export const query = graphql`
    query ($id: String) {
      nodePortal(id: {eq: $id}) {
        title
        body {
          processed
        }
        fields {
          slug
        }
        relationships {
          field_image {
            ...file__fileFragment
          }
          field_call_to_action {
            field_link {
              uri
              title
            }
            relationships {
              field_image {
                ...file__fileFragment
              }
            }
          }
          field_topics {
            field_heading
            field_subheading
            field_copy
            relationships {
              field_image {
                ...file__fileFragment
              }
            }
            field_link {
              title
              uri
            }
          }
          field_resources {
            field_heading
            field_subheading
            field_icon
            field_link {
              title
              uri
            }
          }
          field_process {
            field_heading
            field_subheading
            field_copy
            relationships {
              field_steps {
                field_heading
                field_subheading
                field_copy
              }
            }
          }
        }
      }
    }

    fragment file__fileFragment on file__file {
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
`

