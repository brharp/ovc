import React from "react"
import Pull from "../shared/pull"
import content from "../../../content/explore/about.yml"

class About extends React.Component {
  render() {
    return (
      <Pull title={content.title}
            description={content.description} />
    )
  }
}

export default About

