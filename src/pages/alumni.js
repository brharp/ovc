import React from 'react'
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap"
import Layout from '../components/layout'
import SEO from '../components/seo'
import AlumniBanner from "../components/blocks/alumni_banner"
import AlumniSpotlight from "../components/blocks/alumni_spotlight"
import AlumniWelcome from "../components/blocks/alumni_welcome"
import AlumniContactInfo from "../components/blocks/alumni_contact_info"
import AlumniReunion from "../components/blocks/alumni_reunion"
import AlumniVolunteer from "../components/blocks/alumni_volunteer"
import AlumniDegree from "../components/blocks/alumni_degree"
import AlumniAssociation from "../components/blocks/alumni_association"
import AlumniAwards from "../components/blocks/alumni_awards"
import AlumniAnnualReport from "../components/blocks/alumni_annual_report"
import AlumniBoardMembers from "../components/blocks/alumni_board_members"
import AlumniDonate from "../components/blocks/alumni_donate"
import AlumniConnect from "../components/blocks/alumni_connect"
import AlumniContact from "../components/blocks/alumni_contact"

const AlumniPage = () => (
  <Layout>
    <SEO title="Alumni" />
    <AlumniBanner/>
    <Container>
      <AlumniSpotlight/>
      <AlumniWelcome />
      <Row>
        <Col md>
          <AlumniContactInfo/>
        </Col>
        <Col md>
          <AlumniVolunteer/>
        </Col>
      </Row>
      <Row>
        <Col md>
          <AlumniReunion/>
        </Col>
        <Col md>
          <AlumniDegree/>
        </Col>
      </Row>
      <AlumniAssociation/>
      <CardGroup className="my-4 text-center flex-gap-4">
        <Card className="bg-light border-0">
          <AlumniAwards/>
        </Card>
        <Card className="bg-blue-50 border-0">
          <AlumniAnnualReport/>
        </Card>
        <Card className="bg-light border-0">
          <AlumniBoardMembers/>
        </Card>
      </CardGroup>
      <Row>
        <Col md>
          <AlumniDonate />
        </Col>
        <Col md>
          <AlumniConnect />
        </Col>
      </Row>
      <AlumniContact />
    </Container>
  </Layout>
)

export default AlumniPage

