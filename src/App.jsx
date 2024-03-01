import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PaginatingPage                            from './pages/page_paginating'
import RealTimePage                              from './pages/page_real';
import HistoricalPage                            from './pages/page_historical';

import RealTimePage from './pages/page_real';
import HistoricalPage from './pages/page_historical';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';
import LoginPage                                 from './pages/login_page';
import AdminPage                                 from './pages/admin_page';
import AddPage                                   from './pages/add_page';
import DeletePage                                from './pages/delete_page';
import UpdatePage                                from './pages/update_page';
import DeletePageProcess                         from './pages/delete_page_process';
import UpdatePageProcess                         from './pages/update_page_process';
import RegisterPage                              from './pages/register_page';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import LoginPage from './pages/login_page';
import AdminPage from './pages/admin_page';
import AddPage from './pages/add_page';
import DeletePage from './pages/delete_page';
import UpdatePage from './pages/update_page';
import DeletePageProcess from './pages/delete_page_process';
import UpdatePageProcess from './pages/update_page_process';
import RegisterPage from './pages/register_page';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/admin' element={<AdminPage/>}/>
          <Route path='/admin/add' element={<AddPage/>}/>
          <Route path='/admin/delete' element={<DeletePage/>}/>
          <Route path='/admin/delete/:tableName/:unitName/:pumpLable/:customerLable' element={<DeletePageProcess/>}/>
          <Route path='/admin/update' element={<UpdatePage/>}/>
          <Route path='/admin/update/:tableName/:unitName/:pumpLable/:customerLable' element={<UpdatePageProcess/>}/>
          <Route path='/pag/:tableName/:unitName/:pumpLable/:customerLable' element={<PaginatingPage/>}/>
          <Route path='/real/:tableName/:unitName/:pumpLable/:customerLable' element={<RealTimePage/>}/>
          <Route path='/histo/:tableName/:unitName/:pumpLable/:customerLable' element={<HistoricalPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
