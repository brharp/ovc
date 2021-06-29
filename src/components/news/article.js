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
	    <small style={{
	        position: "absolute",
		left: "0",
		bottom: "24px",
		background: "var(--yellow)",
		color: "#333",
		padding: "8px 64px 8px 16px",
		fontWeight: "bold",
		textTransform: "uppercase"
	    }}>{props.tags}</small>
	  </div>
	</div>
	<div className={`col-lg-${isLead?12:6}`}>
	  <h3 style={{ color: "var(--dark)" }}>{props.title}</h3>
	  <p>{ props.summary }</p>
	  <Link to={props.slug} className="btn btn-primary">
	    Read More<span className="sr-only"> about {props.title}</span>
	  </Link>
	</div>
      </div>
   )
}
