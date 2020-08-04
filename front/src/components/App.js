import React, { Component, Suspense } from 'react';
import { render } from "react-dom";
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from '../services/serviceWorker';
import { CButton, CButtonGroup } from '@coreui/react'
import store from './store';
import "./style.scss";


import { icons } from './assets/icons'

React.icons = icons

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const Login = React.lazy(() => import('./pages/Login'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("api/back")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
              <Route path="/" name="Home" render={props => <Dashboard {...props} />} />
              <>
                <CButtonGroup>
                  <CButton color="success">Button</CButton>
                  <CButton color="info">Button</CButton>
                  <CButton color="primary">Button</CButton>
                </CButtonGroup>
              </>
            </Switch>
          </Suspense>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();