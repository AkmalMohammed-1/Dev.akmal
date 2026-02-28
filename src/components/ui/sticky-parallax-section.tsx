'use client'

import React from 'react'

interface StickyParallaxSectionProps {
    children: React.ReactNode
    className?: string
    zIndex?: number
}

/**
 * Wraps a section so it sticks in place while scrolling.
 * The next StickyParallaxSection scrolls over it, creating a
 * "card stack" parallax effect.
 */
export function StickyParallaxSection({
    children,
    className = '',
    zIndex = 0,
}: StickyParallaxSectionProps) {
    return (
        <div
            className={`sticky top-0 ${className}`}
            style={{ zIndex }}
        >
            {children}
        </div>
    )
}
