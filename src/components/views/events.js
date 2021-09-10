import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Event from "../node/event"

const EventWrapper = styled.div`
  align-self: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  position: relative;
  @media (min-width: 1432px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`

const EventList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
  grid-gap: 1rem;
  padding: 1em 0;
  margin: 0;
  list-style: none;
`

const Section = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 1368px;
  margin-left: auto;
  margin-right: auto;
  h2 {
    color: var(--light);
    text-shadow: var(--dark) 2px 2px;
  }
  & > * {
    position: relative;
    grid-area: 1/1;
    justify-self: stretch;
  }
`

const Mask = styled.div`
  background: rgba(0, 0, 0, 0.6);
  display: grid;
`

const MoreLink = styled.div`
  text-align: right;
  @media (min-width: 768px) {
    position: absolute;
    top: 3rem;
    right: 3rem;
  }
`

export default function Events(props) {
  return <React.Fragment>
    <Section>
      <StaticImage src="../../images/brick_leaf.jpg"
                   alt=""
                   layout="fixed"
                   style={{
                     position: "absolute",
                     top: "50%",
                     left: "50%",
                     transform: "translateX(-50%) translateY(-50%)"
                   }} />
      <Mask>
        <Container>
          <EventWrapper>
            <h2>Upcoming Events</h2>
            <MoreLink>
              <Link to="/events" className="text-light">View Events Calendar</Link>
            </MoreLink>
            <EventList>
              {
                props.allNodeEvent?.edges.map(({ node }, index ) => {
                  return <Event {...node} mode="card" />
                })
              }
            </EventList>
          </EventWrapper>
        </Container>
      </Mask>
    </Section>
  </React.Fragment>
}

