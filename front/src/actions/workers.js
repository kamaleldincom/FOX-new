import { RepresentationService } from '../services'

const repr = new RepresentationService
const getWorkerList = () => {
    return repr.displaySimpleList('workers', null, false)
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