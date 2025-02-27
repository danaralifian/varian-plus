"use client"
import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean
    onClose: () => void
}

export default function Modal({ isOpen, onClose, children }: IProps) {
    const [isAnimateIn, setIsAnimateIn] = useState(false);
    const [isRendered, setIsRendered] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsRendered(true)
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsAnimateIn(true)
                })
            })
        } else {
            setIsAnimateIn(false)
        }
    }, [isOpen])

    const handleAnimate = () => {
        if (!isOpen) setIsRendered(false)
    }

    if (!isRendered) return null

    return (
        <div
            className={cn('fixed inset-0 top-0 bg-black/0 flex items-center justify-center z-50 transition-all duration-300 ease-in-out', {
                'bg-black/50': isAnimateIn
            })}
            onClick={onClose}
        >
            <div
                className={cn('bg-white p-4 rounded-lg max-w-3xl w-full mx-4 transition-all duration-300 ease-out scale-95 opacity-0', {
                    'scale-100 opacity-100': isAnimateIn
                })}
                onClick={(e) => e.stopPropagation()}
                onTransitionEnd={handleAnimate}>
                {children}
            </div>
        </div>
    )
}
