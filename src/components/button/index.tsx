import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium duration-200',
    {
        variants: {
            variant: {
                default: 'bg-lime-500 text-white hover:bg-lime-500/90',
                transparent: 'hover:transparent bg-transparent'
            },
            size: {
                default: 'h-10 px-4 py-2',
                '2xs': 'h-6 rounded-md px-2 text-sm',
                xs: 'h-8 rounded-md px-2 text-sm',
                sm: 'h-9 rounded-md px-3',
                md: 'h-10 rounded-md px-6',
                lg: 'h-11 rounded-md px-8',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
)


function Button(props: IProps) {
    const { variant, size, children, className } = props
    return (
        <button
            className={cn(buttonVariants({ variant, size }), className)}
            {...props}>
            {children}
        </button>
    )
}

Button.displayName = 'Button'

export { Button, buttonVariants }
