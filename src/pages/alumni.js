import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import {
  FaGraduationCap,
  FaUserCircle,
  FaFileAlt,
  FaComments,
  FaAward,
  FaUsers,
  FaNewspaper
} from "react-icons/fa"



const welcome = [
  {
    icon: FaUserCircle,
    heading: "Update Your Contact Info",
    copy: "Stay connected ...",
    link: {
      title: "Connect", url: "https://ovc.uoguelph.ca/"
    }
  },
  {
    icon: FaFileAlt,
    heading: "Volunteer or Host a Student",
    copy: "Pay it forward...",
    link: {
      title: "Find Out More", url: "https://ovc.uoguelph.ca/" 
    }
  },
  {
    icon: FaComments,
    heading: "Connect with Your Class",
    copy: "We can help you find ...",
    link: {
      title: "Email Your Request", url: "https://ovc.uoguelph.ca/" 
    }
  },
  {
    icon: FaGraduationCap,
    heading: "Request a Copy of Your Degree",
    copy: "Misplaced your degree...",
    link: {
      title: "Order a Copy of Your Degree", url: "https://ovc.uoguelph.ca/" 
    }
  }
]


const alumni_association = [
  {
    icon: FaAward,
    className: "bg-light",
    linkClasses: "btn-outline-primary",
    heading: "Award Nominations",
    copy: "Through bursaries, scholarships, and work study programs the",
    link: {
      title: "View Award Winners",
      url: "https://ovc.uoguelph.ca/"
    }
  },
  {
    icon: FaNewspaper,
    className: "bg-blue-80",
    linkClasses: "btn-outline-dark",
    heading: "Annual Report",
    copy: "Educate vetrinarians and scientists, create new knowledge and provide expert services to.",
    link: {
      title: "View Annual Report",
      url: "https://ovc.uoguelph.ca/"
    }
  },
  {
    icon: FaUsers,
    className: "bg-light",
    linkClasses: "btn-outline-primary",
    heading: "OVCAA Board Members",
    copy: "Opus Veterinum Civibus: The Craft of the Veterinarian is for the Good of the Nation",
    link: {
      title: "View Board Members",
      url: "https://ovc.uoguelph.ca/"
    }
  }
]



