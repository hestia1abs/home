'use client'

import { Composition } from 'remotion'
import { HudScanner } from './HudScanner'
import { Hashchain } from './Hashchain'

export const SciFiComposition = () => {
  return (
    <>
      <Composition
        id="HudScanner"
        component={HudScanner}
        durationInFrames={300}
        fps={30}
        width={800}
        height={800}
      />
      <Composition
        id="Hashchain"
        component={Hashchain}
        durationInFrames={600}
        fps={30}
        width={1200}
        height={400}
      />
    </>
  )
}
