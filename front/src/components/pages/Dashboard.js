import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProfileFetch } from '../../actions'
import {
} from '@coreui/react'
import { FoxSidebar } from '../layout';

import FoxHeader from "../layout/FoxHeader";

class Dashboard extends Component {

  componentDidMount = () => {
    this.props.getProfileFetch()
  }

  render() {
    return (this.props.currentUser.username ?
      <div className="c-app c-default-layout">
        <FoxSidebar />
        <div className="c-wrapper">
          <FoxHeader />
          <div className="c-body">
            {/* //TODO: make it nice :) */}
            <h2> VERY SOON YOU WILL SEE SOME INO HERE!</h2>
          </div>
        </div>
      </div>
      : <Redirect to="/login" />
    )
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


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)