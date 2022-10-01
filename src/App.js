import React from 'react';
import SideBar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';
import {Route, Routes} from 'react-router-dom';
import Tables from './components/Tables';
import Charts from './components/Charts';
import Pages from './components/Pages';

function App(){
  return (
  <div id="wrapper">  
  <SideBar/>


    <Routes>
    <Route path="/" element={<ContentWrapper/>} />
    <Route path='/tables' element={<Tables/>} />
    <Route path='/charts' element={<Charts/>} />
    <Route path='/pages' element={<Pages/>} />
    </Routes>
  
   </div>
  )

}

export default App;