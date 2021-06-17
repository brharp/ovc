import { graphql } from "gatsby"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
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
import Statistics from "../components/shared/statistics"


class Page extends React.Component {
  render() {
    const page = this.props.page

    return <Layout>

      <header role="banner">
        { page.header }
      </header>

      { page.content }

    </Layout>
  }
}

class PortalPage extends React.Component {
  render() {
    const data = this.props.data
    const portal = data.portalsYaml
    const header =
      <Banner>
        <GatsbyImage image={getImage(portal.image)} className="cover-img"
                   style={{height: "600px"}} alt="" />
        <Banner.Overlay>
          <Banner.Title>
            {portal.title}
          </Banner.Title>
          <Banner.Text>
            {portal.summary}
          </Banner.Text>
        </Banner.Overlay>
      </Banner>
    const content = <>
        { portal.topics && <Topics topics={portal.topics} /> }
        { portal.features && <Features features={portal.features} /> }
        <div className="container">
        { portal.statistics && <Statistics children={portal.statistics.children} /> }
        </div>
        { portal.testimonials && <Testimonials testimonials={portal.testimonials} /> }
        { portal.resources && <Resources items={portal.resources} /> }
        { portal.spotlight && <Spotlight items={portal.spotlight} /> }
        { portal.partners && <Partners partners={portal.partners} /> }
        { portal.process && <Process process={portal.process} /> }
        { portal.cta && <CallToAction cta={portal.cta} /> }
        </>
    return <Page page={{header: header, content: content}} />
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
    }
  }
`

