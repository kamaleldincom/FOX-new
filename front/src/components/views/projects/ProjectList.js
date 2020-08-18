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

const alertOnClick = () => {
  alert('Clicked!');
}

class ProjectList extends Component {

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => this.props.getProjectList())
  }

  render = () => {
    return (
      <FoxEntityListTable
        tableName='Projects'
        fields={this.props.projectTable.fields}
        getBadge={getBadge}
        tableData={this.props.projectTable.tableData}
        onRowClick={alertOnClick} />
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
  getProjectList: () => dispatch(getProjectList())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)