import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { FaCertificate } from "react-icons/fa";

const Block = styled.div`
  & h2 {
    color: var(--dark);
  }
  & ul {
    list-style: none;
    & li {
      padding-top: 1.4rem;
    }
  }
  & a {
    color: var(--dark);
    text-decoration: underline;
  }
`

const Logos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

class Accreditations extends React.Component {
  render() {
    return (
      <Block>
        <h2><FaCertificate /> Accreditations</h2>
        <ul>
          <li>OVC faculty are also affiliated with a number of other centres and institutes.</li>
        </ul>
        <Logos>
          <StaticImage src="../../images/coe_logo.png"
                       transformOptions={{grayscale: true}}
                       />
          <StaticImage src="../../images/aaha_logo_accredited.png" 
                       transformOptions={{grayscale: true}}
                       />
        </Logos>
      </Block>
    )
  }
}

export default Accreditations


