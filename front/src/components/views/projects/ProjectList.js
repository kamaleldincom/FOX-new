import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FoxEntityListTable, FoxTableWithDeleteOption } from '../../tables'

import { getProfileFetch, getProjectList, setProjectId } from '../../../actions'


const getBadge = status => {
  switch (status) {
    case 'Created': return 'secondary'
    case 'Submitted': return 'warning'
    case 'Approved': return 'success'
    case 'Rejected': return 'danger'
    case 'Application processing': return 'secondary'
    case 'Ready to start': return 'success'
    case 'Works started': return 'info'
    case 'Works finished': return 'warning'
    case 'Extended': return 'primary'
    case 'Closed': return 'dark'
    default: return 'primary'
  }
}


class ProjectList extends Component {

  componentDidMount = async () => {
    this.props.setProjectId(this.props.match.params.id)
    await this.props.getProfileFetch()
      .then(() => this.props.getProjectList(this.props.role))
  }

  render = () => {
    return (
      this.props.role == 'CliAdm' ?
        <FoxTableWithDeleteOption
          {...this.props}
          tableName='Projects'
          fields={this.props.projectTable.fields}
          getBadge={getBadge}
          tableData={this.props.projectTable.tableData}
          updateList={this.props.getProjectList}
        /> :
        <FoxEntityListTable
          {...this.props}
          tableName='Projects'
          fields={this.props.projectTable.fields}
          getBadge={getBadge}
          tableData={this.props.projectTable.tableData}
        />

    )
  }

}

const mapStateToProps = state => {
  return {
    projectTable: state.entityListTable,
    role: state.currentUser.role
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getProjectList: (role) => dispatch(getProjectList(role)),
  setProjectId: () => dispatch(setProjectId())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)
