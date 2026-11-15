import {
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
} from 'react-icons/si'

export const personalInfo = {
  name: 'Joan Torres',
  fullName: 'Joan Torres Bautista',
  role: 'Estudiante de Ingeniería de Software',
  subtitle: 'Desarrollador en formación con enfoque en Backend & Aplicaciones Web',
  location: 'República Dominicana',
  statusBadge: 'En formación activa • Enfocado en Backend & Software',
  heroDescription:
    'Estudiante de Ingeniería de Software apasionado por el desarrollo backend y la tecnología. Construyo proyectos reales con JavaScript, Node.js, Express, React y bases de datos para fortalecer mis fundamentos técnicos cada día.',
  email: 'BautistaJoni51@gmail.com',
  github: 'https://github.com/joant20',
  githubUser: '@joant20',
  linkedin: 'https://www.linkedin.com/in/joantorres',
}

export const aboutData = {
  paragraphs: [
    'Soy Joan Torres, estudiante de Ingeniería de Software con un marcado interés por el desarrollo backend y la arquitectura de aplicaciones web. Mi enfoque de aprendizaje es práctico: transformar los conceptos que estudio en proyectos funcionales, escribiendo código estructurado y entendiendo cómo se comunican el cliente, el servidor y la base de datos.',
    'Me motiva especialmente el trabajo del lado del servidor —diseñar rutas, estructurar controladores, validar información en APIs REST y modelar datos en MongoDB y MySQL—, complementándolo con interfaces limpias y dinámicas en React.',
    'Como desarrollador en formación, busco seguir perfeccionando mis buenas prácticas de programación, control de versiones con Git y trabajo colaborativo en equipo.',
  ],
  pillars: [
    {
      id: 'backend',
      title: 'Desarrollo Backend',
      description:
        'Construcción de servidores y APIs REST con Node.js y Express, aplicando separación por rutas, controladores y middlewares.',
    },
    {
      id: 'databases',
      title: 'Bases de Datos SQL & NoSQL',
      description:
        'Modelado y persistencia de datos tanto en esquemas documentales con MongoDB como en tablas relacionales con MySQL.',
    },
    {
      id: 'frontend',
      title: 'Interfaces Modernas',
      description:
        'Desarrollo de aplicaciones web interactivas y responsivas con React, Vite, JavaScript moderno y CSS.',
    },
  ],
}

export const skillsLevels = [
  {
    id: 'nivel-solido',
    levelTitle: 'Base Práctica Sólida',
    levelBadge: 'Uso frecuente en proyectos',
    description:
      'Tecnologías que utilizo de forma constante como núcleo para construir la lógica, el servidor y el control de versiones de mis aplicaciones.',
    skills: [
      {
        name: 'JavaScript',
        category: 'Lenguaje Principal',
        levelLabel: 'Práctico Sólido',
        progress: 82,
        icon: SiJavascript,
        detail: 'ES6+, asincronía (async/await), consumo de APIs REST, manipulación de estructuras de datos y modularización.',
      },
      {
        name: 'Node.js',
        category: 'Entorno Backend',
        levelLabel: 'Práctico Sólido',
        progress: 78,
        icon: SiNodedotjs,
        detail: 'Creación de servidores HTTP, manejo de módulos, variables de entorno e integración con bases de datos.',
      },
      {
        name: 'Express',
        category: 'Framework Backend',
        levelLabel: 'Práctico Sólido',
        progress: 78,
        icon: SiExpress,
        detail: 'Diseño de endpoints REST (GET, POST, PUT, PATCH, DELETE), middlewares, autenticación con JWT y manejo de errores.',
      },
      {
        name: 'Git',
        category: 'Control de Versiones',
        levelLabel: 'Uso Diario',
        progress: 80,
        icon: SiGit,
        detail: ' Seguimiento de cambios, commits semánticos, manejo de ramas (branches) y resolución de fusiones.',
      },
      {
        name: 'GitHub',
        category: 'Colaboración & Despliegue',
        levelLabel: 'Uso Diario',
        progress: 82,
        icon: SiGithub,
        detail: 'Gestión de repositorios remotos, trabajo colaborativo en equipo (Pull Requests) y publicación con GitHub Pages.',
      },
    ],
  },
  {
    id: 'nivel-intermedio',
    levelTitle: 'Dominio Intermedio en Crecimiento',
    levelBadge: 'Aplicado en proyectos completos',
    description:
      'Tecnologías con las que desarrollo interfaces de usuario reactivas y gestiono almacenamiento de datos en proyectos académicos y personales.',
    skills: [
      {
        name: 'React',
        category: 'Frontend UI',
        levelLabel: 'Intermedio',
        progress: 74,
        icon: SiReact,
        detail: 'Componentes reutilizables, hooks (useState, useEffect, useContext), rutas con React Router e integración con Vite.',
      },
      {
        name: 'MongoDB',
        category: 'Base de Datos NoSQL',
        levelLabel: 'Intermedio',
        progress: 75,
        icon: SiMongodb,
        detail: 'Modelado de colecciones con Mongoose, validación de esquemas y conexión en la nube con MongoDB Atlas.',
      },
    ],
  },
  {
    id: 'nivel-consolidacion',
    levelTitle: 'Fundamentos Aplicados',
    levelBadge: 'En continua profundización',
    description:
      'Tecnología relacional aplicada en prácticas de servidor backend y diseño de esquemas de datos.',
    skills: [
      {
        name: 'MySQL',
        category: 'Base de Datos Relacional',
        levelLabel: 'Fundamentos Prácticos',
        progress: 68,
        icon: SiMysql,
        detail: 'Diseño de tablas relacionales, llaves primarias/foráneas y operaciones CRUD conectadas desde Node.js y Express.',
      },
    ],
  },
]

