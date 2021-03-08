import React from "react"

export default function Feature(props) {
    const zebra = props.index % 2;
    return (
	    <div key={`feature_${props.index}`} style={{
		backgroundColor: zebra ? "var(--red)" : "var(--yellow)",
		padding: "32px 32px 100px",
		position: "relative"
	    }}>
	    <h2 style={{
		color: zebra ? "white" : "#333",
		textTransform: "uppercase"
	    }}>{props.title}</h2>
	    <h3 style={{
		color: zebra ? "var(--yellow)" : "var(--red)",
	    }}>{props.subtitle}</h3>
	    <p style={{
		color: zebra ? "white" : "#333"
	    }}>{props.description}</p>
	    <a href="#" className={`btn btn-outline-${zebra?'light':'dark'}`}
	        style={{ position: "absolute", bottom: "32px", textTransform: "uppercase"
	    }}>See More</a>
	    </div>
    )
}
