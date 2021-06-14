import React from "react"

const Media = ({children}) => (
  <div className="media m-4">
    {children}
  </div>
)

Media.Body = ({title, body, link}) => (
  <div className="media-body">
    <h3 className="text-dark">{title}</h3>
    <hr className="border-danger w-25 mx-0"/>
    <p>{body}</p>
    <a href={link.url}>
      {link.title}
    </a>
  </div>
)

export default Media

