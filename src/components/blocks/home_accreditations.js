import React from "react";
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaCertificate } from "react-icons/fa";
import { Media, Row, Col } from "react-bootstrap"

const render = ({id, title, body, images}) => (
  <Media>
    <FaCertificate className="display-4 mr-4 text-dark" />
    <Media.Body>
      <h2 className="text-dark">{title}</h2>
      <p>{body}</p>
      <Row>
        { 
          images.map(({src, alt, url}) => (
            <Col>
              <a href={url}>
                <GatsbyImage image={getImage(src)} alt={alt} />
              </a>
            </Col>
          ))
        }
      </Row>
    </Media.Body>
  </Media>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "home_accreditations"}) {
      id
      title
      body
      images {
        alt
        url
        src {
          childImageSharp {
            gatsbyImageData(layout: FIXED, transformOptions: {grayscale: true}, width: 128)
          }
        }
      }
    }
  }
`

export default function HomeAccreditations ({data}) {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

