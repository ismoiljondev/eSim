import { useTranslations } from 'next-intl'
import React from 'react'

const ESimSingle = () => {
    const t = useTranslations("esim")
    return (
        <div className='container mx-auto flex flex-col justify-center my-40'>
            <h1 className='text-3xl font-medium max-lg:text-2xl max-md:text-xl'>{t("esim_plans_for", { country: "Yaponiya" })}</h1>
        </div>
    )
}

export default ESimSingle