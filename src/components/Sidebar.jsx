import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <button
        type="button"
        className="hamburger-btn"
        onClick={toggleMenu}
        aria-label={isOpen ? 'Cerrar menu de navegacion' : 'Abrir menu de navegacion'}
        aria-expanded={isOpen}
        aria-controls="main-sidebar"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isOpen && <button type="button" className="sidebar-backdrop" onClick={closeMenu} aria-label="Cerrar menu" />}

      <aside id="main-sidebar" className={`sidebar ${isOpen ? 'is-open' : ''}`}>
        <div className="logo-container">
          <h2>Talento<span>Tech</span></h2>
        </div>

        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/equipo" className="nav-link" onClick={closeMenu}>Equipo</Link>
          </li>
        </ul>
      </aside>
    </>
  );
}