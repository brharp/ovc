import React from "react";
import { StaticImage } from 'gatsby-plugin-image';
import styled from "styled-components";
import FeatureData from "../../content/features.yml"

const FeaturesWrapper = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
`

const CoverImage = styled.div`
  > .gatsby-image-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`

const FeatureGrid = styled.div`
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 3fr 5fr 3fr;
    grid-template-rows: repeat(2, 1fr);
    opacity: 0.9;
  }
`

function Feature(props) {
    const zebra = props.index % 2;
    return (
	    <div key={`feature_${props.index}`} style={{
		backgroundColor: zebra ? "var(--red)" : "var(--yellow)",
		padding: "32px 32px 100px",
		position: "relative"
	    }}>
	    <h2 style={{
		color: zebra ? "white" : "#333",
		textTransform: "uppercase"
	    }}>{props.title}</h2>
	    <h3 style={{
		color: zebra ? "var(--yellow)" : "var(--red)",
	    }}>{props.subtitle}</h3>
	    <p style={{
		color: zebra ? "white" : "var(--dark)"
	    }}>{props.description}</p>
	    <a href="#" className={`btn btn-outline-${zebra?'light':'dark'}`}
	        style={{ position: "absolute", bottom: "32px", textTransform: "uppercase"
	    }}>See More</a>
	    </div>
    )
}

const FeaturesComponent = ( props ) =>
  <FeaturesWrapper>
    <CoverImage>
      <StaticImage src="../images/people.jpg" alt="" layout="fullWidth"/>
    </CoverImage>
    <FeatureGrid>
      {
        FeatureData.map((data,index) => {
          return <Feature key={`feature_${index}`} index={index} title={data.title} subtitle={data.subtitle}
                          description={data.description} />
        })
      }
    </FeatureGrid>
  </FeaturesWrapper>

export default FeaturesComponent


