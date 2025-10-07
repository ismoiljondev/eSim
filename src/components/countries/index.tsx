import React from 'react'
import japan from '@/media/japan.webp'
import { HoverEffect } from '../ui/card-hover-effect'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'
import Title from '../title'
const CountriesData = [
    {
        title: "japan",
        imgUrl: japan,
        link: "#"
    },
    {
        title: "japan",
        imgUrl: japan,
        link: "#"
    },
    {
        title: "japan",
        imgUrl: japan,
        link: "#"
    },
    {
        title: "japan",
        imgUrl: japan,
        link: "#"
    },
    {
        title: "japan",
        imgUrl: japan,
        link: "#"
    },
]

const Countries = () => {
    const t = useTranslations()
    return (
        <div className='bg-white dark:bg-black'>
            <HoverEffect items={CountriesData} />
            <Button className='w-fit mx-auto'>{t("show_more")}</Button>
        </div>
    )
}

export default Countries