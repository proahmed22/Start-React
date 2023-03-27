import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

export default class Layout extends Component {
  render() {
    return (
      <>
      <Nav />
      <Outlet />
      <Footer />
  </>
    )
  }
}
