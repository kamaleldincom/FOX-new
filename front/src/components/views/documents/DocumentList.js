import React from 'react'
import FoxEntityListTable from '../../tables/FoxEntityListTable'

const usersData = [
  { id: 0, name: 'John Doe', registered: '2018/01/01', role: 'Guest', status: 'Pending' },
  { id: 1, name: 'Samppa Nori', registered: '2018/01/01', role: 'Member', status: 'Active' },
  { id: 2, name: 'Estavan Lykos', registered: '2018/02/01', role: 'Staff', status: 'Banned' },
]


const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const fields = ['name', 'registered', 'role', 'status']

const alertOnClick = () => {
  alert('Clicked!');
}

const DocumentList = () => {
  return (
    <FoxEntityListTable
      tableName='Documents'
      fields={fields}
      getBadge={getBadge}
      usersData={usersData}
      onRowClick={alertOnClick} />
  )
}

export default DocumentList