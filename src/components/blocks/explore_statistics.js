import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Row, Col } from "react-bootstrap"

function Figure( props ) {
  const size = props.size === "lg" ? "display-1" : "display-4";
  return <div className={`${size} text-warning font-weight-bold`}>
    {props.children}
  </div>
}

function Label( props ) {
  const size = props.size === "lg" ? "display-4" : "display-6 text-uppercase";
  return <div className={`${size} text-light`}>
    {props.children}
  </div>
}

function Statistic( props ) {
  return <Col className="md-4 p-4">
    {props.children}
  </Col>
}

export default function ExploreStatistics( props ) {
  return (
    <div className="cover">
      <StaticImage src="../images/portico--banner.jpg" alt="" className="cover-img" />
      <div className="cover-img-overlay bg-black-50 p-4 text-center">
        <Row>
          <Statistic>
            <Figure>116</Figure>
            <Label>Faculty</Label>
          </Statistic>
          <Statistic>
            <Figure>20,829</Figure>
            <Label>Animal &amp; Equine</Label>
          </Statistic>
          <Statistic>
            <Figure>390</Figure>
            <Label>Graduate Students</Label>
          </Statistic>
        </Row>
          <Statistic>
            <Figure size="lg">#1 in Canada</Figure>
            <Label size="lg">#3 in North America</Label>
            <Label size="lg">#5 in the world</Label>
          </Statistic>
        <Row>
        </Row>
        <Row>
          <Statistic>
            <Figure>482</Figure>
            <Label>DVM Students</Label>
          </Statistic>
          <Statistic>
            <Figure>$43,672,071</Figure>
            <Label>Active Research Project Funding</Label>
          </Statistic>
          <Statistic>
            <Figure>6,522</Figure>
            <Label>Food Animal &amp; Field</Label>
          </Statistic>
        </Row>
      </div>
    </div>
  )
}

