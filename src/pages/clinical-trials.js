import React from 'react'
import { Container, Row, Col } from "react-bootstrap"

import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from "../components/shared/hero2"
import ClinicalTrialsBanner from "../components/blocks/clinical_trials_banner"
import ClinicalTrialsParticipate from "../components/blocks/clinical_trials_participate"
import ClinicalTrialsSteps from "../components/blocks/clinical_trials_steps"
import ClinicalTrialsFaq from "../components/blocks/clinical_trials_faq"
import ClinicalTrialsDonate from "../components/blocks/clinical_trials_donate"
import ClinicalTrialsNewsletter from "../components/blocks/clinical_trials_newsletter"
import ClinicalTrialsSocials from "../components/blocks/clinical_trials_socials"


const ClinicalTrialsPage = (props) => (
  <Layout>
    <Seo title="Clinical Trials" />
    <ClinicalTrialsBanner />
    <Container>
      <div className="bg-white">
        <Hero.Layer>
          <ClinicalTrialsParticipate />
        </Hero.Layer>
      </div>
      <div className="bg-light">
        <ClinicalTrialsSteps />
      </div>
      <div className="bg-blue-50">
        <ClinicalTrialsFaq />
      </div>
      <div className="bg-white">
        <ClinicalTrialsNewsletter />
        <Row>
          <Col md className="mb-4">
            <ClinicalTrialsDonate />
          </Col>
          <Col md className="mb-4">
            <ClinicalTrialsSocials />
          </Col>
        </Row>
      </div>
    </Container>
  </Layout>
)

export default ClinicalTrialsPage

