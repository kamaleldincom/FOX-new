import React, { Component, Suspense } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { CButton, CButtonGroup, CSpinner } from '@coreui/react';
import { connect } from 'react-redux';
import queryString from 'query-string'
import { getProfileFetch } from '../actions';
import "./style.scss";
import store from '../store'



const loading = (
  <div className="pt-3 text-center">
    <CSpinner size="sm" variant="grow" style={{ width: '4rem', height: '4rem' }} />
  </div>
)

const Login = React.lazy(() => import('./pages/Login'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Register = React.lazy(() => import('./pages/Register'));
const Page404 = React.lazy(() => import('./pages/Page404'));

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
                return <Register
                  username={queryString.parse(props.location.search).username}
                  token={queryString.parse(props.location.search).token}
                  username={queryString.parse(props.location.search).username}
                  {...props}
                />
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
              <Page404 />
            </>
          </Switch>
        </Suspense>
      </HashRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
