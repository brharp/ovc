import React from "react";
import {
  FaHandHoldingUsd,
  FaLocationArrow,
  FaGraduationCap,
  FaHospitalSymbol,
  FaAsterisk
} from "react-icons/fa"

const Icons = {
  "fa-hand-holding-usd": FaHandHoldingUsd,
  "fa-location-arrow"  : FaLocationArrow,
  "fa-graduation-cap"  : FaGraduationCap,
  "fa-hospital-symbol" : FaHospitalSymbol,
  "fa-asterisk"        : FaAsterisk
}

class Icon extends React.Component {
  render() {
    const Ico = Icons[this.props.icon];
    return <Ico className="card-img-top display-4 text-danger mt-4"/>
  }
}

class Resources extends React.Component {
  render() {
    const items = this.props.items || [];
    if (items.length === 0)
      return <></>
    else return (
      <div className="container">
        <div className="card-group my-4 text-center flex-gap-4">
            {
              this.props.items?.map((item, index) => 
                <div className={`card border-0 ${index % 2 === 0 ? 'bg-light' : 'bg-blue-50'}`}
                     key={`item_${index}`} >
                  <Icon icon={item.icon} />
                  <div className="card-body">
                    <h3 className="card-title text-dark">
                      { item.title }
                    </h3>
                    <p className="card-text">{ item.description }</p>
                  </div>
                  <div className="card-footer border-0">
                  {
                    item.links?.map((link, index2) =>
                      <a key={`item_link_${index2}`} href={link.url}
                         className={`btn btn-lg ${index % 2 === 0 ? 
                            'btn-outline-primary' : 'btn-outline-dark'}`}>
                        { link.title }
                      </a>
                    )
                  }
                  </div>
                </div>
              )
            }
        </div>
      </div>
    )
  }
}

export default Resources


