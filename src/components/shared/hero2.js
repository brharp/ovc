import React from "react"
import { Row, Col } from "react-bootstrap"

const Hero = ({children}) => (
  <>
    {children}
  </>
)

Hero.Layer = ({reverse, children}) => (
  <Row className={`my-4${reverse?' flex-row-reverse':''}`}>
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
  <h2>
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

