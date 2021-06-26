import React from 'react'
import { Container, Card, CardGroup } from "react-bootstrap"
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from "../components/shared/hero2"
import LearnBanner from "../components/blocks/learn_banner"
import LearnDvm from "../components/blocks/learn_dvm"
import LearnGrad from "../components/blocks/learn_grad"
import LearnBiom from "../components/blocks/learn_biom"
import LearnFinancialAid from "../components/blocks/learn_financial_aid"
import LearnStudentLife from "../components/blocks/learn_student_life"
import LearnApply from "../components/blocks/learn_apply"
import Discover from "../components/blocks/discover"
import Contact from "../components/blocks/contact"


const LearnPage = (props) => (
  <Layout>
    <SEO title="Learn" />
    <LearnBanner />
    <Container>
      <Hero.Layer>
        <LearnDvm />
      </Hero.Layer>
      <Hero.Layer reverse>
        <LearnGrad />
      </Hero.Layer>
      <Hero.Layer>
        <LearnBiom />
      </Hero.Layer>
      <CardGroup className="my-4 text-center flex-gap-4">
        <Card className="bg-light border-0">
          <LearnFinancialAid />
        </Card>
        <Card className="bg-blue-50 border-0">
          <LearnStudentLife />
        </Card>
        <Card className="bg-light border-0">
          <LearnApply />
        </Card>
      </CardGroup>
      <Discover />
      <Contact />
    </Container>
  </Layout>
)

export default LearnPage

