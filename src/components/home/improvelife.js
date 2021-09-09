import React from "react";
import { Container } from "react-bootstrap"
import styled from "styled-components";

const Lead = styled.div`
  font-size: 3rem;
  margin-bottom: 1.6rem;
`

class ImproveLife extends React.Component {
  render() {
    return (
      <div className="text-center py-4 my-4">
        <Container className="py-4">
          <h1 className="display-2 font-weight-bold py-4">Improve Life With Us.</h1>
          <Lead className="display-4 col-lg-10 offset-lg-1">At the Ontario Veterinary College, we are educating the next generation of health leaders, fueling discovery and providing our expertise to improve health and well-being across our world. Discover how you can contribute to the ever-evolving world of medicine, care, scientific discovery, and community.</Lead>
        </Container>
      </div>
    )
  }
}

export default ImproveLife

