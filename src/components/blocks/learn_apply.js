import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaGraduationCap } from "react-icons/fa"
import { Dropdown, DropdownButton } from "react-bootstrap"

const render = ({id, title, body, dropdown }) => (
  <>
    <FaGraduationCap className="card-img-top display-4 text-danger mt-4"/>
    <div id={id} className="card-body">
      <h3 className="card-title text-dark">
        {title}
      </h3>
      <p className="card-text">
        {body}
      </p>
    </div>
    <div className="card-footer border-0">
      <DropdownButton id={`${id}__dropdown`} title={dropdown.title} size="lg" variant="outline-primary">
        {dropdown.items.map(({title, url}, index) => <Dropdown.Item href={url} key={index}>{title}</Dropdown.Item>)}
      </DropdownButton>
    </div>
  </>
)

const query = graphql`
  query { 
    blockYaml(id: {eq: "learn_apply"}) { 
      title 
      body 
      dropdown {
        title
        items {
          title
          url
        }
      }
    } 
  }
`

export default function LearnApply () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

