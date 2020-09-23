import { RepresentationService } from '../services'

const repr = new RepresentationService
const getContractorList = (role) => {
    if (role === 'CliAdm') {
        return repr.displayDeleteList('contractors', null, false)
    }
    else {
        return repr.displaySimpleList('contractors', null, false)
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

export {
    getContractorList
}