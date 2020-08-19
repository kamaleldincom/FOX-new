import React, { Component } from 'react'
import FoxEntityListTable from '../../tables/FoxEntityListTable'
import { getProfileFetch, getProjectList, } from '../../../actions'
import { connect } from 'react-redux'


const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

class WorkerList extends Component {

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => this.props.getWorkerList())
  }

  render = () => {
    return (
      <FoxEntityListTable
        {...this.props}
        tableName='Projects'
        fields={this.props.workerTable.fields}
        getBadge={getBadge}
        tableData={this.props.workerTable.tableData}
      />
    )
  }

}

const mapStateToProps = state => {
  return {
    workerTable: state.entityListTable
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getProjectList: () => dispatch(getWorkerList())
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkerList)