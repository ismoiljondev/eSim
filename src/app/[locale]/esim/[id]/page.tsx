import { useTranslations } from 'next-intl'
import React from 'react'
import PlanTabs from './plans-tabs'
import { DeviceModal } from '@/components/device_compatibility'
import Steps from './steps'
import Faq from './faq'

const ESimSingle = () => {
    const t = useTranslations("esim")
    return (
        <div className='container mx-auto flex flex-col gap-10 max-md:gap-6 max-sm:gap-4 justify-center my-40'>
            <div className='flex justify-between max-sm:flex-col max-sm:gap-4'>
                <h1 className='text-3xl font-medium max-lg:text-2xl max-md:text-xl'>{t("esim_plans_for", { country: "Yaponiya" })}</h1>
                <DeviceModal />
            </div>
            <PlanTabs />
            <Steps />
            <Faq />
        </div>
    )
}

export default ESimSingle