import { FoxApiService } from '../services'

const foxApi = new FoxApiService();
const SERVER_ADDRESS = `${window.location.origin}`;

const getProjectList = () => {
    return dispatch => {
        const url = `${SERVER_ADDRESS}/api/projects/`
        foxApi.get(url)
            .then(data => {
                if (data.projects) {
                    dispatch(populdatProjectsTable(data.projects))
                }
            })

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

const populdatProjectsTable = projects => ({
    type: 'POPULATE_PROJECTS_TABLE',
    projectTable: projects
})

export {
    getProjectList
}