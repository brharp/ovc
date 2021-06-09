import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const title = "Inside the OVC"
const subtitle = "Our rich community and network of research expertise"

const Header = () => (
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
              {title}
            </h2>
            <p className="text-light lead font-weight-bold">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Content = ({edges}) => edges.map(({node}, index) =>
  <div className="col-md-4 text-center p-4">
    <div className="display-4 text-warning font-weight-bold">
      {node.figure}
    </div>
    <div className="text-uppercase text-light font-weight-bold">
      {node.label}
    </div>
  </div>
)

const Block = () => <StaticQuery
  query={graphql`
    query {
      allInsideovcYaml {
        edges {
          node {
            figure
            label
          }
        }
      }
    }
  `}
  render={(data) => (
    <div className="container my-4">
      <Header />
      <div className="cover">
        <StaticImage src="portico--banner.jpg" alt="" className="cover-img" />
        <div className="cover-img-overlay bg-black-50 p-4">
          <div className="row">
            <Content edges={data.allInsideovcYaml.edges} />
          </div>
        </div>
      </div>
    </div>
  )}
/>

export default Block

