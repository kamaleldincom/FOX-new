import { RepresentationService } from '../services'

const repr = new RepresentationService
const getDocumentList = (params = null) => {
    return repr.displaySimpleList('documents', params)
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