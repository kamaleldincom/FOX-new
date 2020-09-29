import React, { Component } from 'react'
import { FoxEntityListTable, FoxTableWithDeleteOption } from '../../tables'
import { getProfileFetch, getDocumentList, } from '../../../actions'
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

class DocumentList extends Component {

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => {
        this.props.getDocumentList({
          project_id: this.props.match.params.id,
        }, false, this.props.role);
      })

  }

  render = () => {
    return (
      this.props.role == 'CliAdm' ?
        <FoxTableWithDeleteOption
          {...this.props}
          tableName='Documents'
          fields={this.props.documentListTable.fields}
          getBadge={getBadge}
          tableData={this.props.documentListTable.tableData}
          updateList={this.props.getDocumentList}
        />
        :
        <FoxEntityListTable
          {...this.props}
          tableName='Documents'
          fields={this.props.documentListTable.fields}
          getBadge={getBadge}
          tableData={this.props.documentListTable.tableData}
        />
    )
  }

}

const mapStateToProps = state => {
  return {
    documentListTable: state.entityListTable,
    role: state.currentUser.role
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getDocumentList: (params, additional, role) => dispatch(getDocumentList(params, additional, role))
})

export default connect(mapStateToProps, mapDispatchToProps)(DocumentList)