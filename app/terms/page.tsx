import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  AlertCircleIcon,
  InformationCircleIcon,
  Mail01Icon,
  Shield01Icon,
} from '@hugeicons/core-free-icons';
import { LegalToc, type LegalTocSection } from '../components/legal/LegalToc';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for Hestia Labs LLP covering access to the Hestia website, accounts, APIs, cloud services, device software, and related offerings in India.',
};

const lastUpdated = 'April 11, 2026';

const sections: LegalTocSection[] = [
  { id: 'acceptance', number: '01', title: 'Acceptance' },
  { id: 'eligibility', number: '02', title: 'Eligibility' },
  { id: 'accounts', number: '03', title: 'Accounts' },
  { id: 'commercial', number: '04', title: 'Commercial Terms' },
  { id: 'services', number: '05', title: 'Services' },
  { id: 'devices', number: '06', title: 'Devices and Firmware' },
  { id: 'developer', number: '07', title: 'APIs and Developer Use' },
  { id: 'data', number: '08', title: 'Customer Data' },
  { id: 'conduct', number: '09', title: 'Acceptable Use' },
  { id: 'third-party', number: '10', title: 'Third-Party Services' },
  { id: 'ip', number: '11', title: 'Intellectual Property' },
  { id: 'security', number: '12', title: 'Security and Incident Reporting' },
  { id: 'beta', number: '13', title: 'Beta Features' },
  { id: 'termination', number: '14', title: 'Suspension and Termination' },
  { id: 'disclaimers', number: '15', title: 'Disclaimers' },
  { id: 'liability', number: '16', title: 'Liability Limits' },
  { id: 'indemnity', number: '17', title: 'Indemnity' },
  { id: 'consumer-rights', number: '18', title: 'Consumer Rights' },
  { id: 'governing-law', number: '19', title: 'Governing Law' },
  { id: 'grievance', number: '20', title: 'Grievance and Contact' },
  { id: 'changes', number: '21', title: 'Changes to Terms' },
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

export default function TermsPage() {
  return (
    <main className="relative min-h-screen w-full bg-black font-mono text-white selection:bg-sky-500/30">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <header className="mb-12 border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-white/35">
                Legal
              </p>
              <h1 className="text-3xl font-black uppercase tracking-[0.08em] md:text-5xl">
                Terms of <span className="text-sky-400">Service</span>
              </h1>
            </div>
            <HugeiconsIcon icon={Shield01Icon} size={24} className="mt-1 shrink-0 text-sky-400" />
          </div>

          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_220px]">
            <div className="space-y-4 text-sm leading-7 text-white/68 md:text-[15px]">
              <p>
                These Terms of Service govern access to the Hestia website, hosted control surfaces,
                developer tools, APIs, dashboard interfaces, edge software, device firmware, pilot
                deployments, and related support or professional services made available by{' '}
                <span className="text-white">Hestia Labs LLP</span>, a business operating from
                Assam, India. They are written to work for individual users, developers,
                business customers, and enterprise buyers, while allowing a signed order form, master
                services agreement, statement of work, or service level addendum to override these
                website terms on the specific points it covers.
              </p>
              <p>
                By accessing or using the Services, you agree to these Terms and to our Privacy
                Policy. If you use the Services on behalf of a company, partnership, institution, or
                any other legal entity, you confirm that you have authority to bind that entity. If
                you do not agree, do not access, deploy, test, or use the Services.
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
          <LegalToc sections={sections} />

          <article className="space-y-10">
            <Notice title="Important Notice">
              <p>
                These Terms are intended to be India-law-aligned and operationally realistic. They do
                not claim that every statutory obligation has already been satisfied in every factual
                scenario. Compliance also depends on the way Hestia actually contracts, deploys,
                secures, and supports its services in practice.
              </p>
            </Notice>

            <LegalSection id="acceptance" number="01" title="Acceptance and Contract Structure">
              <p>
                These Terms form a legally binding agreement between you and Hestia Labs LLP in
                relation to the Services. The Services may include marketing pages, waitlists,
                account-based dashboards, hosted APIs, command interfaces, device and node management
                tools, firmware distribution, installation scripts, SDKs, developer previews, and
                related documentation. Certain offerings may still be invitation-only, region-limited,
                pilot-only, or made available to a restricted class of early users.
              </p>
              <p>
                If you have separately signed a commercial agreement with Hestia, that agreement
                controls to the extent of any conflict. These Terms continue to apply to matters not
                addressed in the separate commercial agreement, including general website use,
                acceptable use, intellectual property rules, and baseline disclaimers unless the
                separate agreement states otherwise.
              </p>
              <p>
                You may not use the Services if doing so would violate applicable law, export
                restrictions, sanctions, contractual obligations, fiduciary duties, or any policy that
                binds you or the organization you represent. You are responsible for ensuring that your
                internal approvals, procurement rules, and deployment permissions are in place before
                you enable any Hestia-controlled or Hestia-integrated system in a live environment.
              </p>
            </LegalSection>

            <LegalSection id="eligibility" number="02" title="Eligibility and Authority to Use">
              <p>
                The Services are intended for users who can form binding contracts under applicable
                law. If you are an individual, you must be at least 18 years old or the age of legal
                majority in the place from which you access the Services, whichever is higher. If you
                are using the Services for a household or family deployment, you are responsible for
                ensuring that all persons with access use the Services in a lawful and safe way.
              </p>
              <p>
                If you are acting for a business or institution, you represent that you have authority
                to purchase, deploy, administer, and accept legal terms on behalf of that entity.
                Administrative users must maintain accurate organizational details and may be required
                to cooperate with additional verification steps before Hestia activates higher-risk or
                business-critical features.
              </p>
              <p>
                Hestia may refuse access, postpone activation, or require additional onboarding
                information where the requested use case reasonably appears to involve safety-critical
                automation, regulated environments, minors, biometric data, essential services,
                unusually sensitive locations, or other use cases that call for extra diligence.
              </p>
            </LegalSection>

            <LegalSection id="accounts" number="03" title="Accounts, Credentials, and Organization Administration">
              <p>
                Certain features require an account. You must provide accurate, current, and complete
                registration details, maintain the confidentiality of login credentials, and promptly
                update your account information if it changes. You are responsible for activity carried
                out through your credentials unless and until you notify us of compromise using a valid
                support or security reporting channel.
              </p>
              <p>
                When an account belongs to an organization, the organization controls the workspace,
                device roster, role assignments, and administrative policies associated with that
                account. Administrators may add, suspend, or remove users, reset credentials, and
                change access scopes. Hestia is entitled to rely on instructions from designated
                administrators unless we have reason to believe the instruction is unauthorized.
              </p>
              <p>
                You must use reasonable account security controls, including strong passwords, access
                hygiene, prompt revocation of stale access, and careful handling of recovery channels.
                Shared credentials, resale of accounts, credential farming, or use of accounts in a way
                that obscures responsible operators is prohibited unless expressly approved by Hestia in
                writing for a controlled enterprise setup.
              </p>
            </LegalSection>

            <LegalSection id="commercial" number="04" title="Commercial Terms, Orders, and Payment">
              <p>
                The Services may be provided free of charge, on a trial or pilot basis, or for fees
                stated in an order form, quotation, invoice, proposal, or pricing page. Unless a
                separate commercial document says otherwise, fees are stated exclusive of taxes,
                duties, levies, and similar governmental charges. You are responsible for those charges
                other than taxes based on Hestia&apos;s net income.
              </p>
              <p>
                If Hestia provides hardware, firmware-enabled devices, custom integration services,
                on-site deployment assistance, support packages, or enterprise subscriptions, the
                governing commercial document may set additional rules for delivery windows, acceptance
                criteria, pilot duration, warranties, renewal, invoicing, support levels, and scope
                change. Unless expressly stated, website access alone does not create a commitment by
                Hestia to ship hardware, reserve inventory, hold pricing, or keep a pilot environment
                available indefinitely.
              </p>
              <p>
                Overdue fees may result in suspension of paid features, delayed support, or withholding
                of non-essential deliverables after reasonable notice where permitted by law and by the
                relevant commercial arrangement. Hestia may charge lawful interest or recovery costs on
                overdue commercial debts if a signed contract or applicable law allows it.
              </p>
              <p>
                For consumer-facing purchases, any mandatory statutory rights, including rights that
                cannot lawfully be waived under Indian consumer protection law, remain unaffected. Where
                a refund, cancellation, warranty, or replacement entitlement is required by applicable
                law or expressly promised in a product-specific commercial document, that specific rule
                will control over a general website statement.
              </p>
            </LegalSection>

            <LegalSection id="services" number="05" title="Description of the Services">
              <p>
                Hestia develops AI-native infrastructure intended to connect software systems with
                physical devices and environments. Depending on availability and release stage, the
                Services may include cloud-hosted coordination, signed action flows, local-first node
                control, telemetry visualization, diagnostics, firmware packaging and distribution,
                environment-aware automation, identity and access controls, and developer-facing tools
                that help customers operate or integrate Hestia systems.
              </p>
              <p>
                The Services are dynamic and may change over time. Features may be added, renamed,
                restricted, deprecated, or withdrawn. Some features may depend on internet
                connectivity, compatible hardware, geographic availability, power continuity,
                third-party infrastructure, or environmental conditions. Hestia does not promise that
                every feature mentioned in marketing materials or technical roadmaps will be launched,
                maintained forever, or available to every user.
              </p>
              <p>
                You are responsible for evaluating whether the Services are suitable for your use case,
                especially where automation interacts with access control, physical movement, energy
                systems, safety devices, occupancy, surveillance, industrial processes, or property
                management operations. Unless Hestia expressly agrees otherwise in writing, the
                Services are not designed as a guaranteed substitute for emergency systems, life-safety
                systems, or legally mandated control infrastructure.
              </p>
            </LegalSection>

            <LegalSection id="devices" number="06" title="Devices, Firmware, and Physical Deployment Responsibilities">
              <p>
                If you deploy Hestia-compatible hardware, local AI nodes, edge software, or firmware
                packages, you remain responsible for the physical environment in which they operate.
                That includes safe installation, appropriate electrical conditions, compatible network
                design, maintenance of fallback controls, lawful sensor placement, and compliance with
                site-specific building, tenancy, labor, data, and safety rules.
              </p>
              <p>
                You may not alter firmware signing, bypass device identity checks, interfere with
                secure boot or trust verification, distribute modified Hestia firmware as official
                Hestia software, or use Hestia tooling to load malicious or unauthorized payloads. If
                you build custom integrations, the burden remains on you to test those integrations in
                a safe environment before production deployment.
              </p>
              <p>
                Because physical systems can create real-world consequences, you must maintain
                reasonable supervision and escalation procedures. Manual overrides, local stop controls,
                and environment-specific safety rules should remain available where prudent. Hestia is
                not responsible for damage caused by unsafe site design, improper installation, ignored
                warnings, unsupported hardware modifications, or use outside documented operating
                assumptions.
              </p>
            </LegalSection>

            <LegalSection id="developer" number="07" title="APIs, SDKs, CLI Tools, and Developer Use">
              <p>
                Subject to these Terms, Hestia grants you a limited, non-exclusive, revocable,
                non-transferable right to access the developer-facing portions of the Services for your
                internal business use or personal lawful use, and to build integrations that interact
                with documented Hestia interfaces. This right does not include ownership of the
                Services or permission to copy protected materials beyond the scope needed for ordinary
                permitted use.
              </p>
              <p>
                API keys, tokens, signatures, and SDK credentials are confidential. You must protect
                them against disclosure and rotate or revoke them when compromise is suspected. You may
                not exceed documented rate limits, attempt to defeat request signing or access control,
                scrape non-public interfaces, or use the Services to benchmark Hestia for publication
                in a misleading or unfair way without our prior written approval.
              </p>
              <p>
                Documentation, examples, and starter code are provided for convenience. They do not
                create a warranty that your integration will be secure, performant, or compliant for
                your specific environment. You are responsible for reviewing all outputs of your own
                code, validating integrations, and ensuring that any third-party services you connect
                are used in accordance with their terms and applicable law.
              </p>
            </LegalSection>

            <LegalSection id="data" number="08" title="Customer Data, Instructions, and Ownership">
              <p>
                As between you and Hestia, you retain your rights in the data, materials, prompts,
                commands, configuration files, device labels, event streams, and other content that you
                submit to or generate through the Services, subject to any rights of third parties and
                the licenses needed for Hestia to operate the Services. You grant Hestia the limited
                rights necessary to host, transmit, cache, back up, analyze for service delivery and
                security, troubleshoot, and otherwise process Customer Data in order to provide the
                Services and comply with legal obligations.
              </p>
              <p>
                You are responsible for the legality, quality, accuracy, and appropriateness of
                Customer Data, as well as for obtaining all permissions, notices, and consents needed
                for Hestia to process it on your instructions. That includes permissions from employees,
                residents, guests, visitors, contractors, or any other person whose data may be
                implicated by the way you configure sensors, commands, automations, or support tickets.
              </p>
              <p>
                Hestia may generate service metadata, logs, telemetry, aggregate statistics,
                performance information, security events, and product analytics in connection with
                operating the Services. Subject to applicable law and our Privacy Policy, Hestia may use
                that service-generated information to maintain, secure, improve, and support the
                Services, provided it does not publicly identify you as the source of a confidential
                implementation detail without your consent.
              </p>
            </LegalSection>

            <LegalSection id="conduct" number="09" title="Acceptable Use and Prohibited Conduct">
              <BulletList
                items={[
                  <>use the Services in violation of law, contract, court order, or another person&apos;s rights;</>,
                  <>deploy automations that are intended to harass, stalk, discriminate against, or unlawfully profile individuals;</>,
                  <>circumvent security controls, authentication requirements, or environment-specific permissions;</>,
                  <>upload malware, exploit code, destructive payloads, or firmware intended to corrupt devices or networks;</>,
                  <>collect or transmit personal data that you are not authorized to process;</>,
                  <>interfere with service integrity, availability, or other users&apos; legitimate access;</>,
                  <>misrepresent your identity, affiliation, authority, deployment context, or incident severity;</>,
                  <>use Hestia outputs as the sole basis for emergency response, life-safety decisions, or other high-risk action without appropriate human supervision and safeguards.</>,
                ]}
              />
              <p>
                Hestia may investigate suspected misuse, cooperate with lawful requests from competent
                authorities, preserve evidence where reasonably necessary, and take proportionate action
                to protect users, systems, and the public. Nothing in these Terms obliges Hestia to
                monitor every activity, but we may review usage where necessary to enforce these Terms,
                protect the Services, or comply with law.
              </p>
            </LegalSection>

            <LegalSection id="third-party" number="10" title="Third-Party Services, Open Components, and Links">
              <p>
                The Services may depend on or interoperate with third-party infrastructure, identity
                providers, hosting vendors, analytics providers, mapping or messaging services, open
                source software, device vendors, or network operators. Hestia is not responsible for
                products or services offered by third parties unless Hestia has expressly accepted that
                responsibility in a written commercial commitment.
              </p>
              <p>
                Third-party tools may be subject to separate terms, privacy notices, acceptable use
                rules, or license conditions. Your use of such tools is governed by the third party&apos;s
                terms in addition to these Terms. Hestia may modify integrations, replace vendors, or
                discontinue support for specific third-party dependencies if needed for security,
                performance, legal, or commercial reasons.
              </p>
              <p>
                Portions of the Services may include open source software distributed under separate
                license notices. To the extent required by an applicable open source license, that
                license governs your use of the relevant component instead of the conflicting portion of
                these Terms.
              </p>
            </LegalSection>

            <LegalSection id="ip" number="11" title="Intellectual Property, Marks, and Feedback">
              <p>
                Hestia and its licensors retain all right, title, and interest in the Services,
                including software, firmware, documentation, visual design, trademarks, logos, models,
                workflows, compiled data structures, site content, and any service-generated materials
                that do not constitute your Customer Data. No ownership rights are transferred to you
                except for the limited use rights expressly granted in these Terms or in a separate
                written agreement.
              </p>
              <p>
                You may not copy, distribute, adapt, create derivative works from, reverse engineer,
                decompile, disassemble, publicly display, or otherwise exploit protected components of
                the Services except where applicable law clearly permits such activity despite a
                contractual restriction, or where Hestia has expressly authorized it in writing.
              </p>
              <p>
                If you provide suggestions, ideas, test feedback, feature requests, bug reports, or
                evaluation comments, Hestia may use them without restriction or payment, provided we do
                not thereby acquire ownership of your separate confidential information or your
                independent intellectual property outside the scope of the feedback itself.
              </p>
            </LegalSection>

            <LegalSection id="security" number="12" title="Security, Logs, and Incident Reporting">
              <p>
                Hestia uses administrative, technical, and organizational controls intended to protect
                the Services and the personal data processed through them. No security measure is
                infallible, and you acknowledge that internet-based services, hardware deployments, and
                distributed control systems carry inherent risks. You must implement reasonable local
                safeguards on your side, including network segmentation where appropriate, secure device
                placement, credential hygiene, access reviews, and sensible operational monitoring.
              </p>
              <p>
                You must notify Hestia without undue delay if you become aware of any suspected or
                actual unauthorized access, credential compromise, exploit attempt, security weakness,
                data leakage, malicious firmware event, or other incident that materially affects the
                Services or Hestia-connected infrastructure. Security reports may be sent to{' '}
                <a className="text-sky-300 hover:text-sky-200" href="mailto:contact@hestialabs.in">
                  contact@hestialabs.in
                </a>
                .
              </p>
              <p>
                To support security operations and legal obligations, Hestia may maintain event logs,
                access logs, audit records, and diagnostic traces for reasonable periods, and longer
                where applicable law, incident response practice, fraud prevention, or governmental
                directions require retention. You agree not to interfere with security logging or ask
                Hestia to suppress logs in a manner that would make the Services unsafe or unlawful to
                operate.
              </p>
            </LegalSection>

            <LegalSection id="beta" number="13" title="Beta, Preview, and Experimental Features">
              <p>
                Hestia may label certain features as alpha, beta, pilot, preview, experimental, early
                access, or similar. Such features may be incomplete, unstable, unsupported, or subject
                to material change. They may not be appropriate for production or mission-critical use,
                and they may be withdrawn at any time without prior notice.
              </p>
              <p>
                Unless a separate written commitment says otherwise, beta and preview features are
                provided on an as-is, as-available basis and may not benefit from the same support,
                uptime expectations, retention behavior, recovery procedures, or compatibility
                commitments that Hestia applies to generally available offerings.
              </p>
            </LegalSection>

            <LegalSection id="termination" number="14" title="Suspension and Termination">
              <p>
                You may stop using the Services at any time. Hestia may suspend, restrict, or
                terminate access immediately if we reasonably believe that your use violates these
                Terms, creates security or legal risk, threatens physical safety, exposes Hestia or
                others to fraud or abuse, or could materially impair the Services.
              </p>
              <p>
                Hestia may also suspend or discontinue a Service for operational, security, legal, or
                commercial reasons. Where reasonably practicable and appropriate, we will provide notice
                before a non-emergency suspension or discontinuation. After termination, rights granted
                to you under these Terms end except for provisions that by their nature should survive,
                including provisions on payment obligations, confidentiality, intellectual property,
                disclaimers, liability limits, indemnity, governing law, and dispute resolution.
              </p>
              <p>
                If you require post-termination retrieval of Customer Data or transition assistance,
                that process may be governed by a separate order form, enterprise agreement, or support
                arrangement. Hestia is not required to preserve inactive or terminated environments
                indefinitely.
              </p>
            </LegalSection>

            <LegalSection id="disclaimers" number="15" title="Disclaimers and Service Availability">
              <p>
                Except to the extent expressly stated in a signed written agreement, the Services are
                provided on an as-is and as-available basis. Hestia does not warrant that the Services
                will be uninterrupted, error-free, fit for every purpose, free from every vulnerability,
                or compatible with every network, environment, or third-party dependency.
              </p>
              <p>
                Outputs generated through automation, AI assistance, telemetry interpretation, or
                diagnostic workflows may be incomplete, incorrect, delayed, or dependent on the quality
                of the input environment. You remain responsible for validating important actions,
                maintaining appropriate human review where warranted, and deciding whether a particular
                output should be trusted in your context.
              </p>
              <p>
                Any implementation guidance, deployment suggestion, roadmap note, or operational
                recommendation provided by Hestia is informational unless expressly incorporated into a
                signed professional services or support commitment. Hestia disclaims implied warranties
                to the maximum extent permitted by law, including implied warranties of merchantability,
                fitness for a particular purpose, and non-infringement.
              </p>
            </LegalSection>

            <LegalSection id="liability" number="16" title="Limitation of Liability">
              <p>
                To the maximum extent permitted by applicable law, Hestia Labs LLP and its affiliates,
                partners, personnel, and licensors will not be liable for indirect, incidental,
                consequential, special, exemplary, or punitive damages, or for loss of profits, revenue,
                business opportunity, goodwill, anticipated savings, or data, even if advised that such
                damages were possible.
              </p>
              <p>
                To the maximum extent permitted by applicable law, Hestia&apos;s aggregate liability arising
                out of or relating to the Services or these Terms will not exceed the greater of{' '}
                <span className="text-white">INR 10,000</span> or the fees paid by you to Hestia for the
                specific Service giving rise to the claim during the twelve months preceding the event
                that first gave rise to liability.
              </p>
              <p>
                Nothing in these Terms excludes or limits liability to the extent such exclusion or
                limitation is prohibited by law, including liability for fraud, fraudulent
                misrepresentation, willful misconduct, or death or personal injury caused by negligence
                where those liabilities cannot lawfully be excluded.
              </p>
            </LegalSection>

            <LegalSection id="indemnity" number="17" title="Indemnity">
              <p>
                To the extent permitted by law, you will defend, indemnify, and hold harmless Hestia
                and its personnel from claims, proceedings, liabilities, losses, costs, and expenses
                arising out of or related to your misuse of the Services, your breach of these Terms,
                your violation of law or third-party rights, your Customer Data, or your deployment of
                automations, firmware, hardware, or integrations in a way that creates unlawful,
                unsafe, or unauthorized outcomes.
              </p>
              <p>
                Hestia may assume control of the defense of any matter subject to indemnification, at
                your expense, using counsel of our choosing. You agree to cooperate with reasonable
                requests connected with the defense or settlement of such matters.
              </p>
            </LegalSection>

            <LegalSection id="consumer-rights" number="18" title="Consumer Rights and Mandatory Protections">
              <p>
                Nothing in these Terms is intended to waive, limit, or override any right or remedy
                that cannot lawfully be excluded under applicable consumer protection, product safety,
                contract, or data protection law. If you are an individual consumer, any mandatory
                statutory protection available to you under Indian law continues to apply even if a
                provision of these Terms might otherwise suggest a narrower remedy.
              </p>
              <p>
                If a court, tribunal, or regulator determines that a particular restriction, disclaimer,
                or limitation in these Terms is unenforceable against a consumer, that restriction,
                disclaimer, or limitation will be enforced only to the maximum extent permitted and the
                remainder of these Terms will continue in effect.
              </p>
            </LegalSection>

            <LegalSection id="governing-law" number="19" title="Governing Law and Dispute Resolution">
              <p>
                These Terms are governed by the laws of India. Subject to any mandatory rights that
                cannot be contractually altered, the courts having jurisdiction in{' '}
                <span className="text-white">Assam</span> will have exclusive jurisdiction
                over disputes arising out of or in connection with these Terms or the Services.
              </p>
              <p>
                Before starting formal proceedings, the parties should first attempt in good faith to
                resolve the dispute through written notice and commercial discussion. This does not
                prevent either party from seeking urgent injunctive or equitable relief where delay
                would likely cause irreparable harm, misuse of confidential information, compromise of
                security, or unauthorized use of intellectual property.
              </p>
            </LegalSection>

            <LegalSection id="grievance" number="20" title="Grievance Redressal and Contact Details">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="border border-white/10 bg-white/[0.02] p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-sky-300">
                    General Contact
                  </p>
                  <p className="text-sm leading-7 text-white/78">
                    Hestia Labs LLP
                    <br />
                    Assam, India
                    <br />
                    <a className="text-sky-300 hover:text-sky-200" href="mailto:info@hestialabs.in">
                      info@hestialabs.in
                    </a>
                  </p>
                </div>
                <div className="border border-white/10 bg-white/[0.02] p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-sky-300">
                    Security Contact
                  </p>
                  <p className="text-sm leading-7 text-white/78">
                    Security reports and credential compromise notices:
                    <br />
                    <a className="text-sky-300 hover:text-sky-200" href="mailto:contact@hestialabs.in">
                      contact@hestialabs.in
                    </a>
                  </p>
                </div>
              </div>
              <p>
                If you have a complaint about the Services or about how these Terms are being applied,
                you may write to Hestia using the details above. Please include your name, organization
                if applicable, the account or deployment involved, a detailed description of the issue,
                and the remedy you are seeking. Hestia will review complaints in a commercially
                reasonable manner and may request additional information necessary to verify identity,
                authority, or technical context before taking action.
              </p>
              <div className="flex items-start gap-3 border border-white/10 bg-white/[0.02] p-4 text-xs uppercase tracking-[0.18em] text-white/55">
                <HugeiconsIcon icon={Mail01Icon} size={16} className="mt-0.5 shrink-0 text-sky-400" />
                <p>
                  Hestia does not claim any special statutory intermediary designation on this page
                  unless and until such status is specifically confirmed and formally published.
                </p>
              </div>
            </LegalSection>

            <LegalSection id="changes" number="21" title="Changes to the Services and to These Terms">
              <p>
                Hestia may update these Terms from time to time to reflect changes in the Services,
                applicable law, security practice, product structure, or commercial operations. The
                updated version will be posted on this page with a revised effective or last-updated
                date. Where a material change affects an active paid customer relationship, Hestia may
                also provide supplemental notice through the dashboard, by email, or through account
                administrators where reasonably practical.
              </p>
              <p>
                Your continued use of the Services after revised Terms become effective constitutes
                acceptance of the revised Terms, except to the extent a separate signed agreement
                requires a different amendment process. If you do not agree to the revised Terms, you
                must stop using the affected Services.
              </p>
              <div className="flex items-start gap-3 border border-white/10 p-4">
                <HugeiconsIcon icon={AlertCircleIcon} size={16} className="mt-0.5 shrink-0 text-sky-400" />
                <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                  Questions about these Terms can be sent to{' '}
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
