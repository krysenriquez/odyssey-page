import React from 'react'
import {createRoot} from 'react-dom/client'
import {AppRoutes} from './routes'

import 'bootstrap/scss/bootstrap.scss'
import './assets/scss/paper-kit.scss'
import './assets/demo/demo.css'

const container = document.getElementById('root')
createRoot(container).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
)
