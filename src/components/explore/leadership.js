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
`

const Leader = (props) => {
  const popover = (
    <Popover id="popover-leader"
        style={{margin: "0 auto", maxWidth:"90%"}}
      >
      <Popover.Content>
      <h3>Popover title</h3>
      <p>Lorem ipsum dolor sit amet. Est accusantium explicabo est beatae eveniet sed labore similique. Maiores corrupti in earum voluptatem ut consectetur voluptatem qui galisum aspernatur sit adipisci perspiciatis! Qui asperiores doloremque ut voluptatem ullam et sint nostrum sed tempora placeat id nemo deserunt qui dolores totam.</p>

      <p>Non nihil dolorem et inventore nesciunt ut voluptatibus totam ex vero internos ex dignissimos ipsa non voluptates earum. Eligendi numquam qui consequatur cupiditate a vitae consequatur est maiores voluptas. Eum deserunt porro et voluptas eaque aut recusandae reiciendis aut soluta voluptate sed libero ducimus vel eaque beatae!</p>

      <p>Commodi facere qui esse suscipit aut galisum cumque ea unde itaque est omnis molestias. Aut incidunt illum id iusto temporibus qui magni dolores et beatae itaque. Eum minima omnis quo suscipit quisquam id voluptatibus necessitatibus rem autem dolores vel voluptas dolorem.</p>
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
                        name={data.name}/>
              ))
            }
          </Leaders>
        </Container>
      </Section>
    )
  }
}

export default Leadership

