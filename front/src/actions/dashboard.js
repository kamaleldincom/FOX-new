import { FoxApiService } from '../services'

const foxApi = new FoxApiService();
const SERVER_ADDRESS = `${window.location.origin}`;

const getDashboardLayout = () => {
    return dispatch => {
        const url = `${SERVER_ADDRESS}/api/dashboard/`;
        foxApi.get(url)
            .then(data => {
                if (data.dashboard) {
                    dispatch(initiateDashboard(data.dashboard))
                }
            })
    }
}

const initiateDashboard = dashboard => ({
    type: 'INITIATE_DASHBOARD',
    sidebar: dashboard.sidebar,
    headerNav: dashboard.header_nav
})

export default getDashboardLayout