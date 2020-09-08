import React from 'react'
import { connect } from 'react-redux'
import { FoxApiService } from '../../services'
import { getProjectList } from '../../actions'
import { CDropdown, CDropdownToggle, CDropdownItem, CDropdownMenu } from '@coreui/react'
import CIcon from '@coreui/icons-react'


const foxApi = new FoxApiService();

const choices = [
	{ ready: 'Ready to start' },
	{ in_progress: 'In progress' },
	{ stopped: 'Stopped' },
	{ completed: 'Completed' },
	{ extended: 'Extended' },
]

const handleClick = (value, event) => {
	console.log(event);
	console.log(value);
}

const WorkStatusDropdown = props => {
	return (
		<CDropdown >
			<CDropdownToggle>
				<CIcon name={'cilSettings'} size={'md'} />
			</CDropdownToggle>
			<CDropdownMenu className="p-0" placement="bottom-end">
				{choices.map((choice) => {
					const [value, name] = Object.entries(choice)[0]
					return <CDropdownItem
						value={value}
						onClick={event => handleClick(value, event)}
					>{name}</CDropdownItem>
				})}

			</CDropdownMenu>
		</CDropdown >
	)
}

const mapStateToProps = state => ({
	role: state.currentUser.role
})

const mapDispatchToProps = dispatch => ({
	//pass
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkStatusDropdown)