export interface Service {
  slug: string
  name: string
  shortName: string
  tagline: string
  description: string
  longDescription: string[]
  benefits: string[]
  process: { step: string; detail: string }[]
  faqs: { question: string; answer: string }[]
  image: string
  icon: string
  priceRange: string
}

export const services: Service[] = [
  {
    slug: 'general-dentistry',
    name: 'General Dentistry',
    shortName: 'General',
    tagline: 'Everyday care, done properly.',
    description:
      'Comprehensive exams, fillings, and routine care that keep small issues from becoming bigger ones.',
    longDescription: [
      'General dentistry is the foundation of everything we do. It is where we get to know you, understand your history, and catch the things that rarely announce themselves early.',
      'Every visit includes a thorough but unhurried examination. We look at your teeth, your gums, your bite, and the soft tissue of your mouth — then we talk through what we find, in plain language, before any decisions are made.',
    ],
    benefits: [
      'Comprehensive oral examinations',
      'Tooth-colored composite fillings',
      'Gum health assessment and treatment',
      'Oral cancer screening',
      'Digital X-rays with minimal radiation',
    ],
    process: [
      { step: 'Examination', detail: 'A full assessment of your teeth, gums, and bite, including digital imaging where needed.' },
      { step: 'Discussion', detail: 'We walk you through what we found and answer every question before recommending anything.' },
      { step: 'Treatment', detail: 'Most routine care can be completed comfortably in a single visit.' },
      { step: 'Ongoing care', detail: 'A recall schedule tailored to your needs, so small issues are caught early.' },
    ],
    faqs: [
      {
        question: 'How often should I come in for a check-up?',
        answer:
          'Most patients do well with visits every six months. If you have a history of gum disease or ongoing treatment, we may suggest every three to four months.',
      },
      {
        question: 'Do you treat nervous patients?',
        answer:
          'Yes. We move at your pace, explain each step before we take it, and offer noise-cancelling headphones and sedation options for longer procedures.',
      },
      {
        question: 'Will I get a treatment plan in writing?',
        answer:
          'Always. You will receive a written plan with transparent pricing before any treatment begins, so there are no surprises.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop',
    icon: 'general',
    priceRange: '₱1,500 – ₱8,000',
  },
  {
    slug: 'preventive-care',
    name: 'Preventive Care',
    shortName: 'Preventive',
    tagline: 'The quiet work that keeps you out of the chair.',
    description:
      'Hygiene visits, sealants, and honest guidance on keeping your mouth healthy between appointments.',
    longDescription: [
      'The best dental treatment is the one you never need. Our preventive program is built around regular hygiene visits, professional cleaning, and a clear understanding of what is happening in your mouth.',
      'Our hygienists take their time. A typical hygiene appointment is forty-five minutes — enough to do the work properly and to notice the small changes that matter.',
    ],
    benefits: [
      'Professional scaling and polishing',
      'Periodontal charting and monitoring',
      'Fluoride and sealant treatments',
      'Personalized home-care guidance',
      'Diet and lifestyle advice for oral health',
    ],
    process: [
      { step: 'Assessment', detail: 'We measure gum health and review your home care routine.' },
      { step: 'Cleaning', detail: 'Gentle removal of plaque and stain, finished with a polish.' },
      { step: 'Guidance', detail: 'Practical advice tailored to your mouth, not a generic leaflet.' },
    ],
    faqs: [
      {
        question: 'Why do my gums bleed when I brush?',
        answer:
          'Bleeding is usually a sign of inflammation from plaque along the gum line. It is common, and it is almost always reversible with improved home care and a professional clean.',
      },
      {
        question: 'Is an electric toothbrush worth it?',
        answer:
          'For most people, yes — particularly models with pressure sensors. But technique matters more than hardware. We are happy to show you a method that works.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=1600&auto=format&fit=crop',
    icon: 'preventive',
    priceRange: '₱1,200 – ₱3,500',
  },
  {
    slug: 'cosmetic-dentistry',
    name: 'Cosmetic Dentistry',
    shortName: 'Cosmetic',
    tagline: 'Results that look like your teeth, only better.',
    description:
      'Veneers, bonding, and smile design — planned around your face, your features, and your goals.',
    longDescription: [
      'Cosmetic dentistry is equal parts science and judgment. The goal is never a uniform, artificial-looking smile — it is a result that suits your face, ages well, and feels entirely like your own.',
      'Every cosmetic case begins with a consultation and a digital preview of the proposed outcome. We plan the final result first, then work backward to the least invasive way to get there.',
    ],
    benefits: [
      'Porcelain veneers and lumineers',
      'Composite bonding and edge reshaping',
      'Digital smile preview before treatment',
      'Gum contouring for balanced smiles',
      'Minimal-prep and no-prep options',
    ],
    process: [
      { step: 'Consultation', detail: 'We listen to what you would like to change and assess what is possible.' },
      { step: 'Digital preview', detail: 'A mock-up of the proposed result, so you can see it before we begin.' },
      { step: 'Preparation', detail: 'Minimal, precise tooth preparation under magnification.' },
      { step: 'Fitting', detail: 'Final restorations fitted, adjusted, and polished to a natural finish.' },
    ],
    faqs: [
      {
        question: 'Will veneers look fake?',
        answer:
          'Not when they are planned well. We match translucency, texture, and shade to your surrounding teeth, and we design around your facial features rather than a single "ideal" tooth shape.',
      },
      {
        question: 'How long do veneers last?',
        answer:
          'With good care, porcelain veneers typically last fifteen years or more. We will give you clear guidance on protecting your investment.',
      },
      {
        question: 'Is cosmetic dentistry only about veneers?',
        answer:
          'Not at all. Sometimes a small amount of bonding, whitening, or gum contouring achieves everything you want — with no drilling at all.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1600&auto=format&fit=crop',
    icon: 'cosmetic',
    priceRange: '₱8,000 – ₱35,000',
  },
  {
    slug: 'dental-implants',
    name: 'Dental Implants',
    shortName: 'Implants',
    tagline: 'A permanent solution, placed with precision.',
    description:
      'Single-tooth and full-arch implant restorations, planned with 3D imaging and placed gently.',
    longDescription: [
      'A dental implant is the closest modern dentistry comes to replacing a tooth like-for-like. The implant itself is a small titanium fixture that integrates with the bone; the restoration on top is designed to match your surrounding teeth.',
      'We plan every implant case with 3D CBCT imaging, which lets us place the implant in the ideal position before we ever begin — reducing surgery time and improving long-term outcomes.',
    ],
    benefits: [
      'Single-tooth and multiple-tooth replacement',
      '3D-planned, guided implant surgery',
      'Implant-supported bridges and dentures',
      'Natural-looking ceramic restorations',
      'Long-term, fixed alternatives to dentures',
    ],
    process: [
      { step: '3D planning', detail: 'CBCT imaging and digital planning to determine the ideal implant position.' },
      { step: 'Placement', detail: 'Gentle, guided surgery — usually under local anesthetic, with sedation available.' },
      { step: 'Healing', detail: 'Three to four months of integration, with a temporary tooth in place.' },
      { step: 'Restoration', detail: 'A custom ceramic crown, bridge, or denture fitted to the implant.' },
    ],
    faqs: [
      {
        question: 'Does implant surgery hurt?',
        answer:
          'Most patients report that the procedure itself is more comfortable than the tooth extraction that preceded it. The area is fully numbed, and sedation is available if you would prefer to be asleep.',
      },
      {
        question: 'How long does the whole process take?',
        answer:
          'From placement to final restoration, most cases take four to six months. The healing period is when the implant bonds with the bone — we do not rush it.',
      },
      {
        question: 'Am I a candidate for implants?',
        answer:
          'Most people in reasonable health are. Conditions like uncontrolled diabetes or heavy smoking can affect healing, and bone grafting may be needed where bone has been lost. A 3D scan will tell us definitively.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1600&auto=format&fit=crop',
    icon: 'implants',
    priceRange: '₱80,000 – ₱180,000',
  },
  {
    slug: 'orthodontics',
    name: 'Orthodontics',
    shortName: 'Orthodontics',
    tagline: 'Straight teeth, without the metal-mouth years.',
    description:
      'Clear aligner therapy and modern braces for adults and teens, planned around your life.',
    longDescription: [
      'Orthodontics is no longer a teenage rite of passage. Around half of our orthodontic patients are adults who want a better-aligned smile without a mouth full of metal.',
      'We offer clear aligner therapy and tooth-colored ceramic braces, and we will tell you honestly which approach suits your case — not just the one that costs more.',
    ],
    benefits: [
      'Clear aligner therapy (Invisalign-certified)',
      'Ceramic and metal braces',
      'Retainers and long-term stability planning',
      'Treatment for adults and teenagers',
      'Discreet options for professional lives',
    ],
    process: [
      { step: 'Assessment', detail: 'Records, scans, and a clear explanation of what movement is possible.' },
      { step: 'Plan', detail: 'A digital treatment plan showing the projected movement and timeline.' },
      { step: 'Active treatment', detail: 'Aligners or braces, with check-ins every six to eight weeks.' },
      { step: 'Retention', detail: 'Custom retainers and a plan to keep the result stable for life.' },
    ],
    faqs: [
      {
        question: 'How long does aligner treatment take?',
        answer:
          'Most cases take between nine and eighteen months, depending on the complexity. Simple crowding can sometimes be resolved in under six months.',
      },
      {
        question: 'Do aligners hurt?',
        answer:
          'You will feel pressure for a day or two with each new set of aligners — a sign the teeth are moving. Most patients find this far more comfortable than fixed braces.',
      },
      {
        question: 'Why do I need a retainer forever?',
        answer:
          'Teeth have a lifelong tendency to drift. Wearing a retainer at night is a small habit that protects the result of two years of treatment.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=1600&auto=format&fit=crop',
    icon: 'orthodontics',
    priceRange: '₱120,000 – ₱280,000',
  },
  {
    slug: 'teeth-whitening',
    name: 'Teeth Whitening',
    shortName: 'Whitening',
    tagline: 'A brighter shade, without the sensitivity.',
    description:
      'Professional in-chair and take-home whitening, planned to suit your enamel and your timeline.',
    longDescription: [
      'Over-the-counter whitening is a blunt instrument. Professional whitening lets us control the strength, protect your gums, and manage sensitivity — which is why the results look more natural and last longer.',
      'We offer both in-chair whitening for an immediate result and custom take-home trays for a gradual, controlled approach. We will recommend whichever suits your enamel and your timeline.',
    ],
    benefits: [
      'In-chair whitening in about an hour',
      'Custom take-home trays with professional gel',
      'Sensitivity management built into every plan',
      'Shade assessment before and after',
      'Results that look natural, not artificial',
    ],
    process: [
      { step: 'Shade assessment', detail: 'We record your starting shade and discuss a realistic target.' },
      { step: 'Protection', detail: 'Gums and soft tissue isolated before any whitening agent is applied.' },
      { step: 'Whitening', detail: 'Controlled application of professional-strength gel.' },
      { step: 'Aftercare', detail: 'Guidance on maintaining your new shade, including a top-up plan.' },
    ],
    faqs: [
      {
        question: 'Will whitening damage my enamel?',
        answer:
          'No. Professional whitening agents work on the pigment inside the tooth, not on the enamel surface. Sensitivity is usually temporary and manageable.',
      },
      {
        question: 'How white can I go?',
        answer:
          'That depends on your starting shade and the natural color of your enamel. We will show you a realistic target at your assessment — going far beyond it tends to look unnatural.',
      },
      {
        question: 'How long does it last?',
        answer:
          'Typically one to three years, depending on diet and habits. Coffee, red wine, and tobacco all shorten the result. Top-up gel for your trays keeps it fresh.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?q=80&w=1600&auto=format&fit=crop',
    icon: 'whitening',
    priceRange: '₱5,000 – ₱15,000',
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
