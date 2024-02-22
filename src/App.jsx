import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Traffic                                   from './pages/page1'
import Traffic2                                  from './pages/page2'
import Traffic3                                  from './pages/page3'
import Traffic4                                  from './pages/page4'
import Traffic5                                  from './pages/page5'
import Traffic6 from './pages/page6'
import Traffic7 from './pages/page7'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Traffic2/>}/>
          <Route path='/ksb60' element={<Traffic/>}/>
          <Route path='/ksb61' element={<Traffic2/>}/>
          <Route path='/ksb64' element={<Traffic6/>}/>
          <Route path='/real/ksb61' element={<Traffic3/>}/>
          <Route path='/real/ksb60' element={<Traffic4/>}/>
          <Route path='/real/ksb64' element={<Traffic7/>}/>
          <Route path='/pagination' element={<Traffic5/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
