import Title from '@/components/title'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import mission from '@/media/mission.png'
import values from '@/media/values.png'
import story from '@/media/story.png'
import choose from '@/media/choose-milliysim.png'
import { Button } from '@/components/ui/button'
import { IconCirclesRelation } from '@tabler/icons-react'
import Link from 'next/link'
const AboutUs = () => {
    const t = useTranslations("about")
    return (
        <div className="flex flex-col gap-10 container mx-auto w-full  items-center justify-start my-30">
            <div className='grid grid-cols-2 gap-2 items-center justify-between'>
                <div>
                    <Title title={t("title")} desc="" className="justify-start items-start text-start" />
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-[clamp(20px,calc(20px+8*(100vw-350px)/1650),28px)] font-bold'>{t("subtitle")}</h2>
                        <p className='max-sm:text-base'>{t("description")}</p>

                    </div>
                </div>
                {/* <Image src={partnerships} alt='partnerships' className='w-4/5 justify-self-end' /> */}
                <div>

                </div>
            </div>
            <div className='grid grid-cols-2 gap-2 items-center justify-between'>
                <Image src={mission} alt='partnerships' className='w-4/5 justify-self-start' />
                <div className='flex flex-col gap-2'>
                    <h2 className='text-[clamp(24px,calc(24px+8*(100vw-350px)/1650),40px)] font-bold'>{t("mission_title")}</h2>
                    <p className='max-sm:text-base text-lg'>{t("mission_desc")}</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2 items-center justify-between'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-[clamp(24px,calc(24px+8*(100vw-350px)/1650),40px)] font-bold'>{t("values_title")}</h2>
                    <p className='max-sm:text-base text-lg'>{t("values.freedom")}</p>
                    <p className='max-sm:text-base text-lg'>{t("values.convenience")}</p>
                    <p className='max-sm:text-base text-lg'>{t("values.reliability")}</p>
                    <p className='max-sm:text-base text-lg'>{t("values.innovation")}</p>
                </div>
                <Image src={values} alt='partnerships' className='w-4/5 justify-self-end' />
            </div>
            <div className='grid grid-cols-2 gap-2 items-center justify-between'>
                <Image src={choose} alt='partnerships' className='w-4/5 justify-self-start' />
                <div className='flex flex-col gap-2 justify-self-end'>
                    <h2 className='text-[clamp(24px,calc(24px+8*(100vw-350px)/1650),40px)] font-bold'>{t("why_choose_title")}</h2>
                    <p className='max-sm:text-base text-lg'>{t("why_choose.coverage")}</p>
                    <p className='max-sm:text-base text-lg'>{t("why_choose.activation")}</p>
                    <p className='max-sm:text-base text-lg'>{t("why_choose.no_roaming")}</p>
                    <p className='max-sm:text-base text-lg'>{t("why_choose.flexible_plans")}</p>
                    <p className='max-sm:text-base text-lg'>{t("why_choose.support")}</p>
                </div>

            </div>
            <div className='grid grid-cols-2 gap-2 items-center justify-between'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-[clamp(24px,calc(24px+8*(100vw-350px)/1650),40px)] font-bold'>{t("story_title")}</h2>
                    <p className='max-sm:text-base text-lg'>{t("story_desc")}</p>
                </div>
                <Image src={story} alt='partnerships' className='w-4/5 justify-self-end' />
            </div>
            <div className='border rounded-xl p-4 flex justify-between items-center w-full bg-primary/20'>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-end gap-1'>
                        <p className='text-2xl font-medium'>{t("join_us_title")}</p> <IconCirclesRelation />
                    </div>
                    <p>{t("join_us_desc")}</p>
                </div>
                <Link href={"/esim"} className='cursor-pointer'><Button>
                    {t("activate_esim")}
                </Button></Link>
            </div>
        </div>
    )
}

export default AboutUs