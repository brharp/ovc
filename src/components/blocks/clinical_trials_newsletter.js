import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const render = ({id, title, body, image}) => (
  <div className="px-4 py-4 my-4">
  <div id={id} className="cover" style={{boxShadow: "var(--gray) 8px 8px 16px"}}>
    <GatsbyImage image={getImage(image.src)} alt={image.alt} className="cover-img" />
    <div className="cover-img-overlay p-0">
      <div className="container h-100">
        <div className="row h-100 justify-content-start">
          <div className="col-md-6 bg-black-50 p-4 h-100 d-flex flex-column justify-content-center">
            <div className="p-4">
              <h2 className="text-light text-uppercase">
                {title}
              </h2>
              <p className="lead text-light">
                {body}
              </p>
          <form method="POST"
                className=""
                action="https://maestro.uoguelph.ca/list/action/subscribeSupplyAddress.do?L-Soft.outsideSubscribe=true&lui=jc87gfpb&mContainer=332&mOwner=G1i1h&mListId=HL%23338">
            <div className="form-group">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input type="email" className="form-control mb-2" id="email" 
                     name="mAddress" placeholder="Enter email" required></input>
              <button type="submit" class="btn btn-primary">Subscribe</button>
            </div>
          </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
)


const query = graphql`
  query {
    blockYaml(id: {eq: "clinical_trials_newsletter"}) {
      id
      title
      body
      image {
        src {
          childImageSharp {
            gatsbyImageData(height: 500)
          }
        }
        alt
      }
    }
  }
`

export default function ClinicalTrialsNewsletter () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

