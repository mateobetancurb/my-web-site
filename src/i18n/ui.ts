export const ui = {
  en: {
    header: {
      nav: {
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        experience: 'Experience',
        process: 'Process',
        contact: 'Get in Touch',
      },
    },
    hero: {
      badge: 'Available for new projects',
      headline: 'I build high-performance web applications with clean interfaces and',
      headlineHighlight: 'scalable architecture.',
      body: "I'm a full-stack developer with over 5 years of experience creating modern web platforms using React, Next.js, TypeScript, Node.js, and cloud-based infrastructure.",
      ctaPrimary: 'View Projects',
      ctaSecondary: 'Contact Me',
    },
    about: {
      headline: 'Precision-driven engineering',
      body: 'I specialize in building fast, scalable, and user-focused web applications that solve real business challenges without sacrificing aesthetic quality.',
      stats: [
        {
          icon: 'history',
          value: '5+ Years',
          description: 'Extensive experience delivering production-ready code for global agencies and startups.',
        },
        {
          icon: 'terminal',
          value: 'Full-Stack',
          description: 'Proficient across the entire lifecycle, from database architecture to front-end micro-interactions.',
        },
        {
          icon: 'bolt',
          value: 'Performance',
          description: 'Focus on core web vitals, accessibility, and high-performance SEO strategies.',
        },
      ],
    },
    skills: {
      headline: 'Technical Arsenal',
      body: 'Tools and technologies I use to bring ideas to life.',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Databases',
        cloud: 'Cloud',
        architecture: 'Architecture',
        tools: 'Tools',
      },
    },
    services: {
      eyebrow: 'How I Can Help',
      headline: 'Solving complex problems with code',
      items: [
        { icon: 'web', title: 'Landing Pages', description: 'High-converting, responsive designs that load in milliseconds.' },
        { icon: 'apps', title: 'Web Apps', description: 'Complex application logic with seamless user experiences.' },
        { icon: 'shopping_cart', title: 'E-commerce', description: 'Custom storefronts integrated with Stripe, Shopify, or headless APIs.' },
        { icon: 'search', title: 'SEO', description: 'Technical SEO optimization to ensure high search engine visibility.' },
        { icon: 'api', title: 'APIs', description: 'Secure, scalable REST and GraphQL API development.' },
        { icon: 'dashboard', title: 'Dashboards', description: 'Real-time data visualization and admin management systems.' },
        { icon: 'dns', title: 'Backend', description: 'Robust server-side architecture and database management.' },
        { icon: 'brush', title: 'UI Modernization', description: 'Refactoring legacy frontends to modern, performant stacks.' },
      ],
    },
    projects: {
      eyebrow: 'Portfolio',
      headline: 'Featured Case Studies',
      cta: 'View Case Study',
      items: [
        {
          title: 'E-commerce Optimization',
          description: 'Reduced page load time by 40% for a luxury boutique through headless implementation and edge caching.',
          tags: ['Next.js', 'Shopify API'],
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClwsgfCu3PWffe2Srh1Fmrh-_Ap2PcR5J5_KrCgXbHH2QmXmQqWZW06enwUxIoP4YjpGY6s4jjc00rUHAuPtNJn2ynhONN_xe1wOAsUy1kEsHzzs4K6aYfjQlDyNcHrq29Yz7CGF6bij24HYJQw0J8BDAm8c0g1pkUC3lNVffrxfc8Kd-u4wzDCk5rRWTBIcCCZS0guCTHKPPwp60NLZIwugtgJqcBehkJBEkYHzG7E2YplzsZ8j2TCy4Fv2-hp-Wg0xaSScj3qIk',
        },
        {
          title: 'Multi-Tenant SaaS',
          description: 'Built a secure, scalable HR management platform supporting hundreds of organizations with isolated data layers.',
          tags: ['TypeScript', 'AWS'],
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIezAYUBt9M89mgWOQLlIMvkyHj4h_YKArrqAymPmZQWJ3c2StmNzMZnKHgZr2McSlVdhc7jRdH9eKgxvV0f_RlomKMNNQ-WqELSLY-gcjItU_7XQe3rbsgR4EPh1hcCcXMAC9g8gr02A8UJbwdA2TeQr1qf4SY2Dt0A95qCxzt3iEmrpu2F9zFlTIM5sN7FDcF9xltKLNiciE89uF-mw-Wzmosay-mq9Fp7jZGJtuT77eMWaGsGpDt6x5BwZeB1tAaN_eieUo7vM',
        },
      ],
    },
    experience: {
      headline: 'Professional Journey',
      jobs: [
        {
          title: 'Senior Web Developer',
          company: 'Neostella',
          period: '2022 — Present',
          description: 'Leading frontend architecture and development for enterprise RPA solutions. Mentoring junior developers and implementing CI/CD best practices.',
          dotClass: 'bg-primary',
        },
        {
          title: 'Full-Stack Developer',
          company: 'DDB Software Agency',
          period: '2020 — 2022',
          description: 'Delivered high-impact digital products for global clients in the retail and financial sectors using the MERN stack.',
          dotClass: 'bg-primary/40',
        },
        {
          title: 'Junior Web Developer',
          company: 'Vinix Code',
          period: '2018 — 2020',
          description: 'Started my professional career focusing on WordPress customization and building initial React components for local businesses.',
          dotClass: 'bg-primary/20',
        },
      ],
    },
    process: {
      headline: 'A Proven Method',
      steps: [
        { title: 'Discovery', description: 'Understanding goals, target audience, and technical constraints.' },
        { title: 'Planning', description: 'Sitemap, wireframes, and database schema design.' },
        { title: 'Dev', description: 'Iterative coding following clean architecture principles.' },
        { title: 'Testing', description: 'QA, performance tuning, and cross-device testing.' },
        { title: 'Launch', description: 'Deployment and post-launch monitoring.' },
      ],
    },
    contact: {
      headline: 'Have a project or opportunity in mind?',
      body: "I'm currently accepting new projects and consulting opportunities. Let's create something exceptional together.",
      emailLabel: 'Email me at',
      locationLabel: 'Based in',
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        subjectOptions: ['General Inquiry', 'Project Request', 'Consulting'],
        submit: 'Send Message',
      },
    },
    footer: {
      tagline: 'Built with precision and intent.',
      copyright: '© 2024 Mateo Betancur.',
      links: { linkedin: 'LinkedIn', github: 'GitHub', sourceCode: 'Source Code' },
    },
  },

  es: {
    header: {
      nav: {
        about: 'Sobre mí',
        skills: 'Habilidades',
        projects: 'Proyectos',
        experience: 'Experiencia',
        process: 'Proceso',
        contact: 'Contáctame',
      },
    },
    hero: {
      badge: 'Disponible para nuevos proyectos',
      headline: 'Construyo aplicaciones web de alto rendimiento con interfaces limpias y',
      headlineHighlight: 'arquitectura escalable.',
      body: 'Soy un desarrollador full-stack con más de 5 años de experiencia creando plataformas web modernas con React, Next.js, TypeScript, Node.js e infraestructura en la nube.',
      ctaPrimary: 'Ver Proyectos',
      ctaSecondary: 'Contáctame',
    },
    about: {
      headline: 'Ingeniería orientada a la precisión',
      body: 'Me especializo en construir aplicaciones web rápidas, escalables y centradas en el usuario que resuelven desafíos de negocio reales sin sacrificar la calidad estética.',
      stats: [
        {
          icon: 'history',
          value: '5+ Años',
          description: 'Amplia experiencia entregando código listo para producción para agencias globales y startups.',
        },
        {
          icon: 'terminal',
          value: 'Full-Stack',
          description: 'Competente en todo el ciclo de vida, desde la arquitectura de bases de datos hasta las micro-interacciones de front-end.',
        },
        {
          icon: 'bolt',
          value: 'Rendimiento',
          description: 'Enfoque en métricas web vitales, accesibilidad y estrategias de SEO de alto rendimiento.',
        },
      ],
    },
    skills: {
      headline: 'Arsenal Técnico',
      body: 'Herramientas y tecnologías que uso para dar vida a las ideas.',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Bases de Datos',
        cloud: 'Nube',
        architecture: 'Arquitectura',
        tools: 'Herramientas',
      },
    },
    services: {
      eyebrow: 'Cómo Puedo Ayudar',
      headline: 'Resolviendo problemas complejos con código',
      items: [
        { icon: 'web', title: 'Landing Pages', description: 'Diseños responsivos de alta conversión que cargan en milisegundos.' },
        { icon: 'apps', title: 'Aplicaciones Web', description: 'Lógica de aplicación compleja con experiencias de usuario fluidas.' },
        { icon: 'shopping_cart', title: 'E-commerce', description: 'Tiendas personalizadas integradas con Stripe, Shopify o APIs headless.' },
        { icon: 'search', title: 'SEO', description: 'Optimización técnica de SEO para asegurar alta visibilidad en buscadores.' },
        { icon: 'api', title: 'APIs', description: 'Desarrollo seguro y escalable de APIs REST y GraphQL.' },
        { icon: 'dashboard', title: 'Dashboards', description: 'Visualización de datos en tiempo real y sistemas de administración.' },
        { icon: 'dns', title: 'Backend', description: 'Arquitectura robusta del lado del servidor y gestión de bases de datos.' },
        { icon: 'brush', title: 'Modernización UI', description: 'Refactorización de frontends heredados a stacks modernos de alto rendimiento.' },
      ],
    },
    projects: {
      eyebrow: 'Portafolio',
      headline: 'Casos de Estudio Destacados',
      cta: 'Ver Caso de Estudio',
      items: [
        {
          title: 'Optimización E-commerce',
          description: 'Reducción del tiempo de carga en un 40% para una boutique de lujo mediante implementación headless y caché en el borde.',
          tags: ['Next.js', 'Shopify API'],
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClwsgfCu3PWffe2Srh1Fmrh-_Ap2PcR5J5_KrCgXbHH2QmXmQqWZW06enwUxIoP4YjpGY6s4jjc00rUHAuPtNJn2ynhONN_xe1wOAsUy1kEsHzzs4K6aYfjQlDyNcHrq29Yz7CGF6bij24HYJQw0J8BDAm8c0g1pkUC3lNVffrxfc8Kd-u4wzDCk5rRWTBIcCCZS0guCTHKPPwp60NLZIwugtgJqcBehkJBEkYHzG7E2YplzsZ8j2TCy4Fv2-hp-Wg0xaSScj3qIk',
        },
        {
          title: 'SaaS Multi-Tenant',
          description: 'Construí una plataforma segura y escalable de gestión de RR.HH. que soporta cientos de organizaciones con capas de datos aisladas.',
          tags: ['TypeScript', 'AWS'],
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIezAYUBt9M89mgWOQLlIMvkyHj4h_YKArrqAymPmZQWJ3c2StmNzMZnKHgZr2McSlVdhc7jRdH9eKgxvV0f_RlomKMNNQ-WqELSLY-gcjItU_7XQe3rbsgR4EPh1hcCcXMAC9g8gr02A8UJbwdA2TeQr1qf4SY2Dt0A95qCxzt3iEmrpu2F9zFlTIM5sN7FDcF9xltKLNiciE89uF-mw-Wzmosay-mq9Fp7jZGJtuT77eMWaGsGpDt6x5BwZeB1tAaN_eieUo7vM',
        },
      ],
    },
    experience: {
      headline: 'Trayectoria Profesional',
      jobs: [
        {
          title: 'Desarrollador Web Senior',
          company: 'Neostella',
          period: '2022 — Presente',
          description: 'Liderando la arquitectura frontend y el desarrollo de soluciones empresariales de RPA. Mentoreando desarrolladores junior e implementando mejores prácticas de CI/CD.',
          dotClass: 'bg-primary',
        },
        {
          title: 'Desarrollador Full-Stack',
          company: 'DDB Software Agency',
          period: '2020 — 2022',
          description: 'Entregué productos digitales de alto impacto para clientes globales en los sectores minorista y financiero usando el stack MERN.',
          dotClass: 'bg-primary/40',
        },
        {
          title: 'Desarrollador Web Junior',
          company: 'Vinix Code',
          period: '2018 — 2020',
          description: 'Comencé mi carrera profesional enfocándome en la personalización de WordPress y construyendo componentes React iniciales para empresas locales.',
          dotClass: 'bg-primary/20',
        },
      ],
    },
    process: {
      headline: 'Un Método Probado',
      steps: [
        { title: 'Descubrimiento', description: 'Entender objetivos, público objetivo y restricciones técnicas.' },
        { title: 'Planificación', description: 'Mapa del sitio, wireframes y diseño del esquema de base de datos.' },
        { title: 'Desarrollo', description: 'Codificación iterativa siguiendo principios de arquitectura limpia.' },
        { title: 'Pruebas', description: 'QA, optimización de rendimiento y pruebas multi-dispositivo.' },
        { title: 'Lanzamiento', description: 'Despliegue y monitoreo post-lanzamiento.' },
      ],
    },
    contact: {
      headline: '¿Tienes un proyecto u oportunidad en mente?',
      body: 'Actualmente acepto nuevos proyectos y oportunidades de consultoría. Creemos algo excepcional juntos.',
      emailLabel: 'Escríbeme a',
      locationLabel: 'Basado en',
      form: {
        name: 'Nombre',
        email: 'Correo',
        subject: 'Asunto',
        message: 'Mensaje',
        subjectOptions: ['Consulta General', 'Solicitud de Proyecto', 'Consultoría'],
        submit: 'Enviar Mensaje',
      },
    },
    footer: {
      tagline: 'Construido con precisión e intención.',
      copyright: '© 2024 Mateo Betancur.',
      links: { linkedin: 'LinkedIn', github: 'GitHub', sourceCode: 'Código Fuente' },
    },
  },
} as const;
