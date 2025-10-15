import Title from '@/components/title';
import { IconDeviceDesktopAnalytics, IconUserDollar, IconWorldPin } from '@tabler/icons-react';
import { useTranslations } from 'next-intl'
import React from 'react'

const Benefits = () => {
    const t = useTranslations("partnership");

    return (
        <div className='flex flex-col gap-4'>
            <Title title={t("benefits_title")} desc='' className='text-start justify-start items-start' />
            <div className='grid grid-cols-3 gap-3'>
                <div className='flex flex-col items-center text-center gap-2 border rounded-xl p-3'>
                    <IconWorldPin strokeWidth={1} size={70} />
                    <p className='text-xl font-medium'>{t("benefit_1_title")}</p>
                    <p className='text-sm'>{t("benefit_1_desc")}</p>
                </div>
                <div className='flex flex-col items-center text-center gap-2 border rounded-xl p-3'>
                    <IconUserDollar strokeWidth={1} size={70} />
                    <p className='text-xl font-medium'>{t("benefit_2_title")}</p>
                    <p className='text-sm'>{t("benefit_2_desc")}</p>
                </div>
                <div className='flex flex-col items-center text-center gap-2 border rounded-xl p-3'>
                    <IconDeviceDesktopAnalytics strokeWidth={1} size={70} />
                    <p className='text-xl font-medium'>{t("benefit_3_title")}</p>
                    <p className='text-sm'>{t("benefit_3_desc")}</p>
                </div>
            </div>
        </div>
    )
}

export default Benefits