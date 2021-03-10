import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

// Social icons
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin
} from "react-icons/fa";

const Banner = styled.div`
  position: relative;
  overflow: hidden;
  color: var(--light);
  & h1 { font-size: 3em; }
  & p { padding-top: 1rem; padding-bottom: 1rem; }
`

const Cover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -2;
`

const Shade = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  z-index: -1;
`

const Content = styled.div`
  margin-top: 8rem;
  margin-bottom: 8rem;
  font-size: 1.5em;
  border-bottom: 4px solid var(--yellow);
    padding: 4rem;
    background-color: rgba(0,0,0,.4);
  @media (min-width: 992px) {
  }
`

const Icons = styled.div`
  font-size: 3em;
  > h2  { color: var(--light); }
  margin-bottom: 8rem;
  // On large displays, rotate social icons 90 deg
  @media (min-width: 992px) {
    transform: rotate(-90deg);
    margin-top: 60%;
    position: absolute;
    margin-bottom: 0;
    > svg { transform: rotate(90deg); }
  }
`

const Y = styled.span`
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
      <Banner>
        <Cover>
          <StaticImage src="../images/portico--banner.jpg" layout="fullWidth" 
                      style={{height: "100%"}} />
        </Cover>
        <Shade/>
        <Container>
          <Row>
            <Col md={9}>
              <Content>
                <h1>{ data.site.siteMetadata.title }</h1>
                <p>{ data.site.siteMetadata.slogan }</p>
              </Content>
            </Col>
            <Col md>
              <Icons>
                <h2>Connect <Y>with OVC</Y></h2>
                <FaInstagram/>
                <FaLinkedin/>
                <FaFacebookSquare />
                <FaTwitterSquare />
              </Icons>
            </Col>
          </Row>
        </Container>
      </Banner>
    }
  />

export default HeroComponent


