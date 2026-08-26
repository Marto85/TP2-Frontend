# 🚀 Talento Tech - Presentación de Empresa

**Link al Deploy en Vercel:** [URL_DE_VERCEL_AQUÍ]

## 1. Título del Proyecto
**Talento Tech** - Sitio de presentación institucional

## 2. Descripción
El propósito de este proyecto es presentar a la empresa **Talento Tech**, sus datos institucionales (misión, visión, valores, metas, contexto y justificación) y a su equipo de trabajo, a través de una Single Page Application (SPA). Cada integrante cuenta con un perfil dinámico ("Sobre mí", habilidades, tech stack y proyectos destacados).

Este sitio reutiliza la base técnica de un Trabajo Práctico anterior de la Tecnicatura (originalmente "DevTeam Dashboard"), adaptada para la materia **Práctica Profesionalizante IV: Proyecto Integrador**.

## 3. Integrantes
| Nombre | Rol principal | GitHub |
| :--- | :--- | :--- |
| **Martín** | Product Owner | [Perfil de GitHub](https://github.com/Marto85) |
| **Nicolás** | Backend Developer | [Perfil de GitHub](https://github.com/NicolasRolon) |
| **Gastón** | Frontend Developer | [Perfil de GitHub](https://github.com/zamparg) |
| **Adrián** | Tester (QA) | [Perfil de GitHub](https://github.com/MaverickARG) |
| **Santiago** | DevOps | [Perfil de GitHub](https://github.com/santicuda) |

## 4. Tecnologías Utilizadas
*   **Core:** React, JavaScript (ES6+), HTML5, CSS3.
*   **Routing:** React Router (Manejo de rutas dinámicas y SPA).
*   **Entorno & Build:** Vite.
*   **Despliegue:** Vercel.
*   **Control de Versiones:** Git y GitHub.
*   **Recursos Visuales:** Google Fonts.

## 5. Estructura de Archivos
```text
src/
 ├── components/       # Componentes reutilizables (Sidebar.jsx, Layout.jsx, MemberCard.jsx, Carousel.jsx, SocialLinks.jsx)
 ├── pages/            # Vistas principales de la SPA
 │    ├── Home.jsx       # Landing de presentación
 │    ├── Equipo.jsx     # Grid de integrantes (cards)
 │    ├── Empresa.jsx    # Datos institucionales de la empresa
 │    └── Perfil.jsx     # Perfil / CV dinámico por integrante
 ├── data/
 │    └── team-data.json # Datos del equipo (roles, bios, skills, proyectos)
 ├── index.css         # Hoja de estilos global y variables CSS
 ├── App.jsx           # Configuración del React Router
 └── main.jsx          # Punto de entrada de la aplicación
```

## 6. Guía de Estilos
*   **Tipografía:** Lexend (Google Fonts).
*   **Paleta de Colores:**
    *   `Background Main:` #f8fafc (Gris muy claro)
    *   `Background Dark (Sidebar):` #0f172a (Azul oscuro)
    *   `Background Card:` #1e293b (Azul grisáceo)
    *   `Accent (Detalles y Hover):` #38bdf8 (Celeste brillante)
    *   `Text Main:` #f1f5f9 (Blanco humo)

## 7. Enlace al Proyecto Desplegado
[URL_DE_VERCEL_AQUÍ]

## 🤖 Uso de Inteligencia Artificial
Para la adaptación de este proyecto se utilizó Claude Code (Anthropic) como asistente para reestructurar el menú de navegación, crear la página institucional "Empresa" a partir del contenido provisto por el equipo, y actualizar los datos y bios de cada integrante en `team-data.json`, respetando la estructura y estilos visuales ya definidos en la base técnica original.
