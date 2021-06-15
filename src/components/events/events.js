import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const EventWrapper = styled.div`
  align-self: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
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

const EventListItem = styled.li`
  display: grid;
  grid-template-columns: 6em auto;
  grid-template-rows: 6em;
  box-shadow: var(--dark) 1px 1px;
`

const EventDate = styled.div`
  padding: 12px;
  border: solid 8px var(--yellow);
  text-transform: uppercase;
  text-align: center;
  color: white;
  text-shadow: var(--dark) 2px 2px;
`

const Month = styled.div`
`

const Date = styled.div`
  font-size: 1.5em;
  font-weight: 700;
`

const EventDetails = styled.div`
  font-weight: 700;
  font-size: 1em;
  background: white;
  padding: 1em;
  overflow: hidden;
  position: relative;
`

const EventDetailsMask = styled.div`
  background: linear-gradient(0deg,white,transparent 2.5em);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const EventDetailsContent = styled.div`
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

export default function Events(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allNodeEvent(sort: {fields: field_date___value, order: ASC}) {
            edges {
              node {
                field_date {
                  value
                  month: value(formatString: "MMM")
                  date: value(formatString: "D")
                }
                title
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Section>
            <StaticImage src="../../images/dog-banner.jpg"
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
                  <EventList>
                    {
                      data.allNodeEvent?.edges.map(({ node }, index ) => {
                        return <EventListItem key={index}>
                                 <EventDate>
                                   <Month>{node.field_date.month}</Month>
                                   <Date>{node.field_date.date}</Date>
                                 </EventDate>
                                 <EventDetails>
                                   <EventDetailsContent>
                                     {node.title}
                                   </EventDetailsContent>
                                   <EventDetailsMask />
                                 </EventDetails>
                               </EventListItem>
                      })
                    }
                  </EventList>
                </EventWrapper>
            </Container>
              </Mask>
          </Section>
        )
      }}
    />
  )
}


