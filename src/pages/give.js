import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import Seo from '../components/seo'

import GiveDonate from "../components/blocks/give_donate"
import GiveOnline from "../components/blocks/give_online"
import GiveByMail from "../components/blocks/give_bymail"
import GiveByPhone from "../components/blocks/give_byphone"
import GivePetTrust from "../components/blocks/give_pettrust"
import GiveAlumni from "../components/blocks/give_alumni"
import GiveLegacy from "../components/blocks/give_legacy"
import GiveScholarship from "../components/blocks/give_scholarship"
import Contact from "../components/blocks/contact"


const HowToGive = () => (
  <>
    <h2 className="text-center display-4 my-4 font-weight-bold">How to Give</h2>
    <div className="card-group my-4 text-center flex-gap-4">
      <div className="card bg-light border-0">
        <GiveOnline />
      </div>
      <div className="card bg-blue-50 border-0 ">
        <GiveByMail />
      </div>
      <div className="card bg-light border-0 ">
        <GiveByPhone />
      </div>
    </div>
  </>
)


const OptionsForGiving = () => (
  <div className="row">
    <div className="col-md-6">
      <GivePetTrust />
    </div>
    <div className="col-md-6">
      <GiveAlumni />
    </div>
    <div className="col-md-6">
      <GiveLegacy />
    </div>
    <div className="col-md-6">
      <GiveScholarship />
    </div>
  </div>
)


const Banner = () => (
  <div className="cover" style={{height: "600px"}}>
    <StaticImage className="cover-img" src="../images/home/2979_ovcWINDOW_10.jpg" alt="" layout="fullWidth" />
    <div className="cover-img-overlay py-4 m-0 bg-black-50 h-100">
      <div className="container h-100">
        <div className="row h-100 align-content-end">
          <div className="col-md-8">
            <h1 className="display-3 text-warning font-weight-bold">
              Give
            </h1>
            <p className="text-light lead font-weight-bold mb-4">
              We’re grateful for the OVC alumni, clients, partners and friends who support us to achieve our mission as one of the world’s leading veterinary schools and research institutions
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)



const Priorities = () => (
  <div className="row py-4">
    <div className="col-md">
      <StaticImage src="../images/give_feature.jpg" alt="A couple standing caringly over their dog" 
                   aspectRatio={1.333333333333333} />
    </div>
    <div className="col-md order-md-first">
      <h2>Advancing OVC's Mission</h2>
      <h3 className="text-dark">Your support makes a difference</h3>
      <p className="lead">
        Donations help OVC advance its mission to educate veterinarians and scientists, create knowledge through research, and provide expert services.
      </p>
      <p>
        <Link to="/explore#explore_initiatives" className="btn btn-primary btn-lg">
          Explore OVC's Priorities
        </Link>
      </p>
    </div>
  </div>
)



const GivePage = ( props ) => (
  <Layout>
    <Seo title="Give" />
    <Banner />
    <div className="container">
      <Priorities />
      <GiveDonate />
      <OptionsForGiving />
      <HowToGive />
      <Contact />
    </div>
  </Layout>
)

export default GivePage

