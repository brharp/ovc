import React from "react";

export default function ReadMore(props) {
    return <a href="https://ovc.uoguelph.ca/" className="btn btn-primary"
	>{props.label}</a>
}

ReadMore.defaultProps = {
    label: "Read more"
}

