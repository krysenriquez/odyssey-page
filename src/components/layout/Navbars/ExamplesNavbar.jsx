import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import classnames from 'classnames'
import {toAbsoluteUrl} from '@/utils/toAbsoluteUrl'
import {Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container, Button} from 'reactstrap'

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = useState('navbar-transparent')
  const [navbarCollapse, setNavbarCollapse] = useState(false)

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse)
    document.documentElement.classList.toggle('nav-open')
  }

  useEffect(() => {
    const updateNavbarColor = () => {
      if (document.documentElement.scrollTop > 299 || document.body.scrollTop > 299) {
        setNavbarColor('')
      } else if (document.documentElement.scrollTop < 300 || document.body.scrollTop < 300) {
        setNavbarColor('navbar-transparent')
      }
    }

    window.addEventListener('scroll', updateNavbarColor)

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor)
    }
  })
  return (
    <Navbar
      className={classnames('fixed-top', navbarColor)}
      color-on-scroll='300'
      expand='lg'
      container={false}
    >
      <div className='container'>
        <div className='navbar-translate'>
          <NavbarBrand
            data-placement='bottom'
            to='/index'
            target='_blank'
            title='Top Choice International'
            tag={Link}
          >
            <img
              alt='logo'
              src={toAbsoluteUrl('/media/logos/tci.png')}
              style={{
                height: 150,
                width: 150,
              }}
            />
          </NavbarBrand>
        </div>
      </div>
    </Navbar>
  )
}

export default ExamplesNavbar
