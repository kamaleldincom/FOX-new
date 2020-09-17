import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getProfileFetch } from '../../../actions'
import {
  CRow,
  CCol,
  CEmbed
} from "@coreui/react";
import { ActivityLog } from '../../activity_log'

class ProjectPTW extends Component {

  componentDidMount = () => {
    this.props.getProfileFetch()
  }

  render = () => {
    return (
      <React.Fragment>
        <CRow>
          <CCol>
            <ActivityLog projectId={this.props.match.params.id} />
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            {this.props.username ?
              <CEmbed
                ratio="16by9"
              >
                <iframe src={`${window.location.origin}/api/ptw/${this.props.match.params.id}`} />
              </CEmbed> : <Redirect to="" />
            }
          </CCol>
        </CRow >

      </React.Fragment>

    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.currentUser.username,
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPTW)
