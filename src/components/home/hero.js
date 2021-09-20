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
    color: var(--yellow);
    font-size: 7.68rem;
  }
  & p { 
    padding-top: 1rem;
    padding-bottom 1rem;
    font-weight: bold;
    font-size: 2.5rem;
  }
`

const GridContainer = styled(Container)`
  display: grid;
  align-items: end;
`

const Mask = styled.div`
  grid-area: 1/1;
  background-color: black;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2));
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
    align-items: end;
    grid-template-columns: 3fr 1fr;
  }
`

const Masthead = styled.div`
  grid-area: 1/1;
`

const Icons = styled.div`
  grid-area: 1/1/1/3;
  justify-self: end;
  align-self: center;
  > h3  { color: var(--light); }
  & svg { font-size: 2.5em; }
  // On large displays, rotate social icons 90 deg
  @media (min-width: 1200px) {
    transform:  translate(8rem, -4rem) rotate(-90deg);
    & svg { transform: rotate(90deg); }
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
        <StaticImage src="../../images/home/2979_ovcWINDOW_05.jpg" alt="Image of front arch of the Ontario Vet College" layout="fullWidth" 
                     style={{gridArea: "1/1", maxHeight: "calc(100vh - 150px)" }} />
        <Mask>
          <GridContainer>
            <Content>
              <Masthead>
                <h1>{ data.site.siteMetadata.title }</h1>
                <p>{ data.site.siteMetadata.slogan }</p>
              </Masthead>
              <Icons>
                <h3>Connect <Yellow>with OVC</Yellow></h3>
                <a href="https://instagram.com/ontvetcollege/" className="text-light">
                  <span className="sr-only">Connect with OVC on Instagram</span>
                  <FaInstagram/>
                </a>
                <a href="https://www.linkedin.com/school/ontario-veterinary-college/" className="text-light">
                  <span className="sr-only">Connect with OVC on LinkedIn</span>
                  <FaLinkedin/>
                </a>
                <a href="http://www.facebook.com/ontvetcollege" className="text-light">
                  <span className="sr-only">Connect with OVC on Facebook</span>
                  <FaFacebookSquare />
                </a>
                <a href="http://twitter.com/OntVetCollege/" className="text-light">
                  <span className="sr-only">Connect with OVC on Twitter</span>
                  <FaTwitterSquare />
                </a>
                <a href="http://www.youtube.com/user/OntarioVetCollege" className="text-light">
                  <span className="sr-only">Connect with OVC on YouTube</span>
                  <FaYoutubeSquare />
                </a>
              </Icons>
            </Content>
          </GridContainer>
        </Mask>
      </Section>
    }
  />

export default HeroComponent


