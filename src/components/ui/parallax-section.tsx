'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ParallaxSectionProps {
    children: React.ReactNode
    className?: string
    /** Vertical slide distance in px (default 80) */
    slideUp?: number
    /** Enable fade-in (default true) */
    fadeIn?: boolean
    /** Enable scale effect (default false) */
    scale?: boolean
    /** Parallax speed multiplier — positive = slower, negative = faster (default 0) */
    speed?: number
    /** Stagger delay for children wrapper in seconds */
    delay?: number
}

export function ParallaxSection({
    children,
    className,
    slideUp = 80,
    fadeIn = true,
    scale = false,
    speed = 0,
    delay = 0,
}: ParallaxSectionProps) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })

    const y = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100])

    return (
        <motion.div
            ref={ref}
            style={{ y: speed !== 0 ? y : undefined }}
            className={cn('relative', className)}
        >
            <motion.div
                initial={{
                    opacity: fadeIn ? 0 : 1,
                    y: slideUp,
                    scale: scale ? 0.95 : 1,
                }}
                animate={
                    isInView
                        ? {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }
                        : undefined
                }
                transition={{
                    duration: 0.8,
                    delay,
                    ease: "easeOut",
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    )
}

/** Staggered children container — each direct child animates in sequence */
export function StaggerContainer({
    children,
    className,
    staggerDelay = 0.1,
}: {
    children: React.ReactNode
    className?: string
    staggerDelay?: number
}) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <div ref={ref} className={className}>
            {React.Children.map(children, (child, i) => (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : undefined}
                    transition={{
                        duration: 0.6,
                        delay: i * staggerDelay,
                        ease: "easeOut",
                    }}
                >
                    {child}
                </motion.div>
            ))}
        </div>
    )
}
