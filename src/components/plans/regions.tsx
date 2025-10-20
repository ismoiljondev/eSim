import React from 'react'
import { Card, CardTitle, HoverEffect } from '../ui/card-hover-effect'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import africa from '@/media/africa_region.png'
import asia from '@/media/asia.png'
import europe from '@/media/europe.png'
import south_america from '@/media/south_america_region.png'
import north_america from '@/media/north_america_region.png'
import middle_east from '@/media/middle_east_region.png'


const Regions = () => {
    const t = useTranslations("regions");
    const RegionsData = [
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <Image width={40} height={40} src={africa} alt='africa' className="bg-white rounded-full p-1" />
                <CardTitle>{t("1")}</CardTitle>
            </Card>,

        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <Image width={40} height={40} src={asia} alt='asia' className="bg-white rounded-full p-1" />
                <CardTitle>{t("2")}</CardTitle>
            </Card>,
        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <Image width={40} height={40} src={europe} alt='europe' className="bg-white rounded-full p-1" />
                <CardTitle>{t("3")}</CardTitle>
            </Card>,
        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <Image width={40} height={40} src={north_america} alt='north_america' className="bg-white rounded-full p-1" />
                <CardTitle>{t("4")}</CardTitle>
            </Card>,
        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <Image width={40} height={40} src={south_america} alt='south_america' className="bg-white rounded-full p-1" />
                <CardTitle>{t("9")}</CardTitle>
            </Card>,
        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <Image width={40} height={40} src={middle_east} alt='middle_east' className="bg-white rounded-full p-1" />
                <CardTitle>{t("7")}</CardTitle>
            </Card>,
        },
    ]
    const tr = useTranslations();
    return (
        <div className='bg-white dark:bg-black'>
            <div className='flex flex-col justify-center'>
                <HoverEffect items={RegionsData} />
                <Button className='w-fit mx-auto'>{tr("show_more")}</Button>
            </div>
        </div>
    )
}

export default Regions