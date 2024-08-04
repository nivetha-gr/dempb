import React from 'react'
import Listing from './Details/Listing'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import EditForm from './Funcitonalites/EditForm';
function App() {
  return (
    <div className='appStyle'>
        <h1>Dempb App</h1>
      <Router>
        <Routes>
          <Route exaact path={"/"} element={<Listing/>}/>
          <Route path={"/adduser"} element={<EditForm/>}/>
          <Route path={"/edituser/:id"} element={<EditForm/>}/>
        </Routes>
      </Router>
        

        
    </div>
  )
}

export default App