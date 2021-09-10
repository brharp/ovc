import React from 'react'
import { Container, Row, Col } from "react-bootstrap"

import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from "../components/shared/hero2"
import ResearchBanner from "../components/blocks/research_banner"
import ResearchCentres from "../components/blocks/research_centres"
import ResearchAreas from "../components/blocks/research_areas"
import ResearchExperts from "../components/blocks/research_experts"
import ResearchLearn from "../components/blocks/research_learn"
import ResearchGrad from "../components/blocks/research_grad"
import ResearchParticipate from "../components/blocks/research_participate"
import ResearchDonate from "../components/blocks/research_donate"

const ResearchPage = (props) => (
  <Layout>
    <Seo title="Research" />
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
      <ResearchLearn />
      <ResearchGrad />
      <Row className="mt-4">
        <Col md className="mb-4">
          <ResearchParticipate />
        </Col>
        <Col md className="mb-4">
          <ResearchDonate />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ResearchPage

