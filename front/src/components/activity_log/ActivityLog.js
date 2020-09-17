import React, { Component } from 'react'
import { CCard, CCardHeader, CCardBody, CListGroup, CListGroupItem, CButton, CCollapse } from '@coreui/react'
import { FoxApiService } from '../../services'
import { connect } from 'react-redux'

const foxApi = new FoxApiService()

class ActivityLog extends Component {

  state = {
    items: [],
    show: false
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show
    })
  }

  componentDidMount = () => {
    foxApi.getEntityList("activities", { project_id: this.props.projectId })
      .then(data => {
        this.setState({
          items: data
        })
      })
      .catch(error => console.log(error))
  }

  render = () => {
    const { items, show } = this.state;
    console.log(this.state);
    return (
      <CCard>
        <CCardHeader>
          <strong>Activity log</strong>
          <CButton color="link" onClick={this.handleClick}>{show ? 'Hide' : 'Show'}</CButton>
          <CCollapse show={show}>
            <CCardBody>
              <CListGroup flush>
                {items ?
                  items.map((item) => {
                    return (
                      <CListGroupItem key={item.id}>
                        {item.message}
                      </CListGroupItem>
                    )
                  })
                  : null}
              </CListGroup>
            </CCardBody>
          </CCollapse>

        </CCardHeader>
      </CCard>
    )
  }
}

export default ActivityLog
