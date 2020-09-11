import { RepresentationService } from '../services'

const repr = new RepresentationService
const getClientManagerList = () => {
    return repr.displaySimpleList('client_managers', null, false)
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