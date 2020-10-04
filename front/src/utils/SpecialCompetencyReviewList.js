import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProfileFetch } from '../actions'
import {
  CButton,
  CCollapse,
  CListGroup
} from "@coreui/react";
import CompetencyReview from './CompetencyReview'
import { FoxApiService } from '../services'

const foxApi = new FoxApiService();


class SpecialCompetencyReviewList extends Component {

  state = {
    showCompetencies: false,
    competencies: []
  }


  handleShowCompetencies = () => {
    const prevShow = this.state.showCompetencies
    this.setState({
      showCompetencies: !prevShow
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
    const { showCompetencies, competencies } = this.state
    return (
      this.state.competencies.length > 0 ?
        <React.Fragment>
          <p><strong>Special competencies:</strong></p>
          <CButton
            block
            color="link"
            className="text-left m-0 p-0"
            name={showCompetencies}
            onClick={this.handleShowCompetencies}
          >Display Details</CButton>
          <CCollapse show={showCompetencies}>
            <CListGroup >
              {competencies.map((competency, idx) => {
                return (
                  <CompetencyReview key={`cbody-${idx}`} competencyId={competency.id} />
                )
              })}
            </CListGroup>
          </CCollapse>
        </React.Fragment>

        :
        <p>The contractor hasn't attached any competencies yet.</p>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
})

export default connect(null, mapDispatchToProps)(SpecialCompetencyReviewList)
