export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hestia Labs',
    url: 'https://hestialabs.in',
    logo: 'https://hestialabs.in/logo.png',
    description: 'Building the future of intelligent environments. Custom hardware, software, and AI — designed from scratch for presence, control, and embodied intelligence.',
    foundingDate: '2026',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'contact@hestialabs.in',
    },
    sameAs: [
      'https://twitter.com/hestialabs',
      'https://linkedin.com/company/hestialabs',
      'https://github.com/hestialabs',
    ],
    areaServed: 'Worldwide',
    knowsAbout: [
      'Intelligent Infrastructure',
      'Ambient Intelligence',
      'AI Physical Presence',
      'Voice AI Systems',
      'Embodied AI',
      'Local-First Architecture',
      'Intelligent Environment Future',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function SoftwareApplicationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Hestia',
    applicationCategory: 'IntelligentEnvironmentSystem',
    description: 'An intelligent physical system built from scratch — custom hardware, software, and AI designed for presence, control, and embodied intelligence.',
    url: 'https://hestialabs.in',
    operatingSystem: 'Embedded Linux, ARM-based',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/PreOrder',
      price: '0',
      priceCurrency: 'USD',
      description: 'Join the waitlist for early access',
    },
    author: {
      '@type': 'Organization',
      name: 'Hestia Labs',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://hestialabs.in',
    name: 'Hestia Labs',
    description: 'The future of intelligent infrastructure. Built from scratch. Hardware, software, and AI — for presence, control, and something that feels alive.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://hestialabs.in/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ProductSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'HX47',
    description: 'Full AI execution on a custom PCB. Voice processing, environmental sensing, device orchestration — all in a unit smaller than your palm.',
    brand: {
      '@type': 'Organization',
      name: 'Hestia Labs',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/PreOrder',
      price: '0',
      priceCurrency: 'USD',
      description: 'Pre-order available — limited first batch for early builders.',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the HX47?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The HX47 is a custom-designed hardware unit that runs AI execution locally. It features an ESP32-S3 SoC, multi-sensor array, voice + NLP pipeline, and encrypted hardware communications with sub-50ms response time.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who are Kara and Mark?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kara and Mark are cloud intelligences designed to interact with the physical world. Kara is strategic — she optimizes, predicts, and maintains. Mark is explorative — he navigates, learns, and discovers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does it work without internet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The system is designed with an offline-first architecture. When the internet is unavailable, all authenticated devices, local commands, and physical schedules continue executing. The cloud enhances — it never controls.',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}