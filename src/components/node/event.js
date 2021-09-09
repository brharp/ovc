import React from "react";
import styled from "styled-components";

const EventCard = styled.li`
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

class Event extends React.Component {
  render() {
    switch (this.props.mode) {
      case "teaser":
        return this.renderTeaser()
      case "card":
        return this.renderCard()
      default:
        return this.renderFull()
    }
  }

  renderFull() {
  }

  renderTeaser() {
  }

  renderCard() {
    return <React.Fragment>
      <EventCard>
        <EventDate>
          <Month>{this.props.field_date.month}</Month>
          <Date>{this.props.field_date.date}</Date>
        </EventDate>
        <EventDetails>
          <EventDetailsContent>
            {this.props.title}
          </EventDetailsContent>
          <EventDetailsMask />
        </EventDetails>
      </EventCard>
    </React.Fragment>
  }
}

export default Event

