import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
// 组件引入
import Header from './common/header/header'
import Navigation from './common/navigation/nav'
import ShowMore from './components/showMore/showMore'
import Constellation from './components/constellation/constellation'
import Oneiromancy from './components/oneiromancy/oneiromancy'
import News from './components/news/news'
import Joke from './components/joke'
import './styles/index.less'

export default class Routers extends Component {
  render() {
    return(
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <div className="docContainer">
              <Header />
              <div className="leftRight">
                <div className="left">
                  <Navigation />
                </div>
                <div className="right">
                  <Switch>
                    <Route path='/'  exact component={Joke} />
                    <Route path='/news'  exact component={News} />
                    <Route path='/oneiromancy'  exact component={Oneiromancy} />
                    <Route path='/constellation'  exact component={Constellation} />
                    <Route path='/showMore'  exact component={ShowMore} />
                  </Switch>
                </div>
              </div>
              {/* <Footer /> */}
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}