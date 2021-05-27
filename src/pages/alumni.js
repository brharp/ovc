import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import {
  FaGraduationCap,
  FaUserCircle,
  FaFileAlt,
  FaComments,
  FaAward,
  FaNewspaper,
  FaUsers
} from "react-icons/fa"
import resources from '../../content/alumni.yml'


const Feature = (props) =>
  <div className="col py-4">
    <div className="media p-4">
      <props.icon className="display-2 text-danger mx-4"/>
      <div className="media-body">
        <h2 className="text-dark">{props.heading}</h2>
        <hr className="border-danger w-25 mx-0"/>
        <p>{props.copy}</p>
        <a href={props.link.url}>
          {props.link.title}
        </a>
      </div>
    </div>
  </div>


const Card = (props) =>
  <div className={`card ${props.className}`}>
    <props.icon className="card-img-top display-3 text-danger mt-4"/>
    <div className="card-body">
      <h2 className="card-title text-dark">
        {props.heading}
      </h2>
      <p className="card-text">
        {props.copy}
      </p>
    </div>
    <div className="card-footer">
      <a className={`btn ${props.linkClasses}`}
         href={props.link.url}>
        {props.link.title}
      </a>
    </div>
  </div>

const CardInfo = (props) =>
  <Card icon={props.icon}
        heading={props.info.heading}
        copy={props.info.copy}
        link={props.info.link}
        className={props.className}
        linkClasses={props.linkClasses}
    />


const AlumniPage = ( props ) => <Layout>
  <div className="card border-0 overflow-hidden"
       style={{maxHeight: "500px"}}>
    <StaticImage src="../images/university-centre.jpg"
                 className="card-img" alt="" />
    <div className="card-img-overlay" style={{background: "rgba(0, 0, 0, 0.5)"}}>
      <div className="container h-100">
        <div className="row h-100 justify-content-start align-content-end">
          <div className="col-8">
            <h1 className="display-1 text-warning">
              OVC Alumni
            </h1>
            <p className="lead text-light">
              The OVC has a long tradition...
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* content */}
  <div className="container">

    {/* Alumni Spotlight */}
    <div className="card border-0 my-4">
      <StaticImage src="../images/people.jpg" alt=""
                   className="card-img" />
      <div className="card-img-overlay p-0">
        <div className="container h-100">
          <div className="row h-100 align-content-end justify-content-start">
            <div className="col-6 bg-black-50 p-4">
              <div className="p-4">
                <p className="text-warning">
                  {resources.spotlight.label}
                </p>
                <h2 className="text-light">
                  {resources.spotlight.heading}
                </h2>
                <p className="lead text-light">
                  {resources.spotlight.copy}
                </p>
                <p>
                  <a className="btn btn-primary" href={resources.spotlight.link.url}>
                    {resources.spotlight.link.title}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Welcome OVC Alumni */}
    <div className="card border-0 my-4">
      <StaticImage src="../images/dog-banner.jpg"
                   className="card-img"
                   alt="">
      </StaticImage>
      <div className="card-img-overlay p-0">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-8 bg-black-50 p-4">
              <div className="media p-4">
                <FaGraduationCap 
                  className="mx-4 display-2 text-info"/>
                <div className="mt-2 media-body">
                  <h2 className="text-light">
                    Welcome OVC Alumni
                  </h2>
                  <p className="text-light">
                    Our reputation as a world-ranking...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Features */}
    <div className="container">
      <div className="row py-4">
        <Feature icon={FaUserCircle}
                 heading={resources.contact.heading}
                 copy={resources.contact.copy}
                 link={resources.contact.link}
               />
        <Feature icon={FaFileAlt}
                 heading={resources.volunteer.heading}
                 copy={resources.volunteer.copy}
                 link={resources.volunteer.link}
               />
      </div>
    </div>
    <div className="container bg-light">
      <div className="row py-4">
        <Feature icon={FaComments}
                 heading={resources.connect.heading}
                 copy={resources.connect.copy}
                 link={resources.connect.link}
               />
        <Feature icon={FaGraduationCap}
                 heading={resources.records.heading}
                 copy={resources.records.copy}
                 link={resources.records.link}
               />
      </div>
    </div>

    {/* OVC Alumni Association */}
    <div className="card border-0 my-4">
      <StaticImage src="../images/dog-banner.jpg"
                   className="card-img"
                   alt="">
      </StaticImage>
      <div className="card-img-overlay bg-black-50 ">
        <div className="container h-100">
          <div className="row h-100 justify-content-end align-content-end">
            <div className="p-4 text-right">
              <h2 className="text-warning display-2 font-weight-bold">
                {resources.association.heading}
              </h2>
              <p className="text-light display-4">
                {resources.association.subheading}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>



    {/* Info Cards */}
    <div className="card-group my-4 text-center">
      <CardInfo icon={FaAward}
                info={resources.awards}
                className="bg-light"
                linkClasses="btn-outline-primary"
          />
      <CardInfo icon={FaNewspaper}
                info={resources.annual_report}
                className="bg-info"
                linkClasses="btn-outline-dark"
          />
      <CardInfo icon={FaUsers}
                info={resources.board_members}
                className="bg-light"
                linkClasses="btn-outline-primary"
          />
    </div>


    {/* Donate and Connect */}
      <div className="row">
        <div className="col">
          <div className="card border-0">
            <StaticImage className="card-img" src="../images/people.jpg" alt=""/>
            <div className="card-img-overlay p-4"
                 style={{background: "rgba(194, 4, 48, 0.8)"}}
                >
              <h2 className="text-light card-title">Donate</h2>
              <p className="text-light">
                See how you can participate in the research at OVC
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
        <div className="col">
          <div className="card border-0">
            <StaticImage className="card-img" src="../images/people.jpg" alt=""/>
            <div className="card-img-overlay"
                 style={{background: "rgba(255, 199, 42, 0.8)"}}
                >
              <h2 class="text-dark card-title">Donate</h2>
              <p className="text-dark">
                See how you can participate in the research at OVC
              </p>
              <p>
                <a className="btn btn-outline-dark" 
                  href="https://ovc.uoguelph.ca">
                  Donate Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

    <div className="row my-4">
      <div className="col">
        <StaticImage src="../images/people.jpg" alt=""/>
      </div>
        <div className="col">
          <h2>Our Researchers</h2>
          <h4 className="text-dark">The sectors of the OVC</h4>
          <p>OVC is home to four world-leading...</p>
          <div className="btn btn-primary">Explore By Department</div>
        </div>
    </div>



    <div className="card border-0 overflow-hidden my-4">
      <StaticImage src="../images/contact.png" alt=""
                   layout="fullWidth"
                   style={{ maxHeight: "200px" }}
                   className="card-img" />
      <div className="card-img-overlay">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-content-center">
            <div className="btn btn-primary btn-lg">
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Layout>

export default AlumniPage

