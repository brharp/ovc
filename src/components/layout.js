import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from "react-bootstrap"
import DateModified from './dateModified'
import Footer from './shared/footer'
import Header from './shared/header'
import FooterLogo from "../components/blocks/footer_logo"
import FooterSocial from "../components/blocks/footer_social"
import FooterAbout from "../components/blocks/footer_about"
import FooterUnits from "../components/blocks/footer_units"
import FooterNavigation from "../components/blocks/footer_navigation"
import '../styles/global.scss'

const Layout = ({ children, date }) => (
  <>
    <main id="content" className="main-container">
      <Header/>
      {children}
      <DateModified date={date}/>
    </main>
    <div className="bg-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <FooterLogo />
            <FooterSocial />
          </Col>
          <Col md={8}>
            <Row>
              <Col>
                <FooterAbout />
              </Col>
            </Row>
            <Row>
              <Col md>
                <FooterUnits />
              </Col>
              <Col md>
                <FooterNavigation />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  date: PropTypes.string,
}

export default Layout
