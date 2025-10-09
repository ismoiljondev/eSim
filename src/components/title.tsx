import { cn } from '@/lib/utils';
import React from 'react'

type Props = {
    title: string;
    desc: string;
    className?: string
}

const Title = ({ desc, title, className }: Props) => {
    return (
        <div className={cn(`flex flex-col gap-2 justify-center text-center items-center`, className)}>
            <h2 className='text-[clamp(24px,calc(24px+8*(100vw-350px)/1650),40px)] font-bold'>{title}</h2>
            <p className='max-sm:text-base'>{desc}</p>
        </div>
    )
}

export default Title