export const projectsData = [
  {
    id: 'tec-gamer-rd',
    title: 'Tec&Gamer RD',
    category: 'Portal Web • Videojuegos, IA & Tecnología',
    featured: true,
    description:
      'Portal de noticias sobre videojuegos, inteligencia artificial y tecnología enfocado en República Dominicana. Incluye buscador en tiempo real, filtrado por categorías, galería de tráilers, sección de jugadores profesionales con partidas en video y panel de administración.',
    highlights: [
      'Arquitectura de componentes reutilizables en React + Vite',
      'Persistencia de artículos, comentarios y vistas en la nube',
      'Reproductor integrado de tráilers y partidas competitivas',
    ],
    tech: ['React', 'Vite', 'JavaScript', 'CSS', 'GitHub'],
    liveUrl: 'https://joant20.github.io/tec-and-gamer-rd/',
    repoUrl: 'https://github.com/joant20/tec-and-gamer-rd',
  },
  {
    id: 'restaurante-pedidos',
    title: 'Aplicación de Pedidos para Restaurantes',
    category: 'Full-Stack • Menú Digital, Carrito & Cocina',
    featured: true,
    description:
      'Plataforma web donde los clientes exploran el menú por categorías, arman su carrito, confirman pedidos (a domicilio, para llevar o en local) y generan un ticket digital con código de barras, mientras el panel de cocina y administración gestiona las comandas y estados en vivo.',
    highlights: [
      'API REST con Node.js, Express y base de datos MongoDB Atlas',
      'Flujo completo de cliente, panel de cocina y gestión de productos/ventas',
      'Seguimiento de estados del pedido y descarga de ticket en PDF',
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'React', 'JavaScript'],
    liveUrl: 'https://joant20.github.io/Grupo_H/',
    repoUrl: 'https://github.com/joant20/Grupo_H',
  },
  {
    id: 'movie-app',
    title: 'Movie App',
    category: 'Frontend & Backend API REST con MySQL',
    featured: false,
    description:
      'Proyecto enfocado en el ecosistema de catálogo de películas: combina una interfaz web para búsqueda y visualización dinámica mediante consumo de API con un servidor backend propio en Node.js, Express y MySQL para crear, consultar, actualizar y eliminar películas.',
    highlights: [
      'Consumo de API y renderizado dinámico en el navegador',
      'Servidor REST con operaciones CRUD conectadas a MySQL',
      'Manejo de rutas, controladores y respuestas JSON estructuradas',
    ],
    tech: ['JavaScript', 'Node.js', 'Express', 'MySQL'],
    repoUrl: 'https://github.com/joant20/Movie-app',
    secondaryRepoUrl: 'https://github.com/joant20/Peliculas-Backend',
    secondaryRepoLabel: 'Backend (MySQL)',
  },
  {
    id: 'localtracking',
    title: 'LocalTracking',
    category: 'Ingeniería de Software • Requisitos & Modelado',
    featured: false,
    description:
      'Proyecto académico de Ingeniería de Requisitos y Modelado de Sistemas para una plataforma de seguimiento de envíos locales. Abarca la especificación de requisitos, el modelo relacional de datos y los prototipos de interfaz para Cliente, Comercio y Repartidor.',
    highlights: [
      'Especificación de requisitos funcionales y de interfaz',
      'Diseño del modelo de datos (Usuarios, Comercios, Pedidos, Ubicaciones)',
      'Prototipos interactivos para los 3 actores del sistema',
    ],
    tech: ['Ingeniería de Software', 'Modelado de Datos', 'Diseño UI'],
    diagrams: [
      {
        title: 'Mockup — Vista del Cliente',
        src: './localtracking/03-mockup-cliente.svg',
      },
      {
        title: 'Mockup — Panel del Comercio',
        src: './localtracking/04-mockup-comercio.svg',
      },
      {
        title: 'Mockup — App del Repartidor',
        src: './localtracking/05-mockup-repartidor.svg',
      },
      {
        title: 'Modelo de Datos del Sistema',
        src: './localtracking/02-requisitos-datos.svg',
      },
      {
        title: 'Requisitos de Interfaz',
        src: './localtracking/01-requisitos-interfaz.svg',
      },
    ],
  },
]

export const educationData = [
  {
    id: 'edu-ing-software',
    degree: 'Ingeniería de Software',
    status: 'Estudiante en curso',
    institution: 'Formación Universitaria — República Dominicana',
    description:
      'Formación académica centrada en fundamentos de programación, lógica algorítmica, ingeniería de requisitos, modelado de sistemas, bases de datos y buenas prácticas en el ciclo de vida del software.',
    topics: [
      'Fundamentos de Programación',
      'Ingeniería de Requisitos y Modelado',
      'Bases de Datos Relacionales',
      'Arquitectura y Diseño de Software',
    ],
  },
  {
    id: 'edu-desarrollo-practico',
    degree: 'Desarrollo Backend & Aplicaciones Web',
    status: 'Aprendizaje práctico continuo',
    institution: 'Proyectos Académicos y Autodidactas',
    description:
      'Desarrollo constante de proyectos reales aplicando el ecosistema de JavaScript: creación de APIs REST con Node.js y Express, persistencia con MongoDB y MySQL, interfaces con React y trabajo colaborativo con Git y GitHub.',
    topics: [
      'APIs REST con Node.js & Express',
      'MongoDB & MySQL',
      'Frontend con React & Vite',
      'Control de Versiones con Git & GitHub',
    ],
  },
]
