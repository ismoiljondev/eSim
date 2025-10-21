import Title from '@/components/title'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import Aboutontact from './about-contact'
import FormContanct from './form'

const Contact = () => {
    const t = useTranslations("contact")
    return (
        <div className='grid grid-cols-2 gap-10 container mx-auto my-30 max-lg:my-24 max-md:my-20 max-md:grid-cols-1'>
            <Aboutontact />
            <FormContanct />
        </div>
    )
}

export default Contact