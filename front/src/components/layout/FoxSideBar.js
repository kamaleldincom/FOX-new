import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    CCreateElement,
    CSidebar,
    CSidebarBrand,
    CSidebarNav,
    CSidebarNavDivider,
    CSidebarNavTitle,
    CSidebarMinimizer,
    CSidebarNavDropdown,
    CSidebarNavItem,
} from '@coreui/react'
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

const FoxSidebar = (props) => {
    const dispatch = useDispatch()
    const show = useSelector(state => state.sidebarShow)
    return (

        <CSidebar
            show={show}
            onShowChange={(val) => dispatch({ type: 'set', sidebarShow: val })}
        >
            <CSidebarBrand className="d-md-down-none" to="/">
                <h2>{props.company ? props.company : "FOX"}</h2>
            </CSidebarBrand>
            <CSidebarNav>
                {props.projectId ? <CCreateElement
                    items={props.navigation}
                    components={{
                        CSidebarNavDivider,
                        CSidebarNavDropdown,
                        CSidebarNavItem,
                        CSidebarNavTitle
                    }}
                /> : null}

            </CSidebarNav>
            <CSidebarMinimizer className="c-d-md-down-none" />
        </CSidebar>
    )
}

const mapStateToProps = state => {
    return {
        navigation: state.sidebar,
        company: state.currentUser.company_name,
        projectId: state.projectId
    }
}

export default connect(mapStateToProps)(React.memo(withRouter(FoxSidebar)))
