import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap"
import {
  FaHandHoldingUsd,
  FaLocationArrow,
  FaGraduationCap,
  FaHospitalSymbol,
  FaAsterisk
} from "react-icons/fa"

const Icons = {
  "fa-hand-holding-usd": FaHandHoldingUsd,
  "fa-location-arrow"  : FaLocationArrow,
  "fa-graduation-cap"  : FaGraduationCap,
  "fa-hospital-symbol" : FaHospitalSymbol,
  "fa-asterisk"        : FaAsterisk
}

const Section = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`

const Layout = styled.div`
  display: grid;
  grid-gap: 3rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Region = styled.div`
  background: rgba(108, 117, 125, 0.1);
  padding: 3rem;
  text-align: center;
  & h2 {
    color: var(--dark);
  }
  &:nth-child(2) {
    background: rgba(105, 163, 185, 0.1);
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
`

class Icon extends React.Component {
  render() {
    const Ico = Icons[this.props.icon];
    return <Ico style={{marginRight: "1rem", marginBottom: "1rem"}}/>
  }
}

class Resources extends React.Component {
  render() {
    const resources = this.props.resources
    return (
      <Section>
        <Container>
          <Layout>
            {
              resources.map((item, index) => 
                <Region key={`item_${index}`}>
                  <h2>
                    <Icon icon={item.field_icon} />
                    <br/>
                    { item.field_heading }
                  </h2>
                  <p>{ item.field_copy }</p>
                  {
                    item.field_link &&
                      <a href={item.field_link.uri}
                         className='btn btn-lg btn-outline-dark'>
                        { item.field_link.title }
                      </a>
                  }
                </Region>
              )
            }
          </Layout>
        </Container>
      </Section>
    )
  }
}

export default Resources


