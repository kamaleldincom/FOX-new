import { RepresentationService } from '../services'

const repr = new RepresentationService
const getDocumentList = (params = null, additional = false, role = null) => {
    if (role === "CliAdm") {
        return repr.displayDeleteList('documents', params, additional)
    }
    else {
        return repr.displaySimpleList('documents', params, additional)

    }
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
