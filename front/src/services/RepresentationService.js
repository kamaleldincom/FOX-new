import FoxApiService from './FoxAPIService'

const foxApi = new FoxApiService();
// const SERVER_ADDRESS = `${window.location.origin}`;

class RepresentationService {
  displaySimpleList = (entity, params = null, additional = false) => {
    return dispatch => {
      dispatch(this.clearEntityTable({}));
      foxApi.getEntityList(entity, params)
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

  displayDeleteList = (entity, params = null, additional = false) => {
    return dispatch => {
      dispatch(this.clearEntityTable({}));
      foxApi.getEntityList(entity, params)
        .then(data => {
          if (data.length > 0) {
            const entityTableInfo = this.generateTableInfo(data);
            entityTableInfo.fields.push({
              key: 'delete_item',
              label: '',
              sorter: false,
              filter: false
            });
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
      dispatch(this.clearEntityTable({}));
      foxApi.getEntityList(entity, params)
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

  displayDeleteListWithoutStatus = (entity, params = null, additional = false) => {
    return dispatch => {
      dispatch(this.clearEntityTable({}));
      foxApi.getEntityList(entity, params)
        .then(data => {
          if (data.length > 0) {
            const entityTableInfo = this.generateTableInfo(data);
            entityTableInfo.fields.splice(entityTableInfo.fields.indexOf('status'), 1);
            entityTableInfo.fields.push({
              key: 'delete_item',
              label: '',
              sorter: false,
              filter: false
            });
            if (additional === true) {
              dispatch(this.populateAdditionalEntityTable(entityTableInfo))
              return Promise.resolve("Success: List received!")
            }
            else {
              dispatch(this.populateEntityTable(entityTableInfo));
              return Promise.resolve("Success: List received!")
            }
          }
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
