import { RepresentationService } from '../services'

const repr = new RepresentationService
const getClientManagerList = (role) => {
    if (role === 'CliAdm') {
        return repr.displayDeleteList('client_managers', null, false)
    }
    else {
        return repr.displaySimpleList('client_managers', null, false)
    }
}

const getProject = () => {

}

const createProject = () => {

}

const updateProject = () => {

}

const deleteProject = () => {

}

export {
    getClientManagerList
}