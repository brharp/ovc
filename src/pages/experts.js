import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import { DropdownButton, Dropdown } from "react-bootstrap"

const Banner = () => (
  <div className="cover">
    <StaticImage className="cover-img" src="../images/university-centre.jpg" alt="" 
                 layout="fullWidth" style={{height: "600px"}}/>
    <div className="cover-img-overlay py-4 m-0 bg-black-50 h-100">
      <div className="container h-100">
        <div className="row h-100 align-content-end">
          <div className="col-md-8">
            <h1 className="display-3 text-warning font-weight-bold">
              Our Experts
            </h1>
            <p className="text-light lead font-weight-bold">
              The Ontario Vetrinary College (OVC) at the University of Guelph is a
              world leader in advancing veterinary science, learning and research to
              improve the lives of animals, people and our plant. With a focus on
              innovation and science-based discover, OVC is training the next
              generation of health leaders to find real-world solutions to global
              challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Researchers = () => (
  <div className="container">
    <div className="row my-4">
      <div className="col-md">
        <StaticImage src="../images/university-centre.jpg" alt="" layout="fullWidth" />
      </div>
      <div className="col-md">
        <h2 className="mt-2">Our Researchers</h2>
        <h3 className="text-dark">The sectors of the OVC</h3>
        <p>
          OVC is home to four world-leading research centres and institutes
          that catalyze discovery and innovation by promoting collaboration,
          creating efficiencies in the research process, translating results to
          internal and external audiences, and magnifying research impact.
          These centres and institutes are pillars of research excellence in the
          College that reflect the substantial and internationally recognized
          expertise of OVC faculty members.
        </p>
        <DropdownButton id="dropdown-basic-button" title="Explore by Department" size="lg">
          <Dropdown.Item href="https://ovc.uoguelph.ca/">Patho</Dropdown.Item>
          <Dropdown.Item href="https://ovc.uoguelph.ca/">Biomed</Dropdown.Item>
          <Dropdown.Item href="https://ovc.uoguelph.ca/">Population Med</Dropdown.Item>
          <Dropdown.Item href="https://ovc.uoguelph.ca/">Clinical Studies</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  </div>
)

const CallToAction = () => (
  <div className="container my-4">
    <div className="cover">
      <StaticImage src="../images/contact.png" alt=""
                   layout="fullWidth"
                   style={{ maxHeight: "200px" }}
                   className="cover-img" />
      <div className="cover-img-overlay">
        <div className="d-flex h-100 justify-content-center align-items-center">
          <div className="btn btn-primary btn-cta">
            Contact To Collaborate
          </div>
        </div>
      </div>
    </div>
  </div>
)


const Page = ( props ) => (
  <Layout>
    <Banner />
    <Researchers />
    <CallToAction />
  </Layout>
)

export default Page

