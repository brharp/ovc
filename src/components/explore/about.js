import React from "react"
import styled from "styled-components"
import Pull from "../shared/pull"
import content from "../../../content/explore/about.yml"

const Content = styled.div`
  display: grid;
  grid-gap: 32px;
  align-items: center;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Description = styled.div`
`

const Links = styled.div`
`

class About extends React.Component {
  render() {
    const body = (
      <Content>
        <Description>
          {content.description}
        </Description>
        <Links>
          {
            content.links.map((link, index) =>
              <a key={index} href="https://ovc.uoguelph.ca" className="btn btn-block btn-light btn-lg">
                {link.title}
              </a>)
          }
        </Links>
      </Content>
    )
    return <Pull title={content.title} body={body} />
  }
}

export default About

