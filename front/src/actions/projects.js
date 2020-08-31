import { FoxApiService, RepresentationService } from '../services'


const repr = new RepresentationService
const getProjectList = () => {
    return repr.displaySimpleList('projects')
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