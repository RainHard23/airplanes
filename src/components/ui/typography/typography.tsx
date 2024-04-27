import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

export interface TextProps<T extends ElementType> {
    as?: T
    children?: ReactNode
    className?: string
    variant?: 'body1'
}

export function Typography<T extends ElementType = 'p'>({
    as,
    className,
    variant = 'body1',
    ...restProps
}: Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>> & TextProps<T>) {
    const classNames = clsx(s.text, s[variant], className)
    const Component = as || 'p'

    return <Component className={classNames} {...restProps} />
}
