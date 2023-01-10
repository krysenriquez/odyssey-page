import {Suspense} from 'react'
import {Routes, Route, BrowserRouter, Outlet} from 'react-router-dom'
const {PUBLIC_URL} = import.meta.env
import {LayoutProvider} from '@/providers/layout/LayoutProvider'
import {LayoutSplashScreen} from '@/providers/SplashScreen'
import PublicRoutes from './PublicRoutes'

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <LayoutProvider>
        <Outlet />
      </LayoutProvider>
    </Suspense>
  )
}

export const AppRoutes = () => {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path='/*' element={<PublicRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
