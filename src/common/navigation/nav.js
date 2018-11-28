import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import './nav.less'

class Navigation extends Component {
  render() {
    const { changeNav, navIndex } = this.props;
    return (
      <div className="nav">
        <ul>
          <li onClick={() => {changeNav(1)}}>
            <Link to="/" className={navIndex === 1 ? 'active' : ""}>笑话大全</Link>
          </li>
          <li onClick={() => {changeNav(2)}}>
            <Link to="/news" className={navIndex === 2 ? 'active' : ""}>新闻头条</Link>
          </li>
          <li onClick={() => {changeNav(3)}}>
            <Link to="/oneiromancy" className={navIndex === 3 ? 'active' : ""}>周公解梦</Link>
          </li>
          <li onClick={() => {changeNav(4)}}>
            <Link to="/constellation" className={navIndex === 4 ? 'active' : ""}>星座运势</Link>
          </li>
        </ul>
      </div>
    )
  }
}
const mapState = (state) => ({
  navIndex: state.getIn(['nav', 'navIndex'])
})
const mapDispatch = (dispatch) => ({
  changeNav(index) {
    dispatch(actionCreators.navChange(index))
  }
})
export default connect(mapState, mapDispatch)(Navigation);