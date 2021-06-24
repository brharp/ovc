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
  justify-items: center;
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
          <StaticImage alt="COE Logo" src="../../images/home/coe_logo.png"
                       layout="fixed" transformOptions={{grayscale: true}}
                       />
          <StaticImage alt="AAHA Logo" src="../../images/home/aaha_logo_accredited.png" 
                       layout="fixed" transformOptions={{grayscale: true}}
                       width={128}
                       />
        </Logos>
      </Block>
    )
  }
}

export default Accreditations


