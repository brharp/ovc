import React from 'react'
import { Container } from "react-bootstrap"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from "../components/shared/hero2"
import WorkBanner from "../components/blocks/work_banner"
import WorkOpportunities from "../components/blocks/work_opportunities"
import WorkTestimonials from "../components/blocks/work_testimonials"
import WorkDiscover from "../components/blocks/work_discover"
import WorkContact from "../components/blocks/work_contact"

const WorkPage = ( props ) => (
  <Layout>
    <SEO title="Work" />
    <WorkBanner />
    <Container fluid>
      <Hero.Layer>
        <WorkOpportunities />
      </Hero.Layer>
      <WorkTestimonials />
      <WorkDiscover />
      <WorkContact />
    </Container>
  </Layout>
)

export default WorkPage

