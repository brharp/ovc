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


const Banner = (props) =>
  <div className="cover">
    <StaticImage className="cover-img" src="../images/university-centre.jpg" alt="" layout="fixed" />
    <div className="cover-img-overlay jumbotron mb-0 bg-black-50">
      <div class="container">
        <h1 class="display-3 text-warning font-weight-bold">{props.title}</h1>
        <p class="text-light lead">{props.lead}</p>
      </div>
    </div>
  </div>


const WelcomeRow = (props) =>
  <div className="col">
    <div className="media m-4">
      <props.icon className="display-4 text-danger mx-4"/>
      <div className="media-body">
        <h3 className="text-dark">{props.heading}</h3>
        <hr className="border-danger w-25 mx-0"/>
        <p>{props.copy}</p>
        <a href={props.link.url}>
          {props.link.title}
        </a>
      </div>
    </div>
  </div>


const AssocRow = (props) =>
  <div className={`card ${props.className}`}>
    <props.icon className="card-img-top display-4 text-danger mt-4"/>
    <div className="card-body">
      <h3 className="card-title text-dark">
        {props.info.heading}
      </h3>
      <p className="card-text">
        {props.info.copy}
      </p>
    </div>
    <div className="card-footer">
      <a className={`btn ${props.linkClasses}`}
         href={props.info.link.url}>
        {props.info.link.title}
      </a>
    </div>
  </div>



const AlumniPage = ( props ) => <Layout>

  <Banner title={resources.banner.title} lead={resources.banner.lead}/>

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
                  <strong>{resources.spotlight.label}</strong>
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
                    {resources.welcome.heading}
                  </h2>
                  <p className="text-light lead">
                    {resources.welcome.copy}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* WelcomeRows */}
    <div className="container">
      <div className="row">
        <WelcomeRow icon={FaUserCircle}
                 heading={resources.contact.heading}
                 copy={resources.contact.copy}
                 link={resources.contact.link}
               />
        <WelcomeRow icon={FaFileAlt}
                 heading={resources.volunteer.heading}
                 copy={resources.volunteer.copy}
                 link={resources.volunteer.link}
               />
      </div>
    </div>
    <div className="container bg-light">
      <div className="row py-4">
        <WelcomeRow icon={FaComments}
                 heading={resources.connect.heading}
                 copy={resources.connect.copy}
                 link={resources.connect.link}
               />
        <WelcomeRow icon={FaGraduationCap}
                 heading={resources.records.heading}
                 copy={resources.records.copy}
                 link={resources.records.link}
               />
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
                {resources.association.heading}
              </h2>
              <p className="text-light lead">
                {resources.association.subheading}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Info Cards */}
    <div className="card-group my-4 text-center">
      <AssocRow icon={FaAward}
                info={resources.awards}
                className="bg-light"
                linkClasses="btn-outline-primary"
          />
      <AssocRow icon={FaNewspaper}
                info={resources.annual_report}
                className="bg-blue-80"
                linkClasses="btn-outline-dark"
          />
      <AssocRow icon={FaUsers}
                info={resources.board_members}
                className="bg-light"
                linkClasses="btn-outline-primary"
          />
    </div>


    {/* Donate and Connect */}
      <div className="row">
        <div className="col-md">
          <div className="card border-0 overflow-hidden mb-4">
            <StaticImage className="card-img" src="../images/people.jpg" alt=""/>
            <div className="card-img-overlay p-4 bg-red-80">
              <h2 className="text-light card-title">
                {resources.donate.heading}
              </h2>
              <p className="text-light">
                {resources.donate.copy}
              </p>
              <p>
                <a className="btn btn-outline-light" 
                  href="{resources.donate.link.url}">
                  {resources.donate.link.title}
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
                {resources.alumni_connect.heading}
              </h2>
              <p className="text-dark">
                {resources.alumni_connect.copy}
              </p>
              <p>
                <a className="btn btn-outline-dark" 
                  href="{resources.alumni_connect.link.url}">
                  {resources.alumni_connect.link.title}
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

