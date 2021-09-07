import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Leadership from "../shared/leadership"

const Block = () => (
  <div className="container my-4">
    <div className="cover my-4">
      <StaticImage src="../../images/explore/leadership.JPG"
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

export default Block

