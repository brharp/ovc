import React from "react";
import { StaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Container } from "react-bootstrap"
import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";

const Section = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`

const Content = styled.div`
  grid-gap: 3rem;
  @media (max-width: 992px) {
    & > :not(:last-child) {
      margin-bottom: 3rem;
    }
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 300px);
    grid-auto-rows: 300px;
  }
  @media (min-width: 1432px) {
    grid-template-columns: repeat(3, 436.66px);
    grid-auto-rows: 436.66px;
  }
`

const Item = styled.div`
  display: grid;
  overflow: hidden;
  & .gatsby-image-wrapper {
    transition: 0.5s;
  }
  & :hover {
    .gatsby-image-wrapper {
      transform: scale(1.05);
    }
  }
`

const ItemContent = styled.div`
  grid-area: 1/1;
  position: relative;
  padding: 24px;
  align-self: stretch;
  color: var(--light);
  background: linear-gradient(90deg, black, rgba(0, 0, 0, .5) 350px, transparent);
  transition:  0.5s;
  & :hover {
    background: linear-gradient(90deg, black, rgba(0, 0, 0, .6) 350px);
    h3 {
      margin-bottom: 1.2rem;
    }
    h2 {
      margin-bottom: 1.2rem;
    }
  }
  & h2 { 
    color: var(--light);
    font-size: 3.5rem;
    align-self: stretch;
    transition: 0.5s;
  }
  & h3 {
    color: var(--yellow);
    font-size: 2.4rem;
    font-weight: normal;
    transition: 0.5s;
  }
  & a {
    color: var(--light);
    padding-left: 0.37rem;
    & svg {
      color: var(--red);
      transition: 0.5s;
    }
    & :hover, & :focus {
      text-decoration: none;
      svg {
        transform: translateX(3px);
      }
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`

const TextBox = styled.div`
  width: 250px;
`

function MoreInfo(props) {
    const p = [ [ 1, 2 ], [ 2, 4 ], [ 1, 3 ], [ 3, 4 ] ]
    const i = props.index
    const r = Math.floor(i/2) + 1
    const c = p[ i % p.length ]
    return (
      <Item style={{gridArea: `${r}/${c[0]}/${r+1}/${c[1]}`}}>
        <GatsbyImage image={getImage(props.image.src)} alt={props.image.alt}
                     layout="fullWidth" style={{gridArea: "1/1"}} />
	<ItemContent>
	  <TextBox>
	    <h3>{props.subtitle}</h3>
            <h2>{props.title}</h2>
            <Link to={props.link} className='stretched-link text-decoration-none'>
	      See More <FaAngleRight />
	    </Link>
	  </TextBox>
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
                link
                image {
                  src {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                  alt
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
                                   image={data.node.image} 
                                   link={data.node.link} />
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

