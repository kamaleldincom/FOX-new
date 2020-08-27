import React from 'react';
const ProjectList = React.lazy(() => import('./views/projects/ProjectList'))
const ApprovalList = React.lazy(() => import('./views/approvals/ApprovalList'))
const ContractorList = React.lazy(() => import('./views/contractors/ContractorList'))
const CurrentWorksList = React.lazy(() => import('./views/current_works/CurrentWorksList'))
const ClientManagerList = React.lazy(() => import('./views/managers/ClientManagerList'))
const WorkerList = React.lazy(() => import('./views/workers/WorkerList'))
const WorkerCreate = React.lazy(() => import('./views/workers/WorkerCreate'))
const WorkerDetail = React.lazy(() => import('./views/workers/WorkerDetail'))
const ProjectCreate = React.lazy(() => import('./views/projects/ProjectCreate'))
const ProjectDetail = React.lazy(() => import('./views/projects/ProjectDetail'))
const ProjectPTW = React.lazy(() => import('./views/projects/ProjectPTW'))
const ContractorCreate = React.lazy(() => import('./views/contractors/ContractorCreate'))
const DocumentList = React.lazy(() => import('./views/documents/DocumentList'))
const DocumentCreate = React.lazy(() => import('./views/documents/DocumentCreate'))
const DocumentDetail = React.lazy(() => import('./views/documents/DocumentDetail'))
const SafetyVideo = React.lazy(() => import('./views/safety/Video'))


const routes = [
  { path: '/', exact: true, name: 'Fox' },
  { path: '/projects', name: 'Projects', component: ProjectList, exact: true },
  { path: '/projects/new', name: 'New', component: ProjectCreate, exact: true },
  { path: '/projects/:id/ptw', name: 'PTW', component: ProjectPTW, exact: true },
  { path: '/projects/:id/documents', name: 'Documents', component: DocumentList, exact: true },
  { path: '/projects/:id/documents/new', name: 'New', component: DocumentCreate, exact: false },
  { path: '/projects/:id/documents/:doc_id', name: 'Document Details', component: DocumentDetail, exact: false },
  { path: '/projects/:id/', name: 'Project Details', component: ProjectDetail },
  { path: '/approvals', name: 'Approvals', component: ApprovalList, exact: true },
  { path: '/current-works', name: 'Current Works', component: CurrentWorksList, exact: true },
  { path: '/contractors', name: 'Contractors', component: ContractorList, exact: true },
  { path: '/contractors/new', name: 'New', component: ContractorCreate, exact: true },
  { path: '/managers', name: 'Managers', component: ClientManagerList, exact: true },
  { path: '/workers', name: 'Workers', component: WorkerList, exact: true },
  { path: '/workers/new', name: 'New', component: WorkerCreate, exact: true },
  { path: '/workers/:id', name: 'Project Details', component: WorkerDetail, exact: true },
  { path: '/safety_video', name: 'Safety Video', component: SafetyVideo, exact: true },
];

export default routes;
