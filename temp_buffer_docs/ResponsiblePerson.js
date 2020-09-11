import React, { Component } from 'react'
import { getProfileFetch, getWorkerList } from '../../../actions'
import { connect } from 'react-redux'
import {
  CForm,
  CFormGroup,
  CLabel,
  CRow,
  CCol,
  CButton,
  CSelect
} from "@coreui/react";
import DjangoCSRFToken from 'django-react-csrftoken'
import { FoxApiService } from '../../../services'

const foxApi = new FoxApiService();

class ResponsiblePerson extends Component {

  state = {
    responsible_person: -1,
    error: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state));
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.formData = this.state;
    delete this.formData.error;
    await foxApi.patchEntityOf('projects', this.props.match.params.id, this.formData).then(() => {
      this.props.history.goBack()
    },
      (error) => {
        console.error(error);
        this.setState({
          error: 'Responsible person creation failed!' +
            ' Please check your input and try again!' +
            ' In case this problem repeats, please contact your administrator!'
        })
      })
  }

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => this.props.getWorkerList())
      .then(() => foxApi.getDetailsOf("projects", this.props.match.params.id))
      .then(data => this.setState({ responsible_person: data.responsible_person }))
  }

  render = () => {
    return (
      <CRow>
        <CCol>
          <CForm
            onSubmit={this.handleSubmit}
          >
            <DjangoCSRFToken />
            <CFormGroup>
              <h4>Please, choose the responsible person among your workers.</h4>
              <CSelect
                id="responsible_person"
                name="responsible_person"
                placeholder="Choose responsible person"
                value={this.state.responsible_person}
                onChange={this.handleChange}
                required
              >
                <option key="-1" value="-1" disabled>Choose responsible person</option>
                {this.props.options ? this.props.options.map((option) => {
                  return (
                    <option key={option.id} value={option.id}>{option.name}</option>
                  )
                }) : null
                }
              </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CButton type="submit" color="dark" variant="outline" block>Set responsible person</CButton>
            </CFormGroup>
            {this.state.error
              ? <p>{this.state.error}</p>
              : null
            }
          </CForm>
        </CCol>
      </CRow >
    )
  }
}

const mapStateToProps = state => {
  return {
    contractor: state.currentUser.id,
    options: state.entityListTable.tableData
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getWorkerList: () => dispatch(getWorkerList())
})

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiblePerson)
