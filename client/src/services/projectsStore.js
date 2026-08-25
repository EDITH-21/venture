// Shared project state manager with persistent browser storage and backend sync

export const INITIAL_PROJECTS = [
  {
    _id: 'proj-1',
    slug: 'aethelgard-capital-management',
    title: 'Aethelgard Capital Management',
    category: 'Technology',
    client: 'Aethelgard Global Partners',
    shortDescription: 'High-frequency asset management portal with real-time portfolio telemetry and algorithmic rebalancing.',
    description: 'A comprehensive financial platform featuring interactive trading analytics, multi-account overview, automated risk assessment, and secure client reporting.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Recharts'],
    featured: true,
    published: true,
  },
  {
    _id: 'proj-2',
    slug: 'kinetix-autonomous-robotics',
    title: 'Kinetix Autonomous Robotics',
    category: 'Creative',
    client: 'Kinetix Robotics Corp',
    shortDescription: 'Brand identity, typography system, and 3D web showcase for an industrial drone robotics firm.',
    description: 'Developed an original visual identity and digital showcase emphasizing precision engineering with modern typography and interactive fleet telemetry.',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    images: ['https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80'],
    technologies: ['Brand Strategy', 'Visual Identity', 'Typography', 'React'],
    featured: true,
    published: true,
  },
  {
    _id: 'proj-3',
    slug: 'luminary-health-platform',
    title: 'Luminary Health Platform',
    category: 'Technology',
    client: 'Luminary Health Network',
    shortDescription: 'Telehealth web ecosystem connecting specialized clinicians with patients across India and globally.',
    description: 'A HIPAA-compliant medical consultation web platform featuring encrypted video consultations, real-time doctor scheduling, and automated patient intake.',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    images: ['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80'],
    technologies: ['React', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    featured: true,
    published: true,
  },
  {
    _id: 'proj-4',
    slug: 'vespera-atelier-design-studio',
    title: 'Vespera Atelier Design Studio',
    category: 'Digital',
    client: 'Vespera Atelier',
    shortDescription: 'Digital presence upgrade, smart booking forms, dynamic QR portfolio, and synchronized client intake.',
    description: 'A seamless digital presence upgrade replacing manual inquiries with smart booking forms, dynamic QR portfolios, and synchronized project tracking.',
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    images: ['https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80'],
    technologies: ['Digital Cards', 'QR Solutions', 'WhatsApp Business', 'Automated Forms'],
    featured: true,
    published: true,
  },
];

const LOCAL_STORAGE_KEY = 'vanguard_managed_projects';

export const getStoredProjects = () => {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Could not read stored projects:', e);
  }
  // Initialize with default projects
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(INITIAL_PROJECTS));
  return INITIAL_PROJECTS;
};

export const saveStoredProjects = (projects) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projects));
  } catch (e) {
    console.warn('Could not save projects to storage:', e);
  }
};
