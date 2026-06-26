export const ui = {
  en: {
    meta: {
      title: 'Mateo Betancur | Full-Stack Developer',
      description:
        'Full-stack developer with 5+ years building high-performance web apps in TypeScript, React, Next.js, Vue & Node.js — scaling e-commerce platforms to 500k+ users on AWS.',
    },
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
      body: "I'm a full-stack developer with over 5 years of experience specializing in TypeScript, React, Next.js, Vue, and Node.js, building high-performance web applications and scaling e-commerce platforms to over 500,000 users using AWS infrastructure.",
      ctaPrimary: 'View Projects',
      ctaSecondary: 'Contact Me',
      cvEn: 'CV (English)',
      cvEs: 'CV (Español)',
    },
    about: {
      headline: 'Precision-driven engineering',
      body: 'I specialize in building fast, scalable, and user-focused web applications that solve real business challenges without sacrificing aesthetic quality.',
      stats: [
        {
          icon: 'history',
          value: '5+ Years',
          description: 'Delivering production-ready web apps for agencies and startups, from e-commerce platforms to multi-tenant SaaS products.',
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
        aiTools: 'AI Tools',
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
      headline: 'Selected Brand Work',
      cta: 'Visit Project',
      items: [
        {
          title: 'Café Canelo',
          description: 'A specialty Colombian coffee storefront presenting origin coffee, curated brewing kits, and the brand story behind Antioquia coffee culture.',
          tags: ['E-commerce', 'Shopify', 'Coffee'],
          image: '/project-cafecanelo.jpg',
          url: 'https://cafecanelo.com/',
          socials: [
            { label: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/share/1E5AzwXuGb/?mibextid=wwXIfr' },
            { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/cafecanelo' },
            { label: 'TikTok', icon: 'tiktok', url: 'https://www.tiktok.com/@cafe.canelo' },
          ],
        },
        {
          title: 'Sunday Reset',
          description: 'A financial wellness product landing page that turns money tracking into a calm weekly ritual with visual dashboards and mindful routines.',
          tags: ['Landing Page', 'Wellness', 'Fintech'],
          image: '/project-sunday-reset.webp',
          url: 'https://alejandramelo.com/sunday-reset',
          socials: [
            { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/alejandramel0?igsh=MTQwcHdvdnRpOHVpeg==' },
            { label: 'WhatsApp', icon: 'whatsapp', url: 'https://wa.me/573134810577?text=%C2%BFTienes%20dudas%20sobre%20Sunday%20Reset%3F%20Hablemos.' },
          ],
        },
        {
          title: 'Medallo House Productions',
          description: 'A production brand website preview. The live site is currently protected by a Vercel checkpoint, so this card uses a temporary visual until verified assets are accessible.',
          tags: ['Production', 'Brand Site', 'Preview'],
          image: '/project-medallo-house.svg',
          url: 'https://medallohouseproductions.com/en',
          socials: [
            { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/medallohouseproductions?igsh=OHJjd2RsaGVubmsz' },
          ],
        },
        {
          title: 'Moonarca',
          description: 'A ritual-inspired fashion ecommerce concept focused on a curated product catalog and brand-forward shopping experience.',
          tags: ['E-commerce', 'Fashion', 'Brand'],
          image: '/project-moonarca.svg',
          url: 'https://www.moonarca.co/',
          socials: [
            { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/moonarca.co?igsh=cThyMzM1d2drZzQ=' },
          ],
        },
      ],
    },
    experience: {
      headline: 'Professional Journey',
      jobs: [
        {
          title: 'Frontend Developer',
          company: 'Neostella',
          period: '07/2025 — Present',
          description: 'Building a multi-tenant SaaS desktop platform from the ground up — offline-first data layer with IndexedDB, granular role-based access control, real-time data grids, and a custom UI framework deployed cross-platform via Electron.',
          dotClass: 'bg-primary',
        },
        {
          title: 'Fullstack Developer',
          company: 'DDB Software Agency',
          period: '09/2023 — 06/2025',
          description: 'Scaled a high-traffic e-commerce platform to 500K+ users across Mexico by optimizing AWS infrastructure and caching layers. Delivered SEO-driven storefronts with SSR/SSG and led frontend development across React, Next.js, and Vue.',
          dotClass: 'bg-primary/40',
        },
        {
          title: 'Fullstack Developer',
          company: 'Vinix Code',
          period: '11/2020 — 07/2023',
          description: 'Shipped full-stack web products for agencies and startups — architecting REST APIs with Node.js/Express, building Vue and React frontends, and owning MySQL databases from schema design through production deployment.',
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
      locationLabel: 'Based in',
    },
    footer: {
      tagline: 'Built with precision and intent.',
      links: { linkedin: 'LinkedIn', github: 'GitHub', sourceCode: 'Source Code' },
    },
  },

  es: {
    meta: {
      title: 'Mateo Betancur | Desarrollador Full-Stack',
      description:
        'Desarrollador full-stack con más de 5 años creando aplicaciones web de alto rendimiento en TypeScript, React, Next.js, Vue y Node.js, escalando e-commerce a más de 500.000 usuarios en AWS.',
    },
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
      body: 'Soy un desarrollador web con más de 5 años de experiencia, especializado en TypeScript, React, Next.js, Vue y Node.js, construyendo aplicaciones web de alto rendimiento y escalando plataformas de e-commerce a más de 500,000 usuarios con infraestructura AWS.',
      ctaPrimary: 'Ver Proyectos',
      ctaSecondary: 'Contáctame',
      cvEn: 'CV (English)',
      cvEs: 'CV (Español)',
    },
    about: {
      headline: 'Ingeniería orientada a la precisión',
      body: 'Me especializo en construir aplicaciones web rápidas, escalables y centradas en el usuario que resuelven desafíos de negocio reales sin sacrificar la calidad estética.',
      stats: [
        {
          icon: 'history',
          value: '5+ Años',
          description: 'Entregando aplicaciones web listas para producción para agencias y startups, desde plataformas de e-commerce hasta productos SaaS multi-tenant.',
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
        aiTools: 'Herramientas IA',
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
      headline: 'Trabajos de Marca Seleccionados',
      cta: 'Visitar Proyecto',
      items: [
        {
          title: 'Café Canelo',
          description: 'Una tienda de café colombiano especial que presenta cafés de origen, kits de preparación y la historia de marca alrededor de la cultura cafetera antioqueña.',
          tags: ['E-commerce', 'Shopify', 'Café'],
          image: '/project-cafecanelo.jpg',
          url: 'https://cafecanelo.com/',
          socials: [
            { label: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/share/1E5AzwXuGb/?mibextid=wwXIfr' },
            { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/cafecanelo' },
            { label: 'TikTok', icon: 'tiktok', url: 'https://www.tiktok.com/@cafe.canelo' },
          ],
        },
        {
          title: 'Sunday Reset',
          description: 'Una landing de bienestar financiero que convierte el control del dinero en un ritual semanal tranquilo, con dashboards visuales y rutinas conscientes.',
          tags: ['Landing Page', 'Bienestar', 'Fintech'],
          image: '/project-sunday-reset.webp',
          url: 'https://alejandramelo.com/sunday-reset',
          socials: [
            { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/alejandramel0?igsh=MTQwcHdvdnRpOHVpeg==' },
            { label: 'WhatsApp', icon: 'whatsapp', url: 'https://wa.me/573134810577?text=%C2%BFTienes%20dudas%20sobre%20Sunday%20Reset%3F%20Hablemos.' },
          ],
        },
        {
          title: 'Medallo House Productions',
          description: 'Vista previa de un sitio de marca para una productora. El sitio activo está protegido por un checkpoint de Vercel, así que esta card usa una visual temporal hasta acceder a los activos verificados.',
          tags: ['Producción', 'Sitio de Marca', 'Preview'],
          image: '/project-medallo-house.svg',
          url: 'https://medallohouseproductions.com/en',
          socials: [
            { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/medallohouseproductions?igsh=OHJjd2RsaGVubmsz' },
          ],
        },
        {
          title: 'Moonarca',
          description: 'Un concepto de e-commerce de moda inspirado en rituales, con catálogo curado y una experiencia de compra centrada en la marca.',
          tags: ['E-commerce', 'Moda', 'Marca'],
          image: '/project-moonarca.svg',
          url: 'https://www.moonarca.co/',
          socials: [
            { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/moonarca.co?igsh=cThyMzM1d2drZzQ=' },
          ],
        },
      ],
    },
    experience: {
      headline: 'Trayectoria Profesional',
      jobs: [
        {
          title: 'Desarrollador Frontend',
          company: 'Neostella',
          period: '07/2025 — Presente',
          description: 'Construyendo una plataforma SaaS de escritorio multi-tenant desde cero — arquitectura offline-first con IndexedDB, control de acceso granular por roles, paneles de datos en tiempo real y un framework de UI personalizado, desplegado multiplataforma con Electron.',
          dotClass: 'bg-primary',
        },
        {
          title: 'Desarrollador Fullstack',
          company: 'DDB Software Agency',
          period: '09/2023 — 06/2025',
          description: 'Escalé una plataforma de e-commerce a más de 500,000 usuarios en México optimizando infraestructura y caché en AWS. Entregué experiencias SEO-first con SSR/SSG y lideré el desarrollo frontend con React, Next.js y Vue.',
          dotClass: 'bg-primary/40',
        },
        {
          title: 'Desarrollador Fullstack',
          company: 'Vinix Code',
          period: '11/2020 — 07/2023',
          description: 'Desarrollé productos web completos para agencias y startups — desde el diseño de APIs REST con Node.js/Express hasta interfaces con Vue y React, gestionando bases de datos MySQL del esquema inicial al despliegue en producción.',
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
      locationLabel: 'Basado en',
    },
    footer: {
      tagline: 'Construido con precisión e intención.',
      links: { linkedin: 'LinkedIn', github: 'GitHub', sourceCode: 'Código Fuente' },
    },
  },
} as const;
