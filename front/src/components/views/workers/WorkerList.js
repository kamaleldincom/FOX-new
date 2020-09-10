import React, { Component } from 'react'
import { ExtendedListTable } from '../../tables'
import { getProfileFetch, getWorkerList, setProjectId } from '../../../actions'
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
    this.props.setProjectId(this.props.match.params.id)
    await this.props.getProfileFetch()
      .then(() => this.props.getWorkerList())
  }

  render = () => {
    return (
      <ExtendedListTable
        {...this.props}
        tableName='Workers'
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
  getWorkerList: () => dispatch(getWorkerList()),
  setProjectId: () => dispatch(setProjectId())
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkerList)
