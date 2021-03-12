import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import FeatureBlock from "../components/blocks/feature_block"

const blockRegistry = {
  FeatureBlock
}

const Intro = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: var(--dark);
  color: var(--light);
  & h2 {
    color: var(--light);
    text-align: center;
    width: 100%;
    font-size: 2.5em;
  }
  @media (min-width: 768px) {
    & h2 {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    & p {
      border-left: 4px solid var(--yellow);
      padding-left: 4rem;
      margin-bottom: 0;
    }
  }
`

const PortalTemplate = props => {
  const { pageContext } = props
  const { intro, blocks } = pageContext
  return (
    <Layout>
      <Intro>
        <Container>
          <Row>
            <Col md="2">
              <h2>{ intro.heading }</h2>
            </Col>
            <Col md="7">
              <p>{ intro.lead }</p>
            </Col>
            <Col md="3">
              <h3>Quick Links</h3>
              <ul>
                {
                  intro.links.map((link, index) =>
                    <li><a href={link.url} key={index}>{link.title}</a></li>)
                }
              </ul>
            </Col>
          </Row>
        </Container>
      </Intro>
      {
        blocks.map((block, index) => {
          const BlockComponent = blockRegistry[block.block_type];
          return <BlockComponent block={block}/>
        })
      }
    </Layout>
  )
}

export default PortalTemplate

