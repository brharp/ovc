import React from 'react'
import Layout from '../components/layout'
import About from "../components/explore/about"
import Ideology from "../components/ideology"
import Leadership from "../components/explore/leadership"
import Initiatives from "../components/initiatives"
import Numbers from "../components/explore/numbers"
import DeptsAndCentres from "../components/explore/deptscentres.js"
import Centres from "../components/explore/centres"
import HealthSciences from "../components/explore/hsc"
import News from "../components/news"

// Explore page component
const ExplorePage = ( props ) => (
  <Layout>
    <About />
    <Ideology />
    <Leadership />
    <Initiatives />
    <Numbers />
    <DeptsAndCentres />
    <Centres />
    <HealthSciences />
    <News />
  </Layout>
)

export default ExplorePage

