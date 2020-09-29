import React, { Component } from 'react'
import { getProfileFetch, getWorkerList, getDocumentList, setProjectId } from '../../../actions'
import { connect } from 'react-redux'
import {
  CForm,
  CFormGroup,
  CLabel,
  CRow,
  CCol,
  CButton,
  CInputCheckbox,
  CSelect
} from "@coreui/react";
import DjangoCSRFToken from 'django-react-csrftoken'
import { FoxApiService } from '../../../services'

const foxApi = new FoxApiService();

class WorkerAssign extends Component {

  state = {
    workers: [],
    responsible_person: -1,
    error: false,
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleCheck = event => {
    const { workers } = this.state
    event.target.checked ?
      workers.push(parseInt(event.target.value))
      :
      workers.splice(workers.indexOf(parseInt(event.target.value)), 1);
    this.setState({
      workers: workers
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { workers, responsible_person } = this.state;
    let requestData = { workers: workers };
    requestData = { responsible_person, ...requestData }
    await foxApi.patchEntityOf("projects", this.props.match.params.id, requestData)
      .then(() => {
        this.props.history.goBack()
      },
        (error) => {
          console.error(error);
          this.setState({
            error: 'Workers assignment failed!' +
              ' Please check your input and try again!' +
              ' In case this problem repeats, please contact your administrator!'
          })
        })
  }

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => this.props.getWorkerList())
      .then(() => foxApi.getDetailsOf("projects", this.props.match.params.id))
      .then(data => this.setState({
        workers: data.workers,
        responsible_person: data.responsible_person
      }))
  }

  render = () => {
    return (
      <CRow>
        <CCol>
          <CForm onSubmit={this.handleSubmit}>
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
                {this.props.workers ? this.props.workers.map((worker) => {
                  return (
                    <option key={worker.id} value={worker.id}>{worker.name}</option>
                  )
                }) : null
                }
              </CSelect>
            </CFormGroup>
            <CFormGroup>
              <h4>Please, choose workers you want to assign for this project</h4>
              {this.props.workers ?
                this.props.workers.map((worker) => {
                  let workers = this.state.workers;
                  return (
                    <CFormGroup key={`fg-${worker.id}`} variant="checkbox" className="checkbox d-flex">
                      <CInputCheckbox
                        key={`cb-${worker.id}`}
                        id={worker.id}
                        name={worker.id}
                        value={worker.id}
                        onChange={this.handleCheck}
                        checked={workers.includes(worker.id)}
                      />
                      <CLabel key={`lb-${worker.id}`} variant="checkbox" className="form-check-label mr-4" htmlFor={worker.id}>{worker.name}</CLabel>
                    </CFormGroup>
                  )
                }) : null}
            </CFormGroup>
            <CFormGroup>
              <CButton type="submit" color="dark" variant="outline" block>Save changes</CButton>
            </CFormGroup>
            {this.state.error
              ? <p>{this.state.error}</p>
              : null
            }
          </CForm>
        </CCol >
      </CRow >
    )
  }
}

const mapStateToProps = state => {
  return {
    workers: state.entityListTable.tableData,
    company: state.currentUser.company,
    contractor: state.currentUser.id,
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getWorkerList: () => dispatch(getWorkerList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkerAssign)
