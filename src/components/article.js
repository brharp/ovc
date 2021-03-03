import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Rule from "./rule";
import ReadMore from "./readmore";

export default function Article(props) {
    const isLead = props.lead
    return (
      <div className="row">
	<div className={`col-lg-${isLead?12:6}`}>
	  <div style={{position: "relative"}}>
	    <GatsbyImage image={props.image}/>
	    <small style={{
	        position: "absolute",
		left: "0",
		bottom: "24px",
		background: "var(--uog-yellow)",
		color: "#333",
		padding: "8px 64px 8px 16px",
		fontWeight: "bold",
		textTransform: "uppercase"
	    }}>{props.tags}</small>
	  </div>
	</div>
	<div className={`col-lg-${isLead?12:6}`}>
	  <h3 style={{color: "#333", marginTop: "0"}}>{props.title}</h3>
	  <Rule width="25%"/>
	  <p dangerouslySetInnerHTML={{__html: props.summary}}></p>
	  <ReadMore/>
	</div>
      </div>
   )
}