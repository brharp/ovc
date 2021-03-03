import React from "react";

export default function ReadMore(props) {
    return <a href="#" className="btn btn-primary"
    style={{fontSize: "0.875em", padding: ".5rem 1rem"}}
	>{props.label}</a>
}

ReadMore.defaultProps = {
    label: "Read more"
}

