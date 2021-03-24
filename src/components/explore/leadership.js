import React from "react";
import { useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components";
import { Accordion, Button, Container, Card, Modal } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa"

const Section = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
`

const StyledProfile = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "bio   photo"
    "quote quote";
  background: var(--light);
`

const StyledBio = styled.div`
  padding: 24px;
`

const StyledQuote = styled.div`
  background: var(--red);
  color: var(--light);
  padding: 24px;
  font-size: 1.2em;
  grid-area: quote;
`

class Profile extends React.Component {
  render() {
    console.log(this.props.photo)
    return (
      <StyledProfile>
        <GatsbyImage image={getImage(this.props.photo)}
          layout="constrain" style={{gridArea: "photo" }}
          />
        <StyledBio style={{gridArea: "bio" }}>
          <h3>{this.props.name}</h3>
          <h4>{this.props.title}</h4>
          <p>{this.props.bio}</p>
        </StyledBio>
        <StyledQuote>
          {this.props.quote}
        </StyledQuote>
      </StyledProfile>
    )
  }
}

class Desktop extends React.Component {
  render() {
    const data = this.props.data
    return (
      <Section className="d-none d-lg-block">
        <Container>
          <Accordion style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gridGap: "16px",
            }}>
            {
              data.allLeadersYaml.edges.map(({node},index) => (
              <>
                <div key={`t_${index}`} style={{
                      gridArea: `${Math.floor(index/3)*2+1} / ${index%3+1}`,
                      padding: "1px"
                  }}>
                  <Card style={{ borderLeft: "4px solid var(--red)", height: "100%" }}>
                    <Card.Body>
                      <h4 className="text-dark">{node.unit}</h4>
                      <Card.Text>
                        <h6>{node.title}</h6>
                        <h6>{node.name}</h6> 
                      </Card.Text>
                    </Card.Body>
                    <Accordion.Toggle as={Button} variant="link" eventKey={`${index}`}>
                      <FaAngleDown />
                    </Accordion.Toggle>
                  </Card>
                </div>
                <Accordion.Collapse key={index} eventKey={`${index}`}
                  style={{ gridArea: `${Math.floor(index/3)*2+2} / 1 / ${Math.floor(index/3)*2+2} / 4` }}>
                  <Profile name={node.name} title={node.title} unit={node.unit}
                           bio={node.bio} quote={node.quote} photo={node.photo} />
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

function ModalProfile (props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card onClick={handleShow} style={{borderLeft: "4px solid var(--red)"}}>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle>{props.title}</Card.Subtitle>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GatsbyImage image={getImage(props.photo)} layout="fullWidth" />
          <h3>{props.name}</h3>
          <h4>{props.title}</h4>
          <p>{props.bio}</p>
          <blockquote>{props.quote}</blockquote>
        </Modal.Body>
      </Modal>
    </>
  );
}

class Mobile extends React.Component {
  render() {
    const data = this.props.data
    return (
      <Section className="d-lg-none">
        <Container style={{
            display: "grid",
            gridGap: "16px",
            gridTemplateColumns: "repeat(auto-fill, minmax(18rem, 1fr))"
          }}>
          { 
            data.allLeadersYaml.edges.map(({node},index) => (
              <ModalProfile key={index} name={node.name} title={node.title}
                            photo={node.photo} bio={node.bio} quote={node.quote}/>
            ))
          }
        </Container>
      </Section>
    )
  }
}

class Leadership extends React.Component {
  render() {
    return <StaticQuery
      query={graphql`
        query {
          allLeadersYaml {
            edges {
              node {
                id        
                name
                title
                unit
                bio
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
      `}
      render={(data) => <><Desktop data={data}/><Mobile data={data}/></>}
    />
  }
}

export default Leadership