const AlumniPage = ( props ) => <Layout>

  <div className="cover" style={{height: "600px"}}>
    <StaticImage className="cover-img" src="../images/university-centre.jpg" alt="" layout="fixed" />
    <div className="cover-img-overlay jumbotron mb-0 bg-black-50 h-100">
      <div className="container h-100">
        <div className="row h-100 align-content-end">
          <div className="col-md-8">
            <h1 className="display-3 text-warning font-weight-bold">
              OVC Alumni
            </h1>
            <p className="text-light lead">
              You are a student for a few short years, and you are a member of our
              alumni family for life. Graduates of the Ontario Veterinar College are
              spread across the globe, and their impact can be felt on every aspect of
              animal, human and environmental health.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* content */}
  <div className="container">

    {/* Alumni Spotlight */}
    <div className="cover my-4">
      <StaticImage src="../images/people.jpg" layout="fixed" alt="" className="cover-img" />
      <div className="cover-img-overlay p-0">
        <div className="container h-100">
          <div className="row h-100 align-content-end justify-content-start">
            <div className="col-md-6 bg-black-50 p-4">
              <div className="p-4">
                <p className="text-warning">
                  <strong>Alumni Spotlight</strong>
                </p>
                <h2 className="text-light">
                  OVC Expert Recognized for Work In Promoting Human-Animal Bond
                </h2>
                <p className="lead text-light">
                  A veterinary clinical commmunication expert a the University of 
                  Guelph's Ontario Vetrinary College (OVC) has been recognized 
                  for his work in protecting and promoting the human-animal bond.
                </p>
                <p>
                  <a className="btn btn-primary" href="https://ovc.uoguelph.ca">
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Welcome OVC Alumni */}
    <div className="cover my-4">
      <StaticImage src="../images/dog-banner.jpg"
                   className="cover-img" layout="fixed"
                   alt="">
      </StaticImage>
      <div className="cover-img-overlay p-0">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-md-8 bg-black-50 p-4">
              <div className="media ">
                <FaGraduationCap 
                  className="mx-4 display-2 text-info"/>
                <div className="mt-2 media-body">
                  <h2 className="text-light">
                    Welcome OVC Alumni
                  </h2>
                  <p className="text-light lead">
                    Our reputation as a world-ranking college of veterinary medicine is
                    connected to the many successes of our esteemed alumni. Wherever
                    your OVC degree takes you, please remember that you are always 
                    welcome home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Welcome Rows */}
    <div className="container">
      <div className="row">
        { welcome.map((item, index) =>
            <div className="col-md-6">
              <div className="media m-4">
                <item.icon className="display-4 text-danger mx-4"/>
                <div className="media-body">
                  <h3 className="text-dark">{item.heading}</h3>
                  <hr className="border-danger w-25 mx-0"/>
                  <p>{item.copy}</p>
                  <a href={item.link.url}>
                    {item.link.title}
                  </a>
                </div>
              </div>
            </div> )}
      </div>
    </div>

    {/* OVC Alumni Association */}
    <div className="cover my-4">
      <StaticImage src="../images/dog-banner.jpg"
                   className="cover-img" layout="fixed"
                   alt="">
      </StaticImage>
      <div className="cover-img-overlay bg-black-50 ">
        <div className="container h-100">
          <div className="row h-100 justify-content-end align-content-end">
            <div className="p-4 text-right">
              <h2 className="display-4 text-warning font-weight-bold">
                OVC Alumni Association
              </h2>
              <p className="text-light lead">
                Stay connected with your class and your school.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Info Cards */}
    <div className="card-group my-4 text-center">
      {
        alumni_association.map((item, index) =>
          <div key={index} className={`card ${item.className}`}>
            <item.icon className="card-img-top display-4 text-danger mt-4"/>
            <div className="card-body">
              <h3 className="card-title text-dark">
                {item.heading}
              </h3>
              <p className="card-text">
                {item.copy}
              </p>
            </div>
            <div className="card-footer">
              <a className={`btn ${item.linkClasses}`}
                 href={item.link.url}>
                {item.link.title}
              </a>
            </div>
          </div>
        )
      }
    </div>


    {/* Donate and Connect */}
      <div className="row">
        <div className="col-md">
          <div className="card border-0 overflow-hidden mb-4">
            <StaticImage className="card-img" src="../images/people.jpg" alt=""/>
            <div className="card-img-overlay p-4 bg-red-80">
              <h2 className="text-light card-title">
                Donate
              </h2>
              <p className="text-light">
                See how you can participate in the research at OVC.
              </p>
              <p>
                <a className="btn btn-outline-light" 
                  href="https://ovc.uoguelph.ca">
                  Donate Now
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card border-0 overflow-hidden mb-4">
            <StaticImage className="card-img" src="../images/people.jpg" alt=""/>
            <div className="card-img-overlay bg-yellow-80">
              <h2 class="text-dark card-title">
                Connect With Us
              </h2>
              <p className="text-dark">
                Do you have a great story to share about an OVC graduate you think we should hear 
                about? Do you want to speak to someone about how to get involved iwth the OVC 
                Alumni Association of thow to organize a reunion of your class?
              </p>
              <p>
                <a className="btn btn-outline-dark" 
                  href="https://ovc.uoguelph.ca">
                  View Contact Info
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>



    <div className="card border-0 overflow-hidden mb-4">
      <StaticImage src="../images/contact.png" alt=""
                   layout="fullWidth"
                   style={{ maxHeight: "200px" }}
                   className="card-img" />
      <div className="card-img-overlay">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-content-center">
            <div className="btn btn-primary btn-cta">
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Layout>

export default AlumniPage

