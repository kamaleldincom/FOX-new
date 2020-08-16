import React, { Component } from 'react'
import FoxEntityListTable from '../../tables/FoxEntityListTable'
import { getProfileFetch, getProjectList, } from '../../../actions'
import { connect } from 'react-redux'

const usersData = [
  { id: 0, name: 'John Doe', registered: '2018/01/01', role: 'Guest', status: 'Pending' },
  { id: 1, name: 'Samppa Nori', registered: '2018/01/01', role: 'Member', status: 'Active' },
  { id: 2, name: 'Estavan Lykos', registered: '2018/02/01', role: 'Staff', status: 'Banned' },
]


const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const fields = ['name', 'registered', 'role', 'status']

const alertOnClick = () => {
  alert('Clicked!');
}

class ProjectList extends Component {

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => this.props.getProjectsList())
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
    projectTable: state.projectTable
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getProjectList: () => dispatch(getProjectList())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)