import React, { Component, Suspense } from 'react'
import {
    CCol,
    CContainer,
    CRow,
    CSpinner
} from '@coreui/react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { FoxRegisterForm } from "../forms";
import { userRegisterValidationFetch } from "../../actions"
import { AuthContainer } from '../containers'


class Register extends Component {

    componentDidMount = () => {
        this.props.userRegisterValidationFetch(this.props.token)
    }

    render() {
        return (!this.props.registerAllowed ? <Redirect to="/login" /> :
            <AuthContainer>
                <FoxRegisterForm username={this.props.username} />
            </AuthContainer>
        )
    }

}

const mapStateToProps = state => {
    return {
        userRegistered: state.userRegistered,
        registerAllowed: state.registerAllowed
    }
}

const mapDispatchToProps = dispatch => ({
    userRegisterValidationFetch: token => dispatch(userRegisterValidationFetch(token))
})


export default connect(mapStateToProps, mapDispatchToProps)(Register)

