import React from "react"
import { Link } from "gatsby"

export default function Pagination (props) {
  let items = [];
  if ( ! ( props.currentPage === 1 ) ) {
    const prevPage = props.currentPage - 1 === 1 ? props.baseUrl : props.baseUrl + (props.currentPage - 1)
    items.push(
      <li className="page-item">
        <Link to={prevPage} className="page-link">&laquo; Previous Page</Link>
      </li>
    )
  }
  for ( let number = 1; number <= props.numPages; number++ ) {
    const numberPage = number === 1 ? props.baseUrl : props.baseUrl + number.toString()
    const activeClass = number === props.currentPage ? " active" : ""
    items.push(
      <li className={`page-item${activeClass}`} key={number}>
        <Link to={numberPage} className={`page-link`}>
          <span className="sr-only">Page </span>{number}
        </Link>
      </li>
    )
  }
  if ( props.numPages > 0 && props.currentPage < props.numPages ) {
    const nextPage = props.baseUrl + (props.currentPage + 1)
    items.push(
      <li className="page-item">
        <Link to={nextPage} className="page-link">Next Page &raquo;</Link>
      </li>
    )
  }
  const pagination = (
    <ul className="pagination justify-content-center">{items}</ul>
  )
  return pagination
}

