import type { SiteConfig } from "./types.ts";

export const site: SiteConfig = {
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "#servicios" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Nosotros", href: "#nosotros" },
  ],
  hero: {
    title: "Comienza a visualizar proyectos arquitectónicos en realidad aumentada",
    description:
      "La plataforma que permite a arquitectos y diseño mostrar sus proyectos en 3D con realidad aumentada, facil de usar y accesible para todos digitales para tu negocio",
    cta: "Prueba gratis ahora",
    legalNote: "No se requiere tarjeta de crédito",
    imageSrc: "assets/images/arquitecto-usando-visor.png",
    imageAlt: "Arquitecto usando visor de realidad aumentada",
  },
  stats: [
    { value: "50+", label: "proyectos realizados", iconClass: "projects" },
    { value: "175+", label: "clientes satisfechos", iconClass: "clients" },
    { value: "50", label: "ciudades cubiertas", iconClass: "employees" },
    { value: "1000+", label: "visualizaciones realizadas en 2025", iconClass: "views" },
  ],
  values: [
    {
      id: "visualiza",
      title: "Visualiza en cualquier lugar",
      body: "Muestra tus proyectos arquitectónicos donde quieras: en reuniones, estudios o directamente en el terreno donde se construirá",
      imageSrc: "assets/images/valor-1.jpg",
      imageAlt: "Persona usando visor VR en oficina",
      buttonLabel: "Saber más",
      buttonHref: "#",
      collaborator: {
        name: "Alejandro Méndez",
        role: "Arquitecto Senior",
        initials: "AM",
        description:
          "Virtual Vision transformó la forma en que presentamos nuestros proyectos a los clientes.",
      },
      blobColor: "#FCD34D",
    },
    {
      id: "crece",
      title: "Crece más rápido",
      body: "Impulsa tu estudio de arquitectura o diseño con herramientas de visualización 3D que impresionan a tus clientes",
      imageSrc: "assets/images/valor-2.jpg",
      imageAlt: "Persona con post-its en la cara",
      buttonLabel: "Conoce más",
      buttonHref: "#",
      collaborator: {
        name: "Carmen Rodríguez",
        role: "Directora Creativa",
        initials: "CR",
        description:
          "Desde que implementamos Virtual Vision, el tiempo para cerrar proyectos se redujo a la mitad.",
      },
      blobColor: "#86EFAC",
    },
    {
      id: "gestion",
      title: "Gestión simple",
      body: "Controla todos tus proyectos arquitectónicos con nuestras herramientas intuitivas. Comparte avances con clientes, colabora con tu equipo y toma decisiones en tiempo real",
      imageSrc: "assets/images/Manos_trabajando.jpg",
      imageAlt: "Manos trabajando en circuito electrónico",
      buttonLabel: "Conoce más",
      buttonHref: "#",
      collaborator: {
        name: "Javier Pérez",
        role: "Director de Operaciones",
        initials: "JP",
        description:
          "La plataforma es increíblemente intuitiva. Hemos integrado Virtual Vision en todo nuestro flujo de trabajo.",
      },
      blobColor: "#BFDBFE", 
    },
  ],
  globalStats: [
    { value: "50+", label: "países" },
    { value: "175", label: "ciudades" },
    { value: "50", label: "idiomas" },
  ],
  services: [
    {
      iconClass: "ph ph-headset",
      title: "Soporte en vivo",
      description:
        "Asistencia técnica inmediata para tus proyectos arquitectónicos en realidad aumentada",
      linkLabel: "Saber más",
      linkHref: "#",
    },
    {
      iconClass: "ph ph-cube",
      title: "App de realidad aumentada",
      description:
        "Visualiza proyectos directamente desde dispositivos móviles con nuestra aplicación especializada",
      linkLabel: "Saber más",
      linkHref: "#",
    },
    {
      iconClass: "ph ph-device-mobile",
      title: "Gestión en dispositivos móviles",
      description:
        "Administra tus proyectos arquitectónicos desde cualquier lugar con nuestra interfaz móvil",
      linkLabel: "Saber más",
      linkHref: "#",
    },
  ],

  footerColumns: [
    {
      title: "Empresa",
      links: [
        { label: "Acerca de", href: "#" },
        { label: "Carreras", href: "#" },
        { label: "Contacto", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Productos",
      links: [
        { label: "Visualizacion AR", href: "#" },
        { label: "Planos 3D", href: "#" },
        { label: "Gestion de proyectos", href: "#" },
        { label: "App movil", href: "#" },
        { label: "Integraciones", href: "#" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Documentacion", href: "#" },
        { label: "Tutoriales", href: "#" },
        { label: "Casos de estudio", href: "#" },
      ],
    },
    {
      title: "Soporte",
      links: [
        { label: "Centro de ayuda", href: "#" },
        { label: "Contactanos", href: "#" },
        { label: "Estado del servicio", href: "#" },
        { label: "Preguntas frecuentes", href: "#" },
      ],
    },
  ],
  socialLinks: [
    { platform: "Twitter", href: "https://twitter.com", iconClass: "twitter" },
    { platform: "Facebook", href: "https://facebook.com", iconClass: "facebook" },
    { platform: "Instagram", href: "https://instagram.com", iconClass: "instagram" },
    { platform: "LinkedIn", href: "https://linkedin.com", iconClass: "linkedin" },
    { platform: "YouTube", href: "https://youtube.com", iconClass: "youtube" },
  ],
};
