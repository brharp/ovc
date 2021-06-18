import React from 'react'
import { Container, Row, Col } from "react-bootstrap"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from "../components/shared/hero2"
import ResearchBanner from "../components/blocks/research_banner"
import ResearchCentres from "../components/blocks/research_centres"
import ResearchAreas from "../components/blocks/research_areas"
import ResearchExperts from "../components/blocks/research_experts"
import ResearchPartners from "../components/blocks/research_partners"
import ResearchLearn from "../components/blocks/research_learn"
import ResearchGrad from "../components/blocks/research_grad"
import ResearchParticipate from "../components/blocks/research_participate"
import ResearchDonate from "../components/blocks/research_donate"
import ResearchContact from "../components/blocks/research_contact"

const ResearchPage = (props) => (
  <Layout>
    <SEO title="Research" />
    <ResearchBanner />
    <Container>
      <Hero.Layer>
        <ResearchCentres />
      </Hero.Layer>
      <Hero.Layer reverse>
        <ResearchAreas />
      </Hero.Layer>
      <Hero.Layer>
        <ResearchExperts />
      </Hero.Layer>
      <Hero.Layer reverse>
        <ResearchPartners />
      </Hero.Layer>
      <ResearchLearn />
      <ResearchGrad />
      <Row>
        <Col md>
          <ResearchParticipate />
        </Col>
        <Col md>
          <ResearchDonate />
        </Col>
      </Row>
      <ResearchContact />
    </Container>
  </Layout>
)

export default ResearchPage

