import React, { Component } from 'react'
import Header from './Header'
import Banner from './Banner'
import Item from './Item'
import Footer from './Footer'

export default class Home extends Component {
  render() {
      return (
          <div>
              <Header />
              <Banner />
              <Item />
              <Footer/>
          </div>
      )
  }
}
