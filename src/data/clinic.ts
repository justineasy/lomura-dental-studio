export const clinic = {
  name: 'Lumora Dental Studio',
  tagline: 'Modern dentistry. Thoughtfully delivered.',
  phone: '+63 (2) 8817 4200',
  mobile: '+63 917 555 0142',
  email: 'hello@lumoradental.ph',
  address: {
    street: '28th Floor, One Pacific Place',
    city: 'Makati City',
    region: 'Metro Manila',
    zip: '1227',
    country: 'Philippines',
  },
  hours: [
    { days: 'Monday — Saturday', time: '8:00 AM – 7:00 PM' },
    { days: 'Sunday', time: 'By appointment' },
  ],
  landmark: 'Two blocks from Greenbelt, beside the Ayala Triangle',
  parking: 'Basement parking available via One Pacific Place entrance',
}

export interface Faq {
  question: string
  answer: string
}

export const patientFaqs: Faq[] = [
  {
    question: 'How do I prepare for my first visit?',
    answer:
      'Bring a list of your current medications, any relevant medical history, and your insurance details if you have them. Arrive ten minutes early to complete a short health questionnaire. If you have recent X-rays from a previous dentist, bring those too — though we can take new ones if needed.',
  },
  {
    question: 'What should I bring to my appointment?',
    answer:
      'A valid ID, your insurance card (HMO or private), a list of medications, and any questions you have been meaning to ask. If you are anxious about dental visits, tell us when you book — we will make sure your first appointment is unhurried.',
  },
  {
    question: 'How long will my first appointment take?',
    answer:
      'A new patient consultation runs about seventy-five minutes. That includes a full examination, any necessary imaging, and a proper conversation about your goals. We would rather give you the time than rush you through it.',
  },
  {
    question: 'Do you offer payment plans?',
    answer:
      'Yes. We offer interest-free installment plans for treatment over ₱50,000, and we will always give you a written estimate with all options before you commit to anything. We accept major credit cards, GCash, and bank transfer.',
  },
]

export const newPatientSteps = [
  {
    title: 'Book your visit',
    detail: 'Call us or book online. We will find a time that suits you, including early morning and Saturday slots.',
  },
  {
    title: 'Complete your history',
    detail: 'A short online form before you arrive, so we know your medical background and what you would like to discuss.',
  },
  {
    title: 'Meet the team',
    detail: 'Your first visit is an examination and a conversation. No treatment on day one unless you want it.',
  },
]
