import React from "react";
import { Container } from "react-bootstrap"
import styled from "styled-components";

const Section = styled.div`
  margin-top: 6rem;
  margin-bottom: 6rem;
  & h1 {
    margin-bottom: 3rem;
    text-align: center;
    font-size: 5rem;
  }
  & p {
    max-width: 80ex;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    text-align: center;
  }
`

class ImproveLife extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <h1>Improve Life With Us.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit class vestibulum fringilla diam orci phasellus, quis convallis euismod sollicitudin pretium dictum habitasse consequat eleifend interdum mollis. Massa gravida potenti inceptos purus pulvinar euismod ante conubia sagittis dictum, metus nisl ultricies tristique sapien arcu nullam habitant hendrerit integer, mus aenean nibh cras nec mattis nulla ac proin. Donec ligula vitae phasellus conubia aptent laoreet praesent, nibh lacinia euismod ac egestas scelerisque feugiat, hac netus accumsan facilisis torquent fusce.</p>
        </Container>
      </Section>
    )
  }
}

export default ImproveLife

