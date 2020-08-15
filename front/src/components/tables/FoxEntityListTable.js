import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'

const FoxEntityListTable = (props) => {
  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            {props.tableName}
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={props.usersData}
              fields={props.fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              onRowClick={props.onRowClick}
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
    </CRow>
  )
}

export default FoxEntityListTable