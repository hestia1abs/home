import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  AlertCircleIcon,
  DatabaseIcon,
  InformationCircleIcon,
  Shield01Icon,
} from '@hugeicons/core-free-icons';
import { LegalToc, type LegalTocSection } from '../components/legal/LegalToc';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Hestia Labs LLP describing how Hestia processes website, account, device, telemetry, support, analytics, and security data in connection with its services.',
};

const lastUpdated = 'April 11, 2026';

const sections: LegalTocSection[] = [
  { id: 'overview', number: '01', title: 'Overview' },
  { id: 'scope', number: '02', title: 'Scope and Roles' },
  { id: 'collection', number: '03', title: 'Data We Collect' },
  { id: 'sources', number: '04', title: 'Sources of Data' },
  { id: 'purposes', number: '05', title: 'Purposes of Processing' },
  { id: 'lawful-basis', number: '06', title: 'Consent and Lawful Use' },
  { id: 'analytics', number: '07', title: 'Cookies and Analytics' },
  { id: 'telemetry', number: '08', title: 'Telemetry, Voice, and AI Inputs' },
  { id: 'sharing', number: '09', title: 'Sharing and Disclosure' },
  { id: 'transfers', number: '10', title: 'Cross-Border Processing' },
  { id: 'retention', number: '11', title: 'Retention' },
  { id: 'security', number: '12', title: 'Security Safeguards' },
  { id: 'rights', number: '13', title: 'Your Rights and Choices' },
  { id: 'children', number: '14', title: 'Children' },
  { id: 'enterprise', number: '15', title: 'Business Accounts' },
  { id: 'breach', number: '16', title: 'Breach and Incident Response' },
  { id: 'third-party', number: '17', title: 'Third-Party Sites' },
  { id: 'grievance', number: '18', title: 'Grievance and Contact' },
  { id: 'changes', number: '19', title: 'Changes to this Policy' },
];

function LegalSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-5 border-b border-white/8 pb-10">
      <div className="space-y-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/35">
          Section {number}
        </p>
        <h2 className="text-2xl font-black uppercase tracking-[0.08em] text-sky-400 md:text-3xl">
          {title}
        </h2>
      </div>
      <div className="space-y-4 text-sm leading-7 text-white/72 md:text-[15px]">{children}</div>
    </section>
  );
}

function Notice({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="border border-sky-400/20 bg-sky-400/8 p-5">
      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-sky-300">
        {title}
      </p>
      <div className="space-y-3 text-sm leading-6 text-white/78">{children}</div>
    </div>
  );
}

