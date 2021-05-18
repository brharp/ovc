import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container } from "react-bootstrap"

const Section = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`

const Layout = styled.div`
  display: grid;
  grid-gap: 3rem;
`

const TopicLayout = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    & > * {
      flex: 1;
    }
    & :nth-child(2n) {
      flex-direction: row-reverse;
    }
  }
`

const Content = styled.div`
  padding-top: 3rem;
  padding-bottom: 1.5rem;
  @media (min-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  & h2 {
    margin-bottom: 1.5rem;
  }
  & h3 {
    color: var(--dark);
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
  }
  & p {
    margin-bottom: 1.5rem;
  }
`

class Topic extends React.Component {
  render() {
    return (
      <TopicLayout>
        <GatsbyImage image={this.props.image}
                     layout="fullWidth"
                     alt="" />
        <div>
          <Content>
            <h2>{this.props.heading}</h2>
            <h3>{this.props.subheading}</h3>
            <p>{this.props.copy}</p>
            {
              this.props.link &&
              <p>
                <a href={this.props.link.uri} className="btn btn-lg btn-primary">
                  {this.props.link.title}
                </a>
              </p>
            }
          </Content>
        </div>
      </TopicLayout>
    )
  }
}

class Topics extends React.Component {
  render () {
    return (
      <Section>
        <Container>
          <Layout>
            {
              this.props.topics?.map((topic, index) =>
                <Topic key={`topic_${index}`}
                       heading={topic.field_heading}
                       subheading={topic.field_subheading}
                       copy={topic.field_copy}
                       image={getImage(topic.relationships.field_image.localFile)}
                       link={topic.field_link} />
              )
            }
          </Layout>
        </Container>
      </Section>
    )
  }
}


export default Topics

