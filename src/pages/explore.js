import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { StaticImage } from "gatsby-plugin-image"
import Leadership from "../components/shared/leadership"

import { 
  FaUsers, 
  FaHandHoldingHeart, 
  FaFlask, 
  FaGlobeAfrica, 
  FaCanadianMapleLeaf, 
  FaGraduationCap 
} from "react-icons/fa"


const Banner = () => (
  <div className="cover">
    <StaticImage className="cover-img" src="../images/explore/30344872351_60c2261186_o.jpg" alt="" 
                 layout="fullWidth" style={{height: "600px"}}/>
    <div className="cover-img-overlay py-4 m-0 bg-black-50 h-100">
      <div className="container h-100">
        <div className="row h-100 align-content-end">
          <div className="col-md-8">
            <h1 className="display-3 text-warning font-weight-bold">
              Explore OVC
            </h1>
            <p className="text-light lead font-weight-bold">
              The Ontario Veterinary College (OVC) at the University of Guelph is a
              world leader in advancing veterinary science, learning and research to
              improve the lives of animals, people and our planet. With a focus on
              innovation and science-based discovery, the xOVC is training the next
              generation of health leaders to find real-world solutions to global
              challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)


const Welcome = () => (
  <div className="container my-4">
    <div className="row bg-blue-50 no-gutters">
      <div className="col-lg-6 ">
        <StaticImage src="../images/explore/Dean2.jpg" alt="" className="h-100" />
      </div>
      <div className="col-lg-6 p-4">
        <div className="media">
          <div className="media-body">
            <h2 className="text-dark">
              <FaGraduationCap className="mr-4 display-3 text-info"/> 
              A Dean's Welcome 
            </h2>
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
)


const Leaders = () => (
  <div className="container my-4">
    <div className="cover my-4">
      <StaticImage src="../images/explore/leadership.JPG"
                   className="cover-img" aspectRatio={4/1}
                   alt="">
      </StaticImage>
      <div className="cover-img-overlay bg-black-50 ">
        <div className="container h-100">
          <div className="row h-100 justify-content-end align-content-end">
            <div className="p-4 text-right">
              <h2 className="display-2 text-warning font-weight-bold">
                Leadership at the OVC
              </h2>
              <p className="text-light display-4">
                Excellence in innovation, education and service
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Leadership />
  </div>
)


const Initiatives = () => (
  <div className="container my-4">
    <div className="cover my-4">
      <StaticImage src="../images/explore/hans-peter-gauster-3y1zF4hIPCg-unsplash.jpg"
                   className="cover-img" aspectRatio={4/1}
                   alt="">
      </StaticImage>
      <div className="cover-img-overlay bg-black-50 ">
        <div className="container h-100">
          <div className="row h-100 justify-content-end align-content-end">
            <div className="p-4 text-right">
              <h2 className="display-2 text-warning font-weight-bold">
                OVC Strategic Initiatives
              </h2>
              <p className="text-light display-4">
                Improving life by creating healthier futures for animals,
                people and the environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      <StaticImage src="../images/explore/OVC_front.jpg"
                   className="cover-img" aspectRatio={4/1}
                   alt="">
      </StaticImage>
      <div className="cover-img-overlay bg-black-50 ">
        <div className="container h-100">
          <div className="row h-100 justify-content-end align-content-end">
            <div className="p-4 text-right">
              <h2 className="display-2 text-warning font-weight-bold">
                Inside the OVC
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
            { figure: "480", label: "DVM students" },
            { figure: "#1 in Canada", label: "College Ranking" }, 
            { figure: "118", label: "Faculty" }, 
            { figure: "4", label: "Research Chairs" }, 
            { figure: "$85,000", label: "Total Research Funding" }, 
            { figure: "8", label: "# of Centres" }
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
        <h3 className="text-dark">The sum of our parts</h3>
        <p>
          The Ontario Veterinary College is organized into four
          dynamic academic departments, along with world-leading
          research centres and institutes that promote collaboration,
          catalyze discovery and reflect the internationally
          recognized expertise of our faculty and researchers.
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
          The Ontario Veterinary College established in 1862 in
          Toronto, is the oldest veterinary college in Canada and the
          United States and the only veterinary college in Ontario.
          OVC graduates almost one-third of all Canadian-educated
          veterinarians.
        </p>
        <p>
          <a href="https://barkerveterinarymuseum.uoguelph.ca/blog/" className="btn btn-primary btn-lg">
            Explore the Vault
          </a>
        </p>
      </div>
    </div>
  </div>
)


// Explore page component
const Page = ( props ) => (
  <Layout>
    <SEO title="Explore"/>
    <Banner />
    <Welcome />
    <Leaders />
    <Initiatives />
    <Statistics />
    <Structure />
    <Success />
  </Layout>
)

export default Page

