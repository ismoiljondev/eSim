import React from 'react'
import { HoverEffect } from '../ui/card-hover-effect'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'



const Regions = () => {
    const t = useTranslations("regions");
    const RegionsData = [
        {
            title: t("1"),
            link: "#"
        },
        {
            title: t("2"),
            link: "#"
        },
        {
            title: t("3"),
            link: "#"
        },
        {
            title: t("4"),
            link: "#"
        },
        {
            title: t("6"),
            link: "#"
        },
        {
            title: t("7"),
            link: "#"
        },
        {
            title: t("8"),
            link: "#"
        },
        {
            title: t("9"),
            link: "#"
        },
        {
            title: t("10"),
            link: "#"
        },
        {
            title: t("11"),
            link: "#"
        },
        {
            title: t("12"),
            link: "#"
        },
    ]
    return (
        <div className='bg-white dark:bg-black'>
            <div className='flex flex-col justify-center'>
                <HoverEffect items={RegionsData} />
                <Button className='w-fit mx-auto'>{t("show_more")}</Button>
            </div>
        </div>
    )
}

export default Regions