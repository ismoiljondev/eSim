import Title from '@/components/title'
import { useTranslations } from 'next-intl'
import React from 'react'
import Benefits from './benefits'
import Image from 'next/image'
import partnerships from '@/media/partnerships.png'
import why_esim from '@/media/monitoring.png'
import GetInTouch from './get-in-touch'
const Partnership = () => {
    const t = useTranslations("partnership")
    return (
        <div className="flex flex-col container mx-auto w-full  items-center justify-start my-30">
            <div className='grid grid-cols-2 gap-2 max-md:hidden items-center justify-between'>
                <Title title={t("partners_title")} desc={t("partners_description")} className="justify-start items-start text-start" />
                <Image src={partnerships} alt='partnerships' className='w-4/5 justify-self-end' />
            </div>
            <div className='hidden gap-2 max-md:flex max-md:flex-col items-center justify-between'>
                <Title title={t("partners_title")} desc={""} className="justify-start items-start text-start" />
                <Image src={partnerships} alt='partnerships' className='w-4/5 justify-self-end' />
                <Title title={""} desc={t("partners_description")} className="justify-start items-start text-start" />
            </div>
            <div className='grid grid-cols-2 gap-2 my-10 items-center max-md:flex max-md:flex-col'>
                <Image src={why_esim} alt='partnerships' className='justify-self-start' />
                <div>
                    <Title title={t("why_partner_title")} desc="" className="justify-end items-enjustify-end text-start" />
                    <Title title="" desc={`- ${t("why_partner_1")}`} className="justify-start items-start text-start" />
                    <Title title="" desc={`- ${t("why_partner_2")}`} className="justify-start items-start text-start" />
                    <Title title="" desc={`- ${t("why_partner_3")}`} className="justify-start items-start text-start" />
                </div>
            </div>
            <Benefits />
            <GetInTouch />
        </div>
    )
}

export default Partnership