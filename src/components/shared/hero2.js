import React from "react"
import { Row, Col } from "react-bootstrap"

const Hero = ({children}) => (
  <>
    {children}
  </>
)

Hero.Layer = ({children}) => (
  <Row className="my-4">
    {children}
  </Row>
)

Hero.RowReverse = ({children}) => (
  <Row className="my-4 flex-row-reverse">
    {children}
  </Row>
)

Hero.Image = ({children}) => (
  <Col md>
    {children}
  </Col>
)

Hero.Body = ({children}) => (
  <Col md>
    {children}
  </Col>
)

Hero.Title = ({children}) => (
  <h2 className="mt-2">
    {children}
  </h2>
)

Hero.Subtitle = ({children}) => (
  <h3 className="text-dark">
    {children}
  </h3>
)

Hero.Text = ({children}) => (
  <p>
    {children}
  </p>
)

export default Hero

