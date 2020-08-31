import React, { Component } from 'react'
import FoxEntityListTable from '../../tables/FoxEntityListTable'
import { getProfileFetch, getProjectList, setProjectId } from '../../../actions'
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


class ProjectList extends Component {

  componentDidMount = async () => {
    this.props.setProjectId(this.props.match.params.id)
    await this.props.getProfileFetch()
      .then(() => this.props.getProjectList())
  }

  render = () => {
    console.log('view props', this.props);
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
