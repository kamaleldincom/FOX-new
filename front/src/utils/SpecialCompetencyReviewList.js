import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProfileFetch } from '../actions'
import {
  CRow,
  CCol,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCollapse
} from "@coreui/react";
import CompetencyReview from './CompetencyReview'
import { FoxApiService } from '../services'

const foxApi = new FoxApiService();


class SpecialCompetencyReviewList extends Component {

  state = {
    current_competency_id: "",
    current_competency_info: "",
    competencies: []
  }


  handleCompetencySelect = event => {
    this.state.current_competency_id === event.target.name ?
      this.setState({
        current_competency_id: ""
      })
      :
      this.setState({
        current_competency_id: event.target.name
      })
  }

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => foxApi.getEntityList('worker_special_competencies', { worker_id: this.props.workerId }))
      .then((data) => {
        this.setState({
          competencies: data
        })
      })
      .catch(error => console.log(error))

  }

  render = () => {
    return (
      this.state.competencies.length > 0 ?
        this.state.competencies.map((competency, idx) => {
          return (
            <CCard key={`card-${idx}`} className="mb-0">
              <CCardHeader key={`ch-${idx}`} id={competency.id}>
                <h6 key={`h6-${idx}`} className="m-0 p-0">{competency.name}</h6>
                <CButton
                  key={`btn-${idx}`}
                  block
                  color="link"
                  className="text-left m-0 p-0"
                  id={competency.id}
                  value={competency.id}
                  name={competency.id}
                  onClick={this.handleCompetencySelect}
                >Display Details</CButton>
              </CCardHeader>
              <CCollapse key={`clps-${idx}`} show={this.state.current_competency_id === competency.id.toString()}>
                <CCardBody key={`cbody-${idx}`}>
                  <CompetencyReview competencyId={competency.id} />
                </CCardBody>
              </CCollapse>
            </CCard>
          )
        })
        :
        <p>The contractor hasn't attached any competencies yet.</p>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     // competencies: state.entityListTable.tableData
//   }
// }

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  // getSpecialCompetencyList: (params, additional) => dispatch(getSpecialCompetencyList(params, additional)),
})

export default connect(null, mapDispatchToProps)(SpecialCompetencyReviewList)