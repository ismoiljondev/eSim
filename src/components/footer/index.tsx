import { IconBrandTelegram } from '@tabler/icons-react'
import { Mail, MessageCircle, MessageSquareCode, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const t = useTranslations()
    return (
        <div className='border-2 py-8'>
            <div className='mx-auto w-4/5'>
                <div className='flex flex-col gap-3'>
                    <div className='flex justify-between border-b mb-5 pb-5'>
                        <div className='flex flex-col gap-2 items-center'>
                            <div className='border rounded-lg p-2'>
                                <Phone />
                            </div>
                            <p>{t("phone")}</p>
                            <Link href={"tel:+998911234567"}>+998 91 123 45 67</Link>
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <div className='border rounded-lg p-2'>
                                <Mail />
                            </div>
                            <p>{t("email")}</p>
                            <Link target='_blank' href={"mailto:milliy.esim.uz@gmail.com"}>milliy.esim.uz@gmail.com</Link>
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <div className='border rounded-lg p-2'>
                                <IconBrandTelegram />
                            </div>
                            <p>{t("telegram")}</p>
                            <Link target='_blank' href={"https://t.me/milliysim"}>MilliySim</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer