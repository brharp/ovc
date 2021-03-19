import React from "react";
import styled from "styled-components";
import { Container, Card, Popover, OverlayTrigger } from "react-bootstrap";
import content from "../../../content/explore/leadership.yml";

const Section = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
`

const Leaders = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 12px;
`

const LeaderCard = styled(Card)`
  border-left: 4px;
  border-left-color: var(--red);
  border-left-style: solid;
  cursor: pointer;
`

const Leader = (props) => {
  const popover = (
    <Popover id="popover-leader"
        style={{background: "#F7F8FB", maxWidth:"800px"}}
      >
      <Popover.Content>
        <h3>
          <span className="text-dark">
            {props.name}
          </span>
          &nbsp; {props.title}
        </h3>
        <p>{props.bio}</p>
      </Popover.Content>
    </Popover>
  )
  return (
    <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={popover}
        rootClose="true"
      >
      <LeaderCard>
        <Card.Body>
          <Card.Title>{props.unit}</Card.Title>
          <Card.Subtitle>{props.title}</Card.Subtitle>
          <Card.Text>{props.name}</Card.Text>
        </Card.Body>
      </LeaderCard>
    </OverlayTrigger>
  )
}

class Leadership extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <h2>{content.heading}</h2>
          <Leaders>
            {
              content.leaders.map((data,index) => (
                <Leader key={index}
                        unit={data.unit}
                        title={data.title}
                        name={data.name}
                        bio={data.bio}
                />
              ))
            }
          </Leaders>
        </Container>
      </Section>
    )
  }
}

export default Leadership

