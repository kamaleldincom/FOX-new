import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  CRow,
  CCol,
  CButton,
  CCard,
  CCardBody,
  CCardFooter
} from "@coreui/react";
import { getProfileFetch } from '../../../actions'
import { ProjectWorkflowService, FoxApiService } from '../../../services'

const workflow = new ProjectWorkflowService();
const foxApi = new FoxApiService();

class ProposalSubmit extends Component {

  state = {
    status: "Created"
  }

  handleSubmit = async () => {
    console.log(this.props);
    // await workflow.submitProposal(this.props.match.params.id)
    //   .then(
    //     this.props.history.goBack()
    //   )
    //   .catch((error) => {
    //     console.error(error);
    //     this.setState({
    //       error: 'Application submit failed!' +
    //         ' Please check your input and try again!' +
    //         ' In case this problem repeats, please contact your administrator!'
    //     })
    //   })
  }

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => { return foxApi.getDetailsOf('projects', this.props.match.params.id) })
      .then(data => {
        console.log(data);
        this.setState({
          status: data.status
        })
      })
  }

  render = () => {
    console.log(this.state.status);
    return (
      this.state.status === "Created"
        ?
        <CRow>
          <CCol>
            <CCard>
              <CCardBody>
                I certify that I understand and will comply with all the requirement of this
                application to work and strictly comply with the company’s rules and regulation
              as well as Malaysia’s OSHA Act 1994. Intolerable risk subjected to <strong>any violation
              of this application’s requirement may cause work process being stopped</strong>.
            </CCardBody>
              <CCardFooter>
                <CButton
                  type="submit"
                  color="dark"
                  variant="outline"
                  block
                  onClick={this.handleSubmit}
                >Submit Proposal</CButton>
                {this.state.error
                  ? <p>{this.state.error}</p>
                  : null
                }
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow >
        : <Redirect to={`/projects/${this.props.match.params.id}/application_status`} />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
})

export default connect(null, mapDispatchToProps)(ProposalSubmit)
