import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header'
import Traffic from './pages/page1'
import Traffic2 from './pages/page2'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path='/ksb61realtime/' element={<Traffic/>}/>
          <Route path='/ksb61/' element={<Traffic2/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
