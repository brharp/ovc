import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import SEO from '../components/seo'

import GiveDonate from "../components/blocks/give_donate"
import GiveOnline from "../components/blocks/give_online"
import GiveByMail from "../components/blocks/give_bymail"
import GiveByPhone from "../components/blocks/give_byphone"
import GivePetTrust from "../components/blocks/give_pettrust"
import GiveAlumni from "../components/blocks/give_alumni"
import GiveLegacy from "../components/blocks/give_legacy"
import GiveScholarship from "../components/blocks/give_scholarship"


const HowToGive = () => (
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
    <StaticImage className="cover-img" src="../images/university-centre.jpg" alt="" layout="fullWidth" />
    <div className="cover-img-overlay py-4 m-0 bg-black-50 h-100">
      <div className="container h-100">
        <div className="row h-100 align-content-end">
          <div className="col-md-8">
            <h1 className="display-3 text-warning font-weight-bold">
              Give
            </h1>
            <p className="text-light lead font-weight-bold">
              Alumni, clients, corporate partners, donor and friends of the 
              Ontario Veterinary College enhance our capacity to be among the very best
              schools of veterinary medicine in the world, and to improve life by creating
              healthier futures for animals, people and the environment.
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
      <StaticImage src="../images/people.jpg" alt="" />
    </div>
    <div className="col-md order-md-first">
      <h2>Advancing the OVC's Mission</h2>
      <h3 className="text-dark">Your support makes a difference</h3>
      <p class="lead">
        Donations help the Ontario Veterinary College advance its
        mission to educate veterinarians and scientists, create new
        knowledge and provide expert services to improve the 
        health and well-being of animals, people and the environment.
      </p>
      <p>
        <a href="https://ovc.uoguelph.ca/give" className="btn btn-primary btn-lg">
          Explore OVC's Priorities
        </a>
      </p>
    </div>
  </div>
)


const Contact = () => (
  <div className="card border-0 overflow-hidden mb-4">
    <StaticImage src="../images/contact.png" alt=""
                 layout="fullWidth"
                 style={{ maxHeight: "200px" }}
                 className="card-img" />
    <div className="card-img-overlay">
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-content-center">
          <Link to="/contact-0" className="btn btn-primary btn-cta">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </div>
)


const GivePage = ( props ) => (
  <Layout>
    <SEO title="Give" />
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

