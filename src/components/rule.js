import React from "react";

export default function Rule(props) {
    return <hr style={{
	background: props.color,
	margin: "12px 0 24px",
	width: props.width,
    }}/>
}

Rule.defaultProps = {
    width: "100%",
    color: "var(--uog-yellow)",
}
