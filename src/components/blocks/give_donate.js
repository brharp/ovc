import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { Row, Col } from "react-bootstrap"
import Block from "../shared/block"

const render = ({id, title, link}) => (
  <Block id={id}>
    <Row>
      <Col>
        <div className="bg-blue-50 p-4">
          <h2 className="text-center text-dark my-4">
            {title}
          </h2>
          <p className="text-center">
            <Link to={link.url} className="btn btn-cta btn-primary">
              {link.title}
            </Link>
          </p>
        </div>
      </Col>
    </Row>
  </Block>
)

const query = graphql`
  query { 
    blockYaml(id: {eq: "give_donate"}) { 
      id
      title 
      link { 
        title 
        url 
      } 
    } 
  }
`

export default function GiveDonate () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

