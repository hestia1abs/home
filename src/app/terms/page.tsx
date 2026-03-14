'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
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

                <Card className="border-primary/20 bg-card/50 backdrop-blur-md">
                    <CardHeader className="text-center pb-2">
                        <div className="flex justify-center mb-4">
                            <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">
                                <HugeiconsIcon icon={Shield01Icon} size={32} className="text-primary" />
                            </div>
                        </div>
                        <CardTitle className="text-3xl font-bold tracking-tight">Terms of Service</CardTitle>
                        <p className="text-sm text-muted-foreground pt-1">Last Updated: March 2026</p>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-[50vh] pr-4">
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
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
