import React from 'react';
const ProjectList = React.lazy(() => import('./views/projects/ProjectList'))
const ApprovalList = React.lazy(() => import('./views/approvals/ApprovalList'))
const ContractorList = React.lazy(() => import('./views/contractors/ContractorList'))
const CurrentWorksList = React.lazy(() => import('./views/current_works/CurrentWorksList'))
const ClientManagerList = React.lazy(() => import('./views/managers/ClientManagerList'))
const ClientManagerCreate = React.lazy(() => import('./views/managers/ClientManagerCreate'))
const ClientManagerDetail = React.lazy(() => import('./views/managers/ClientManagerDetail'))
const WorkerList = React.lazy(() => import('./views/workers/WorkerList'))
const WorkerCreate = React.lazy(() => import('./views/workers/WorkerCreate'))
const WorkerDetail = React.lazy(() => import('./views/workers/WorkerDetail'))
const ProjectCreate = React.lazy(() => import('./views/projects/ProjectCreate'))
const ProjectDetail = React.lazy(() => import('./views/projects/ProjectDetail'))
const ProjectPTW = React.lazy(() => import('./views/projects/ProjectPTW'))
const ProjectUploadDocs = React.lazy(() => import('./views/projects/ProjectUploadDocs'))
const ContractorCreate = React.lazy(() => import('./views/contractors/ContractorCreate'))
const ContractorDetail = React.lazy(() => import('./views/contractors/ContractorDetail'))
const DocumentList = React.lazy(() => import('./views/documents/DocumentList'))
const DocumentCreate = React.lazy(() => import('./views/documents/DocumentCreate'))
const DocumentDetail = React.lazy(() => import('./views/documents/DocumentDetail'))
const SafetyVideo = React.lazy(() => import('./views/safety/Video'))
const ResponsiblePerson = React.lazy(() => import('./views/workers/ResponsiblePerson'))
const WorkersAssign = React.lazy(() => import('./views/workers/Assign'))
const ProposalSubmit = React.lazy(() => import('./views/projects/ProposalSubmit'))


const routes = [
  { path: '/', exact: true, name: 'Fox' },
  { path: '/projects', name: 'Projects', component: ProjectList, exact: true },
  { path: '/projects/new', name: 'New', component: ProjectCreate, exact: true },
  { path: '/projects/:id/ptw', name: 'PTW', component: ProjectPTW, exact: true },
  { path: '/projects/:id/documents', name: 'Documents', component: DocumentList, exact: true },
  { path: '/projects/:id/documents/new', name: 'New', component: DocumentCreate, exact: false },
  { path: '/projects/:id/documents/:doc_id', name: 'Document Details', component: DocumentDetail, exact: false },
  { path: '/projects/:id/responsible_person', name: 'Responsible Person', component: ResponsiblePerson, exact: false },
  { path: '/projects/:id/safety_video', name: 'Safety Video', component: SafetyVideo, exact: true },
  { path: '/projects/:id/assign_workers', name: 'Assign Workers', component: WorkersAssign, exact: true },
  { path: '/projects/:id/submit_proposal', name: 'Submit Proposal', component: ProposalSubmit, exact: true },
  { path: '/projects/:id/related_documents', name: 'Related Documents', component: ProjectUploadDocs, exact: true },
  { path: '/projects/:id', name: 'Project Details', component: ProjectDetail, exact: false },
  { path: '/approvals', name: 'Approvals', component: ApprovalList, exact: true },
  { path: '/current-works', name: 'Current Works', component: CurrentWorksList, exact: true },
  { path: '/contractors', name: 'Contractors', component: ContractorList, exact: true },
  { path: '/contractors/new', name: 'New', component: ContractorCreate, exact: true },
  { path: '/contractors/:id', name: 'Detail', component: ContractorDetail, exact: true },
  { path: '/managers', name: 'Managers', component: ClientManagerList, exact: true },
  { path: '/managers/new', name: 'New', component: ClientManagerCreate, exact: true },
  { path: '/managers/:id', name: 'Details', component: ClientManagerDetail, exact: true },
  { path: '/workers', name: 'Workers', component: WorkerList, exact: true },
  { path: '/workers/new', name: 'New', component: WorkerCreate, exact: true },
  { path: '/workers/:id', name: 'Project Details', component: WorkerDetail, exact: true },
];

export default routes;
