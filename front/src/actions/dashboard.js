import { FoxApiService } from '../services'

const foxApi = new FoxApiService();
const SERVER_ADDRESS = `${window.location.origin}`;

const getDashboardLayout = (userRole = "Dum", projectId = null) => {
  return dispatch => {
    // const url = `${SERVER_ADDRESS}/api/dashboard/`;
    // foxApi.get(url)
    //     .then(data => {
    //         if (data.dashboard) {
    //             dispatch(initiateDashboard(data.dashboard))
    //         }
    //     })

    let dashboard = null;
    switch (userRole) {
      case 'Contr':
        dashboard = {
          sidebar: [
            {
              _tag: "CSidebarNavItem",
              name: "Dashboard",
              to: "/dashboard",
              icon: "cil-speedometer",
            },
            {
              _tag: "CSidebarNavTitle",
              _children: ["APPLICATION"]
            },
            {
              _tag: "CSidebarNavDropdown",
              name: "Personnel Management",
              route: "/contractor/personal",
              icon: "cil-user",
              _children: [
                {
                  _tag: "CSidebarNavItem",
                  name: "1. Responsible Person",
                  to: `/projects/${projectId}/responsible_person`,
                },
                {
                  _tag: "CSidebarNavItem",
                  name: "2. Safety",
                  to: "safety_video",
                },
                {
                  _tag: "CSidebarNavItem",
                  name: "3. Assign Workers",
                  to: `/projects/${projectId}/assign_workers`,
                },
              ],
            },
            {
              _tag: "CSidebarNavDropdown",
              name: "Documentation",
              route: "/contractor/general",
              icon: "cil-file",
              _children: [
                {
                  _tag: "CSidebarNavItem",
                  name: "1. Related docs",
                  to: `/projects/${projectId}/related_documents`,
                },
                {
                  _tag: "CSidebarNavItem",
                  name: "2. Submit Proposal",
                  to: `/projects/${projectId}/submit_proposal`,
                },
              ],
            },
            {
              _tag: "CSidebarNavItem",
              name: "Application status",
              to: "/contractor-application-status",
              icon: "",
            },
          ],
          header_nav: [
            {
              _tag: "CHeaderNavItem",
              id: "head_nav_workers",
              className: "px-3",
              _children: [
                {
                  _tag: "FoxHeaderNavLink",
                  id: "head_nav_link_workers",
                  to: "/workers",
                  linktext: "Workers",
                }
              ],
            },
            {
              _tag: "CHeaderNavItem",
              id: "head_nav_projects",
              className: "px-3",
              _children: [
                {
                  _tag: "FoxHeaderNavLink",
                  id: "head_nav_link_projects",
                  to: "/projects",
                  linktext: "Projects",
                }
              ],
            },
          ],
        };
        break;
      case 'CliMan':
        dashboard = {
          sidebar: [
            {
              _tag: "CSidebarNavItem",
              name: "Dashboard",
              to: "/dashboard",
              icon: "cil-speedometer",
            },
          ],
          header_nav: [
            {
              _tag: "CHeaderNavItem",
              id: "head_nav_approvals",
              className: "px-3",
              _children: [
                {
                  _tag: "FoxHeaderNavLink",
                  id: "head_nav_link_approvals",
                  to: "/approvals",
                  linktext: "Approvals",
                },
              ],
            },
            {
              _tag: "CHeaderNavItem",
              id: "head_nav_current",
              className: "px-3",
              _children: [
                {
                  _tag: "FoxHeaderNavLink",
                  id: "head_nav_link_works",
                  to: "/works",
                  linktext: "Current Works",
                },
              ],
            },
          ],
        };
        break;
      case 'CliAdm':
        dashboard = {
          sidebar: [
            {
              _tag: "CSidebarNavItem",
              name: "Dashboard",
              to: "/dashboard",
              icon: "cil-speedometer",
            },
          ],
          header_nav: [
            {
              _tag: "CHeaderNavItem",
              id: "head_nav_managers",
              className: "px-3",
              _children: [
                {
                  _tag: "FoxHeaderNavLink",
                  id: "head_nav_link_managers",
                  to: "/managers",
                  linktext: "Managers",
                }
              ],
            },
            {
              _tag: "CHeaderNavItem",
              id: "head_nav_projects",
              className: "px-3",
              _children: [
                {
                  _tag: "FoxHeaderNavLink",
                  id: "head_nav_link_projects",
                  to: "/projects",
                  linktext: "Projects",
                }
              ],
            },
            {
              _tag: "CHeaderNavItem",
              id: "head_nav_contractors",
              className: "px-3",
              _children: [
                {
                  _tag: "FoxHeaderNavLink",
                  id: "head_nav_link_contractors",
                  to: "/contractors",
                  linktext: "Contractors",
                }
              ],
            },
            {
              _tag: "CHeaderNavItem",
              id: "head_nav_approvals",
              className: "px-3",
              _children: [
                {
                  _tag: "FoxHeaderNavLink",
                  id: "head_nav_link_approvals",
                  to: "/approvals",
                  linktext: "Approvals",
                }
              ],
            },
          ],
        };
        break;
      default:
        dashboard = {
          sidebar: [
            {
              _tag: "CSidebarNavItem",
              name: "Dashboard",
              to: "/dashboard",
              icon: "cil-speedometer",
            },
          ],
          header_nav: [
            {
              _tag: "CHeaderNavItem",
              id: "head_nav_example",
              className: "px-3",
              _children: [
                {
                  _tag: "FoxHeaderNavLink",
                  id: "head_nav_link_example",
                  to: "/",
                  linktext: "Example",
                }
              ],
            },
          ],
        };
        break;
    }
    dispatch(initiateDashboard(dashboard));
  }
}

const initiateDashboard = dashboard => ({
  type: 'INITIATE_DASHBOARD',
  sidebar: dashboard.sidebar,
  headerNav: dashboard.header_nav
})

export default getDashboardLayout