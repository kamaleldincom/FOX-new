import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FoxEntityListTable } from '../../tables'

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
      .then(() => this.props.getProjectList())
  }

  render = () => {
    return (
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
    projectTable: state.entityListTable
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getProjectList: () => dispatch(getProjectList()),
  setProjectId: () => dispatch(setProjectId())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)
