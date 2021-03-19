import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";

const EventWrapper = styled.div`
  padding: 64px 0;
`

const EventList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
  grid-gap: 1rem;
  padding: 1em 0;
  margin: 0;
  list-style: none;
`

const EventListItem = styled.li`
  display: grid;
  grid-template-columns: 6em auto;
  grid-template-rows: 6em;
  flex-grow: 1;
`

const EventDate = styled.div`
  padding: 12px;
  border: solid 8px var(--blue);
  text-transform: uppercase;
  text-align: center;
  color: white;
`

const Month = styled.div`
`

const Date = styled.div`
  font-size: 1.5em;
  font-weight: 700;
`

const EventDetails = styled.div`
  font-weight: 700;
  font-size: 1.2em;
  background: white;
  padding: 1em;
  overflow: hidden;
`


export default function Events(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allNodeEvent(sort: {fields: field_date, order: ASC}) {
            edges {
              node {
                field_date
                month: field_date(formatString: "MMM")
                date: field_date(formatString: "D")
                title
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <EventWrapper>
            <h1 style={{color: "var(--yellow)"}}>Upcoming Events</h1>
            <EventList>
              {
                data.allNodeEvent?.edges.map(({ node }, index ) => {
                  return <EventListItem key={index}>
                             <EventDate>
                               <Month>{node.month}</Month>
                               <Date>{node.date}</Date>
                             </EventDate>
                           <EventDetails>{node.title}</EventDetails>
                         </EventListItem>
                })
              }
            </EventList>
          </EventWrapper>
        )
      }}
    />
  )
}


