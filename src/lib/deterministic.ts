export function unitNoise(seed: number): number {
    const value = Math.sin(seed * 12.9898 + 78.233) * 43758.5453123
    return value - Math.floor(value)
}

export function rangeNoise(seed: number, min: number, max: number): number {
    return min + unitNoise(seed) * (max - min)
}

export function intNoise(seed: number, min: number, maxExclusive: number): number {
    return Math.floor(rangeNoise(seed, min, maxExclusive))
}

export function hexString(seed: number, length: number): string {
    const chars = '0123456789ABCDEF'
    let output = ''

    for (let index = 0; index < length; index += 1) {
        output += chars[intNoise(seed + index * 7.137, 0, chars.length)]
    }

    return output
}
