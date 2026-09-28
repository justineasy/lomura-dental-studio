export interface Doctor {
  slug: string
  name: string
  role: string
  shortRole: string
  years: number
  bio: string[]
  credentials: string[]
  expertise: string[]
  memberships: string[]
  languages: string[]
  approach: string
  portrait: string
  services: string[]
}

export const doctors: Doctor[] = [
  {
    slug: 'sofia-reyes',
    name: 'Dr. Sofia Reyes',
    role: 'Cosmetic & Restorative Dentistry',
    shortRole: 'Cosmetic & Restorative',
    years: 14,
    bio: [
      'Sofia trained at the University of the Philippines and completed her restorative fellowship in Singapore, where she developed a reputation for meticulous, conservative cosmetic work. She came to cosmetic dentistry because she liked the precision of it — the way a millimeter of planning changes how a person feels about their own face.',
      'She is known among patients for explaining things clearly and for never recommending work that is not needed. Her restorative cases are planned digitally before treatment begins, so there are rarely surprises.',
    ],
    credentials: [
      'DMD, University of the Philippines',
      'Certificate in Restorative & Cosmetic Dentistry, National University of Singapore',
      'Member, Philippine Academy of Esthetic Dentistry',
      'Invisalign Certified Provider',
    ],
    expertise: [
      'Porcelain veneers',
      'Digital smile design',
      'Full-mouth rehabilitation',
      'Tooth-colored restorations',
      'Minimal-prep techniques',
    ],
    memberships: [
      'Philippine Dental Association',
      'Philippine Academy of Esthetic Dentistry',
      'International Team for Implantology (ITI)',
    ],
    languages: ['English', 'Filipino'],
    approach:
      'Sofia believes the best cosmetic work is the kind nobody notices. She plans every case digitally, shows you the proposed outcome before touching a tooth, and designs around your facial features — not a single idealized tooth shape.',
    portrait: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop',
    services: ['Cosmetic Dentistry', 'General Dentistry', 'Teeth Whitening'],
  },
  {
    slug: 'miguel-santos',
    name: 'Dr. Miguel Santos',
    role: 'Implant & General Dentistry',
    shortRole: 'Implant & General',
    years: 17,
    bio: [
      'Miguel has placed over two thousand implants and still plans every case as if it were his first. He trained in periodontics before moving into implant surgery, which gives him an unusual depth of understanding of the bone and gum that supports every restoration.',
      'Patients tend to remember him for two things: how little the procedure hurt, and how much time he spent answering questions afterward. He writes every patient a personal note after surgery.',
    ],
    credentials: [
      'DMD, University of the Philippines',
      'MS in Periodontics, University of the Philippines',
      'Fellow, International Congress of Oral Implantologists',
      'CBCT-guided surgery certification',
    ],
    expertise: [
      'Single-tooth implants',
      'Full-arch rehabilitation',
      'Bone grafting',
      'Guided implant surgery',
      'Complex extractions',
    ],
    memberships: [
      'Philippine Dental Association',
      'International Congress of Oral Implantologists',
      'Philippine Society of Periodontology',
    ],
    languages: ['English', 'Filipino'],
    approach:
      'Miguel treats every implant case like it is the most important one he has ever done. He uses 3D imaging to plan the ideal position before surgery, which means shorter procedures, faster healing, and results that last.',
    portrait: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop',
    services: ['Dental Implants', 'General Dentistry', 'Preventive Care'],
  },
  {
    slug: 'andrea-villanueva',
    name: 'Dr. Andrea Villanueva',
    role: 'Orthodontics',
    shortRole: 'Orthodontics',
    years: 11,
    bio: [
      'Andrea is an orthodontist who treats as many adults as teenagers. She trained in Manila and spent several years in a specialist orthodontic practice before joining Lumora, where she built the studio\'s aligner program from the ground up.',
      'She is honest about what orthodontics can and cannot do — sometimes telling a patient that they do not need treatment is the most valuable thing she does all week.',
    ],
    credentials: [
      'DMD, University of the Philippines',
      'MSc in Orthodontics, University of the Philippines',
      'Invisalign Platinum Provider',
      'Member, Philippine Association of Orthodontists',
    ],
    expertise: [
      'Clear aligner therapy',
      'Ceramic braces',
      'Adult orthodontics',
      'Retainer planning',
      'Interceptive treatment',
    ],
    memberships: [
      'Philippine Association of Orthodontists',
      'World Federation of Orthodontists',
      'Philippine Dental Association',
    ],
    languages: ['English', 'Filipino'],
    approach:
      'Andrea believes orthodontics should fit around your life, not the other way around. She offers discreet options for professionals, honest timelines, and a retention plan that keeps your result stable for life.',
    portrait: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop',
    services: ['Orthodontics', 'Cosmetic Dentistry'],
  },
  {
    slug: 'daniel-navarro',
    name: 'Dr. Daniel Navarro',
    role: 'Prosthodontics',
    shortRole: 'Prosthodontics',
    years: 15,
    bio: [
      'Daniel is a prosthodontist who specializes in the most complex restorative cases — full-mouth reconstructions, implant-supported prostheses, and the kind of work that other dentists refer out. He trained in Manila and completed a fellowship in prosthodontics in Australia.',
      'He is methodical and unhurried. His treatment plans are detailed documents that patients keep and refer to for years. He believes that a well-made restoration should be indistinguishable from the natural tooth it replaces.',
    ],
    credentials: [
      'DMD, University of the Philippines',
      'Fellowship in Prosthodontics, University of Sydney',
      'Member, Philippine Prosthodontic Society',
      'Certificate in Implant Prosthodontics',
    ],
    expertise: [
      'Full-mouth rehabilitation',
      'Implant-supported prostheses',
      'Complex crown and bridge work',
      'Occlusal analysis',
      'Esthetic zone management',
    ],
    memberships: [
      'Philippine Prosthodontic Society',
      'International College of Prosthodontists',
      'Philippine Dental Association',
    ],
    languages: ['English', 'Filipino'],
    approach:
      'Daniel approaches every complex case like an architect approaches a building — the foundation must be right before the aesthetics matter. He takes the time to get the bite right, the materials right, and the fit right, so the result lasts decades, not years.',
    portrait: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop',
    services: ['Dental Implants', 'Cosmetic Dentistry', 'General Dentistry'],
  },
]

export function getDoctor(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug)
}
