import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Navigation from './common/navigation'
import Header from './common/header'
import FundManage from './components/fundManagement'
import Logs from './components/logs'
import StartFund from './components/startFund'
import './common/layout.less'
const RootRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="basicLayout">
          sdfas
          <Navigation />
          <Header />
          <Switch>
            {/* <Header /> */}
            <Route path='/'  exact component={FundManage} />
            <Route path='/Logs' exact component={Logs} />
            <Route path='/StartFund'  exact component={StartFund} />
            {/* <Navigation /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  )
}
export default RootRouter