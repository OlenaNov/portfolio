import './App.css'
import Home from '../../pages/Home'
import { Route, Routes } from 'react-router-dom'
import Work from '../../pages/Work'
import Layout from '../Layout/Layout'
import { Suspense } from 'react'
import NotFound from '../../pages/NotFound/NotFound'

function App() {

  return (
    <Suspense>
      <Routes>
          <Route path='/' element={<Layout /> }>
          <Route index element={<Home />} />
          <Route path='work' element={<Work />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
