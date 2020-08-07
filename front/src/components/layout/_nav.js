export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['APPLICATION']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Responsible Person',
    route: '/contractor/personal',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '1. Information',
        to: '/contractor/personal/info',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '2. Safety',
        to: '/contractor/personal/video',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '3. Quiz',
        to: '/contractor/personal/quiz',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'General',
    route: '/contractor/general',
    icon: 'cil-industry',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '1. Risk Assessment',
        to: '/contractor/general/risk-assesment',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '2. Method of Statement',
        to: '/contractor/general/method-of-statement',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '3. Permit to Work',
        to: '/contractor/general/permit-to-work',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '4. Hazardous work permits',
        to: '/contractor/general/hazardous-work-permits',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '5. Workers',
        to: '/contractor/general/workers',
      }
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Application status',
    to: '/contractor-application-status',
    icon: '',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['WORKS']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Work status',
    to: '/contactor/work/status',
    icon: '',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Workflow Notes',
    to: '/contactor/work/notes',
    icon: 'cil-bell',
  },
]

