'use client';

import { useState, useEffect } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { 
    Shield01Icon,
    InformationCircleIcon,
    Book02Icon,
    LockKeyIcon,
    UserIcon,
    LegalIcon,
    AlertCircleIcon,
    LicenseIcon,
    GlobalIcon,
    DatabaseIcon,
    WasteIcon,
    Mail01Icon
} from '@hugeicons/core-free-icons';

interface Section {
    id: string;
    title: string;
    icon: typeof Shield01Icon;
}

const sections: Section[] = [
    { id: 'acceptance', title: '1. Acceptance', icon: Shield01Icon },
    { id: 'services', title: '2. Services', icon: GlobalIcon },
    { id: 'eligibility', title: '3. Eligibility', icon: UserIcon },
    { id: 'accounts', title: '4. Security', icon: LockKeyIcon },
    { id: 'intellectual-property', title: '5. IP Rights', icon: LicenseIcon },
    { id: 'data-privacy', title: '6. Data Sovereignty', icon: DatabaseIcon },
    { id: 'conduct', title: '7. Prohibited Conduct', icon: AlertCircleIcon },
    { id: 'liability', title: '8. Liability Cap', icon: LegalIcon },
    { id: 'termination', title: '9. Termination', icon: WasteIcon },
    { id: 'governing-law', title: '10. Legal Jurisdiction', icon: Book02Icon },
    { id: 'grievance', title: '11. Grievance Redressal', icon: Mail01Icon },
];

