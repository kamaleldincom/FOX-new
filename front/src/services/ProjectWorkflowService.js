import FoxApiService from './FoxAPIService'

const foxApi = new FoxApiService();
const SERVER_ADDRESS = `${window.location.origin}`;

class ProjectWorkflowService {
  submitProposal = async (projectId) => {
    let url = `${SERVER_ADDRESS}/api/projects/${projectId}/workflow/submit_proposal/`
    const res = await foxApi.patch(url)
    return res
  }
}

export default ProjectWorkflowService