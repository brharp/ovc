import React from "react";
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import Media from "../shared/media"

const Block = styled.div`
  & h2 {
    color: var(--dark);
  }
  & ul {
    list-style: none;
    & li {
      padding-top: 1.4rem;
    }
  }
  & a {
    color: var(--dark);
    text-decoration: underline;
  }
`

const render = ({title, links}) => (
  <Block>
    <div className="media">
      <FaSearch className="display-4 mr-4" />
      <div className="media-body">
        <h2>{title}</h2>
        <ul className="p-0 lead font-weight-bold">
          {links.map(({title, url}) => <li><Link to={url}>{title}</Link></li>)}
        </ul>
      </div>
    </div>
  </Block>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "home_learn"}) {
      id
      title
      links {
        title
        url
      }
    }
  }
`

export default function HomeLearn ({data}) {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

