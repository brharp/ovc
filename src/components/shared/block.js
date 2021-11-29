import React from "react"

export default function Block (props) {
  return <div id={props.id}>{ props.children }</div>
}

