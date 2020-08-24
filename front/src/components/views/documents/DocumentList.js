import React, { Component } from 'react'
import FoxEntityListTable from '../../tables/FoxEntityListTable'
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
      .then(() =>
        this.props.getDocumentList({
          project_id: this.props.match.params.id
        }))
  }

  render = () => {
    return (
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
    documentListTable: state.entityListTable
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getDocumentList: (params) => dispatch(getDocumentList(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(DocumentList)