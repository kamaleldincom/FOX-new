import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FoxApiService } from '../../services'
import { getProjectList } from '../../actions'
import { CDropdown, CDropdownToggle, CDropdownItem, CDropdownMenu } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { ExtendModal } from '../modals'


const foxApi = new FoxApiService();

const choices = [
  { Works_started: 'Works started' },
  { Works_finished: 'Works finished' },
  { Extended: 'Extended' },
  { Closed: 'Closed' },
]


class WorkStatusDropdown extends Component {

  state = {
    modal: false
  }

  handleClick = async (value, event) => {
    if (value === "Extended") {
      this.setModalVisibility()
    } else {
      await foxApi.patchEntityOf("projects", this.props.item.id, { status: value })
        .then(() => {
          this.props.getProjectList();
        })
    }
  }

  setModalVisibility = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render = () => {
    const { modal } = this.state
    return (
      this.props.role === "CliAdm" && this.props.item.work_status !== "Application processing" ?
        <React.Fragment>
          <CDropdown >
            <CDropdownToggle className="project-table-toggle">
              <CIcon
                style={{ margin: "0" }}
                className="table-dropdown-icon"
                name={'cilSettings'} />
            </CDropdownToggle>
            <CDropdownMenu className="p-0 foxtable-dropdown-menu" placement="bottom-end">
              {choices.map((choice, idx) => {
                const [value, name] = Object.entries(choice)[0]
                return <CDropdownItem
                  key={idx}
                  value={value}
                  onClick={event => this.handleClick(value, event)}
                >{name}</CDropdownItem>
              })}

            </CDropdownMenu>
          </CDropdown >
          <ExtendModal
            show={modal}
            setModalVisibility={this.setModalVisibility}
            projectId={this.props.item.id}
            {...this.props}
          />
        </React.Fragment>

        : null
    )
  }

}

const mapStateToProps = state => ({
  role: state.currentUser.role
})

const mapDispatchToProps = dispatch => ({
  getProjectList: () => dispatch(getProjectList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkStatusDropdown)
