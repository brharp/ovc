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
import Testimonials from "../components/shared/testimonials"
import Features from "../components/shared/features"

class PortalPage extends React.Component {
  render() {
    const data = this.props.data
    const portal = data.portalsYaml
    return (
      <Layout>
        <Banner image={getImage(portal.image)}>
          <h1>{portal.title}</h1>
          <p>{portal.summary}</p>
        </Banner>
        { portal.topics && <Topics topics={portal.topics} /> }
        { portal.features && <Features features={portal.features} /> }
        { portal.testimonials && <Testimonials testimonials={portal.testimonials} /> }
        { portal.resources && <Resources items={portal.resources} /> }
        { portal.spotlight && <Spotlight items={portal.spotlight} /> }
        { portal.partners && <Partners partners={portal.partners} /> }
        { portal.process && <Process process={portal.process} /> }
        { portal.cta && <CallToAction cta={portal.cta} /> }
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
      partners {
        title
        subtitle
        description
        logos {
          image {
            childImageSharp {
              gatsbyImageData(
                transformOptions: {grayscale: true},
                layout: CONSTRAINED
              )
            }
          }
        }
      }
      spotlight {
        title
        subtitle
        description
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
      process {
        title
        subtitle
        steps {
          step
          title
          content
        }
        help {
          title
          link {
            title
            url
          }
        }
      }
      testimonials {
        title
        statements {
          name
          quote
          photo {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      features {
        title
        image {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
        items {
          title
          description
        }
      }
    }
  }
`

