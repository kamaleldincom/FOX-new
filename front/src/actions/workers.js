import { RepresentationService } from '../services'

const repr = new RepresentationService
const getWorkerList = (params = null, additional = false) => {
    return repr.displaySimpleList('workers', params, additional)
}

const getWorker = () => {

}

const createWorker = () => {

}

const updateWorker = () => {

}

const deleteWorker = () => {

}

export {
    getWorkerList
}