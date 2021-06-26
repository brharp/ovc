import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Row, Col } from "react-bootstrap"

const render = ({ id, image, title, links }) => (
  <div id={id} className="cover my-4">
    <GatsbyImage image={getImage(image)} className="cover-img" alt=""
                 style={{
                 }} 
    />
    <div className="cover-img-overlay p-4 m-0 bg-black-50 h-100"
         style={{
           background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.7) 25%)",
         }}
      >
      <div className="container h-100">
        <div className="row h-100 justify-content-end align-content-end">
          <div className="col-md-8 text-center">
            <h2 className="text-warning font-weight-bold my-4 display-4">
              {title}
            </h2>
            <Row className="no-gutters my-2">
              {links.map(({title,url,variant}) => (
                <Col md={4}>
                  <Link to={url} className={`btn btn-block ${variant === 'primary' ? 'btn-primary' : 'btn-outline-light'}  py-3`}
                        style={{borderColor: "rgba(248, 249, 250, .25)"}}>
                    {title}
                  </Link>
                </Col>
               ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "discover"}) {
      id
      title
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
      links {
        title
        url
        variant
      }
    }
  }
`

export default function Discover () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

