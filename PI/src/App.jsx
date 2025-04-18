import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro from './pages/cadastro/Cadastro'
import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre'
import Login from './pages/login/Login'
import Receitas from './pages/receitas/Receitas'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='Cadastro' element={<Cadastro />} />
          <Route path='/' element={<Home />} />
          <Route path='Sobre' element={<Sobre />} />
          <Route path='Login' element={<Login />} />
          <Route path='Receitas' element={<Receitas />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
