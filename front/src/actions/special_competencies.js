import { RepresentationService } from '../services'

const repr = new RepresentationService
const getSpecialCompetencyList = (params = null, additional = false) => {
    return repr.displaySimpleList('worker_special_competencies', params, additional)
}

const getSpecialCompetency = () => {

}

const createSpecialCompetency = () => {

}

const updateSpecialCompetency = () => {

}

const deleteSpecialCompetency = () => {

}

export {
    getSpecialCompetencyList
}