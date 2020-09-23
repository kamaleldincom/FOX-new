import { RepresentationService } from '../services'


const repr = new RepresentationService
const getProjectList = (role) => {
    if (role === "CliAdm") {
        return repr.displayDeleteListWithoutStatus('projects', null, false);
    } else {
        return repr.displaySimpleListWithoutStatus('projects', null, false);
    }

}

const getProject = () => {

}

const createProject = () => {

}

const updateProject = () => {

}

const deleteProject = () => {

}

const setProjectId = (projectId) => {
    return dispatch => {
        dispatch(_setProjectId(projectId))
    }
}

const _setProjectId = (projectId) => ({
    type: 'SET_PROJECT_ID',
    projectId: projectId,
}
);

export {
    getProjectList, setProjectId
}