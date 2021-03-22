import React from "react";
import styled from "styled-components";
import { Accordion, Button, Container, Card, CardGroup  } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa"
import content from "../../../content/explore/leadership.yml";

const Section = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
`

                      //gridArea: `${(index+1)/3} / ${2*(index+1)-1}`
class Leadership extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <h2>{content.heading}</h2>
          <Accordion style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gridGap: "16px",
            }}>
              {
              content.leaders.map((data,index) => (
              <>
                <div key={index} style={{
                      gridArea: `${Math.floor(index/3)*2+1} / ${index%3+1}`,
                      padding: "1px"
                    }}>
                  <Card style={{ borderLeft: "4px solid var(--red)" }}>
                    <Card.Body>
                      <h4 className="text-dark">{data.unit}</h4>
                      <Card.Text>
                        <h6>{data.title}</h6>
                        <h6>{data.name}</h6> 
                      </Card.Text>
                    </Card.Body>
                <Accordion.Toggle as={Button} variant="link" eventKey={`${index}`}>
                  <FaAngleDown />
                </Accordion.Toggle>
                </Card>
                </div>
                <Accordion.Collapse key={index} eventKey={`${index}`}
                  style={{ gridArea: `${Math.floor(index/3)*2+2} / 1 / ${Math.floor(index/3)*2+2} / 4` }}>
                  <div>{ data.bio }</div>
                </Accordion.Collapse>
                </>
              ))
              }
          </Accordion>
        </Container>
      </Section>
    )
  }
}

export default Leadership

