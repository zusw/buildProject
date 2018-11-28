import React, { Component } from 'react'
import './header.less'
class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul className="h_left">
          <li>logo</li>
          <li>
            <select name="area" id="">
              <option value="SH">上海</option>
              <option value="WH">武汉</option>
              <option value="BJ">北京</option>
              <option value="GZ">广州</option>
            </select>
          </li>
        </ul>
        <div className="h_center">我的休闲一刻</div>
        <ul className="h_right">
          <li>
            <input type="text" placeholder="搜笑话、新闻、星座、周公解梦"/>
          </li>
          <li>
            login
          </li>
        </ul>
      </div>
    )
  }
}
export default Header;