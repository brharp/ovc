import React from "react";
import styled from "styled-components";
import { FaLocationArrow } from "react-icons/fa";

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

class Connect extends React.Component {
  render() {
    return (
      <Block>
        <h2><FaLocationArrow /> Connect</h2>
        <ul>
          <li><a className="text-decoration-none" href="https://ovc.uoguelph.ca">Find us on a map</a></li>
          <li><a className="text-decoration-none" href="https://ovc.uoguelph.ca">Take a tour</a></li>
          <li><a className="text-decoration-none" href="https://ovc.uoguelph.ca">Contact</a></li>
          <li><a className="text-decoration-none" href="https://ovc.uoguelph.ca">Intranet</a></li>
        </ul>
      </Block>
    )
  }
}

export default Connect


