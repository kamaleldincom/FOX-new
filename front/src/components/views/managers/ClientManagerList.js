import React, { Component } from 'react'
import { FoxEntityListTable, FoxTableWithDeleteOption } from '../../tables'
import { getProfileFetch, getClientManagerList, } from '../../../actions'
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


class ClientManagerList extends Component {

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => this.props.getClientManagerList(this.props.role))
  }

  render = () => {
    return (
      this.props.role == 'CliAdm' ?
        <FoxTableWithDeleteOption
          {...this.props}
          tableName='Managers'
          fields={this.props.clientManagerTable.fields}
          getBadge={getBadge}
          tableData={this.props.clientManagerTable.tableData}
          updateList={this.props.getClientManagerList}
        />
        :
        <FoxEntityListTable
          {...this.props}
          updateList={this.props.getClientManagerList}
          tableName='Managers'
          fields={this.props.clientManagerTable.fields}
          getBadge={getBadge}
          tableData={this.props.clientManagerTable.tableData}
        />

    )
  }

}

const mapStateToProps = state => {
  return {
    clientManagerTable: state.entityListTable,
    role: state.currentUser.role
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getClientManagerList: (role) => dispatch(getClientManagerList(role))
})

export default connect(mapStateToProps, mapDispatchToProps)(ClientManagerList)