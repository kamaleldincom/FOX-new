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

class ContractorDetail extends Component {

  state = {
    username: "",
    email: "",
    name: "",
    related_company: "",
    company_phone: "",
  }

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => foxApi.getDetailsOf('contractors', this.props.match.params.id))
      .then((data) => {
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
            userRole="Contractor"
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

export default connect(null, mapDispatchToProps)(ContractorDetail)
