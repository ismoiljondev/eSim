import Title from '@/components/title'
import { IconBrandTelegram, IconMail, IconZoomQuestion } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

const Aboutontact = () => {
    const t = useTranslations("contact")
    return (
        <div className='flex flex-col gap-5'>
            <Title desc={t("subtitle")} title={t("title")} className='justify-start items-start' />
            <div className='flex flex-col gap-5'>
                <div className='flex gap-5'>
                    <div className='border-2 rounded-xl p-1 w-fit h-fit aspect-square'>
                        <IconBrandTelegram className='text-primary/70' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col'>
                            <p className='text-lg font-medium'>{t("telegram_title")}</p>
                            <p>{t("telegram_desc")}</p>
                        </div>
                        <Link href={"#"}>➡ {t("telegram_button")}</Link>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='border-2 rounded-xl p-1 w-fit h-fit aspect-square'>
                        <IconMail className='text-primary/70' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col'>
                            <p className='text-lg font-medium'>{t("email_title")}</p>
                            <p>{t("email_desc")}</p>
                        </div>
                        <Link href={"mailto:support@milliy.esim.uz@gmail.com"}>📧 support@milliy.esim.uz@gmail.com</Link>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='border-2 rounded-xl p-1 w-fit h-fit aspect-square'>
                        <IconZoomQuestion className='text-primary/70' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col'>
                            <p className='text-lg font-medium'>{t("faq_title")}</p>
                            <p>{t("faq_desc")}</p>
                        </div>
                        <Link href={"#"}>➡ {t("faq_button")}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutontact