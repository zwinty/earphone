import './App.css'
import { Routes,Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import TopPage from './pages/TopPage'
import KaitoriPage from './pages/KaitoriPage'
import TopPageAfter from './pages/TopPageAfter'
import MembershipPage from './pages/membershipPage'



function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route index  element ={<TopPage/>}/>
        <Route path='/home' element={<TopPage/>}/>
        <Route path='/kaitori' element={<KaitoriPage/>}/>
        <Route path='/toppage-after' element={<TopPageAfter/>}/>
        <Route path='/membership' element={<MembershipPage/>}/>
      </Routes>
    
   </BrowserRouter>

  
  )
}

export default App


 
