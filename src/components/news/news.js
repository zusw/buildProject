import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNewsList } from './store/actionCreators';

class News extends Component {
  componentDidMount() {
    const { getInitList } = this.props;
    getInitList();
  }
  render() {
    const { newsList } = this.props
    return (
      <div className="newsContent">
        {
          newsList.map((item) => {
            return(
              <div className="newsItem" key={item.uniquekey}>
                <a href={item.url}>{item.title}</a>
              </div>
            )
          })
        }
      </div>
    )
  }
}
const mapState = (state) => {
  return {
    newsList: state.getIn(['news', 'newsList'])
  }
}
const mapDispatch = (dispatch) => ({
  getInitList() {
    dispatch(getNewsList())
  }
})
export default connect(mapState, mapDispatch)(News);