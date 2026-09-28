export interface GalleryItem {
  src: string
  alt: string
  caption: string
  span: 'tall' | 'wide' | 'std'
}

export const gallery: GalleryItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
    alt: 'Modern dental treatment room with natural light',
    caption: 'Treatment Room',
    span: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?q=80&w=1200&auto=format&fit=crop',
    alt: 'Clinic reception and hallway',
    caption: 'Reception',
    span: 'std',
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    alt: 'Consultation between dentist and patient',
    caption: 'Consultation Room',
    span: 'std',
  },
  {
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop',
    alt: 'Dentist reviewing treatment with a patient',
    caption: 'Waiting Area',
    span: 'std',
  },
  {
    src: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=1200&auto=format&fit=crop',
    alt: 'Dental instruments and equipment',
    caption: 'Equipment',
    span: 'std',
  },
  {
    src: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1200&auto=format&fit=crop',
    alt: 'The Lumora team in consultation',
    caption: 'Team',
    span: 'wide',
  },
]
