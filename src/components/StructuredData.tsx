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