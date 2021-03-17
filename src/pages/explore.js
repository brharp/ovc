import React from 'react';
import Layout from '../components/layout';
import About from "../components/about";
import Ideology from "../components/ideology";
import Leadership from "../components/leadership";
import Initiatives from "../components/initiatives";

// Explore page component
const ExplorePage = ( props ) => (
  <Layout>
    <About />
    <Ideology />
    <Leadership />
    <Initiatives />
  </Layout>
)

export default ExplorePage

