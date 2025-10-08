import { IconBrandInstagram, IconBrandTelegram } from '@tabler/icons-react'
import { Mail, MessageCircle, MessageSquareCode, Phone, Plane } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const t = useTranslations()
    return (
        <div className='border-2 py-8'>
            <div className='mx-auto w-4/5'>
                <div className='flex flex-col gap-3'>
                    <div className='grid grid-cols-3 border-b mb-5 pb-5 max-lg:grid-cols-2 max-lg:gap-6 max-sm:grid-cols-1'>
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
                        <div className='flex flex-col gap-4 items-center max-lg:col-span-2 max-lg:mx-auto max-sm:col-span-1'>
                            <p className='text-xl text-center'>{t("follow_us_on")}</p>
                            <div className='flex gap-3'>
                                <Link href={'https://t.me/milliysim'} target='_blank'>
                                    <div className='border rounded-lg p-2'>
                                        <IconBrandTelegram />
                                    </div></Link>
                                <Link href={'https://www.instagram.com/milliysim/'} target='_blank'>
                                    <div className='border rounded-lg p-2'>
                                        <IconBrandInstagram />
                                    </div></Link>
                            </div>


                        </div>
                    </div>
                    <div className='flex justify-between max-lg:flex-col-reverse max-lg:gap-4 items-center'>
                        <div className='flex gap-3 max-sm:flex-col items-center'>
                            <Link className='font-medium hover:underline' href={'/privacy_policy'}>
                                {t("privacy_policy")}
                            </Link> |
                            <Link className='font-medium hover:underline' href={'/terms_conditions'}>
                                {t("terms_conditions")}
                            </Link> |
                            <Link className='font-medium hover:underline' href={'/contact_us'}>
                                {t("contact_us")}
                            </Link>
                        </div>
                        <a
                            href="/"
                            className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
                        >
                            <img
                                src="https://assets.aceternity.com/logo-dark.png"
                                alt="logo"
                                width={30}
                                height={30}
                            />
                            <span className="font-medium text-black dark:text-white text-xl">MilliySim</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer