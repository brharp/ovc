import React from "react";
import { StaticImage } from 'gatsby-plugin-image';
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Dinkus from "../dinkus";

const Frame = styled.div`
  position: relative;
  overflow: hidden;
`

const Background = styled.div`
  & .gatsby-image-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`

const Grid = styled.div`
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    opacity: 0.9;
    grid-gap: 8rem;
  }
`

const Foreground = styled.div`
  padding-top: 8rem;
  padding-bottom: 8rem;
  background: rgba(0, 0, 0, 0.8);
  color: var(--light);
  text-align: center;
  & h2 {
    color: var(--light);
  }
`

const Feature = props =>
  <div>
    <h2>{props.title}</h2>
    <Dinkus />
    <p>{props.text}</p>
  </div>

const FeatureBlock = ( props ) => {
  const { block } = props;
  const { features } = block;
  return (
    <Frame>
      <Background>
        <StaticImage src="../images/people.jpg" alt="" layout="fullWidth" />
      </Background>
      <Foreground>
        <Container>
          <Grid>
            {
              features.map((data,index) => {
                return <Feature key={`feature_${index}`}
                                title={data.title} text={data.text} />
              })
            }
          </Grid>
        </Container>
      </Foreground>
    </Frame>
  )
}

export default FeatureBlock


