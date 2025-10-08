import React from 'react'
import japan from '@/media/japan.webp'
import { HoverEffect } from '../ui/card-hover-effect'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'
import Title from '../title'
import ReactCountryFlag from 'react-country-flag'

export const CountriesData = [
    {
        title: "SA",
        content: <ReactCountryFlag
            countryCode={"SA"}
            svg
            style={{ width: "2em", height: "2em" }}
            aria-label={"SA"}
        />,
        link: "#"
    },
    {
        title: "CN", content: <ReactCountryFlag
            countryCode={"CN"}
            svg
            style={{ width: "2em", height: "2em" }}
            aria-label={"CN"}
        />,
        link: "#"
    },
    {
        title: "TR", content: <ReactCountryFlag
            countryCode={"TR"}
            svg
            style={{ width: "2em", height: "2em" }}
            aria-label={"TR"}
        />,
        link: "#"
    },
    {
        title: "RU", content: <ReactCountryFlag
            countryCode={"RU"}
            svg
            style={{ width: "2em", height: "2em" }}
            aria-label={"RU"}
        />,
        link: "#"
    },
    {
        title: "EG", content: <ReactCountryFlag
            countryCode={"EG"}
            svg
            style={{ width: "2em", height: "2em" }}
            aria-label={"EG"}
        />,
        link: "#"
    },
    {
        title: "VN", content: <ReactCountryFlag
            countryCode={"VN"}
            svg
            style={{ width: "2em", height: "2em" }}
            aria-label={"VN"}
        />,
        link: "#"
    },
    {
        title: "TH", content: <ReactCountryFlag
            countryCode={"TH"}
            svg
            style={{ width: "2em", height: "2em" }}
            aria-label={"TH"}
        />,
        link: "#"
    },
    {
        title: "AE", content: <ReactCountryFlag
            countryCode={"AE"}
            svg
            style={{ width: "2em", height: "2em" }}
            aria-label={"AE"}
        />,
        link: "#"
    },
    {
        title: "MY", content: <ReactCountryFlag
            countryCode={"MY"}
            svg
            style={{ width: "2em", height: "2em" }}
            aria-label={"MY"}
        />,
        link: "#"
    },
]

const Countries = () => {
    const t = useTranslations()
    return (
        <div className='bg-white dark:bg-black'>
            <div className='flex flex-col justify-center'>
                <HoverEffect items={CountriesData} />
                <Button className='w-fit mx-auto'>{t("show_more")}</Button>
            </div>
        </div>
    )
}

export default Countries