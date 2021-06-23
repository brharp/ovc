import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Card } from "react-bootstrap"
import Banner from "../shared/banner"

const render = ({ id, image, title, body, link }) => (
  <Banner>
    <GatsbyImage image={getImage(image)} className="cover-img" alt=""
                 style={{height: "500px"}}/>
    <Banner.Overlay className="p-4 bg-red-80 ">
      <div className="pl-3">
      <Card.Title as="h2" className="text-light">
        {title}
      </Card.Title>
      <Card.Text className="text-light" style={{minHeight: "5em"}}>
        {body}
      </Card.Text>
      <Card.Text className="text-light">
        <Link to={link.url} className="btn btn-primary btn-lg">
          {link.title}
        </Link>
      </Card.Text>
      </div>
    </Banner.Overlay>
  </Banner>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "research_participate"}) {
      id
      title
      body
      link {
        title
        url
      }
      image {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
`

export default function ResearchParticipate () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

