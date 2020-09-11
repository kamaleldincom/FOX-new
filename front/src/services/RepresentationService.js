import FoxApiService from './FoxAPIService'

const foxApi = new FoxApiService();
const SERVER_ADDRESS = `${window.location.origin}`;

class RepresentationService {
  displaySimpleList = (entity, params = null, additional = false) => {
    return dispatch => {
      let url = this.compileUrl(dispatch, entity, params);
      foxApi.get(url)
        .then(data => {
          if (data.length > 0) {
            const entityTableInfo = this.generateTableInfo(data);
            additional === true ?
              dispatch(this.populateAdditionalEntityTable(entityTableInfo))
              :
              dispatch(this.populateEntityTable(entityTableInfo));
          }
        }).catch(function (error) {
          console.error(error);
        })
    }
  }

  displaySimpleListWithoutStatus = (entity, params = null, additional = false) => {
    return dispatch => {
      let url = this.compileUrl(dispatch, entity, params);
      foxApi.get(url)
        .then(data => {
          if (data.length > 0) {
            const entityTableInfo = this.generateTableInfo(data);
            entityTableInfo.fields.splice(entityTableInfo.fields.indexOf('status'), 1);
            additional === true ?
              dispatch(this.populateAdditionalEntityTable(entityTableInfo))
              :
              dispatch(this.populateEntityTable(entityTableInfo));
          }
        }).catch(function (error) {
          console.error(error);
        })
    }
  }

  populateAdditionalEntityTable = projectTableInfo => ({
    type: 'POPULATE_ADDITIONAL_ENTITY_TABLE',
    additionalEntityListTable: projectTableInfo
  })

  populateEntityTable = projectTableInfo => ({
    type: 'POPULATE_ENTITY_TABLE',
    entityListTable: projectTableInfo
  })

  clearEntityTable = () => ({
    type: 'CLEAR_ENTITY_TABLE',
  })


  compileUrl(dispatch, entity, params) {
    dispatch(this.clearEntityTable({}));
    let url = `${SERVER_ADDRESS}/api/${entity}/`;
    if (params) {
      url = new URL(url);
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    }
    return url;
  }

  generateTableInfo(data) {
    const entityTableInfo = {};
    entityTableInfo.tableData = data;
    let first_row = data[0];
    entityTableInfo.fields = Object.keys(first_row);
    entityTableInfo.fields.shift();
    return entityTableInfo;
  }
}

export default RepresentationService
