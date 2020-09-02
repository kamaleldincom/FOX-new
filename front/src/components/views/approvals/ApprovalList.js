import React, { Component } from 'react'
import FoxEntityListTable from '../../tables/FoxEntityListTable'
import { getProfileFetch, getApprovalList } from '../../../actions'
import { connect } from 'react-redux'


const getBadge = status => {
    switch (status) {
        case 'Pending': return 'primary'
        case 'Approved': return 'success'
        case 'Rejected': return 'danger'
        default: return 'primary'
    }
}


class ApprovalList extends Component {

    componentDidMount = async () => {
        await this.props.getProfileFetch()
            .then(() => this.props.getApprovalList())
    }

    render = () => {
        return (
            <FoxEntityListTable
                {...this.props}
                tableName='Approvals'
                fields={this.props.projectTable.fields}
                getBadge={getBadge}
                tableData={this.props.projectTable.tableData}
            />
        )
    }

}

const mapStateToProps = state => {
    return {
        projectTable: state.entityListTable
    }
}

const mapDispatchToProps = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch()),
    getApprovalList: () => dispatch(getApprovalList()),
    setApprovalId: () => dispatch(setApprovalId())
})

export default connect(mapStateToProps, mapDispatchToProps)(ApprovalList)
