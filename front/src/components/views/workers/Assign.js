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
} from "@coreui/react";
import DjangoCSRFToken from 'django-react-csrftoken'
import { FoxApiService } from '../../../services'

const foxApi = new FoxApiService();

class WorkerAssign extends Component {

  state = {
    workers: [],
    error: false,
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
    const { workers } = this.state;
    const workersData = { workers: workers };
    await foxApi.patchEntityOf("projects", this.props.match.params.id, workersData)
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
      .then(data => this.setState({ workers: data.workers }))
  }

  render = () => {
    return (
      <CRow>
        <CCol>
          <CForm onSubmit={this.handleSubmit}>
            <DjangoCSRFToken />
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
              <CButton type="submit" color="success" variant="outline" block>Save changes</CButton>
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
