import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getProfileFetch } from '../../../actions'
import {
    CRow,
    CCol,
    CEmbed
} from "@coreui/react";

class SafetyVideo extends Component {

    componentDidMount = () => {
        this.props.getProfileFetch()
        console.log(this.props);
    }

    render = () => {
        return (
            <CRow>
                <CCol>
                    {this.props.username ?
                        <CEmbed
                            ratio="16by9"
                        >
                            <iframe src="https://www.youtube.com/embed/ORUJ6gWBhrY"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </CEmbed> : <Redirect to="" />
                    }
                </CCol>
            </CRow >
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.currentUser.username,
    }
}

const mapDispatchToProps = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SafetyVideo)
