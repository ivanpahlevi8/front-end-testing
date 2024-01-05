import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header'
import Traffic from './pages/page1'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {

  return (
    <>
      <Header />

      <Router>
        <Routes>
          <Route path='/' element={<Traffic/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
