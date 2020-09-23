import React, { Component } from 'react'
import {
    CButton,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CForm,
    CFormGroup,
    CInput
} from '@coreui/react'

const DeleteModal = props => {
    return (
        <CModal
            show={props.danger}
            onClose={props.setModalVisibility}
            color="dark"
        >
            <CModalHeader closeButton>
                <CModalTitle>Confirm Project Extension</CModalTitle>
            </CModalHeader>
            <CModalBody>
                {`Are you sure you want to delete this ${props.entity}?`}
            </CModalBody>
            <CModalFooter>
                <CButton color="danger" onClick={props.confirmExtend}>Confirm</CButton>{' '}
                <CButton color="secondary" onClick={props.setModalVisibility}>Cancel</CButton>
            </CModalFooter>
        </CModal>
    )
}

export default DeleteModal
