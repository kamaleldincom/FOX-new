import { FoxApiService } from '../services'

const foxApi = new FoxApiService();
const SERVER_ADDRESS = `${window.location.origin}`;

const getContractorList = () => {
    return dispatch => {
        const url = `${SERVER_ADDRESS}/api/contractors/`
        foxApi.get(url)
            .then(data => {
                const contractorTableInfo = {};
                contractorTableInfo.tableData = data;
                let first_row = data[0];
                contractorTableInfo.fields = Object.keys(first_row);

                dispatch(populateEntityTable(contractorTableInfo));
            }).catch(function (error) {
                console.error(error);
            })
    }
}

const getContractor = () => {

}

const createContractor = () => {

}

const updateContractor = () => {

}

const deleteContractor = () => {

}

const populateEntityTable = contractorTableInfo => ({
    type: 'POPULATE_ENTITY_TABLE',
    entityListTable: contractorTableInfo
})

export {
    getContractorList
}