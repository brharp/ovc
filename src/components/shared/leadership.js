import React from "react";
import { StaticQuery, graphql } from "gatsby"
import { useContext } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components";
import { Accordion, AccordionContext, useAccordionToggle, Button, Card } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa"




const StyledProfile = styled.div`
  display: grid;
  grid-template-areas: "photo" "bio" "quote";
  @media (min-width: 992px) {
    grid-template-columns: 3fr 2fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "bio   photo"
      "quote quote";
  }
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
  text-align: center;
`


function Expander({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <Button
      variant="link"
      className={`btn-lg toggle ${ isCurrentEventKey ? 'open' : '' }`}
      onClick={decoratedOnClick}
    >
      {children}
    </Button>
  );
}

class Responsive extends React.Component {
  render() {
    const cols = parseInt(this.props.columns)
    const data = this.props.data
    return (
      <div className={this.props.className}>
      <Accordion style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridGap: "16px",
        }}>
        {
          data.allLeadersYaml.edges.map(({node},index) => (
          <React.Fragment key={index}>
            <div key={`t_${index}`} style={{
                  gridArea: `${Math.floor(index/cols)*2+1} / ${index%cols+1}`
              }}>
              <Card style={{ borderLeft: "4px solid var(--blue)", height: "100%" }}>
                <Card.Body>
                  <h3 className="text-dark">{node.unit}</h3>
                  <div className="card-text mb-3">
                    <h4>{node.title}</h4>
                    <h5 className="text-dark">{node.name}</h5> 
                  </div>
                </Card.Body>
                <Expander as={Button} variant="link" eventKey={`${index}`}>
                  <FaAngleDown /><span className="sr-only">Expand</span>
                </Expander>
              </Card>
            </div>
            <Accordion.Collapse key={index} eventKey={`${index}`}
              style={{ gridArea: `${Math.floor(index/cols)*2+2} / 1 / ${Math.floor(index/cols)*2+2} / ${cols+1}` }}>
              <StyledProfile>
                <GatsbyImage image={getImage(node.photo)} layout="fullWidth"
                             style={{gridArea: "photo" }} alt={node.name}
                  />
                <StyledBio style={{gridArea: "bio" }}>
                  <h3 className="text-dark">{node.name}</h3>
                  <h4>{node.title}</h4>
                  <p>{node.bio}</p>
                </StyledBio>
                <StyledQuote>
                  {node.quote}
                </StyledQuote>
              </StyledProfile>
            </Accordion.Collapse>
            </React.Fragment>
          ))
        }
      </Accordion>
      </div>
    )
  }
}

class Leadership extends React.Component {
  render() {
    return <StaticQuery query={graphql`
      query {
        allLeadersYaml {
          edges {
            node {
              unit
              name
              title
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
    `} render={data => (
      <>
        <Responsive data={data} columns="3" className="d-none d-lg-block" />
        <Responsive data={data} columns="2" className="d-none d-md-block d-lg-none" />
        <Responsive data={data} columns="1" className="d-md-none" />
      </>
    )}
    ></StaticQuery>
  }
}

export default Leadership

