import './App.css'
import Cadastro from './pages/cadastro/Cadastro'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App () {
return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='Cadastro' element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  </>
)
}

export default App
