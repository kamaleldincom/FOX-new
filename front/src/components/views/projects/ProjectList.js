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

const usersData = [
  { id: 0, name: 'John Doe', registered: '2018/01/01', role: 'Guest', status: 'Pending' },
  { id: 1, name: 'Samppa Nori', registered: '2018/01/01', role: 'Member', status: 'Active' },
  { id: 2, name: 'Estavan Lykos', registered: '2018/02/01', role: 'Staff', status: 'Banned' },
]


const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const fields = ['name', 'registered', 'role', 'status']

const ProjectList = () => {
  return (
    <>
      <CRow>
        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>
              Striped Table
              </CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                striped
                itemsPerPage={5}
                pagination
                scopedSlots={{
                  'status':
                    (item) => (
                      <td>
                        <CBadge color={getBadge(item.status)}>
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

      <CRow>

        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>
              Bordered Table
              </CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                bordered
                itemsPerPage={5}
                pagination
                scopedSlots={{
                  'status':
                    (item) => (
                      <td>
                        <CBadge color={getBadge(item.status)}>
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

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Combined All Table
              </CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  'status':
                    (item) => (
                      <td>
                        <CBadge color={getBadge(item.status)}>
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
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Combined All dark Table
              </CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                dark
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  'status':
                    (item) => (
                      <td>
                        <CBadge color={getBadge(item.status)}>
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
    </>
  )
}

export default ProjectList