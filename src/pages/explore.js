import React from 'react'
import Layout from '../components/layout'
import About from "../components/explore/about"
import Ideology from "../components/ideology"
import Leadership from "../components/explore/leadership"
import Initiatives from "../components/initiatives"
import Numbers from "../components/explore/numbers"
import Centres from "../components/explore/centres"
import HealthSciences from "../components/explore/hsc"

// Explore page component
const ExplorePage = ( props ) => (
  <Layout>
    <About />
    <Ideology />
    <Leadership />
    <Initiatives />
    <Numbers />
    <Centres />
    <HealthSciences />
  </Layout>
)

export default ExplorePage

