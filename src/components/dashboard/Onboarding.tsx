'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { HugeiconsIcon } from '@hugeicons/react'
import { CheckmarkCircle01Icon, Home01Icon, Layout01Icon, CpuIcon, ArrowRight01Icon, Loading03Icon } from '@hugeicons/core-free-icons'
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import * as api from '@/lib/api';

interface OnboardingProps {
    token: string;
    orgname: string;
    onComplete: () => void;
    initialHomeId?: string;
}

export function Onboarding({ token, orgname, onComplete, initialHomeId }: OnboardingProps) {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    // Step 1: Home Name
    const [homeName, setHomeName] = useState('My Home');
    const [homeId, setHomeId] = useState(initialHomeId || '');

    // Step 2: Room Name
    const [roomName, setRoomName] = useState('Living Room');

    const handleNextStep = async () => {
        setLoading(true);
        try {
            if (step === 1) {
                if (homeId) {
                    await api.updateHome(token, homeId, { home_name: homeName.trim() });
                } else {
                    const res = await api.createHome(token, { home_name: homeName.trim() });
                    setHomeId(res.data.id);
                }
                setStep(2);
            } else if (step === 2) {
                await api.createRoom(token, homeId, { name: roomName.trim() });
                setStep(3);
            } else {
                onComplete();
            }
        } catch (err) {
            toast.error('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const steps = [
        { id: 1, title: 'Name Your Home', icon: Home01Icon, desc: 'What should we call your first smart environment?' },
        { id: 2, title: 'Create a Room', icon: Layout01Icon, desc: 'Let\'s add a space to organize your devices.' },
        { id: 3, title: 'Ready to Connect', icon: CpuIcon, desc: 'You\'re all set to register your first device!' },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
            <div className="max-w-md w-full space-y-8">
                {/* Progress Bar */}
                <div className="flex items-center justify-between px-2">
                    {steps.map((s, i) => (
                        <div key={s.id} className="flex items-center">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${step > s.id ? 'bg-primary border-primary text-primary-foreground' :
                                    step === s.id ? 'border-primary text-primary' : 'border-muted text-muted-foreground'
                                    }`}
                            >
                                {step > s.id ? <HugeiconsIcon icon={CheckmarkCircle01Icon} size={20} /> : s.id}
                            </div>
                            {i < steps.length - 1 && (
                                <div className={`h-0.5 w-12 mx-2 transition-all duration-500 ${step > s.id ? 'bg-primary' : 'bg-muted'}`} />
                            )}
                        </div>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="glass-card glow-primary border-primary/20">
                            <CardHeader className="text-center">
                                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                    {(() => {
                                        const icon = steps[step - 1].icon;
                                        return <HugeiconsIcon icon={icon} size={24} className="text-primary" />;
                                    })()}
                                </div>
                                <CardTitle className="text-2xl font-bold uppercase tracking-tighter">
                                    {step === 1 ? `Welcome to ${orgname}` : steps[step - 1].title}
                                </CardTitle>
                                <CardDescription className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                                    {steps[step - 1].desc}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4 pt-4">
                                {step === 1 && (
                                    <div className="space-y-2">
                                        <Label htmlFor="homeName" className="text-[10px] uppercase tracking-widest font-bold">Home Name</Label>
                                        <Input
                                            id="homeName"
                                            placeholder="e.g. Skyline Apartment"
                                            value={homeName}
                                            onChange={(e) => setHomeName(e.target.value)}
                                            className="bg-background/50 border-primary/20 focus:border-primary transition-all"
                                            autoFocus
                                        />
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="space-y-2">
                                        <Label htmlFor="roomName" className="text-[10px] uppercase tracking-widest font-bold">First Room Name</Label>
                                        <Input
                                            id="roomName"
                                            placeholder="e.g. Living Room"
                                            value={roomName}
                                            onChange={(e) => setRoomName(e.target.value)}
                                            className="bg-background/50 border-primary/20 focus:border-primary transition-all"
                                            autoFocus
                                        />
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="text-center space-y-4">
                                        <p className="text-sm text-balance leading-relaxed">
                                            Now that your home and room are set up, you can start adding devices.
                                            You can register them manually or via QR code.
                                        </p>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-4 rounded-xl bg-secondary/30 border border-primary/10 text-center space-y-2">
                                                <div className="text-lg font-bold font-mono">1</div>
                                                <div className="text-[9px] uppercase tracking-widest text-muted-foreground">Home Active</div>
                                            </div>
                                            <div className="p-4 rounded-xl bg-secondary/30 border border-primary/10 text-center space-y-2">
                                                <div className="text-lg font-bold font-mono">1</div>
                                                <div className="text-[9px] uppercase tracking-widest text-muted-foreground">Room Added</div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </CardContent>

                            <CardFooter className="pt-6">
                                <Button
                                    className="w-full h-12 text-[11px] uppercase tracking-widest gap-2 font-bold"
                                    onClick={handleNextStep}
                                    disabled={loading || (step === 1 && !homeName.trim()) || (step === 2 && !roomName.trim())}
                                >
                                    {loading ? (
                                        <HugeiconsIcon icon={Loading03Icon} size={16} className="animate-spin" />
                                    ) : (
                                        <>
                                            {step === 3 ? 'Go to Dashboard' : 'Continue'}
                                            <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
                                        </>
                                    )}
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                </AnimatePresence>

                <p className="text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
                    HxTP Onboarding · Secure Checkpoint
                </p>
            </div>
        </div>
    );
}
