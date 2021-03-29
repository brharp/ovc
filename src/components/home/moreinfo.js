import React from "react";
import { StaticImage } from 'gatsby-plugin-image';
import { Container } from "react-bootstrap"
import styled from "styled-components";
import MoreInfoData from "../../../content/home/moreinfo.yml"

const Section = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
`

const Content = styled.div`
  display: grid;
  grid-gap: 16px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Item = styled.div`
  display: grid;
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
    border-bottom: 1px solid var(--light);
    padding-bottom: 1rem;
    align-self: stretch;
  }
  & h3 {
    color: var(--yellow);
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`

function MoreInfo(props) {
    return (
      <Item>
        <StaticImage src="../../images/golden-retriever.jpg" alt=""
                     layout="fullWidth" style={{gridArea: "1/1"}} />
	<ItemContent>
          <h2>{props.title}</h2>
	  <h3>{props.subtitle}</h3>
	  <a href={props.link} className='btn btn-lg btn-primary stretched-link'>
	    See More
	  </a>
	</ItemContent>
      </Item>
    )
}

const MoreInfoComponent = ( props ) =>
  <Section>
    <Container>
      <Content>
        {
          MoreInfoData.map((data,index) => {
            return <MoreInfo key={`feature_${index}`} index={index} title={data.title} subtitle={data.subtitle}
                             description={data.description} />
          })
        }
      </Content>
    </Container>
  </Section>

export default MoreInfoComponent


