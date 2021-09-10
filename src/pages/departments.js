import React from 'react'
import { Container } from "react-bootstrap"

import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from "../components/shared/hero2"
import DepartmentsBanner from "../components/blocks/departments_banner"
import DepartmentsAcademic from "../components/blocks/departments_academic"
import DepartmentsHealthSciencesCentre from "../components/blocks/departments_hsc"
import DepartmentsInstitutes from "../components/blocks/departments_institutes"

const DepartmentsPage = ( props ) => (
  <Layout>
    <Seo title="Departments and Centres" />
    <DepartmentsBanner />
    <Container>
      <Hero.Layer>
        <DepartmentsAcademic />
      </Hero.Layer>
      <Hero.Layer reverse>
        <DepartmentsHealthSciencesCentre />
      </Hero.Layer>
      <Hero.Layer>
        <DepartmentsInstitutes />
      </Hero.Layer>
    </Container>
  </Layout>
)

export default DepartmentsPage

