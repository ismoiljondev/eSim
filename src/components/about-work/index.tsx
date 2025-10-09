import React from 'react'
import Title from '../title'
import { Cards } from './cards'
import { useTranslations } from 'next-intl'

const AboutWork = () => {
    const t = useTranslations()
    return (
        <div className='container mx-auto my-12 flex flex-col justify-center gap-6'>
            <Title desc={t('milliy_sim_easy')} title={t('how_milliy_sim_works')} />
            <Cards />
        </div>
    )
}

export default AboutWork