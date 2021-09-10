import React from 'react'
import { Container } from "react-bootstrap"
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from "gatsby-plugin-image"
import ExploreBanner from "../components/blocks/explore_banner"
import ExploreWelcome from "../components/blocks/explore_welcome"
import ExploreLeaders from "../components/blocks/explore_leaders"
import ExploreInitiatives from "../components/blocks/explore_initiatives"

import { 
  FaUsers, 
  FaHandHoldingHeart, 
  FaFlask, 
  FaGlobeAfrica, 
  FaCanadianMapleLeaf, 
  FaGraduationCap 
} from "react-icons/fa"


const Initiatives = () => (
  <div className="container my-4">
    <ExploreInitiatives />
    <div className="row">
      {[
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
      ].map((item, index) =>
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
      <a href="https://ovc.uoguelph.ca/strategic-planning/" className="btn btn-lg btn-primary">
        Learn more about OVC's Strategic Intiatives
      </a>
    </p>
  </div>
)




const Statistics = () => (
  <div className="container my-4">
    <div className="cover my-4">
      <StaticImage src="../images/explore/insideOVC.jpg"
                   className="cover-img" aspectRatio={4/1}
                   alt="">
      </StaticImage>
      <div className="cover-img-overlay bg-black-50 ">
        <div className="container h-100">
          <div className="row h-100 justify-content-end align-content-end">
            <div className="p-4 text-right">
              <h2 className="display-2 text-warning font-weight-bold">
                Inside OVC
              </h2>
              <p className="text-light display-4">
                Our rich community and network of research expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cover">
      <StaticImage src="../images/portico--banner.jpg" alt="" className="cover-img" />
      <div className="cover-img-overlay bg-black-50 p-4">
        <div className="row">
          {[
            { figure: "482", label: "DVM students" },
            { figure: "390", label: "Graduate Students" }, 
            { figure: "#1 College", label: "in Canada" }, 
            { figure: "#5 College", label: "in North America" }, 
            { figure: "#7 College", label: "in the world" }, 
            { figure: "116", label: "Faculty" } ,
            { figure: "20,829", label: "Animal & Equine Patient Visits" }, 
            { figure: "6522", label: "Food Animal & Field Service Patient Visits" }
          ].map((node, index) => (
            <div className="col-md-4 text-center p-4">
              <div className="display-4 text-warning font-weight-bold">
                {node.figure}
              </div>
              <div className="text-uppercase text-light font-weight-bold">
                {node.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)


const Structure = () => (
  <div className="container">
    <div className="row py-4">
      <div className="col-md order-md-2">
        <StaticImage src="../images/research/ovc_sign.jpg" alt=""
                     aspectRatio={4/3} />
      </div>
      <div className="col-md">
        <h2>Our Structure</h2>
        <h3 className="text-dark">More than the sum of our parts</h3>
        <p>
            OVC is organized into four dynamic academic departments, eight world-leading research centres and institutes, and our renowned Health Sciences Centre, where we promote collaboration, catalyze discovery and reflect the internationally recognized expertise of our faculty and researchers.
        </p>
        <p>
          <a href="/departments" className="btn btn-primary btn-lg">
            Explore Departments &amp; Centres
          </a>
        </p>
      </div>
    </div>
  </div>
)


const Success = () => (
  <div className="container">
    <div className="row py-4">
      <div className="col-md">
        <StaticImage src="../images/research/historical.jpg" alt=""
                     aspectRatio={4/3} />
      </div>
      <div className="col-md">
        <h2>Our Success</h2>
        <h3 className="text-dark">Building the pathway of discovery</h3>
        <p>
          OVC is the oldest veterinary college in Canada and the United States, and the only veterinary college in Ontario. We graduate almost one-third of all Canadian-educated veterinarians.
        </p>
        <p>
          <a href="https://barkerveterinarymuseum.uoguelph.ca/blog/" className="btn btn-primary btn-lg">
            Explore our History
          </a>
        </p>
      </div>
    </div>
  </div>
)


// Explore page component
const Page = ( props ) => (
  <Layout>
    <Seo title="Explore"/>
    <ExploreBanner />
    <Container className="my-4">
      <ExploreWelcome />
      <ExploreLeaders />
      <Initiatives />
      <Statistics />
      <Structure />
      <Success />
    </Container>
  </Layout>
)

export default Page

