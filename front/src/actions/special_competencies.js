import { RepresentationService } from '../services'

const repr = new RepresentationService
const getSpecialCompetencyList = (params = null, additional = false, role = null) => {
    if (role === "Contr") {
        return repr.displayDeleteList('worker_special_competencies', params, additional)
    }
    else {
        return repr.displaySimpleList('worker_special_competencies', params, additional)
    }
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