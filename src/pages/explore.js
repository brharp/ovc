import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import { FaGraduationCap } from "react-icons/fa"
import Leadership from "../components/shared/leadership"

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

    {/* Banner */}
    <div className="cover">
      <StaticImage className="cover-img" src="../images/university-centre.jpg" alt="" 
                   layout="fullWidth" style={{height: "600px"}}/>
      <div className="cover-img-overlay py-4 m-0 bg-black-50 h-100">
        <div className="container h-100">
          <div className="row h-100 align-content-end">
            <div className="col-md-8">
              <h1 className="display-3 text-warning font-weight-bold">
                Explore OVC
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


    {/* Dean's Welcome */}
    <div className="container my-4">
      <div className="row bg-blue-50 no-gutters">
        <div className="col-lg-4 order-lg-2">
          <StaticImage src="../images/people.jpg" alt=""  />
        </div>
        <div className="col-lg-8 p-4">
          <div className="media">
            <FaGraduationCap className="mr-4 display-3 text-info"/>
            <div className="media-body">
              <h2 className="text-dark">A Dean's Welcome</h2>
              <p>
                For more than 160 years, the simple but powerful call
                to duty - Opus Veterinum Civibus - The Craft of the
                Veterinarian is for the Good of the Nation - has guided to
                Ontario Veterinary College on its journey to excellence,
                supporting the evolving relationship between humans and
                animals, advancing veterinary medicine and tackling our
                most pressing health and food security issues.
              </p>
              <p>
                Today, more than ever, innovation and science-based
                discovery are critical to the health and sustainability
                of our planet. Our students, our researchers and our
                graduates boast a broad skillset, creativity and passion
                to ensure the health and wellbing of our changing world
                and to ensure we are prepared for whatever the future
                holds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Leadership */}
    <div className="container my-4">
      <div className="cover my-4">
        <StaticImage src="../images/dog-banner.jpg"
                     className="cover-img" 
                     alt="">
        </StaticImage>
        <div className="cover-img-overlay bg-black-50 ">
          <div className="container h-100">
            <div className="row h-100 justify-content-end align-content-end">
              <div className="p-4 text-right">
                <h2 className="display-4 text-warning font-weight-bold">
                  Leadership at the OVC
                </h2>
                <p className="text-light lead">
                  Excellence in innovation, education and service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Leadership />
    </div>

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

