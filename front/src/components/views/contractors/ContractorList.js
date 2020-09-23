import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FoxEntityListTable, FoxTableWithDeleteOption } from '../../tables'
import { getProfileFetch, getContractorList, } from '../../../actions'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

class ContractorList extends Component {

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => this.props.getContractorList(this.props.role))
  }

  render = () => {
    return (
      this.props.role == 'CliAdm' ?
        <FoxTableWithDeleteOption
          {...this.props}
          tableName='Contractors'
          fields={this.props.contractorTable.fields}
          getBadge={getBadge}
          tableData={this.props.contractorTable.tableData}
          updateList={this.props.getContractorList}
        />
        :
        <FoxEntityListTable
          {...this.props}
          tableName='Contractors'
          fields={this.props.contractorTable.fields}
          getBadge={getBadge}
          tableData={this.props.contractorTable.tableData}
        />
    )
  }
}

const mapStateToProps = state => {
  return {
    contractorTable: state.entityListTable,
    role: state.currentUser.role
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getContractorList: (role) => dispatch(getContractorList(role))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContractorList)