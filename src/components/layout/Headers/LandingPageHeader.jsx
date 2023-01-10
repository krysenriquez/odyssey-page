import {useEffect, createRef} from 'react'
import {Button, Container} from 'reactstrap'
import {toAbsoluteUrl} from '@/utils/toAbsoluteUrl'

function LandingPageHeader() {
  let pageHeader = createRef()

  useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3
        pageHeader.current.style.transform = 'translate3d(0,' + windowScrollTop + 'px,0)'
      }
      window.addEventListener('scroll', updateScroll)
      return function cleanup() {
        window.removeEventListener('scroll', updateScroll)
      }
    }
  })

  // useEffect(() => {
  //   document.body.style.backgroundImage = 'none'
  //   return () => {}
  // }, [])

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${toAbsoluteUrl('/media/img/1.jpg')})`,
        }}
        className='page-header'
        data-parallax={true}
        ref={pageHeader}
      >
        <div className='filter' />
        <Container>
          <div className='motto text-center'>
            <img
              alt='logo'
              src={toAbsoluteUrl('/media/logos/tci.png')}
              style={{
                height: 400,
                width: 400,
              }}
            />
            <h1>GREAT THINGS ARE COMING</h1>
            <h3>We are preparing something amazing for you!</h3>
          </div>
        </Container>
        <div
          className='moving-clouds'
          style={{
            backgroundImage: `url(${toAbsoluteUrl('/media/img/clouds.png')})`,
          }}
        />
      </div>
    </>
  )
}

export default LandingPageHeader
