import React from 'react'
import { HoverEffect } from '../ui/card-hover-effect'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'
import ReactCountryFlag from 'react-country-flag'

const Countries = () => {
    const t = useTranslations("countries"); const tr = useTranslations();

    const CountriesData = [
        {
            title: t("SA"),
            content: <ReactCountryFlag
                countryCode={"SA"}
                svg
                style={{ width: "2em", height: "2em" }}
                aria-label={"SA"}
            />,
            link: "#"
        },
        {
            title: t("CN"), content: <ReactCountryFlag
                countryCode={"CN"}
                svg
                style={{ width: "2em", height: "2em" }}
                aria-label={"CN"}
            />,
            link: "#"
        },
        {
            title: t("TR"), content: <ReactCountryFlag
                countryCode={"TR"}
                svg
                style={{ width: "2em", height: "2em" }}
                aria-label={"TR"}
            />,
            link: "#"
        },
        {
            title: t("RU"), content: <ReactCountryFlag
                countryCode={"RU"}
                svg
                style={{ width: "2em", height: "2em" }}
                aria-label={"RU"}
            />,
            link: "#"
        },
        {
            title: t("EG"), content: <ReactCountryFlag
                countryCode={"EG"}
                svg
                style={{ width: "2em", height: "2em" }}
                aria-label={"EG"}
            />,
            link: "#"
        },
        {
            title: t("VN"), content: <ReactCountryFlag
                countryCode={"VN"}
                svg
                style={{ width: "2em", height: "2em" }}
                aria-label={"VN"}
            />,
            link: "#"
        },
        {
            title: t("TH"), content: <ReactCountryFlag
                countryCode={"TH"}
                svg
                style={{ width: "2em", height: "2em" }}
                aria-label={"TH"}
            />,
            link: "#"
        },
        {
            title: t("AE"), content: <ReactCountryFlag
                countryCode={"AE"}
                svg
                style={{ width: "2em", height: "2em" }}
                aria-label={"AE"}
            />,
            link: "#"
        },
        {
            title: t("MY"), content: <ReactCountryFlag
                countryCode={"MY"}
                svg
                style={{ width: "2em", height: "2em" }}
                aria-label={"MY"}
            />,
            link: "#"
        },
    ]
    return (
        <div className='bg-white dark:bg-black'>
            <div className='flex flex-col justify-center'>
                <HoverEffect items={CountriesData} />
                <Button className='w-fit mx-auto'>{tr("show_more")}</Button>
            </div>
        </div>
    )
}

export default Countries