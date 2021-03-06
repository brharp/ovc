import React from "react"
import styled from "styled-components"
import { Container, Accordion, Card, Button, Row, Col } from "react-bootstrap"

const Section = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`

const Steps = styled.div`
  background: #f4f4f4;
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  display: grid;
  justify-content: stretch;
  & h2 {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  & h3 {
    color: var(--dark);
    margin-bottom: 2rem;
  }
  & p {
    max-width: 72ex;
    justify-self: center;
    margin-top: 1rem;
    margin-bottom: 4rem;
  }
`

const Help = styled.div`
  background: rgba(105,163,185,0.3);
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  text-align: center;
  & h3 {
    color: var(--dark);
    margin-bottom: 1.5rem;
  }
`

class Process extends React.Component {
  render() {
    if (!this.props.process) {
      return <></>
    }
    const process = this.props.process
    return (
      <Container>
        <Section>
        <Steps>
          <h2>{ process.title }</h2>
          <h3>{ process.subtitle }</h3>
          <Accordion>
            {
              process.steps?.map((step, index) =>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={index+1}>
                      <strong>{step.step}:</strong> {step.title}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={index+1}>
                    <Card.Body>
                      <Row className="justify-content-center">
                        <Col md={8} offset={2}
                             dangerouslySetInnerHTML={{
                               __html: step.content
                             }}></Col>
                      </Row>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              )
            }
          </Accordion>
        </Steps>
        { 
          process.help && 
          <Help>
            <h3>{process.help.title}</h3>
            <a className="btn btn-primary" href={process.help.link.url}>
              {process.help.link.title}
            </a>
          </Help>
        }
        </Section>
      </Container>
    )
  }
}

export default Process

