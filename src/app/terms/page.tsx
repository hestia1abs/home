'use client';

import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react'
import { Shield01Icon, ArrowLeft01Icon } from '@hugeicons/core-free-icons';
import Link from 'next/link';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background p-4 md:p-8 relative overflow-hidden flex flex-col items-center">
            {/* Background elements */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

            <div className="w-full max-w-3xl relative z-10 space-y-6">
                <Button asChild variant="ghost" className="gap-2 mb-4 hover:bg-primary/10">
                    <Link href="https://auth.hestialabs.in/signup">
                        <HugeiconsIcon icon={ArrowLeft01Icon} size={16} /> Back to Signup
                    </Link>
                </Button>

                <div className="glass-panel border border-white/10 rounded-3xl overflow-hidden shadow-2xl bg-card/50 backdrop-blur-md">
                    <div className="p-8 border-b border-white/5 flex items-center gap-4 bg-white/5">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                            <HugeiconsIcon icon={Shield01Icon} size={24} />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold uppercase tracking-widest text-primary">Terms of Service</h1>
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">System Protocol: TOS.001A</p>
                        </div>
                    </div>
                    
                    <div className="p-8">
                        <div className="h-[50vh] pr-4 overflow-y-auto custom-scrollbar-slim">
                            <div className="space-y-6 text-muted-foreground leading-relaxed">
                                <section className="space-y-3">
                                    <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
                                    <p>
                                        By creating an account and using the HxTP Dashboard, you agree to be bound by these
                                        Terms of Service and all applicable laws and regulations.
                                    </p>
                                </section>

                                <section className="space-y-3">
                                    <h2 className="text-xl font-semibold text-foreground">2. Description of Service</h2>
                                    <p>
                                        HxTP (Hestia Transfer Protocol) is a sovereign infrastructure for secure device
                                        management and telemetry. The Dashboard provides a user interface for authorized
                                        interaction with this protocol.
                                    </p>
                                </section>

                                <section className="space-y-3">
                                    <h2 className="text-xl font-semibold text-foreground">3. User Responsibilities</h2>
                                    <p>
                                        You are responsible for maintaining the confidentiality of your account credentials
                                        and for all activities that occur under your account. You agree to notify us
                                        immediately of any unauthorized use.
                                    </p>
                                </section>

                                <section className="space-y-3">
                                    <h2 className="text-xl font-semibold text-foreground">4. Sovereignty and Data</h2>
                                    <p>
                                        Our commitment is to your digital sovereignty. Your database state remains your
                                        own. We use third-party identity providers (Appwrite) solely for authentication
                                        and managed firmware storage.
                                    </p>
                                </section>

                                <section className="space-y-3 pt-4 italic border-t border-primary/10">
                                    <p>
                                        Note: This is a placeholder document provided during the system initialization
                                        phase. Please consult with Hestia Labs legal for the full production version.
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
