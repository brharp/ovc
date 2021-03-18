import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap"
import QuickLinksData from "../../content/home/quicklinks.yml"

const QuickLinksContainer = styled(Container)`
  padding-top: 3rem;
  padding-bottom: 3rem;
`

const QuickLinksList = styled.div`
  > .btn { margin-top: 1rem; margin-bottom: 1rem; }
`

const QuickLink = ( { content, href, key } ) =>
  <a key={key} href={href} className="btn btn-block btn-info btn-lg">
    {content}
  </a>


const QuickLinksComponent = ( props ) =>
  <QuickLinksContainer>
    <Row>
    {
      QuickLinksData.sections.map((section, index) => 
        <Col md key={index}>
          <h2>{section.heading}</h2>
          <QuickLinksList>
          {
            section.links.map((link, index) =>
              <QuickLink content={link.title} href={link.url} key={index}/>)
          }
          </QuickLinksList>
        </Col>
      )
    }
    </Row>
  </QuickLinksContainer>

export default QuickLinksComponent


