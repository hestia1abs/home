import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Hestia Labs — Sovereign AI for the Physical World';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom, #050505, #0a0a0a)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Decorative Grid/Background elements */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
                        display: 'flex',
                    }}
                />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '80px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '40px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        backdropFilter: 'blur(20px)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '4px',
                            marginBottom: '32px',
                        }}
                    >
                        <span style={{ fontSize: 48, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'white' }}>
                            Hestia
                        </span>
                        <span
                            style={{
                                fontSize: 48,
                                fontWeight: 900,
                                textTransform: 'uppercase',
                                letterSpacing: '0.2em',
                                background: 'linear-gradient(to bottom, #fff, #3b82f6)',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            Labs
                        </span>
                    </div>

                    <div
                        style={{
                            fontSize: 32,
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.4em',
                            color: 'rgba(255, 255, 255, 0.5)',
                            textAlign: 'center',
                            lineHeight: 1.4,
                            maxWidth: '800px',
                        }}
                    >
                        The Future of Intelligent Homes
                    </div>

                    <div
                        style={{
                            marginTop: '48px',
                            height: '2px',
                            width: '120px',
                            background: 'linear-gradient(to right, transparent, #3b82f6, transparent)'
                        }}
                    />

                    <div
                        style={{
                            marginTop: '24px',
                            fontSize: 14,
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            letterSpacing: '0.6em',
                            color: 'rgba(255, 255, 255, 0.3)',
                        }}
                    >
                        hxTP Protocol • Edge Intelligence • Premium Hardware
                    </div>
                </div>

                {/* Brand Accent */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '40px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.3em',
                        fontSize: 12,
                        color: 'rgba(255, 255, 255, 0.2)',
                        fontWeight: 700,
                    }}
                >
                    hestialabs.in
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
