export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hestia Labs',
    url: 'https://hestialabs.in',
    logo: 'https://hestialabs.in/logo.png',
    description: 'Hestia Labs is building a sovereign, local-first execution platform that connects AI, software, and hardware through a controlled, auditable control plane.',
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
    description: 'A local-first execution platform that brings together hardware, protocol, and orchestration for dependable real-world automation.',
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
    description: 'A sovereign, local-first platform for real-world execution across homes, spaces, and connected hardware.',
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
    description: 'Helix hardware is the local execution surface for HxTP, designed to keep control close to the environment where it acts.',
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
          text: 'The HX47 is a local execution node for Hestia. It runs policy-bound automation, coordinates devices through HxTP, and keeps core control pathways available on the local network.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who are Kara and Mark?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kara and Mark represent orchestration and interface layers around the Hestia system. They help translate user intent into HxTP-managed execution paths.',
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
