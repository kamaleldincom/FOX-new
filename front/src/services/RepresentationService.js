import FoxApiService from './FoxAPIService'

const foxApi = new FoxApiService();
const SERVER_ADDRESS = `${window.location.origin}`;

class RepresentationService {
    displaySimpleList = (entity) => {
        return dispatch => {
            const url = `${SERVER_ADDRESS}/api/${entity}/`
            foxApi.get(url)
                .then(data => {
                    if (data.length > 0) {
                        const entityTableInfo = {};
                        entityTableInfo.tableData = data;
                        let first_row = data[0];
                        entityTableInfo.fields = Object.keys(first_row);
                        entityTableInfo.fields.shift();
                        dispatch(this.populateEntityTable(entityTableInfo));
                    }
                }).catch(function (error) {
                    console.error(error);
                })
        }
    }

    populateEntityTable = projectTableInfo => ({
        type: 'POPULATE_ENTITY_TABLE',
        entityListTable: projectTableInfo
    })

}

export default RepresentationService