import { useTranslations } from 'next-intl';
import React from 'react'

type Props = {
    title: string;
    desc: string
}

const Title = ({ desc, title }: Props) => {
    const t = useTranslations()
    return (
        <div className='flex flex-col gap-2 justify-center items-center'>
            <h2 className='text-[clamp(32px,calc(32px+8*(100vw-350px)/1650),40px)] font-bold'>{t(title)}</h2>
            <p>{t(desc)}</p>
        </div>
    )
}

export default Title