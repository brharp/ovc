import { graphql } from "gatsby"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { Container } from "react-bootstrap"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/shared/banner"
import Topics from "../components/shared/topics"
import Spotlight from "../components/shared/spotlight"
import Partners from "../components/shared/partners"
import Features from "../components/shared/features"
import Statistics from "../components/shared/statistics"
import Contact from "../components/blocks/contact"


class Page extends React.Component {
  render() {
    const page = this.props.page

    return <Layout>
      <SEO title={page.title} />

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
        { portal.spotlight && <Spotlight items={portal.spotlight} /> }
        { portal.partners && <Partners partners={portal.partners} /> }
        <Container>
          <Contact/>
        </Container>
        </>
    return <Page page={{title: portal.title, header: header, content: content}} />
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
            gatsbyImageData(aspectRatio: 1.333333333333333)
          }
        }
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
    }
  }
`

