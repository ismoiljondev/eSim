import React from 'react'
import japan from '@/media/japan.webp'
import { HoverEffect } from '../ui/card-hover-effect'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'
import Title from '../title'

const CountriesData = [
    {
        title: "SA",
        link: "#"
    },
    {
        title: "CN",
        link: "#"
    },
    {
        title: "TR",
        link: "#"
    },
    {
        title: "RU",
        link: "#"
    },
    {
        title: "EG",
        link: "#"
    },
    {
        title: "VN",
        link: "#"
    },
    {
        title: "TH",
        link: "#"
    },
    {
        title: "AE",
        link: "#"
    },
    {
        title: "MY",
        link: "#"
    },
]

const Countries = () => {
    const t = useTranslations()
    return (
        <div className='bg-white dark:bg-black'>
            <div className='flex flex-col container mx-auto'>
                <Title title='travel_next' desc='popular_destinations' />
                <HoverEffect items={CountriesData} />
                <Button className='w-fit mx-auto'>{t("show_more")}</Button>
            </div>
        </div>
    )
}

export default Countries