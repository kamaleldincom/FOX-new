import { FoxApiService } from '../services'

const foxApi = new FoxApiService();
const SERVER_ADDRESS = `${window.location.origin}`;

const getClientManagerList = () => {
    return dispatch => {
        const url = `${SERVER_ADDRESS}/api/client_managers/`;
        foxApi.get(url)
            .then(data => {
                const clientManagerTableInfo = {};
                clientManagerTableInfo.tableData = data;
                let first_row = data[0];
                clientManagerTableInfo.fields = Object.keys(first_row);

                dispatch(populateEntityTable(clientManagerTableInfo));
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

const populateEntityTable = clientManagerTableInfo => ({
    type: 'POPULATE_ENTITY_TABLE',
    entityListTable: clientManagerTableInfo
})

export {
    getClientManagerList
}