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
  CLink
} from '@coreui/react'
import WorkStatusDropdown from './WorkStatusDropdown'


class FoxEntityListTable extends Component {

  alertOnClick = (e) => {
    // this.props.history.push(`${this.props.match.url}/${e.id}`)
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
                onRowClick={this.alertOnClick}
                scopedSlots={{
                  'application_status':
                    (item) => (
                      <td>
                        <CBadge color={this.props.getBadge(item.application_status)}>
                          {item.application_status}
                        </CBadge>
                      </td>
                    ),
                  'work_status':
                    (item) => (
                      <td>
                        <CBadge color={this.props.getBadge(item.work_status)}>
                          {item.work_status}
                        </CBadge>
                        <WorkStatusDropdown key={item.id} item={item} {...this.props} />
                      </td>
                    )
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
