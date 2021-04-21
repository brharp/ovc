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
  padding-top: 3rem;
  padding-bottom: 3rem;
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
    const items = this.props.items || [];
    if (items.length === 0)
      return <></>
    else return (
      <Section>
        <Container>
          <Layout>
            {
              this.props.items?.map((item, index) => 
                <Region key={`item_${index}`}>
                  <h2>
                    <Icon icon={item.icon} />
                    <br/>
                    { item.title }
                  </h2>
                  <p>{ item.description }</p>
                  {
                    item.links?.map((link, index) =>
                      <a key={`item_link_${index}`} href={link.url}
                         className='btn btn-lg btn-outline-dark'>
                        { link.title }
                      </a>
                    )
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


