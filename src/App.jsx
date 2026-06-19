import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import TAM from './pages/TAM'

export default function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tam" element={<TAM />} />
      </Routes>
    </HashRouter>
  )
}
