import { FoxApiService } from '../services'

const foxApi = new FoxApiService();
const SERVER_ADDRESS = `${window.location.origin}`;

const getTemplateList = () => {
    return dispatch => {
        const url = `${SERVER_ADDRESS}/api/templates/`
        foxApi.get(url)
            .then(data => {
                const templateTableInfo = {};
                templateTableInfo.tableData = data;
                let first_row = data[0];
                templateTableInfo.fields = Object.keys(first_row);

                dispatch(populateEntityTable(templateTableInfo));
            }).catch(function (error) {
                console.error(error);
            })
    }
}

const getTemplate = () => {

}

const createTemplate = () => {

}

const updateTemplate = () => {

}

const deleteTemplate = () => {

}

const populateEntityTable = projectTableInfo => ({
    type: 'POPULATE_ENTITY_TABLE',
    entityListTable: projectTableInfo
})

export {
    getTemplateList
}