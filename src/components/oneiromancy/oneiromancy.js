import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDreamList } from './store/actionCreators'
class Oneiromancy extends Component {
  componentDidMount() {
    const { getDreamLists } = this.props;
    getDreamLists()
  }
  render() {
    const { dreamList } = this.props
    // 周公解梦
    return (
      <div className="dreamContent">
        {
          dreamList && dreamList.map((item) => {
            return(
              <span key={item.id}>{item.name}</span>
            )
          })
        }
      </div>
    )
  }
}
const mapState = (state) => {
  return {
    dreamList: state.getIn(['dream', 'dreamTypeList'])
  }
}
const mapDispatch = (dispatch) => ({
  getDreamLists() {
    dispatch(getDreamList())
  }
})
export default connect(mapState, mapDispatch)(Oneiromancy);