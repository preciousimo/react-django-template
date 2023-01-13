import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/home'
import Schools from './pages/schools'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/schools',
    element: <Schools />
  }
])

export default router
