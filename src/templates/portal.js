import { graphql } from "gatsby"
import { getImage} from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"
import Banner from "../components/shared/banner"
import Topics from "../components/shared/topics"
import CallToAction from "../components/shared/calltoaction"
import Resources from "../components/shared/resources"

class PortalPage extends React.Component {
  render() {
    const data = this.props.data
    const portal = data.portalsYaml
    const cta = portal.cta
    return (
      <Layout>
        <Banner image={getImage(portal.image)}>
          <h1>{portal.title}</h1>
          <p>{portal.summary}</p>
        </Banner>
        <Topics topics={portal.topics} />
        <Resources items={portal.resources} />
        <CallToAction
          title={cta.title}
          url={cta.url}
          image={getImage(cta.image)}
          />
      </Layout>
    )
  }
}

export default PortalPage

export const query = graphql`
  query ($id: String) {
    portalsYaml(id: {eq: $id}) {
      title
      summary
      image {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      cta {
        title
        url
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      topics {
        title
        subtitle
        summary
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        links {
          title
          url
        }
      }
      resources {
        title
        icon
        description
        links {
          title
          url
        }
      }
    }
  }
`

