import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PaginatingPage from './pages/page_paginating'
import RealTimePage from './pages/page_real';
import HistoricalPage from './pages/page_historical';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';
import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/pag/:tableName/:unitName/:pumpLable/:customerLable' element={<PaginatingPage/>}/>
          <Route path='/real/:tableName/:unitName/:pumpLable/:customerLable' element={<RealTimePage/>}/>
          <Route path='/histo/:tableName/:unitName/:pumpLable/:customerLable' element={<HistoricalPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
