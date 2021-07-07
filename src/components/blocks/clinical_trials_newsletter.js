import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Banner from "../shared/banner"

const render = ({ id, image, title, body, link }) => (
  <Banner>
    <GatsbyImage image={getImage(image)} className="cover-img" alt=""
                 style={{height: "500px"}}/>
    <Banner.Overlay className="p-4 bg-red-80 ">
      <div className="pl-3">
        <h2 className="text-light">
          {title}
        </h2>
        <p className="text-light">
          {body}
        </p>
          <form method="POST"
                className=""
                action="https://maestro.uoguelph.ca/list/action/subscribeSupplyAddress.do?L-Soft.outsideSubscribe=true&lui=jc87gfpb&mContainer=332&mOwner=G1i1h&mListId=HL%23338">
            <div className="form-group">
              <label for="email" className="sr-only">Email address</label>
              <input type="email" className="form-control mb-2" id="email" 
                     name="mAddress" placeholder="Enter email" required></input>
              <button type="submit" class="btn btn-primary">Subscribe</button>
            </div>
          </form>
      </div>
    </Banner.Overlay>
  </Banner>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "clinical_trials_newsletter"}) {
      id
      title
      body
      image {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
`

export default function ClinicalTrialsNewsletter () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

