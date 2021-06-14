import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'

import GiveOnline from "../components/blocks/giveonline"
import GiveByMail from "../components/blocks/givebymail"
import GiveByPhone from "../components/blocks/givebyphone"

import {
  FaPaw,
  FaUsers,
  FaHandHoldingHeart,
  FaUserGraduate,
} from "react-icons/fa"



const options_for_giving = [
  {
    icon: FaPaw,
    heading: "OVC Pet Trust",
    copy: "Make a donation in memory of a pet or to celebrate a " +
          "special occasion. Find out more about the ways we " +
          "help the pets we love live longer healthier lives through " + 
          "new discoveries, learning and healthcare.",
    link: {
      title: "Visit OVC Pet Trust",
      url: "https://ovc.uoguelph.ca/"
    }
  },
  {
    icon: FaUsers,
    heading: "OVC Alumni Association",
    copy: "Stay connected through alumni events, news, volunteer, " +
          "mentorship and continuing education opportunities " +
          "through the OVC Alumni Association.",
    link: {
      title: "Learn More About OVCAA",
      url: "https://ovc.uoguelph.ca/" 
    }
  },
  {
    icon: FaHandHoldingHeart,
    heading: "Leave a Legacy",
    copy: "Making a gift in your will to the Ontario Veterinary College " +
          "is a meaningful way to make a powerful investment in " +
          "the future of veterinary medicine.",
    link: {
      title: "Leave a Gift In Your Will",
      url: "https://ovc.uoguelph.ca/" 
    }
  },
  {
    icon: FaUserGraduate,
    heading: "Student Financial Support",
    copy: "Supporting a student is an investment in the future of " +
          "animal health and welfare. It also encourages students " +
          "to follow their passion to help animals and serve our " +
          "community.",
    link: {
      title: "Give a Scholarship",
      url: "https://ovc.uoguelph.ca/" 
    }
  }
]




const HowToGive = () => (
  <div className="card-group my-4 text-center">
    <div className="card bg-light mr-sm-4 border-0">
      <GiveOnline />
    </div>
    <div className="card bg-blue-50 border-0">
      <GiveByMail />
    </div>
    <div className="card bg-light ml-sm-4 border-0">
      <GiveByPhone />
    </div>
  </div>
)


const GivePage = ( props ) => <Layout>

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

  {/* content */}
  <div className="container">

    {/* Priorities */}
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
          <a href="https://ovc.uoguelph.ca/" className="btn btn-primary btn-lg">
            Explore OVC's Priorities
          </a>
        </p>
      </div>
    </div>


    {/* Donate Now */}
    <div className="row">
      <div className="col">
        <div className="bg-blue-50 p-4">
          <h2 className="text-center text-dark my-4">
            Make a donation to support OVC today
          </h2>
          <p className="text-center">
            <a href="https://ovc.uoguelph.ca" className="btn btn-lg btn-primary">
              Donate Now
            </a>
          </p>
        </div>
      </div>
    </div>



    {/* Options for Giving */}
    <div className="container">
      <div className="row">
        { options_for_giving.map((item, index) =>
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



    <HowToGive />


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

export default GivePage

