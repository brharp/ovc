import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Jumbotron, Accordion, Card, Button, Row, Col } from "react-bootstrap"

const render = ({ id, title, subtitle, _children }) => (
  <Jumbotron id={id} className="text-center m-0">
    <h2>{title}</h2>
    <h3 className="text-dark mb-4">{subtitle}</h3>
    <Accordion>
      {
        _children.map(({id, title, subtitle, body}, i) => (
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={i+1}>
                <strong>{title}:</strong> {subtitle}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={i+1}>
              <Card.Body>
                <Row className="justify-content-center">
                  <Col md={8} offset-md={2} dangerouslySetInnerHTML={{ __html: body }} />
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))
      }
    </Accordion>
  </Jumbotron>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "clinical_trials_steps"}) {
      id
      title
      subtitle
      _children {
        title
        subtitle
        body
      }
    }
  }
`

export default function ClinicalTrialsSteps () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

