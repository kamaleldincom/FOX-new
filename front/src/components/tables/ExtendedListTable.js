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
import WorkStatusDropdown from './WorkStatusDropdown'


class ExtendedListTable extends Component {

  alertOnClick = (id, e) => {
    this.props.history.push(`${this.props.match.url}/${id}`)
  }

  render = () => {
    console.log(this.props);
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
                  'name':
                    (item) => (
                      <td>
                        {/* <CButton
                          color="link"
                          onClick={e => { this.alertOnClick(item.id, e) }}
                        >
                          {item.name}
                        </CButton> */}
                        <CLink
                          to={`${this.props.match.url}/${item.id}`}
                        >
                          {item.name}
                        </CLink>
                      </td>
                    ),
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
                      <td className="d-flex align-items-center">
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



export default connect(mapStateToProps, null)(ExtendedListTable)
