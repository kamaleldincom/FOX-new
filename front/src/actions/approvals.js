import { RepresentationService } from '../services'


const repr = new RepresentationService();
const getApprovalList = () => {
    return repr.displaySimpleList('approvals', null, false);
}

const getProject = () => {

}

const createProject = () => {

}

const updateApproval = () => {

}

const deleteApproval = () => {

}

export {
    getApprovalList
}
