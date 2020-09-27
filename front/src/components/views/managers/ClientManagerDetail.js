import React, { Component } from 'react'
import { getProfileFetch } from '../../../actions'
import { connect } from 'react-redux'
import {
  CRow,
  CCol,
} from "@coreui/react";
import { FoxApiService } from '../../../services'
import { UserDetailCard } from '../../cards'

const foxApi = new FoxApiService();

const positions = {
  SafeMan: "Safety Manager",
  SecMan: "Security Manager",
  SecOff: "Security Officer",
  SiteOwn: "Site Owner",
  WorkOwn: "Owner of Work",
  SecGrd: "Security Guards"
}


class ClientManagerDetail extends Component {

  state = {
    username: "",
    name: "",
    email: "",
    position: "",
    company: this.props.company,
    role: "CliMan",
    department: "",
  }

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => foxApi.getDetailsOf('client_managers', this.props.match.params.id))
      .then((data) => {
        data.position = positions[data.position]
        this.setState({ ...data })
      })
  }
  render = () => {
    const details = this.state;
    ["id", "company", "role"].forEach(option => {
      delete details[option]
    })
    return (
      <CRow>
        <CCol>
          <UserDetailCard
            userRole="Manager"
            details={details}
            {...this.props}
          />
        </CCol>
      </CRow >
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
})

export default connect(null, mapDispatchToProps)(ClientManagerDetail)
