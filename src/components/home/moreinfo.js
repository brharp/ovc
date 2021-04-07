import React from "react";
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Container } from "react-bootstrap"
import styled from "styled-components";

const Section = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  background: rgba(194, 4, 48, 0.03);
`

const Content = styled.div`
  @media (min-width: 992px) {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(3, 350px);
    grid-auto-rows: 350px;
  }
`

const Item = styled.div`
  display: grid;
  overflow: hidden;
  & .gatsby-image-wrapper {
    transition: 0.5s;
  }
  & :hover .gatsby-image-wrapper {
    transform: scale(1.05);
  }
  @media (max-width: 992px) {
    & :not(:last-child) {
      margin-bottom: 30px;
    }
  }
`

const ItemContent = styled.div`
  grid-area: 1/1;
  position: relative;
  padding: 24px;
  align-self: stretch;
  color: var(--light);
  background: rgba(0, 0, 0, 0.6);
  background: linear-gradient(45deg, black, transparent);
  & h2 { 
    color: var(--light);
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    align-self: stretch;
  }
  & h3 {
    color: var(--yellow);
    font-size: 2.4rem;
    font-weight: normal;
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`

function MoreInfo(props) {
    const p = [ [ 1, 2 ], [ 2, 4 ], [ 1, 3 ], [ 3, 4 ] ]
    const i = props.index
    const r = Math.floor(i/2) + 1
    const c = p[ i % p.length ]
    return (
      <Item style={{gridArea: `${r}/${c[0]}/${r+1}/${c[1]}`}}>
        <GatsbyImage image={getImage(props.image)} alt=""
                     layout="fullWidth" style={{gridArea: "1/1"}} />
	<ItemContent>
	  <h3>{props.subtitle}</h3>
          <h2>{props.title}</h2>
	  <a href={props.link} className='btn btn-lg btn-primary stretched-link'>
	    See More
	  </a>
	</ItemContent>
      </Item>
    )
}




class MoreInfoComponent extends React.Component {
  render() {
    return <StaticQuery
      query={graphql`
        query {
          allFeaturesYaml {
            edges {
              node {
                id
                title
                subtitle
                description
                image {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => 
        <Section>
          <Container>
            <Content>
              {
                data.allFeaturesYaml.edges.map((data,index) => {
                  return <MoreInfo key={`feature_${index}`}
                                   index={index}
                                   title={data.node.title}
                                   subtitle={data.node.subtitle}
                                   description={data.node.description}
                                   image={data.node.image} />
                })
              }
            </Content>
          </Container>
        </Section>
      }
    />
  }
}

export default MoreInfoComponent

