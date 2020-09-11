import { RepresentationService } from '../services'

const repr = new RepresentationService
const getContractorList = () => {
    return repr.displaySimpleList('contractors', null, false)
}

const getContractor = () => {

}

const createContractor = () => {

}

const updateContractor = () => {

}

const deleteContractor = () => {

}

export {
    getContractorList
}