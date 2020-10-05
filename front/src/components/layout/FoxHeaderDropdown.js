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
import { ResetPasswordModal } from '../modals';

class TheHeaderDropdown extends Component {

  state = {
    showModal: false
  }

  handleClick = event => {
    event.preventDefault();
    this.props.logoutUser();
  }

  setModalVisibility = () => {
    const { showModal } = this.state;
    this.setState({
      showModal: !showModal
    })
  }

  render() {
    const { showModal } = this.state;
    return (
      <React.Fragment>
        <CDropdown
          inNav
          className="c-header-nav-items mx-2"
          direction="down"
        >
          <CDropdownToggle className="c-header-nav-link" caret={false}>
            <CIcon name="cil-settings" />
          </CDropdownToggle>
          <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem
              header
              tag="div"
              color="light"
              className="text-center"
            >
              <strong>Settings</strong>
            </CDropdownItem>
            <CDropdownItem onClick={this.setModalVisibility}>
              <CIcon name="cil-lock-locked" className="mfe-2" />
            Change password
          </CDropdownItem>
            <CDropdownItem divider />
            <CDropdownItem onClick={this.handleClick}>
              <CIcon name="cil-account-logout" className="mfe-2" />
            Logout
          </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <ResetPasswordModal show={showModal} email={this.props.currentUser.email} setModalVisibility={this.setModalVisibility} />
      </React.Fragment>

    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}


const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(TheHeaderDropdown);
