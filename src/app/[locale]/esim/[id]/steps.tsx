import Title from '@/components/title';
import { IconDeviceDesktopAnalytics, IconNumber1, IconNumber2, IconNumber3, IconUserDollar, IconWorldPin } from '@tabler/icons-react';
import { useTranslations } from 'next-intl'
import React from 'react'

const Steps = () => {
    const t = useTranslations("steps");

    return (
        <div className='flex flex-col gap-4'>
            <Title title={t("title")} desc='' className='text-start justify-start items-start' />
            <div className='grid grid-cols-3 gap-6 max-md:grid-cols-1'>
                <div className='relative flex flex-col items-center text-center gap-2 border rounded-xl p-3 hover:cursor-pointer hover:scale-110 duration-800'>
                    <div className='absolute top-3 left-3 border rounded-lg p-1 hover:bg-orange-500 bg-orange-600 text-white'><IconNumber1 strokeWidth={1} size={30} /></div>
                    <div className='flex flex-col mt-10'>
                        <p className='text-xl font-medium'>{t("step1_title")}</p>
                        <p className='text-sm'>{t("step1_desc")}</p>
                    </div>
                </div>
                <div className='relative flex flex-col items-center text-center gap-2 border rounded-xl p-3 hover:cursor-pointer hover:scale-110 duration-800'>
                    <div className='absolute top-3 left-3 border rounded-lg p-1 hover:bg-orange-500 bg-orange-600 text-white'><IconNumber2 strokeWidth={1} size={30} /></div>
                    <div className='flex flex-col mt-10'>
                        <p className='text-xl font-medium'>{t("step2_title")}</p>
                        <p className='text-sm'>{t("step2_desc")}</p>
                    </div>
                </div>
                <div className='relative flex flex-col items-center text-center gap-2 border rounded-xl p-3 hover:cursor-pointer hover:scale-110 duration-800'>
                    <div className='absolute top-3 left-3 border rounded-lg p-1 hover:bg-orange-500 bg-orange-600 text-white'><IconNumber3 strokeWidth={1} size={30} /></div>
                    <div className='flex flex-col mt-10'>
                        <p className='text-xl font-medium'>{t("step3_title")}</p>
                        <p className='text-sm'>{t("step3_desc")}</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Steps