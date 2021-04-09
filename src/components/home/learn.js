import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

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

class Learn extends React.Component {
  render() {
    return (
      <Block>
        <h2><FaSearch /> Learn More</h2>
        <ul>
          <li><a href="https://ovc.uoguelph.ca">About</a></li>
          <li><a href="https://ovc.uoguelph.ca">Departments</a></li>
          <li><a href="https://ovc.uoguelph.ca">Centres</a></li>
          <li><a href="https://ovc.uoguelph.ca">People</a></li>
        </ul>
      </Block>
    )
  }
}

export default Learn


