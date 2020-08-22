import React, { Component } from 'react'
import { getProfileFetch } from '../../../actions'
import { connect } from 'react-redux'
import {
    CForm,
    CFormGroup,
    CInput,
    CLabel, CRow,
    CCol,
} from "@coreui/react";
import DjangoCSRFToken from 'django-react-csrftoken'
import { FoxApiService } from '../../../services'

const foxApi = new FoxApiService();

class ProjectCreate extends Component {

    state = {
        name: "",
        contractor: this.props.contractor,
        birthday: "",
        card_number_id: "",
        license_number: "",
        passport: "",
        safety_green_card: "",
        position_in_company: "",
        error: false
    }

    handleChange = event => {
        console.log(this.state);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.formData = this.state;
        delete this.formData.error;
        await foxApi.createEntityOf('workers', this.formData).then(() => {
            this.props.history.goBack()
        },
            (error) => {
                console.error(error);
                this.setState({
                    error: 'Worker creation failed!' +
                        ' Please check your input and try again!' +
                        ' In case this problem repeats, please contact your administrator!'
                })
            })
    }

    componentDidMount = async () => {
        await this.props.getProfileFetch()
    }

    render = () => {
        return (
            <CRow>
                <CCol>
                    <CForm
                        onSubmit={this.handleSubmit}
                    >
                        <DjangoCSRFToken />
                        <CFormGroup>
                            <CLabel htmlFor="name">Name</CLabel>
                            <CInput
                                id="name"
                                name='name'
                                placeholder="Enter worker name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                required />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="birthday">Birthday</CLabel>
                            <CInput
                                type="date"
                                id="birthday"
                                name="birthday"
                                value={this.state.birthday}
                                onChange={this.handleChange}
                                required
                            />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="card_number_id">Card number ID</CLabel>
                            <CInput
                                id="card_number_id"
                                name='card_number_id'
                                placeholder="Enter ID"
                                value={this.state.card_number_id}
                                onChange={this.handleChange}
                                required />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="license_number">License Number</CLabel>
                            <CInput
                                id="license_number"
                                name='license_number'
                                placeholder="Enter worker name"
                                value={this.state.license_number}
                                onChange={this.handleChange}
                                required />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="passport">Passport</CLabel>
                            <CInput
                                id="passport"
                                name='passport'
                                placeholder="Enter passport info"
                                value={this.state.passport}
                                onChange={this.handleChange}
                                required />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="safety_green_card">Safety Green Card</CLabel>
                            <CInput
                                id="safety_green_card"
                                name='safety_green_card'
                                placeholder="Enter card info"
                                value={this.state.safety_green_card}
                                onChange={this.handleChange}
                                required />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="position_in_company">Position in Company</CLabel>
                            <CInput
                                id="position_in_company"
                                name='position_in_company'
                                placeholder="Enter worker position"
                                value={this.state.position_in_company}
                                onChange={this.handleChange}
                                required />
                        </CFormGroup>


                        <CFormGroup>
                            <CInput type="submit" value="Create worker" color="info" disabled={this.state.password !== this.state.password2} />
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
        contractor: state.currentUser.id,
        options: state.entityListTable.tableData
    }
}

const mapDispatchToProps = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch()),
    getContractorList: () => dispatch(getContractorList())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCreate)
