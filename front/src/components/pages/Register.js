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



// const loading = (
//     <div className="pt-3 text-center">
//         <CSpinner size="sm" variant="grow" style={{ width: '4rem', height: '4rem' }} />
//     </div>
// )

class Register extends Component {

    componentDidMount = () => {
        this.props.userRegisterValidationFetch(this.props.token)
    }

    render() {
        return (!this.props.registerAllowed ? <Redirect to="/login" /> :
            // <Suspense fallback={loading}>
            <AuthContainer>
                <FoxRegisterForm username={this.props.username} />
            </AuthContainer>
            // </Suspense>
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

