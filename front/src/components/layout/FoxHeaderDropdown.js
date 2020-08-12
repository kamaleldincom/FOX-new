import React, { Component } from 'react'
import { connect } from 'react-redux';

import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { logoutUser } from '../../actions';

class TheHeaderDropdown extends Component {

  handleClick = event => {
    event.preventDefault()
    //TODO: need improvement???
    this.props.logoutUser()
  }

  render() {
    return (
      <CDropdown
        inNav
        className="c-header-nav-items mx-2"
        direction="down"
      >
        <CDropdownToggle className="c-header-nav-link" caret={false}>
          <CIcon name="cil-user" />
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownItem
            header
            tag="div"
            color="light"
            className="text-center"
          >
            <strong>Account</strong>
          </CDropdownItem>
          <CDropdownItem>
            <CIcon name="cil-bell" className="mfe-2" />
            Updates
            <CBadge color="info" className="mfs-auto">42</CBadge>
          </CDropdownItem>
          <CDropdownItem>
            <CIcon name="cil-envelope-open" className="mfe-2" />
            Messages
            <CBadge color="success" className="mfs-auto">42</CBadge>
          </CDropdownItem>
          <CDropdownItem>
            <CIcon name="cil-task" className="mfe-2" />
            Tasks
            <CBadge color="danger" className="mfs-auto">42</CBadge>
          </CDropdownItem>
          <CDropdownItem>
            <CIcon name="cil-comment-square" className="mfe-2" />
            Comments
            <CBadge color="warning" className="mfs-auto">42</CBadge>
          </CDropdownItem>
          <CDropdownItem
            header
            tag="div"
            color="light"
            className="text-center"
          >
            <strong>Settings</strong>
          </CDropdownItem>
          <CDropdownItem>
            <CIcon name="cil-user" className="mfe-2" />Profile
          </CDropdownItem>
          <CDropdownItem>
            <CIcon name="cil-settings" className="mfe-2" />
            Settings
          </CDropdownItem>
          <CDropdownItem>
            <CIcon name="cil-credit-card" className="mfe-2" />
            Payments
            <CBadge color="secondary" className="mfs-auto">42</CBadge>
          </CDropdownItem>
          <CDropdownItem>
            <CIcon name="cil-file" className="mfe-2" />
            Projects
            <CBadge color="primary" className="mfs-auto">42</CBadge>
          </CDropdownItem>
          <CDropdownItem divider />
          <CDropdownItem onClick={this.handleClick}>
            <CIcon name="cil-account-logout" className="mfe-2" />
            Logout
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    )
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    currentUser: state.currentUser
  }
}


const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(TheHeaderDropdown);
