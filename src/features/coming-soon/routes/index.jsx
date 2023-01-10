import {Route, Routes, Navigate} from 'react-router-dom'
import {ComingSoonLayout} from '../components'

const ComingSoonRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<ComingSoonLayout />} />
      <Route index element={<ComingSoonLayout />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default ComingSoonRoutes
