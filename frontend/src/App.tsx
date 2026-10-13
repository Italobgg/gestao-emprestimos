import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Emprestimos from './pages/Emprestimos'
import Clientes from './pages/Clientes'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/emprestimos" element={<Emprestimos />} />
        <Route path="/clientes" element={<Clientes />} />
      </Route>
    </Routes>
  )
}
