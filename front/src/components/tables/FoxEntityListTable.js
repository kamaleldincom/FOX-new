import React, { Component } from 'react'
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
import { Redirect } from 'react-router-dom'

const alertOnClick = (e, urlBAse) => {
  console.log(e.id);
  console.log(e);
  alert('Clicked!');
  return (
    <Redirect to={`${urlBAse}/${e.id}`} />
  )
}

const FoxEntityListTable = (props) => {
  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader
            className="d-flex justify-content-between">
            <CCardTitle>
              {props.tableName}
            </CCardTitle>
            <CLink
              className="btn btn-outline-success"
              to={`${props.match.path}/new`}
            >
              Add new
            </CLink>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={props.tableData}
              fields={props.fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              onRowClick={alertOnClick}
              scopedSlots={{
                'status':
                  (item) => (
                    <td>
                      <CBadge color={props.getBadge(item.status)}>
                        {item.status}
                      </CBadge>
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

export default FoxEntityListTable