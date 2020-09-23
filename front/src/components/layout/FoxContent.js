import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade, CSpinner } from '@coreui/react'
import routes from '../routes'

const loading = (
  <div className="pt-3 text-center">
    <CSpinner size="sm" variant="grow" style={{ width: '4rem', height: '4rem' }} />
  </div>
)

const Page404 = React.lazy(() => import('../pages/Page404'));

const FoxContent = (props) => {
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <CFade>
                      <route.component {...props} />
                    </CFade>
                  )} />
              )
            })}
            {
              <Redirect from="/" to="/projects" />
            }
            <>
              <Page404 />
            </>
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

const mapStateToProps = state => ({
  role: state.currentUser.role
})

export default connect(mapStateToProps, null)(React.memo(FoxContent))
