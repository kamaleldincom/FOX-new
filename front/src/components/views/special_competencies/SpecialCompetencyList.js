import React, { Component } from 'react'
import FoxEntityListTable from '../../tables/FoxEntityListTable'
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
                }))
    }

    render = () => {
        return (
            <FoxEntityListTable
                {...this.props}
                tableName='Special Competencies'
                fields={this.props.specialCompetencyListTable.fields}
                getBadge={getBadge}
                tableData={this.props.specialCompetencyListTable.tableData}
            />
        )
    }

}

const mapStateToProps = state => {
    return {
        specialCompetencyListTable: state.entityListTable
    }
}

const mapDispatchToProps = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch()),
    getSpecialCompetencyList: (params) => dispatch(getSpecialCompetencyList(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(SpecialCompetencyList)