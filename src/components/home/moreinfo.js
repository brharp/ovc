import React from "react";
import { StaticImage } from 'gatsby-plugin-image';
import styled from "styled-components";
import MoreInfoData from "../../../content/home/moreinfo.yml"

const Section = styled.div`
  display: grid;
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Box = styled.div`
  display: grid;
`

const Mask = styled.div`
  grid-area: 1/1;
  background: rgba(0, 0, 0, 0.6);
  position: relative;
`

const Content = styled.div`
  grid-area: 1/1;
  position: relative;
  padding: 24px;
  align-self: end;
  color: var(--light);
  & h2 { 
    color: var(--light);
    text-transform: uppercase;
    font-size: 3.5rem;
    border-bottom: 1px solid var(--light);
    padding-bottom: 1rem;
  }
  & h3 { color: var(--yellow); }
`

function MoreInfo(props) {
    return (
      <Box>
        <StaticImage src="../../images/golden-retriever.jpg" alt=""
                     layout="fullWidth" style={{gridArea: "1/1"}} />
        <Mask />
	<Content>
          <h2>{props.title}</h2>
	  <h3>{props.subtitle}</h3>
	  <p>{props.description}</p>
	  <a href="https://ovc.uoguelph.ca/" className='btn btn-lg btn-outline-light'>
	    See More
	  </a>
	</Content>
      </Box>
    )
}

const MoreInfoComponent = ( props ) =>
  <Section>
    {
      MoreInfoData.map((data,index) => {
        return <MoreInfo key={`feature_${index}`} index={index} title={data.title} subtitle={data.subtitle}
                        description={data.description} />
    })
    }
  </Section>

export default MoreInfoComponent


