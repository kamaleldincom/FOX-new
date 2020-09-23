import React, { Component } from 'react'
import { FoxEntityListTable, FoxTableWithDeleteOption } from '../../tables'
import { getProfileFetch, getSpecialCompetencyList, } from '../../../actions'
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


class SpecialCompetencyList extends Component {


  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() =>
        this.props.getSpecialCompetencyList({
          worker_id: this.props.match.params.id
        }, this.props.role))
  }

  render = () => {
    return (
      this.props.role == 'Contr' ?
        <FoxTableWithDeleteOption
          {...this.props}
          tableName='Worker Special Competencies'
          fields={this.props.specialCompetencyListTable.fields}
          getBadge={getBadge}
          tableData={this.props.specialCompetencyListTable.tableData}
          updateList={this.props.getSpecialCompetencyList}
        />
        :
        <FoxEntityListTable
          {...this.props}
          tableName='Worker Special Competencies'
          fields={this.props.specialCompetencyListTable.fields}
          getBadge={getBadge}
          tableData={this.props.specialCompetencyListTable.tableData}
        />
    )
  }

}

const mapStateToProps = state => {
  return {
    specialCompetencyListTable: state.entityListTable,
    role: state.currentUser.role
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getSpecialCompetencyList: (params, role) => dispatch(getSpecialCompetencyList(params, role))
})

export default connect(mapStateToProps, mapDispatchToProps)(SpecialCompetencyList)