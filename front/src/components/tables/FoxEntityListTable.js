import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCol,
  CDataTable,
  CRow,
  CLink,
  CButton
} from '@coreui/react'


class FoxEntityListTable extends Component {

  alertOnClick = (id, e) => {
    this.props.history.push(`${this.props.match.url}/${id}`)
  }

  render = () => {
    return (
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader
              className="d-flex justify-content-between">
              <CCardTitle>
                {this.props.tableName}
              </CCardTitle>
              {this.props.tableName === "Projects" && this.props.role === "Contr"
                ?
                null
                :
                <CLink
                  className="btn btn-outline-success"
                  to={`${this.props.match.url}/new`}
                >
                  Add new
                </CLink>
              }
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={this.props.tableData ? this.props.tableData : []}
                fields={this.props.fields ? this.props.fields : []}
                clickableRows
                hover
                striped
                bordered
                sorter
                footer
                tableFilter
                columnFilter
                size="sm"
                itemsPerPage={10}
                itemsPerPageSelect
                pagination
                scopedSlots={{
                  'username':
                    (item) => (
                      <td>
                        <CButton
                          color="link"
                          onClick={e => { this.alertOnClick(item.id, e) }}
                        >
                          {item.username}
                        </CButton>
                      </td>
                    ),
                  'project_name':
                    (item) => (
                      <td>
                        <CButton
                          color="link"
                          onClick={e => { this.alertOnClick(item.id, e) }}
                        >
                          {item.project_name}
                        </CButton>
                      </td>
                    ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow >
    )
  }
}

const mapStateToProps = state => ({
  role: state.currentUser.role
})



export default connect(mapStateToProps, null)(FoxEntityListTable)
