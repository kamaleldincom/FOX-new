import { RepresentationService } from '../services'

const repr = new RepresentationService
const getWorkerList = (params = null, additional = false, role = null) => {
    if (role === "Contr") {
        return repr.displayDeleteList('workers', params, additional)
    }
    else {
        return repr.displaySimpleList('workers', params, additional)
    }
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