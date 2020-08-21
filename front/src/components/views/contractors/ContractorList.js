import React, { Component } from 'react'
import FoxEntityListTable from '../../tables/FoxEntityListTable'
import { getProfileFetch, getContractorList, } from '../../../actions'
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

class ContractorList extends Component {

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => this.props.getContractorList())
  }

  render = () => {
    return (
      <FoxEntityListTable
        {...this.props}
        tableName='Contractors'
        fields={this.props.contractorTable.fields}
        getBadge={getBadge}
        tableData={this.props.contractorTable.tableData}
        onRowClick={alertOnClick} />
    )
  }

}

const mapStateToProps = state => {
  return {
    contractorTable: state.entityListTable
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getContractorList: () => dispatch(getContractorList())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContractorList)