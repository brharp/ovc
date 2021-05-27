import React from 'react'
import Layout from '../components/layout'
import About from "../components/explore/about"
import Ideology from "../components/explore/ideology"
import Initiatives from "../components/explore/initiatives"
import Numbers from "../components/explore/numbers"
import Statistics from "../components/explore/statistics"
import DeptsAndCentres from "../components/explore/deptscentres.js"
import Centres from "../components/explore/centres"
import HealthSciences from "../components/explore/hsc"
import News from "../components/news/news"

// Explore page component
const ExplorePage = ( props ) => (
  <Layout>
    <About />
    <Ideology />
    <Initiatives />
    <Numbers />
    <Statistics />
    <DeptsAndCentres />
    <Centres />
    <HealthSciences />
    <News />
  </Layout>
)

export default ExplorePage