function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen w-full bg-black font-mono text-white selection:bg-sky-500/30">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <header className="mb-12 border border-white/10 bg-white/3 p-6 md:p-8">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-white/35">
                Legal
              </p>
              <h1 className="text-3xl font-black uppercase tracking-[0.08em] md:text-5xl">
                Privacy <span className="text-sky-400">Policy</span>
              </h1>
            </div>
            <HugeiconsIcon icon={DatabaseIcon} size={24} className="mt-1 shrink-0 text-sky-400" />
          </div>

          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_220px]">
            <div className="space-y-4 text-sm leading-7 text-white/68 md:text-[15px]">
              <p>
                This Privacy Policy explains how <span className="text-white">Hestia Labs LLP</span>{' '}
                collects, uses, stores, shares, and otherwise processes personal data when you visit
                our website, join a waitlist, create an account, use our dashboard or APIs, deploy
                Hestia-compatible devices, interact with support, or otherwise engage with Hestia
                products and services. It is written for both business and individual users and is
                intended to align with the current Indian data protection framework while staying close
                to Hestia&apos;s actual operating model.
              </p>
              <p>
                This Policy should be read together with our Terms of Service and with any separate
                commercial agreement, enterprise addendum, or implementation document that applies to a
                particular deployment. A separate contract may set more specific terms for data
                retention, security cooperation, incident handling, or support workflows for that
                deployment.
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
          <LegalToc sections={sections} />

          <article className="space-y-10">
            <Notice title="Short Version">
              <p>
                Hestia is building local-first, device-aware infrastructure. We therefore try to limit
                collection to the data needed to operate accounts, secure the platform, maintain
                devices, troubleshoot problems, improve service reliability, and support lawful business
                operations. We do not use broad marketing language like &quot;we never collect anything
                sensitive&quot; where that would be misleading. The actual data involved depends on how you
                use the Services, what hardware or software you deploy, and whether you or your
                administrators submit information to us.
              </p>
            </Notice>

            <LegalSection id="overview" number="01" title="Overview and Key Principles">
              <p>
                Hestia&apos;s design philosophy is local-first and security-oriented, but local-first does
                not mean data-free. Some information is required to provision accounts, authenticate
                users and devices, maintain service integrity, investigate errors, prevent abuse,
                process support requests, and comply with applicable law. This Policy describes those
                flows in plain language and is intended to help users understand both what Hestia
                actually needs and what Hestia tries to avoid collecting unless there is a clear reason.
              </p>
              <p>
                Where possible, Hestia seeks to reduce collection, shorten retention, and avoid using
                operational data for unrelated purposes. At the same time, a platform that coordinates
                cloud services, edge systems, identity, firmware, and diagnostics must maintain enough
                records to keep users safe, detect incidents, honor support obligations, and preserve a
                trustworthy operational history.
              </p>
            </LegalSection>

            <LegalSection id="scope" number="02" title="Scope, Role of Hestia, and Application of this Policy">
              <p>
                This Policy applies when Hestia acts as the primary operator of a website, account
                system, hosted control plane, API service, or customer-facing support workflow. In
                Indian data protection terminology, Hestia will often act as a data fiduciary in
                relation to personal data collected directly for our own product, security, legal, and
                administrative purposes.
              </p>
              <p>
                In some business deployments, Hestia may also process personal data on behalf of a
                customer that decides why a particular environment should collect, store, or use the
                data. In those cases, the customer may have separate duties to provide notices, collect
                consent where required, and handle rights requests from affected individuals. Hestia may
                assist within the scope of the applicable contract and technical capability.
              </p>
              <p>
                This Policy does not apply to third-party websites, apps, services, or hardware that we
                do not control, even if they are linked from or interoperable with Hestia. It also does
                not override any processing that a customer performs outside the Hestia environment
                using exported data or its own independent systems.
              </p>
            </LegalSection>

            <LegalSection id="collection" number="03" title="Categories of Personal Data We Collect">
              <p>
                The personal data Hestia may collect depends on your relationship with us. Categories
                may include identity and contact data such as name, email address, company, job title,
                account identifiers, and communication preferences; authentication and access data such
                as login records, role assignments, token events, and security logs; commercial and
                transaction data such as quotations, invoices, contract contacts, payment status, and
                support entitlements; and technical data such as IP address, browser type, device model,
                approximate geolocation derived from network signals, and system performance metadata.
              </p>
              <p>
                If you use Hestia-hosted dashboards, APIs, firmware services, command interfaces, or
                device management tooling, we may also process device and environment-related data such
                as node identifiers, deployment names, health checks, configuration metadata, error
                traces, command history, event timestamps, software versions, patch status, and network
                quality indicators. Depending on the implementation, some of that information may be
                personal data because it relates to an identifiable user, household, administrator, or
                physical location.
              </p>
              <p>
                Support interactions may include ticket content, email correspondence, uploaded
                screenshots, configuration snippets, logs, diagnostic files, or other material you
                choose to send to us. If you or your administrators provide personal data in free text,
                we may process that data to investigate the issue, fulfill the request, maintain a case
                record, and improve support quality.
              </p>
            </LegalSection>

            <LegalSection id="sources" number="04" title="How We Obtain Personal Data">
              <BulletList
                items={[
                  <>directly from you when you contact us, sign up, request a demo, subscribe for updates, or use the Services;</>,
                  <>from your organization or account administrator when they create or manage your access;</>,
                  <>from the devices, nodes, SDKs, firmware components, and software agents connected to a Hestia environment;</>,
                  <>from service providers who help with identity, analytics, communications, hosting, or support infrastructure;</>,
                  <>from public business sources, referral channels, or professional interactions relevant to legitimate B2B engagement.</>,
                ]}
              />
              <p>
                We may also infer limited information from technical signals, such as likely session
                continuity, security risk, or service health. We do not treat every signal as equally
                important or equally personal, but where a signal can reasonably be tied to an
                individual or account, we treat it as governed by this Policy.
              </p>
            </LegalSection>

            <LegalSection id="purposes" number="05" title="Why We Process Personal Data">
              <p>Hestia processes personal data for purposes such as:</p>
              <BulletList
                items={[
                  <>creating and administering accounts, workspaces, and organization access controls;</>,
                  <>authenticating users, devices, requests, and software actions;</>,
                  <>provisioning cloud and edge services, distributing software, and maintaining compatibility;</>,
                  <>monitoring reliability, diagnosing faults, preventing abuse, and maintaining auditability;</>,
                  <>responding to support requests, incidents, bugs, and operational inquiries;</>,
                  <>communicating about product changes, legal terms, billing, security, and account administration;</>,
                  <>developing, testing, improving, and securing current and future Hestia offerings;</>,
                  <>complying with applicable law, lawful requests, court orders, contractual commitments, and internal governance requirements.</>,
                ]}
              />
              <p>
                We may also use data in aggregated or de-identified form for service planning, usage
                analysis, forecasting, product development, and operational reporting where that use no
                longer reasonably identifies a specific individual.
              </p>
            </LegalSection>

            <LegalSection id="lawful-basis" number="06" title="Consent, Notice, and Other Lawful Grounds">
              <p>
                Hestia aims to provide notice in clear and practical language and to obtain consent
                where consent is the appropriate basis for processing under applicable Indian law. In
                other cases, we may process personal data because the processing is necessary to provide
                a service you requested, to perform or prepare for a contract, to comply with law, to
                respond to security risks, or for other legitimate and lawful operational purposes that
                are compatible with the context in which the data was provided.
              </p>
              <p>
                Where you provide consent, you may withdraw it by contacting us or by discontinuing the
                relevant optional feature, subject to legal or technical limitations and the need to
                continue certain processing for core service operation, recordkeeping, or incident
                response. Withdrawal of consent does not invalidate processing that took place before
                the withdrawal became effective.
              </p>
              <p>
                If you are an organization deploying Hestia in a place where personal data of employees,
                occupants, visitors, or contractors may be involved, you are responsible for making
                sure you have the appropriate authority, notice, consent, and workplace policy basis to
                use the system in that way.
              </p>
            </LegalSection>

            <LegalSection id="analytics" number="07" title="Cookies, Similar Technologies, and Website Analytics">
              <p>
                Hestia uses browser and device-side technologies that may include cookies, local
                storage, session identifiers, or similar mechanisms to keep the website functional,
                remember limited preferences, understand basic traffic patterns, and help protect the
                site against abuse. Some of these technologies are essential to the operation of a
                website session. Others support measurement, diagnostics, or experience improvement.
              </p>
              <p>
                As of the date listed above, the website also loads{' '}
                <span className="text-white">Google Analytics</span> after interactive page load.
                Google Analytics may collect information such as page views, browser characteristics,
                approximate location, device identifiers, and interaction metadata in accordance with
                Google&apos;s own service terms and privacy practices. Hestia uses that information to
                understand site usage, improve content and navigation, and monitor overall site health.
              </p>
              <p>
                You can control or limit cookies and similar technologies through your browser settings,
                privacy tools, device controls, and certain third-party opt-out mechanisms. Restricting
                cookies may affect site functionality, sign-in continuity, or analytics quality. We do
                not currently present a separate site-wide cookie preference center on this website.
              </p>
            </LegalSection>

            <LegalSection id="telemetry" number="08" title="Telemetry, Diagnostics, Voice Features, and AI Inputs">
              <p>
                Hestia&apos;s platform may process telemetry, diagnostics, command traces, error reports,
                health status, and related technical signals to keep systems working and to help users
                understand what occurred within a deployment. Those records may include timestamps,
                device IDs, node state, software versions, connectivity conditions, and operator-linked
                activity records. Depending on the deployment, these records can be personal data when
                they are associated with identifiable users or physical premises.
              </p>
              <p>
                Where Hestia provides voice, natural-language, or AI-assisted features, the related
                inputs may be processed to execute commands, interpret intent, answer requests, or
                troubleshoot failures. Hestia does not state on this page that every such input is
                always processed entirely locally or never retained. Instead, our position is narrower:
                raw or richly identifying inputs are intended to be handled as sparingly as possible,
                retained only for as long as reasonably needed for the feature, support, or security
                purpose involved, and handled with heightened care where they may reveal personal,
                sensitive, or household-level information.
              </p>
              <p>
                If you do not want support personnel to see specific content, do not send that content
                in support tickets, screenshots, or exported logs unless it is genuinely necessary to
                resolve the issue. Where feasible, redact unnecessary personal information before
                sharing files with us.
              </p>
            </LegalSection>

            <LegalSection id="sharing" number="09" title="When We Share Personal Data">
              <p>Hestia may share personal data with the following categories of recipients:</p>
              <BulletList
                items={[
                  <>service providers that help us host, secure, support, analyze, authenticate, and operate the Services;</>,
                  <>professional advisers, auditors, insurers, payment handlers, and legal representatives where necessary;</>,
                  <>our business customers or administrators where they control the account or deployment through which the data was generated;</>,
                  <>competent authorities, regulators, law enforcement agencies, courts, or other parties where disclosure is required by law or reasonably necessary to protect rights, safety, and system integrity;</>,
                  <>a purchaser, investor, successor, or restructuring counterparty as part of a merger, financing, acquisition, reorganization, or sale of assets, subject to appropriate confidentiality measures.</>,
                ]}
              />
              <p>
                We do not state that we &quot;sell personal data&quot; in the colloquial advertising sense
                often used on consumer internet sites. We may, however, disclose data to vendors and
                processors that help us operate the business. Those recipients are expected to use the
                data only for the relevant service they provide to Hestia or as otherwise lawfully
                permitted.
              </p>
            </LegalSection>

            <LegalSection id="transfers" number="10" title="Cross-Border Processing and Storage">
              <p>
                Hestia may use service providers, infrastructure, or support workflows that involve
                processing outside the state, region, or country from which you access the Services.
                The geographic location of storage or processing may change over time based on vendor
                arrangements, resilience planning, or operational needs.
              </p>
              <p>
                When Hestia transfers or permits access to personal data across borders, we seek to do
                so in a manner consistent with applicable Indian law and with reasonable contractual,
                technical, and organizational safeguards. If you are a business customer with
                jurisdiction-specific transfer requirements, those should be addressed in the relevant
                enterprise or commercial agreement.
              </p>
            </LegalSection>

            <LegalSection id="retention" number="11" title="How Long We Retain Data">
              <p>
                Hestia retains personal data for as long as reasonably necessary to fulfill the purpose
                for which it was collected, to provide the Services, maintain records, resolve
                disputes, investigate incidents, and comply with legal or contractual obligations.
                Different categories of data may have different retention periods.
              </p>
              <p>
                By way of example, account profile and organizational data may be retained while an
                account is active and for a reasonable follow-on period needed for reactivation,
                compliance, recordkeeping, or dispute handling; security logs and access records may be
                retained for operational and legal reasons, commonly up to 180 days or longer where an
                incident, fraud inquiry, lawful request, or applicable rule requires longer retention;
                support tickets and attached diagnostics may be retained for as long as needed to close
                the case and maintain a defensible support history; backup copies may persist for a
                limited additional period until they cycle out under ordinary backup rotation.
              </p>
              <p>
                Where deletion, anonymization, or de-identification is reasonably feasible and no longer
                inconsistent with our obligations or legitimate needs, we will take one of those steps.
                Some residual records may remain where immediate deletion is not technically practical,
                where records are embedded in immutable logs, or where preservation is needed for
                security and legal reasons.
              </p>
            </LegalSection>

            <LegalSection id="security" number="12" title="Security Safeguards">
              <p>
                Hestia uses a combination of administrative, technical, and organizational safeguards
                intended to protect personal data against unauthorized access, disclosure, alteration,
                and destruction. These measures may include access controls, role-based permissions,
                encryption in transit, logging, monitoring, internal review processes, vendor controls,
                and environment-specific security practices.
              </p>
              <p>
                Even strong safeguards cannot guarantee perfect security. Users and customers also play
                a critical role. You should maintain secure devices, use strong and unique passwords,
                protect recovery channels, apply updates, restrict unnecessary administrator access, and
                promptly notify us if you suspect compromise of an account, token, device, or Hestia
                environment.
              </p>
              <p>
                If you are a business customer and need more detailed security commitments, audit
                support, or environment-specific controls, those requirements should be handled through
                a separate commercial and security review process rather than inferred from this public
                website statement alone.
              </p>
            </LegalSection>

            <LegalSection id="rights" number="13" title="Your Rights and Choices">
              <p>
                Subject to applicable law and verification of identity or authority, you may request
                access to a summary of personal data we process about you, ask us to correct inaccurate
                or incomplete data, request erasure of data that is no longer required for the
                applicable purpose, withdraw consent where processing is based on consent, and seek
                grievance redressal if you believe your data has been handled improperly.
              </p>
              <p>
                To exercise a privacy-related request, you may contact Hestia at{' '}
                <a className="text-sky-300 hover:text-sky-200" href="mailto:contact@hestialabs.in">
                  contact@hestialabs.in
                </a>
                . Please provide enough detail for us to identify the account, interaction, or
                deployment concerned. We may request additional information to verify identity or to
                ensure that we do not disclose data to the wrong person.
              </p>
              <p>
                Your request may be limited where the law permits or requires us to retain certain
                records, protect another person&apos;s rights, preserve evidence, maintain security logs,
                or continue processing necessary for the service or for a lawful obligation. If your
                account is controlled by an organization, we may direct you to the relevant
                administrator for certain account-level actions while still handling requests that
                Hestia must answer directly as the service operator.
              </p>
            </LegalSection>

            <LegalSection id="children" number="14" title="Children and Age-Sensitive Use">
              <p>
                Hestia&apos;s Services are generally designed for adults, businesses, developers, and
                authorized operators rather than for children. We do not knowingly create consumer
                accounts for children or intentionally design general website experiences to solicit
                children&apos;s personal data. If a deployment involves a household, school, shared family
                environment, or any context in which a child&apos;s personal data may be implicated, the
                responsible adult or deploying organization must ensure that the use is lawful and that
                any required consent or authorization has been obtained.
              </p>
              <p>
                If you believe a child has provided personal data to Hestia in a way that should not
                have occurred, contact us so that we can review the situation and take appropriate
                steps. Depending on the context, those steps may include restricting access, deleting
                data where appropriate, or seeking additional verification.
              </p>
            </LegalSection>

            <LegalSection id="enterprise" number="15" title="Business Accounts, Admin Control, and Workplace Deployments">
              <p>
                If your Hestia access is provided by an employer, landlord, facility operator, system
                integrator, property manager, or another organization, that organization may control
                the workspace, user roster, role assignments, integrations, and configuration choices
                associated with your account. Hestia may share account-level and deployment-level data
                with authorized administrators of that organization as necessary to provide the
                Services, maintain security, and honor the applicable contract.
              </p>
              <p>
                Organizations that deploy Hestia into homes, buildings, offices, or operational sites
                must ensure that they have an appropriate legal basis and internal governance framework
                for any monitoring, logging, or automation that affects people in those spaces. Hestia
                does not assume that every deployment is lawful merely because the technology can be
                configured to do something.
              </p>
            </LegalSection>

            <LegalSection id="breach" number="16" title="Data Breach and Incident Response">
              <p>
                Hestia maintains incident response processes intended to detect, assess, contain, and
                remediate security events. If Hestia becomes aware of a personal data breach affecting
                data under our control, we will review the incident, take appropriate response steps,
                and provide notifications where required by applicable law, contractual commitment, or
                operational necessity.
              </p>
              <p>
                If you suspect an account compromise, malicious device behavior, exposed token,
                unauthorized command execution, or another security issue involving Hestia, notify us as
                soon as possible at{' '}
                <a className="text-sky-300 hover:text-sky-200" href="mailto:contact@hestialabs.in">
                  contact@hestialabs.in
                </a>
                . Timely reporting improves containment and helps us distinguish genuine incidents from
                transient errors or local environment issues.
              </p>
            </LegalSection>

            <LegalSection id="third-party" number="17" title="Third-Party Websites, Apps, and Services">
              <p>
                The Hestia website and Services may link to or integrate with third-party websites, code
                repositories, app providers, analytics services, documentation tools, authentication
                systems, communications platforms, or hardware vendors. Those third parties operate
                under their own terms and privacy practices. Hestia is not responsible for the privacy,
                security, or content practices of a third-party service that we do not control.
              </p>
              <p>
                Before using a third-party integration or submitting data through an external link, you
                should review the applicable third-party policies and make an independent judgment about
                whether the service is appropriate for your use case.
              </p>
            </LegalSection>

            <LegalSection id="grievance" number="18" title="Grievance Redressal and Contact Information">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="border border-white/10 bg-white/[0.02] p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-sky-300">
                    Privacy Contact
                  </p>
                  <p className="text-sm leading-7 text-white/78">
                    Hestia Labs LLP
                    <br />
                   Assam, India
                    <br />
                    <a className="text-sky-300 hover:text-sky-200" href="mailto:contact@hestialabs.in">
                      contact@hestialabs.in
                    </a>
                  </p>
                </div>
                <div className="border border-white/10 bg-white/[0.02] p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-sky-300">
                    General and Security
                  </p>
                  <p className="text-sm leading-7 text-white/78">
                    General questions:
                    <br />
                    <a className="text-sky-300 hover:text-sky-200" href="mailto:info@hestialabs.in">
                      info@hestialabs.in
                    </a>
                    <br />
                    Security reports:
                    <br />
                    <a className="text-sky-300 hover:text-sky-200" href="mailto:contact@hestialabs.in">
                      contact@hestialabs.in
                    </a>
                  </p>
                </div>
              </div>
              <p>
                If you have a complaint about how Hestia has processed your personal data, please send
                us the details by email and include enough information for us to identify the relevant
                account, interaction, or deployment. We may ask follow-up questions to verify identity,
                authority, or technical context before processing the request. We aim to review privacy
                grievances promptly and to provide a reasoned response within a commercially reasonable
                period.
              </p>
              <div className="flex items-start gap-3 border border-white/10 bg-white/[0.02] p-4 text-xs uppercase tracking-[0.18em] text-white/55">
                <HugeiconsIcon icon={Shield01Icon} size={16} className="mt-0.5 shrink-0 text-sky-400" />
                <p>
                  This page describes Hestia&apos;s current public privacy posture. It does not replace a
                  negotiated data processing addendum, enterprise security schedule, or site-specific
                  deployment assessment.
                </p>
              </div>
            </LegalSection>

            <LegalSection id="changes" number="19" title="Changes to this Privacy Policy">
              <p>
                Hestia may update this Policy from time to time to reflect changes in the law, in our
                products, in vendor arrangements, in security practice, or in the way we process
                personal data. The updated version will be posted on this page with a revised
                last-updated date. Where a change is material and affects an active account or business
                relationship, we may also provide supplemental notice through email, the dashboard, or
                administrative channels where reasonably practical.
              </p>
              <p>
                Your continued use of the Services after an updated Policy becomes effective means that
                the updated Policy will apply going forward, subject to any contractual rights you may
                have under a separate written agreement and any non-waivable rights available under
                applicable law.
              </p>
              <div className="flex items-start gap-3 border border-white/10 p-4">
                <HugeiconsIcon icon={AlertCircleIcon} size={16} className="mt-0.5 shrink-0 text-sky-400" />
                <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                  Privacy requests can be sent to{' '}
                  <a className="text-sky-300 hover:text-sky-200" href="mailto:contact@hestialabs.in">
                    contact@hestialabs.in
                  </a>
                  .
                </p>
              </div>
            </LegalSection>
          </article>
        </div>
      </div>
    </main>
  );
}
