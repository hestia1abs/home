import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon, CpuIcon } from '@hugeicons/core-free-icons';

export const metadata = {
  title: 'Privacy & Data | Hestia Labs',
  description: 'Clear, honest information about how we handle your data. What we collect, what we don\'t, and how we use it.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-5xl px-6 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold uppercase tracking-tighter">Privacy & Data Handling</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We believe in transparency. Here&apos;s exactly what we collect, what we don&apos;t, and why.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principle */}
      <section className="border-b border-border bg-card py-20">
        <div className="mx-auto max-w-5xl px-6 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Our Core Principle</h2>
            <p className="text-lg text-muted-foreground">
              You control the hardware in your environment. We manage the cloud services. Your data stays yours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-border p-6 space-y-3">
              <HugeiconsIcon icon={CpuIcon} size={20} className="text-cyan-500 mb-4" />
              <h3 className="font-bold uppercase tracking-tight">Sovereign Hardware</h3>
              <p className="text-muted-foreground text-sm">We don&apos;t just process data on your device; we run the entire intelligence model there. You own the execution layer. We never have direct access to the raw data they collect.</p>
            </div>
            <div className="border border-border p-6 space-y-3">
              <h3 className="font-bold uppercase tracking-tight">Managed Cloud</h3>
              <p className="text-sm text-muted-foreground">
                We operate Hestia Cloud and manage all cloud services. You don&apos;t run servers. We handle the infrastructure.
              </p>
            </div>
            <div className="border border-border p-6 space-y-3">
              <h3 className="font-bold uppercase tracking-tight">Data Encryption</h3>
              <p className="text-sm text-muted-foreground">
                All communication between your environment and Hestia Cloud is encrypted end-to-end using TLS 1.3 and AES-256.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Collect */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-5xl px-6 space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">What We Collect</h2>
            <p className="text-muted-foreground">
              Limited system data that helps us improve reliability and fix problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-tight">System Diagnostics</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold text-primary mt-1">•</span>
                  <div>
                    <div className="font-bold text-sm">Device Status</div>
                    <p className="text-xs text-muted-foreground">Whether devices are online/offline, connectivity status</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary mt-1">•</span>
                  <div>
                    <div className="font-bold text-sm">Error Logs</div>
                    <p className="text-xs text-muted-foreground">What went wrong and when, for bug fixing</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary mt-1">•</span>
                  <div>
                    <div className="font-bold text-sm">Performance Metrics</div>
                    <p className="text-xs text-muted-foreground">Response times, latency, system resource usage</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-tight">Usage Patterns</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold text-primary mt-1">•</span>
                  <div>
                    <div className="font-bold text-sm">Aggregated Commands</div>
                    <p className="text-xs text-muted-foreground">What features are used most (aggregated, not per-user)</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary mt-1">•</span>
                  <div>
                    <div className="font-bold text-sm">Crash Reports</div>
                    <p className="text-xs text-muted-foreground">When systems fail, what caused it</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary mt-1">•</span>
                  <div>
                    <div className="font-bold text-sm">System Health</div>
                    <p className="text-xs text-muted-foreground">General system stability and reliability metrics</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We DO NOT Collect */}
      <section className="border-b border-border bg-card py-20">
        <div className="mx-auto max-w-5xl px-6 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">What We Do NOT Collect</h2>
            <p className="text-muted-foreground">
              These things never leave your environment without explicit consent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-border bg-background p-4 space-y-2">
              <div className="text-sm font-bold uppercase tracking-tight">Raw Audio</div>
              <p className="text-xs text-muted-foreground">Voice conversations or recordings</p>
            </div>
            <div className="border border-border bg-background p-4 space-y-2">
              <div className="text-sm font-bold uppercase tracking-tight">Video Feeds</div>
              <p className="text-xs text-muted-foreground">Camera recordings or images</p>
            </div>
            <div className="border border-border bg-background p-4 space-y-2">
              <div className="text-sm font-bold uppercase tracking-tight">Occupancy Data</div>
              <p className="text-xs text-muted-foreground">Anything detected in your environment</p>
            </div>
            <div className="border border-border bg-background p-4 space-y-2">
              <div className="text-sm font-bold uppercase tracking-tight">Private Documents</div>
              <p className="text-xs text-muted-foreground">Files, photos, or personal information</p>
            </div>
            <div className="border border-border bg-background p-4 space-y-2">
              <div className="text-sm font-bold uppercase tracking-tight">Browsing History</div>
              <p className="text-xs text-muted-foreground">What you search for or visit online</p>
            </div>
            <div className="border border-border bg-background p-4 space-y-2">
              <div className="text-sm font-bold uppercase tracking-tight">Location Data</div>
              <p className="text-xs text-muted-foreground">Where you are or where you travel</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Data Processing */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-5xl px-6 space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">AI Features & Data</h2>
            <p className="text-muted-foreground">
              If you use voice features, here&apos;s what happens to your voice data.
            </p>
          </div>

          <div className="space-y-8">
            <div className="border border-border p-8 space-y-4">
              <h3 className="font-bold uppercase tracking-tight">Voice Recognition</h3>
              <p className="text-muted-foreground mb-4">
                When you use voice commands, we may process anonymized voice patterns to improve speech recognition accuracy.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Raw audio is NOT permanently stored</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Audio is processed and deleted after command execution</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Only anonymized voice features may be retained for model improvement</span>
                </li>
              </ul>
            </div>

            <div className="border border-border p-8 space-y-4">
              <h3 className="font-bold uppercase tracking-tight">Usage Patterns for AI Training</h3>
              <p className="text-muted-foreground mb-4">
                We analyze usage trends to improve automation recommendations and AI capabilities.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Commonly used commands are analyzed in aggregate</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Personal information is removed before analysis</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Training data is deleted after model improvement cycles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="border-b border-border bg-card py-20">
        <div className="mx-auto max-w-5xl px-6 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Data Retention</h2>
            <p className="text-muted-foreground">
              We keep data only as long as we need it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-border bg-background p-6 space-y-3">
              <h3 className="font-bold uppercase tracking-tight">Diagnostic Logs</h3>
              <p className="text-xs text-muted-foreground">
                Retained for 30 days or until issue is resolved, whichever is longer. Then deleted.
              </p>
            </div>
            <div className="border border-border bg-background p-6 space-y-3">
              <h3 className="font-bold uppercase tracking-tight">AI Training Data</h3>
              <p className="text-xs text-muted-foreground">
                Deleted after model improvement cycle (typically 3-6 months). Not retained for marketing.
              </p>
            </div>
            <div className="border border-border bg-background p-6 space-y-3">
              <h3 className="font-bold uppercase tracking-tight">Error Reports</h3>
              <p className="text-xs text-muted-foreground">
                Kept until bug is fixed. Archived after fix for 6 months, then deleted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Control */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-5xl px-6 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">You Are in Control</h2>
            <p className="text-muted-foreground">
              You can control what data is shared with Hestia Cloud.
            </p>
          </div>

          <div className="border border-border bg-background p-8 space-y-6">
            <div className="space-y-3">
              <h3 className="font-bold uppercase tracking-tight mb-4">Current Options</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold uppercase">Telemetry Limits</span>
                  <span className="text-sm text-muted-foreground">Disable diagnostic reporting (keeps local execution intact)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">✓</span>
                  <span className="text-sm text-muted-foreground">Disable AI data collection while keeping voice features active</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-border pt-6 space-y-3">
              <h3 className="font-bold uppercase tracking-tight mb-4">Coming Soon</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold">→</span>
                  <span className="text-sm text-muted-foreground">View exactly what data we have about your system</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">→</span>
                  <span className="text-sm text-muted-foreground">Request deletion of all stored data</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">→</span>
                  <span className="text-sm text-muted-foreground">Export diagnostic reports in human-readable format</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Have Questions?</h2>
            <p className="text-muted-foreground">
              We&apos;re committed to transparency. If something isn&apos;t clear, ask us.
            </p>
          </div>

          <div className="border border-border p-8 space-y-4 text-center">
            <p className="text-muted-foreground mb-4">
              Contact our privacy team directly with any concerns or requests.
            </p>
            <a href="mailto:contact@hestialabs.in" className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-sm font-bold uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors">
              Email: contact@hestialabs.in
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}