/*
 * @Author: zusw
 * @Date: 2019-11-19 10:52:55
 * @LastEditTime: 2019-11-26 16:05:18
 * @LastEditors: zusw
 * @Description: 
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getJokesList } from './store/actionCreators';
import BackToTop from '../../common/backToTop'
import { Button } from 'antd'
import { editCustomerInfo } from './service'

class Joke extends Component {
  constructor(props) {
    super(props)
    this.state={
      scrollShow: false,
    }
  }
  componentDidMount(){
    const { getInitList, jokeList } = this.props
    getInitList(jokeList)
    this.bindEvents()
    this.getList()
  }
  getList = async() => {
    const res = await editCustomerInfo()
    console.log(res, 121212)
  }
  bindEvents=()=> {
    document.getElementById('jokeContent').addEventListener('scroll', () => {
      if(document.getElementById('jokeContent').scrollTop > 200) {
        this.setState({ scrollShow: true })
      } else {
        this.setState({ scrollShow: false })
      }
    })
  }
  render() {
    const { scrollShow } = this.state
    const { jokeList } = this.props
    for(let i=0;i<jokeList.length;i++) {
      for(let j=i+1;j<jokeList.length;j++){
        if(jokeList[i].hashId === jokeList[j].hashId){
          jokeList.splice(j,1)
        }
      }
    }
    // 笑话大全
    return (
      <div className="jokeContent" id="jokeContent">
        <Button type='primary' onClick={() => { alert('hello joke') }}>hello</Button>
        {
          jokeList.map((item) => {
            return <p key={item.hashId}>{item.content}</p>
          })
        }
        {
          scrollShow ? (<BackToTop />) : null
        }
      </div>
    )
  }
}
const mapState = (state) => {
  return {
    jokeList: state.getIn(['joke', 'jokeList'])
  }
}
const mapDispatch = (dispatch) => ({
  getInitList(jokeList) {
    dispatch(getJokesList())
  }
})
export default connect(mapState, mapDispatch)(Joke);

// const nowTime = moment('2018/1/1').unix()
// axios.get(`http://v.juhe.cn/joke/content/list.php`, {
//   params: {
//     key: "f6f339dfd466c327dae2a13f0e83bda6",
//     page: 1,
//     pagesize: 20,
//     sort: "asc",
//     time: nowTime
//   },
//   header: {
//     "X-Requested-With": 'XMLHttpRequest',
//     'Content-Type': 'text/html',
//     "charset": "utf-8"
//   },
//   responseType: 'json'
// }).then((res)=>{
//   console.log(res, 'res')
// }).catch((err)=>{
//   console.log(err, 'err')
// })