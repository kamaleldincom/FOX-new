import React, { Component } from 'react'
import FoxEntityListTable from '../../tables/FoxEntityListTable'
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

const alertOnClick = () => {
  alert('Clicked!');
}

class ClientManagerList extends Component {

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => this.props.getClientManagerList())
  }

  render = () => {
    return (
      <FoxEntityListTable
        {...this.props}
        tableName='Managers'
        fields={this.props.clientManagerTable.fields}
        getBadge={getBadge}
        tableData={this.props.clientManagerTable.tableData}
        onRowClick={alertOnClick} />
    )
  }

}

const mapStateToProps = state => {
  return {
    clientManagerTable: state.entityListTable
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getClientManagerList: () => dispatch(getClientManagerList())
})

export default connect(mapStateToProps, mapDispatchToProps)(ClientManagerList)