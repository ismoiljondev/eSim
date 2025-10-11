import { useTranslations } from 'next-intl'
import React from 'react'
import PlanTabs from './plans-tabs'
import { DeviceModal } from '@/components/device_compatibility'

const ESimSingle = () => {
    const t = useTranslations("esim")
    return (
        <div className='container mx-auto flex flex-col gap-10 justify-center my-40'>
            <div className='flex justify-between'>
                <h1 className='text-3xl font-medium max-lg:text-2xl max-md:text-xl'>{t("esim_plans_for", { country: "Yaponiya" })}</h1>
                <DeviceModal />
            </div>
            <PlanTabs />
        </div>
    )
}

export default ESimSingle