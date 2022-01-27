import {BrowserRouter, Routes, Route} from "react-router-dom";

import Signin from './pages/Signin'
import Register from './pages/Register'
import Table from './pages/Table'

//import {AuthProvider} from "./context/auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Signin />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/table' element={<Table />}/>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
