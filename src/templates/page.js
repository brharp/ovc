import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"


const Banner = ({title, image}) => (
  <div className="cover">
    <GatsbyImage className="cover-img" image={image} alt="" 
                 layout="fullWidth" style={{height: "600px"}}/>
    <div className="cover-img-overlay py-4 m-0 bg-black-50 h-100">
      <div className="container h-100">
        <div className="row h-100 align-content-end">
          <div className="col-md-8">
            <h1 className="display-3 text-warning font-weight-bold">
              {title}
            </h1>
            <p className="text-light lead font-weight-bold"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
)


export default function Page({data}) {
  return <Layout>
    <Helmet>
      <title>{data.nodePage.title} | {data.site.siteMetadata.title}</title>
    </Helmet>
    <Banner title={data.nodePage.title} image={getBannerImage(data)} />
    <div className="container my-4" dangerouslySetInnerHTML={{__html: data.nodePage.body.processed}}></div>
    <div className="container my-4 pt-4">
      <p className="small">
       Updated {data.nodePage.revision_timestamp} &nbsp;
       <a href={`${data.sitePlugin.pluginOptions.baseUrl}node/${data.nodePage.drupal_internal__nid}`}>
         Edit this page
       </a>
      </p>
    </div>
  </Layout>
}

export const query = graphql`
  query($slug: String) {
    nodePage(fields: {slug: {eq: $slug}}) {
      id
      title
      body {
        processed
      }
      drupal_internal__nid
      revision_timestamp(fromNow: true)
      fields {
        slug
      }
      relationships {
        field_hero_image {
          relationships {
            field_media_image {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
    sitePlugin(name: {eq: "gatsby-source-drupal"}) {
      pluginOptions {
        baseUrl
        apiBase
      }
    }
    site {
      siteMetadata {
        title
      }
      buildTime(fromNow: true)
    }
  }
`

function getBannerImage(data)
{
  return getImage(data.nodePage.relationships.field_hero_image?.relationships.field_media_image.localFile)
}

