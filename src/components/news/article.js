import React from "react";
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

export default function Article(props) {
    const isLead = props.lead
    return (
      <div className="row" style={{marginBottom: "3rem"}}>
	<div className={`col-lg-${isLead?12:6}`}>
	  <div style={{position: "relative"}}>
	    { props.image ?
	        <GatsbyImage image={props.image} style={{maxWidth: "100%"}}/> :
	        <StaticImage src="./default.jpg" style={{maxWidth: "100%"}} /> }
	  </div>
	</div>
	<div className={`col-lg-${isLead?12:6}`}>
	  <h3 className="text-dark mb-3">{props.title}</h3>
	  <p><span className="text-muted">{ props.changed }</span></p>
	  <p>{ props.summary }</p>
	  <Link to={props.slug} className="btn btn-primary">
	    Read More<span className="sr-only"> about {props.title}</span>
	  </Link>
	</div>
      </div>
   )
}
