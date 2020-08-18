import { FoxApiService } from '../services'

const foxApi = new FoxApiService();
const SERVER_ADDRESS = `${window.location.origin}`;

const getProjectList = () => {
    return dispatch => {
        const url = `${SERVER_ADDRESS}/api/projects/`
        foxApi.get(url)
            .then(data => {
                const projectTableInfo = {}
                projectTableInfo.tableData = data
                projectTableInfo.fields = data[0].keys

                dispatch(populdatProjectsTable(projectTableInfo))
            }).catch(function (error) {
                console.error(error);
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

const populdatProjectsTable = projectTableInfo => ({
    type: 'POPULATE_PROJECTS_TABLE',
    projectTable: projectTableInfo
})

export {
    getProjectList
}