import {lazy} from 'react'
import {Navigate, useRoutes} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
import {SuspensedView} from '@/utils/SuspensedView'
import {ComingSoonLayout} from '@/features/coming-soon/components'

const PublicRoutes = () => {
  const ComingSoonRoutes = lazy(() => import('@/features/coming-soon/routes'))

  const routes = useRoutes([
    {
      path: '/*',
      element: (
        <>
          <Outlet />
        </>
      ),
      children: [
        {
          path: '*',
          element: (
            <SuspensedView>
              <ComingSoonRoutes />
            </SuspensedView>
          ),
        },
      ],
    },
  ])
  return <>{routes}</>
}

export default PublicRoutes
