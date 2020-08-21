import { FoxApiService, RepresentationService } from '../services'


const repr = new RepresentationService
const getProjectList = () => {
    return repr.displaySimpleList('projects')
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
    getProjectList
}