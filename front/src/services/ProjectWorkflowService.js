import FoxApiService from './FoxAPIService'

const foxApi = new FoxApiService();
const SERVER_ADDRESS = `${window.location.origin}`;

class ProjectWorkflowService {
  submitProposal = (projectId) => {
    let url = `${SERVER_ADDRESS}/api/projects/${projectId}/workflow/submit`
    foxApi.get(url)
  }
}

export default ProjectWorkflowService