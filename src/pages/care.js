import React from 'react'
import { Container, CardGroup, Card } from "react-bootstrap"
import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from "../components/shared/hero2"
import CareBanner from "../components/blocks/care_banner"
import CareSpotlight from "../components/blocks/care_spotlight"
import CareHsc from "../components/blocks/care_hsc"
import CareReferral from "../components/blocks/care_referral"
import CareClients from "../components/blocks/care_clients"
import CareHospitals from "../components/blocks/care_hospitals"
import Contact from "../components/blocks/contact"

const CarePage = () => (
  <Layout>
    <Seo title="Get Care" />
    <CareBanner />
    <Container className="my-4">
      <CareSpotlight />
      <Hero.Layer>
        <CareHsc />
      </Hero.Layer>
      <CardGroup className="my-4 text-center flex-gap-4">
        <Card className="bg-light border-0">
          <CareReferral />
        </Card>
        <Card className="bg-blue-50 border-0">
          <CareClients />
        </Card>
        <Card className="bg-light border-0">
          <CareHospitals />
        </Card>
      </CardGroup>
      <Contact />
    </Container>
  </Layout>
)

export default CarePage

