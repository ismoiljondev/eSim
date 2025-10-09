import React from 'react'
import { Card, CardTitle, HoverEffect } from '../ui/card-hover-effect'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'



const Regions = () => {
    const t = useTranslations("regions");
    const RegionsData = [
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <CardTitle>{t("1")}</CardTitle>
            </Card>,

        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <CardTitle>{t("1")}</CardTitle>
            </Card>,

        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <CardTitle>{t("1")}</CardTitle>
            </Card>,

        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <CardTitle>{t("1")}</CardTitle>
            </Card>,

        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <CardTitle>{t("1")}</CardTitle>
            </Card>,

        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <CardTitle>{t("1")}</CardTitle>
            </Card>,

        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <CardTitle>{t("1")}</CardTitle>
            </Card>,

        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <CardTitle>{t("1")}</CardTitle>
            </Card>,

        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <CardTitle>{t("1")}</CardTitle>
            </Card>,

        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <CardTitle>{t("1")}</CardTitle>
            </Card>,

        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <CardTitle>{t("1")}</CardTitle>
            </Card>,

        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <CardTitle>{t("1")}</CardTitle>
            </Card>,

        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <CardTitle>{t("1")}</CardTitle>
            </Card>,

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