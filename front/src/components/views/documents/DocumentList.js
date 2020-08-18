import React, { Component } from 'react'
import FoxEntityListTable from '../../tables/FoxEntityListTable'
import { getProfileFetch, getTemplateList, } from '../../../actions'
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

class DocumentList extends Component {


  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => this.props.getTemplateList())
  }

  render = () => {
    return (
      <FoxEntityListTable
        tableName='Documents'
        fields={this.props.documentListTable.fields}
        getBadge={getBadge}
        tableData={this.props.documentListTable.tableData}
        onRowClick={alertOnClick} />
    )
  }

}

const mapStateToProps = state => {
  return {
    documentListTable: state.entityListTable
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getTemplateList: () => dispatch(getTemplateList())
})

export default connect(mapStateToProps, mapDispatchToProps)(DocumentList)