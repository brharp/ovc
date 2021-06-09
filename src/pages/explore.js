import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

import Leadership from "../components/shared/leadership"
import InsideOVC from "../blocks/insideovc"

import { 
  FaUsers, 
  FaHandHoldingHeart, 
  FaFlask, 
  FaGlobeAfrica, 
  FaCanadianMapleLeaf, 
  FaGraduationCap 
} from "react-icons/fa"



const initiatives = [
  {
    icon: FaUsers,
    heading: "Our College, Our Community",
    copy: "Ensuring our college fully embraces and reflects the diversity of the communities we serve and commits to welcoming and respectful workplace culture",
  },
  {
    icon: FaHandHoldingHeart,
    heading: "The Veterinary Healthcare Revolution",
    copy: "Preparing our students to thrive and lead the veterinary primary healthcare teams of the future",
  },
  {
    icon: FaFlask,
    heading: "Discovery in Translation",
    copy: "Enhancing our impact in translational, comparative and clinical research and training",
  },
  {
    icon: FaGlobeAfrica,
    heading: "Global Health - One Health",
    copy: "Growing our international partnerships and impact to address complex global health challenges",
  },
  {
    icon: FaCanadianMapleLeaf,
    heading: "For the Good of the Nation",
    copy: "Growing our veterinary healthcase workforce to address the evolving health, welfare, food safety and security needs of Ontario and Canada",
  },
  {
    icon: FaGraduationCap,
    heading: "Unleashing Scholarship",
    copy: "Expanding high-calibre research and graduate training to grow impact and enhance our global standing",
  }
]






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



    {/* Strategic Initiatives */}
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
                  OVC Strategic Initiatives
                </h2>
                <p className="text-light lead font-weight-bold">
                  Improving life by creating healthier futures for animals,
                  people and the environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {
          initiatives.map((item, index) =>
            <div className="col-md-6">
              <div className="media m-4">
                <item.icon className="display-4 text-danger mx-4"/>
                <div className="media-body">
                  <h3 className="text-dark">{item.heading}</h3>
                  <hr className="border-danger w-25 mx-0"/>
                  <p>{item.copy}</p>
                </div>
              </div>
            </div>
          )
        }
      </div>
      <p className="text-center py-4">
        <a href="https://ovc.uoguelph.ca" className="btn btn-lg btn-primary">
          Learn more about OVC's Strategic Intiatives
        </a>
      </p>
    </div>




    <InsideOVC />



    {/* Our Structure */}
    <div className="container">
      <div className="row py-4">
        <div className="col-md-7 order-md-2">
          <StaticImage src="../images/dog-banner.jpg" />
        </div>
        <div className="col-md-5">
          <h2>Our Structure</h2>
          <h3 className="text-dark">The sum of our parts</h3>
          <p>
            The Ontario Veterinary College is organized into four
            dynamic academic departments, along with world-leading
            research centres and institutes that promote collaboration,
            catalyze discovery and reflect the internationally
            recognized expertise of our faculty and researchers.
          </p>
          <p>
            <a href="https://ovc.uoguelph.ca" className="btn btn-primary btn-lg">
              Explore Departments &amp; Centres
            </a>
          </p>
        </div>
      </div>
    </div>


    {/* Our Success */}
    <div className="container">
      <div className="row py-4">
        <div className="col-md-7">
          <StaticImage src="../images/dog-banner.jpg" />
        </div>
        <div className="col-md-5">
          <h2>Our Success</h2>
          <h3 className="text-dark">Building the pathway of discovery</h3>
          <p>
            The Ontario Veterinary College established in 1862 in
            Toronto, is the oldest veterinary college in Canada and the
            United States and the only veterinary college in Ontario.
            OVC graduates almost one-third of all Canadian-educated
            veterinarians.
          </p>
          <p>
            <a href="https://ovc.uoguelph.ca" className="btn btn-primary btn-lg">
              Explore the Vault
            </a>
          </p>
        </div>
      </div>
    </div>

  </Layout>
)

export default ExplorePage

