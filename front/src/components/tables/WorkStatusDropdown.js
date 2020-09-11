import React from 'react'
import { connect } from 'react-redux'
import { FoxApiService } from '../../services'
import { getProjectList } from '../../actions'
import { CDropdown, CDropdownToggle, CDropdownItem, CDropdownMenu } from '@coreui/react'
import CIcon from '@coreui/icons-react'


const foxApi = new FoxApiService();

const choices = [
  { Works_started: 'Works started' },
  { Works_finished: 'Works finished' },
  { Extended: 'Extended' },
  { Closed: 'Closed' },
]


const handleClick = async ({ value, props }, event) => {
  await foxApi.patchEntityOf("projects", props.item.id, { status: value })
    .then(() => {
      props.getProjectList();
    })
}

const WorkStatusDropdown = props => {
  return (
    props.role === "CliAdm" && props.item.work_status !== "Application processing" ?
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
              onClick={event => handleClick({ value, props }, event)}
            >{name}</CDropdownItem>
          })}

        </CDropdownMenu>
      </CDropdown > : null


  )
}

const mapStateToProps = state => ({
  role: state.currentUser.role
})

const mapDispatchToProps = dispatch => ({
  getProjectList: () => dispatch(getProjectList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkStatusDropdown)
