import { FoxApiService } from '../services'

const foxApi = new FoxApiService();
const SERVER_ADDRESS = `${window.location.origin}`;

const getProjectList = () => {
    return dispatch => {
        const url = `${SERVER_ADDRESS}/api/projects/`
        foxApi.get(url)
            .then(data => {
                const projectTableInfo = {};
                projectTableInfo.tableData = data;
                let first_row = data[0];
                projectTableInfo.fields = Object.keys(first_row);
                projectTableInfo.fields.shift()
                dispatch(populateEntityTable(projectTableInfo));
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

const populateEntityTable = projectTableInfo => ({
    type: 'POPULATE_ENTITY_TABLE',
    entityListTable: projectTableInfo
})

export {
    getProjectList
}