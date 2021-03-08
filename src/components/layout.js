import React from 'react'
import PropTypes from 'prop-types'
import DateModified from './dateModified'
import Footer from './footer'
import Header from './header'
import '../styles/global.scss'

const Layout = ({ children, date }) => (
      <>
        <main id="content" className="main-container">
          <Header/>
          {children}
          <DateModified date={date}/>
        </main>
        <Footer />
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  date: PropTypes.string,
}

export default Layout
