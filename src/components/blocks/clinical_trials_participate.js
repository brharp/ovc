import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Hero from "../shared/hero2"

const render = ({ id, image, title, subtitle, body, link }) => (
  <>
    <Hero.Image>
      <GatsbyImage image={getImage(image.src)} alt={image.alt} />
    </Hero.Image>
    <Hero.Body id={id}>
      <Hero.Title>
        {title}
      </Hero.Title>
      <Hero.Subtitle>
        {subtitle}
      </Hero.Subtitle>
      <Hero.Text>
        {body}
      </Hero.Text>
      <Hero.Link to={link.url}>
        {link.title}
      </Hero.Link>
      <Link to="/surveys" className="btn btn-lg btn-primary">
        Explore Clinical Surveys
      </Link>
    </Hero.Body>
  </>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "clinical_trials_participate"}) {
      id
      title
      subtitle
      body
      link {
        title
        url
      }
      image {
        src {
          childImageSharp {
            gatsbyImageData(aspectRatio: 1.333333333333333)
          }
        }
        alt
      }
    }
  }
`

export default function ClincalTrialsParticipate () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

