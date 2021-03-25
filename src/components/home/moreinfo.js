import React from "react";
import { StaticImage } from 'gatsby-plugin-image';
import styled from "styled-components";
import MoreInfoData from "../../../content/home/moreinfo.yml"

const Section = styled.div`
  display: grid;
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Box = styled.div`
  display: grid;
`

const Content = styled.div`
  grid-area: 1/1;
  position: relative;
  padding: 24px;
  align-self: stretch;
  color: var(--light);
  background: rgba(0, 0, 0, 0.6);
  transition: .5s;
  transition-delay: .1s;
  & :hover { background: rgba(194, 4, 48, 0.8); }
  & h2 { 
    color: var(--light);
    text-transform: uppercase;
    font-size: 3.5rem;
    border-bottom: 1px solid var(--light);
    padding-bottom: 1rem;
    align-self: stretch;
  }
  & h3 { color: var(--yellow); transition: .5s; }
  & :hover h3 { color: var(--light); }
  & p { transition: 1s;  overflow: hidden;}
  & :hover p { max-height: 6em; }
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`

function MoreInfo(props) {
    return (
      <Box>
        <StaticImage src="../../images/golden-retriever.jpg" alt=""
                     layout="fullWidth" style={{gridArea: "1/1"}} />
	<Content>
          <h2>{props.title}</h2>
	  <h3>{props.subtitle}</h3>
	  <p className="mh-notouch-0">{props.description}</p>
	  <a href="https://ovc.uoguelph.ca/"
	     className='btn btn-lg btn-outline-light stretched-link'>
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


