import React from 'react'
// import { Link } from 'react-router-dom'
import {
} from '@coreui/react'
import { FoxSidebar } from '../layout';

import FoxHeader from "../layout/FoxHeader";

const Dashboard = () => {
  return (
    <div className="c-app c-default-layout">
      <FoxSidebar />
      <div className="c-wrapper">
        <FoxHeader />
        <div className="c-body">
        </div>
      </div>
    </div>
  )
}

export default Dashboard