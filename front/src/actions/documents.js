import { RepresentationService } from '../services'

const repr = new RepresentationService
const getDocumentList = (params = null, additional = false) => {
    return repr.displaySimpleList('documents', params, additional)
}

const getDocument = () => {

}

const createDocument = () => {

}

const updateDocument = () => {

}

const deleteDocument = () => {

}

export {
    getDocumentList
}