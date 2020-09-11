import React, { useState } from 'react'
import {
  CButton,

  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'

const DeleteModal = props => {
  return (
    <CModal
      show={props.danger}
      onClose={props.setModalVisibility}
      color="danger"
    >
      <CModalHeader closeButton>
        <CModalTitle>Confirm Deletion</CModalTitle>
      </CModalHeader>
      <CModalBody>
        {`Are you sure you want to delete this ${props.entity}?`}
      </CModalBody>
      <CModalFooter>
        <CButton color="danger" onClick={props.confirmDelete}>Confirm</CButton>{' '}
        <CButton color="secondary" onClick={props.setModalVisibility}>Cancel</CButton>
      </CModalFooter>
    </CModal>
  )
}

export default DeleteModal
