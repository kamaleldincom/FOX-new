import React, { Component } from 'react'
import { getProfileFetch, getContractorList } from '../../../actions'
import { connect } from 'react-redux'
import {
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CCol,
  CTextarea,
  CSelect,
  CButton
} from "@coreui/react";
import DjangoCSRFToken from 'django-react-csrftoken'
import { FoxApiService } from '../../../services'

const foxApi = new FoxApiService();

class ProjectCreate extends Component {

  state = {
    name: "",
    description: "",
    start_date: "",
    start_time: "",
    end_date: "",
    end_time: "",
    company: this.props.company,
    contractor: "-1",
    error: false
  }

  handleChange = event => {
    console.log(this.props);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    if (parseInt(this.state.contractor) < 0) {
      this.setState({
        error: 'Contractor was not selected! Please, choose contractor form the list'
      })
    } else {
      this.formData = this.state;
      delete this.formData.error;
      await foxApi.createEntityOf('projects', this.formData).then(() => {
        this.props.history.goBack()
      },
        (error) => {
          console.error(error);
          this.setState({
            error: 'Project creation failed!' +
              ' Please check your input and try again!' +
              ' In case this problem repeats, please contact your administrator!'
          })
        })
    }
  }

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => this.props.getContractorList())
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
              <CLabel htmlFor="name">Name</CLabel>
              <CInput
                id="name"
                name='name'
                placeholder="Enter project name"
                value={this.state.name}
                onChange={this.handleChange}
                required />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="description">Description</CLabel>
              <CTextarea
                id="descrption"
                name="description"
                placeholder="Please, enter short description of the projet"
                value={this.state.description}
                onChange={this.handleChange}
                required
              />
            </CFormGroup>
            <CFormGroup>
              <CRow>
                <CCol lg="6">
                  <CLabel htmlFor="start_date">Start Date</CLabel>
                  <CInput
                    type="date"
                    id="start_date"
                    name="start_date"
                    placeholder="date"
                    value={this.state.start_date}
                    onChange={this.handleChange}
                    required
                  />
                </CCol>
                <CCol lg="6">
                  <CLabel htmlFor="start_time">Start Time</CLabel>
                  <CInput
                    type="time"
                    id="start_time"
                    name="start_time"
                    value={this.state.start_time}
                    onChange={this.handleChange}
                    required
                  />
                </CCol>
              </CRow>
            </CFormGroup>
            <CFormGroup>
              <CRow>
                <CCol lg="6">
                  <CLabel htmlFor="end_date">End Date</CLabel>
                  <CInput
                    type="date"
                    id="end_date"
                    name="end_date"
                    placeholder="date"
                    value={this.state.end_date}
                    onChange={this.handleChange}
                    required
                  />
                </CCol>
                <CCol lg="6">
                  <CLabel htmlFor="end_time">End Time</CLabel>
                  <CInput
                    type="time"
                    id="end_time"
                    name="end_time"
                    // placeholder="date"
                    value={this.state.end_time}
                    onChange={this.handleChange}
                    required
                  />
                </CCol>
              </CRow>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="contractor">Contractor</CLabel>
              <CSelect
                id="contractor"
                name="contractor"
                placeholder="Choose contractor"
                value={this.state.contractor}
                onChange={this.handleChange}
                required
              >
                <option key="-1" value="-1" disabled>Choose contractor</option>
                {this.props.options ? this.props.options.map((option) => {
                  return (
                    <option key={option.id} value={option.id}>{option.username}</option>
                  )
                }) : null
                }
              </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CButton type="submit" color="dark" variant="outline" block>Create Project</CButton>
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
    company: state.currentUser.company,
    options: state.entityListTable.tableData
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getContractorList: () => dispatch(getContractorList())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCreate)
