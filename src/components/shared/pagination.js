import React from "react"
import { Link } from "gatsby"

export default function Pagination (props) {
  let items = [];
  if ( ! ( props.currentPage === 1 ) ) {
    const prevPage = props.currentPage - 1 === 1 ? props.baseUrl : props.baseUrl + (props.currentPage - 1)
    items.push(
      <li className="page-item">
        <Link to={prevPage} className="page-link">&laquo; Newer Articles</Link>
      </li>
    )
  }
  for ( let number = 1; number <= props.numPages; number++ ) {
    const numberPage = number === 1 ? props.baseUrl : props.baseUrl + number.toString()
    const activeClass = number === props.currentPage ? " active" : ""
    items.push(
      <li className={`page-item${activeClass}`} key={number}>
        <Link to={numberPage} className={`page-link`}>{number}</Link>
      </li>
    )
  }
  if ( ! ( props.currentPage === props.numPages ) ) {
    const nextPage = props.baseUrl + (props.currentPage + 1)
    items.push(
      <li className="page-item">
        <Link to={nextPage} className="page-link">Older Articles &raquo;</Link>
      </li>
    )
  }
  const pagination = (
    <div className="pagination justify-content-center">{items}</div>
  )
  return pagination
}

