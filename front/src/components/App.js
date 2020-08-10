import React, { Component, Suspense } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { CButton, CButtonGroup, CSpinner } from '@coreui/react';
import { connect } from 'react-redux';
import FoxApiService from '../services/FoxAPIService'
import store from '../store'
import { getProfileFetch } from '../actions';
import "./style.scss";


const loading = (
  <div className="pt-3 text-center">
    <CSpinner size="sm" variant="grow" style={{ width: '4rem', height: '4rem' }} />
  </div>
)

const Login = React.lazy(() => import('./pages/Login'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Register = React.lazy(() => import('./pages/Register'));

class App extends Component {

  componentDidMount() {
    this.props.getProfileFetch();
  }

  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Switch>
            <Route exact path="/register" name="Register Page" render={
              props => {
                return <Register {...props} />
              }
            } />
            <Route exact path="/login" name="Login Page" render={
              props => {
                let this_props = this.props;
                return this_props.currentUser.username ? <Redirect to="/" /> : <Login {...props} />
              }
            } />
            <Route exact path="/" name="Fox" render={props => <Dashboard {...props} />}>
            </Route>
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
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
