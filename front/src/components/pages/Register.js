import React, { Component } from 'react'
import {
    CCol,
    CContainer,
    CRow
} from '@coreui/react'
import { connect } from 'react-redux'
import FoxRegisterCard from "../cards/FoxRegisterCard";
import { userRegisterValidationFetch } from "../../actions"




class Register extends Component {

    componentDidMount = () => {
        this.props.userRegisterValidationFetch(this.props.token)
    }

    render() {
        return (
            <div className="c-app c-default-layout flex-row align-items-center">
                <CContainer>
                    <CRow className="justify-content-center">
                        <CCol md="6">
                            <FoxRegisterCard />
                        </CCol>
                    </CRow>
                </CContainer>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = dispatch => ({
    userRegisterValidationFetch: token => dispatch(userRegisterValidationFetch(token))
})


export default connect(mapStateToProps, mapDispatchToProps)(Register)
