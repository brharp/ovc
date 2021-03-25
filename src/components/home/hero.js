import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Container } from "react-bootstrap";

// Social icons
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaYoutubeSquare
} from "react-icons/fa";

const Section = styled.div`
  display: grid;
  justify-items: stretch;
  color: var(--light);
  & h1 {
    color: var(--light);
    font-size: 3em;
  }
  & p { 
    padding-top: 1rem;
    padding-bottom 1rem;
    font-weight: bold;
  }
`

const GridContainer = styled(Container)`
  display: grid;
`

const Mask = styled.div`
  grid-area: 1/1;
  background-color: var(--red);
  background: linear-gradient(157.5deg, var(--red) 30%, rgba(194,4,48,0.5));
  position: relative;
  justify-self: stretch;
  display: grid;
`

const Content = styled.div`
  font-size: 1.2em;
  padding-top: 4rem;
  padding-bottom: 4rem;
  @media (min-width: 1200px) {
    display: grid;
    align-items: center;
    grid-template-columns: 3fr 2fr;
  }
`

const Masthead = styled.div`
  grid-area: 1/1;
`

const Icons = styled.div`
  grid-area: 1/1/1/3;
  justify-self: end;
  > h3  { color: var(--light); }
  & svg { font-size: 2.5em; }
  // On large displays, rotate social icons 90 deg
  @media (min-width: 1200px) {
    transform:  rotate(-90deg);
    > svg { transform: rotate(90deg); }
  }
`

const Yellow = styled.span`
  color: var(--yellow);
`

const HeroComponent = ( props ) =>
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            slogan
          }
        }
      }
    `}
    render={ ( data ) =>
      <Section>
        <StaticImage src="../../images/portico--banner.jpg" layout="fullWidth" 
                     style={{gridArea: "1/1", maxHeight: "100%" }} />
        <Mask>
          <GridContainer>
            <Content>
              <Masthead>
                <h1>{ data.site.siteMetadata.title }</h1>
                <p>{ data.site.siteMetadata.slogan }</p>
                <hr/>
              </Masthead>
              <Icons>
                <h3>Connect <Yellow>with OVC</Yellow></h3>
                <FaInstagram/>
                <FaLinkedin/>
                <FaFacebookSquare />
                <FaTwitterSquare />
                <FaYoutubeSquare />
              </Icons>
            </Content>
          </GridContainer>
        </Mask>
      </Section>
    }
  />

export default HeroComponent


