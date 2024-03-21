import './App.css'
import Home from '../../pages/Home'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout'
import { Suspense } from 'react'
import NotFound from '../../pages/NotFound'
import Item from '../../pages/Item'

function App() {

  return (
    <Suspense>
      <Routes>
          <Route path='/' element={<Layout /> }>
          <Route index element={<Home />} />
          <Route path='/:itemId' element={<Item />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
