import {Outlet} from 'react-router-dom'
import {toAbsoluteUrl} from '@/utils/toAbsoluteUrl'
import ExamplesNavbar from '@/components/layout/Navbars/ExamplesNavbar'
import LandingPageHeader from '@/components/layout/Headers/LandingPageHeader'
import {Button, Container, Row, Col} from 'reactstrap'

export const ComingSoonLayout = () => {
  return (
    <>
      <LandingPageHeader />
    </>
  )
}
