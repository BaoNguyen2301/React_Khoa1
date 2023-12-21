import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className='container w-50 m-auto'>
        <div className='row'>
          <div className='col-12'>
            <h1>Banner</h1>
            <p>Click the button below to show a toast (positioned with our utilities in the lower right corner) that has been hidden by default with .hide.</p>
          </div>
        </div>
      </div>
    )
  }
}