export default function TermsPage() {
    const [activeSection, setActiveSection] = useState('acceptance');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="min-h-screen bg-background relative selection:bg-primary/30">
            {/* Background Aesthetic Layer */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary-rgb),0.15),transparent_70%)] opacity-30" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
                <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                {/* Header Section */}
                <header className="mb-16 text-center md:text-left">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-6">
                        <HugeiconsIcon icon={Shield01Icon} size={18} className="text-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80">Compliance Protocol: TOS-2026-ALPHA</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter mb-4 uppercase">
                        Terms of <span className="text-primary italic">Service</span>
                    </h1>
                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-muted-foreground/60 text-sm">
                        <p className="flex items-center gap-2">
                            <HugeiconsIcon icon={InformationCircleIcon} size={16} />
                            Last Revised: April 8, 2026
                        </p>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">
                    {/* Sticky Sidebar Navigation */}
                    <aside className="sticky top-24 hidden lg:block">
                        <nav className="space-y-1">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40 mb-4 px-3">On this page</p>
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 group ${activeSection === section.id
                                            ? 'bg-primary/10 text-primary border-l-2 border-primary'
                                            : 'hover:bg-white/5 text-muted-foreground'
                                        }`}
                                >
                                    <HugeiconsIcon icon={section.icon} size={18} className={`${activeSection === section.id ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`} />
                                    <span className="text-sm font-medium tracking-tight uppercase truncate">{section.title}</span>
                                </button>
                            ))}
                        </nav>

                        <div className="mt-12 p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
                            <p className="text-xs text-muted-foreground/60 leading-relaxed italic">
                                &quot;These terms govern the relationship between Hestia Labs and our global partners. By using the HxTP protocol, you participate in a sovereign future.&quot;
                            </p>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <main className="space-y-16 pb-32">
                        {/* Section 1: Acceptance */}
                        <section id="acceptance" className="scroll-mt-24 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                                    <HugeiconsIcon icon={Shield01Icon} size={20} />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">1. ACCEPTANCE OF TERMS</h2>
                            </div>
                            <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4">
                                <p>
                                    These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement made between you,
                                    whether personally or on behalf of an entity (&quot;you&quot;) and <strong className="text-foreground">Hestia Labs LLP</strong>
                                    (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), concerning your access to and use of our website, dashboard, APIs, firmware, and hardware interaction services.
                                </p>
                                <p>
                                    By accessing the Site, you acknowledge that you have read, understood, and agree to be bound by all of these Terms of Service.
                                    <span className="text-foreground font-semibold"> IF YOU DO NOT AGREE WITH ALL OF THESE TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES.</span>
                                </p>
                            </div>
                        </section>

                        {/* Section 2: Services */}
                        <section id="services" className="scroll-mt-24 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                                    <HugeiconsIcon icon={GlobalIcon} size={20} />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">2. DESCRIPTION OF SERVICES</h2>
                            </div>
                            <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4">
                                <p>
                                    Hestia Labs provides specialized infrastructure for decentralized device management,
                                    real-time telemetry, and the <strong className="text-foreground italic">HxTP (Hestia Transfer Protocol)</strong>.
                                    Our platform allows authorized users to manage sovereign hardware nodes, update firmware via managed cloud repositories,
                                    and visualize data streams through the Hestia Dashboard.
                                </p>
                                <ul className="list-none space-y-3 pl-0">
                                    <li className="flex gap-3">
                                        <span className="text-primary font-bold">»</span>
                                        <span>Provisions for secure firmware distribution and over-the-air (OTA) updates.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary font-bold">»</span>
                                        <span>Unified telemetry interfaces for industrial and consumer hardware.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-primary font-bold">»</span>
                                        <span>Developer SDKs and API access for protocol integration.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 3: Eligibility */}
                        <section id="eligibility" className="scroll-mt-24 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                                    <HugeiconsIcon icon={UserIcon} size={20} />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">3. ELIGIBILITY & AGE REQUIREMENTS</h2>
                            </div>
                            <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4">
                                <p>
                                    The Services are intended for users who are at least 18 years old. Persons under the age of 18
                                    are not permitted to register for the Services without direct parental oversight. By using the Services,
                                    you represent and warrant that you fulfill this requirement and have the legal capacity to enter
                                    into this agreement under Indian law.
                                </p>
                            </div>
                        </section>

                        {/* Section 4: Security */}
                        <section id="accounts" className="scroll-mt-24 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                                    <HugeiconsIcon icon={LockKeyIcon} size={20} />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">4. USER ACCOUNTS & SECURITY</h2>
                            </div>
                            <div className="glass-panel p-6 border-white/5 bg-white/5 rounded-2xl space-y-4">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    To access certain features, you must create a secure account. You are solely responsible for maintaining
                                    the confidentiality of your login credentials and for all activities that occur under your account.
                                    Hestia Labs employs encryption and third-party authentication protocols (via Appwrite), but
                                    <strong className="text-foreground"> final security posture remains the user&apos;s responsibility.</strong>
                                </p>
                                <div className="flex items-start gap-4 p-4 bg-primary/5 border border-primary/10 rounded-xl">
                                    <HugeiconsIcon icon={AlertCircleIcon} size={24} className="text-primary shrink-0" />
                                    <p className="text-[11px] text-primary uppercase font-black tracking-widest leading-relaxed">
                                        Compromised credentials must be reported to security@hestialabs.in within 24 hours of discovery.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Intellectual Property */}
                        <section id="intellectual-property" className="scroll-mt-24 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                                    <HugeiconsIcon icon={LicenseIcon} size={20} />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">5. INTELLECTUAL PROPERTY RIGHTS</h2>
                            </div>
                            <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4 text-sm">
                                <p>
                                    Unless otherwise indicated, the Services and all source code, databases, functionality, software,
                                    website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;)
                                    are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                                </p>
                                <p>
                                    Except as expressly provided in these Terms, no part of the Services and no Content or Marks
                                    may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed,
                                    encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for
                                    any commercial purpose whatsoever, without our express prior written permission.
                                </p>
                            </div>
                        </section>

                        {/* Section 6: Data Sovereignty */}
                        <section id="data-privacy" className="scroll-mt-24 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                                    <HugeiconsIcon icon={DatabaseIcon} size={20} />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">6. DATA SOVEREIGNTY & PRIVACY</h2>
                            </div>
                            <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4">
                                <p>
                                    We subscribe to the principle of <strong className="text-primary italic">Digital Sovereignty</strong>.
                                    Your telemetry data, database states, and raw input remain your property.
                                    Hestia Labs processes personal data strictly in accordance with:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                                    <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                                        <p className="text-xs font-bold text-foreground uppercase mb-1">Local Compliance</p>
                                        <p className="text-[10px] text-muted-foreground">Digital Personal Data Protection Act, 2023 (India)</p>
                                    </div>
                                    <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                                        <p className="text-xs font-bold text-foreground uppercase mb-1">Internal Protocol</p>
                                        <p className="text-[10px] text-muted-foreground">Hestia Privacy Shield Framework 1.0</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 7: Prohibited Conduct */}
                        <section id="conduct" className="scroll-mt-24 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                                    <HugeiconsIcon icon={AlertCircleIcon} size={20} />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">7. PROHIBITED CONDUCT</h2>
                            </div>
                            <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-8 space-y-4">
                                <p className="text-sm text-muted-foreground italic">
                                    In addition to standard legal restrictions, you are explicitly prohibited from:
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-xs text-muted-foreground list-disc pl-4 uppercase tracking-tight">
                                    <li>Reverse engineering the HxTP core protocol binaries.</li>
                                    <li>Automated scraping of telemetry dashboards without API authorization.</li>
                                    <li>Uploading malicious hardware firmware payloads.</li>
                                    <li>Bypassing device authentication handshakes.</li>
                                    <li>Interfering with the unified hardware control layer.</li>
                                    <li>Redistributing managed firmware without prior consent.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 8: Liability */}
                        <section id="liability" className="scroll-mt-24 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                                    <HugeiconsIcon icon={LegalIcon} size={20} />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">8. LIMITATION OF LIABILITY</h2>
                            </div>
                            <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed text-sm">
                                <p>
                                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL HESTIA LABS LLP BE LIABLE FOR ANY INDIRECT,
                                    PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS
                                    OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THE USE OF,
                                    OR INABILITY TO USE, THE SERVICE.
                                </p>
                                <p>
                                    OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING OUT OF OR IN CONNECTION WITH THESE TERMS SHALL NOT EXCEED
                                    THE AMOUNT PAID BY YOU TO US (IF ANY) DURING THE TWELVE MONTHS PRECEDING THE CLAIM.
                                </p>
                            </div>
                        </section>

                        {/* Section 9: Termination */}
                        <section id="termination" className="scroll-mt-24 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                                    <HugeiconsIcon icon={WasteIcon} size={20} />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">9. TERMINATION</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability,
                                under our sole discretion, for any reason whatsoever and without limitation, including but not limited to
                                a breach of the Terms. Upon termination, your right to use the Service will cease immediately.
                            </p>
                        </section>

                        {/* Section 10: Governing Law */}
                        <section id="governing-law" className="scroll-mt-24 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                                    <HugeiconsIcon icon={Book02Icon} size={20} />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">10. GOVERNING LAW & JURISDICTION</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                These Terms shall be governed and construed in accordance with the laws of <strong className="text-foreground underline decoration-primary/50">India</strong>,
                                without regard to its conflict of law provisions. Any legal action or proceeding related to your access to,
                                or use of, the Site or Services shall be instituted in a state or federal court in
                                <strong className="text-foreground italic"> Assam, India</strong>.
                            </p>
                        </section>

                        {/* Section 11: Grievance Redressal */}
                        <section id="grievance" className="scroll-mt-24 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                                    <HugeiconsIcon icon={Mail01Icon} size={20} />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">11. GRIEVANCE REDRESSAL OFFICER</h2>
                            </div>
                            <div className="p-8 rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-md grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Designated Official</p>
                                    <div className="space-y-1">
                                        <p className="text-lg font-bold text-foreground uppercase">Legal Compliance Officer</p>
                                        <p className="text-sm text-muted-foreground">Hestia Labs LLP (Govt. of India Registered Intermediary)</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Contact Channels</p>
                                    <div className="space-y-2 text-sm">
                                        <p className="flex items-center gap-2 text-foreground">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            Email: legal@hestialabs.in
                                        </p>
                                        <p className="flex items-center gap-2 text-foreground">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            Location: Guwahati, Assam, India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                       
                    </main>
                </div>
            </div>
        </div>
    );
}
