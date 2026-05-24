const projects = [
  {
    id: "app-adopcion-perros",
    title: "App de Adopción de Perros",
    description:
      "Plataforma web para rescatar y adoptar perros con panel de administrador y tienda solidaria.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    category: "fullstack",
    image: "/project-dogs.jpg",
    url: "https://github.com/leonaldo999/huellas-frontend.git",
    github: "https://github.com/leonaldo999",
  },
  {
    id: "landing-ropa-masculina",
    title: "Landing Page de Ropa Masculina",
    description:
      "Landing responsiva con filtros, carrito de compras y conexión a API.",
    tech: ["React", "Tailwind", "API REST"],
    category: "frontend",
    image: "/project-clothing.jpg",
    url: "#",
    github: "https://github.com/tu-usuario/clothing-landing",
  },
  {
    id: "panel-admin-fullstack",
    title: "Panel de Administración Full Stack",
    description: "Dashboard para administrar usuarios y contenido dinámico.",
    tech: ["MERN Stack", "JWT", "CRUD"],
    category: "fullstack",
    image: "/project-admin.jpg",
    url: "#",
    github: "https://github.com/tu-usuario/admin-panel",
  },
  {
    id: "blog-tecnico-personal",
    title: "Blog Técnico Personal",
    description:
      "Espacio para publicar artículos sobre programación y proyectos personales.",
    tech: ["React", "Markdown", "Vite"],
    category: "frontend",
    image: "/project-blog.png",
    url: "#",
    github: "https://github.com/tu-usuario/tech-blog",
  },
  {
    id: "carta-digital-qr",
    title: "Carta Digital con QR",
    description:
      "Carta PDF digitalizada con código QR, ideal para negocios físicos.",
    tech: ["HTML", "CSS", "PDF", "QR"],
    category: "frontend",
    image: "/project-qr-menu.jpg",
    url: "#",
    github: "https://github.com/tu-usuario/qr-menu",
  },
];

export const categories = [
  { id: "all", label: "Todos" },
  { id: "frontend", label: "Frontend" },
  { id: "fullstack", label: "Full Stack" },
];

export default projects;
