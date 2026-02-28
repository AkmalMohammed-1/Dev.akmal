'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface FloatingParticlesProps {
    className?: string
    count?: number
    color?: string
}

interface Particle {
    size: number
    left: number
    top: number
    duration: number
    delay: number
}

export function FloatingParticles({
    className,
    count = 30,
    color = 'rgba(255,255,255,0.08)',
}: FloatingParticlesProps) {
    const [particles, setParticles] = useState<Particle[]>([])

    useEffect(() => {
        setParticles(
            Array.from({ length: count }, () => ({
                size: Math.random() * 4 + 1,
                left: Math.random() * 100,
                top: Math.random() * 100,
                duration: Math.random() * 20 + 15,
                delay: Math.random() * -20,
            }))
        )
    }, [count])

    if (particles.length === 0) return null

    return (
        <div
            className={cn(
                'pointer-events-none absolute inset-0 overflow-hidden',
                className
            )}
            aria-hidden="true"
        >
            {particles.map((p, i) => (
                <span
                    key={i}
                    className="floating-particle"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        backgroundColor: color,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                    }}
                />
            ))}
        </div>
    )
}
