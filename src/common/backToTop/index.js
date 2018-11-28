import React, { Component } from 'react'

export default class BackToTop extends Component {
  handleScrollTop=() => {
    document.getElementById('jokeContent').scrollTo(0,0)
  }
  render() {
    return (
      <div>
        <button className="backToTop" onClick={()=> {this.handleScrollTop()}}>
          BackToTop
        </button>
      </div>
    )
  }
}