import {BrowserRouter, Routes, Route} from "react-router-dom";

import Login from './pages/Login'
import Register from './pages/Register'
import Table from './pages/Table'

//import {AuthProvider} from "./context/auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/table' element={<Table />}/>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
