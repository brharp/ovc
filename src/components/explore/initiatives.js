import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import content from "../../../content/explore/initiatives.yml"

const Section = styled.div`
  display: grid;
  & > * { 
    grid-area: 1/1;
    position: relative;
  }
`

const Content = styled.div`
  @media (min-width: 992px) {
    display: grid;
  }
  & div {
    padding: 24px;
  }
  & div:nth-child(even) {
    color: var(--dark);
    background-color: rgb(255 199 42 / 90%);
    & h3 { color: var(--dark); }
    & h4 { color: var(--red); }
  }
  & div:nth-child(odd) {
    color: var(--light);
    background-color: rgb(194 4 48 / 90%);
    & h3 { color: var(--light); }
    & h4 { color: var(--yellow); }
  }
`

const Initiative = (props) =>  {
  const initiative = content.initiatives[props.index]
  const title = initiative.title
  const subtitle = initiative.subtitle
  const description = initiative.description
  const links = initiative.links
  const color = props.index % 2 ? 'dark' : 'light'
  return (
    <div style={props.style}>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{description}</p>
      {
        links.map((data, index) =>
          <a key={index} href={data.url}
             className={`btn btn-outline-${color}`}
            >{data.title}</a>)
      }
    </div>
  )
}


class Initiatives extends React.Component {
  render() {
    return (
      <Section>
        <StaticImage src="./initiatives.jpg" layout="fullWidth" alt=""
                     aspectRatio={3/1} />
        <Container>
          <Content>
            <Initiative index="0" style={{gridArea: "1/1"}} />
            <Initiative index="1" style={{gridArea: "1/2"}} />
            <Initiative index="2" style={{gridArea: "2/2"}} />
            <Initiative index="3" style={{gridArea: "2/3"}} />
          </Content>
        </Container>
      </Section>
    )
  }
}

export default Initiatives

