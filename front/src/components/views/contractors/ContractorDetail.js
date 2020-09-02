import React, { Component } from 'react'
import { getProfileFetch } from '../../../actions'
import { connect } from 'react-redux'
import {
    CForm,
    CFormGroup,
    CInput,
    CLabel, CRow,
    CCol,
    CButton
} from "@coreui/react";
import DjangoCSRFToken from 'django-react-csrftoken'
import { FoxApiService } from '../../../services'

const foxApi = new FoxApiService();

class ContractorDetail extends Component {

    state = {
        username: "",
        email: "",
        related_company: "",
        company: this.props.company,
        role: "Contr",
        error: false
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.formData = this.state;
        delete this.formData.error;
        await foxApi.updateEntityOf('contractors', this.props.match.params.id, this.formData).then(() => {
            this.props.history.goBack()
        },
            (error) => {
                console.error(error);
                this.setState({
                    error: 'Contractor update failed!' +
                        ' Please check your input and try again!' +
                        ' In case this problem repeats, please contact your administrator!'
                })
            })
    }

    componentDidMount = async () => {
        await this.props.getProfileFetch()
            .then(() => foxApi.getDetailsOf('contractors', this.props.match.params.id))
            .then((data) => this.setState({ ...data }))
    }

    componentWillUnmount = () => {
        console.log("will unmount");
    }

    render = () => {
        console.log(this.state);
        return (
            <CRow>
                <CCol>
                    <CForm
                        onSubmit={this.handleSubmit}
                    >
                        <DjangoCSRFToken />
                        <CFormGroup>
                            <CLabel htmlFor="username">Contractor username</CLabel>
                            <CInput
                                id="username"
                                name='username'
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.handleChange}
                                required />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="email">Contractor email</CLabel>
                            <CInput
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="username">Contractor company</CLabel>
                            <CInput
                                id="related_company"
                                name='related_company'
                                placeholder="Company name"
                                value={this.state.related_company}
                                onChange={this.handleChange}
                                required />
                        </CFormGroup>
                        <CFormGroup>
                            <CButton type="submit" color="dark" variant="outline" block>Create contractor</CButton>
                        </CFormGroup>
                        {this.state.error
                            ? <p>{this.state.error}</p>
                            : null
                        }
                    </CForm>
                </CCol>
            </CRow >
        )
    }
}

const mapStateToProps = state => {
    return {
        company: state.currentUser.company,
    }
}

const mapDispatchToProps = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContractorDetail)

