import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
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

export default function Events(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allNodeEvent(sort: {fields: field_start_time, order: ASC}) {
            edges {
              node {
                field_start_time
                month: field_start_time(formatString: "MMM")
                date: field_start_time(formatString: "D")
                title
              }
            }
          }
        }
      `}
      render={data => {
        return (
    <div style={{position: "relative", zIndex: "1", overflow: "hidden"}}>
      <StaticImage src="../../images/university-centre.jpg" alt="" layout="fullWidth"
                   style={{position:"absolute",width:"100%",height:"100%",zIndex:"-1"}}/>
      <div style={{background: "rgba(0, 0, 0, .5)"}}>
        <div className="container">
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
        </div>
      </div>
    </div>
        )
      }}
    />
  )
}


