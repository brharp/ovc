import React from "react"

const Banner = ({id, children, className}) => (
  <div id={id} className={`cover ${className}`}>
    {children}
  </div>
)

Banner.Overlay = ({children, className}) => (
  <div className={`cover-img-overlay py-4 m-0 bg-black-65 h-100 ${className}`}>
    <div className="container h-100">
      <div className="row h-100 align-content-end">
        <div className="col-md-8">
          {children}
        </div>
      </div>
    </div>
  </div>
)


Banner.Title = ({children}) => (
  <h1 className="display-3 text-warning font-weight-bold">
    {children}
  </h1>
)


Banner.Text = ({children}) => (
  <p className="text-light lead font-weight-bold mb-4">
    {children}
  </p>
)


export default Banner

