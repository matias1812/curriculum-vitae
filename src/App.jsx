import './App.css'
import Datos from './component/informacionPersonal';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Datos/>}/>
    </Routes>
    </>
  )
}

export default App
