import React from 'react'
import { Container } from "react-bootstrap"

import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from "../components/shared/hero2"

import ExpertsBanner from "../components/blocks/experts_banner"
import ExpertsResearchers from "../components/blocks/experts_researchers"

const ExpertsPage = ( props ) => (
  <Layout>
    <Seo title="Experts" />
    <ExpertsBanner />
    <Container>
      <Hero>
        <Hero.Layer>
          <ExpertsResearchers />
        </Hero.Layer>
      </Hero>
    </Container>
  </Layout>
)

export default ExpertsPage

