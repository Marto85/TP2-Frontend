import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Empresa from './pages/Empresa';
import Equipo from './pages/Equipo';
import Perfil from './pages/Perfil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Empresa />} />
          <Route path="equipo" element={<Equipo />} />
          {/* Ruta dinámica para las tarjetas de perfil */}
          <Route path="perfil/:id" element={<Perfil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
