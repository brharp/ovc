import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsSpotlight from "../components/blocks/news_spotlight"
import NewsMore from "../components/blocks/news_more"
import NewsTwitter from "../components/blocks/news_twitter"
import NewsBestFriends from "../components/blocks/news_best_friends"
import NewsCrest from "../components/blocks/news_crest"

export default function NewsPage(data) { return (
  <Layout>
    <SEO title="News" />
    <Container className="my-4">
      <NewsSpotlight />
      <Row className="py-4">
        <Col lg={7}>
          <NewsMore />
        </Col>
        <Col>
          <h1 className="text-dark">Social Feeds</h1>
          <hr className="w-25 ml-0" />
          <NewsTwitter />
        </Col>
      </Row>
      <Row>
        <Col>
          <NewsBestFriends />
        </Col>
        <Col>
          <NewsCrest />
        </Col>
      </Row>
    </Container>
  </Layout>
)}

