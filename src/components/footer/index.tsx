import { IconBrandInstagram, IconBrandTelegram } from '@tabler/icons-react'
import { Mail, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import uzcard from '@/media/Uzcard_Logo_old.png'
import humo from '@/media/Humo.png'
import visa from '@/media/visa.png'
import master from '@/media/mastercard.png'
const Footer = () => {
    const t = useTranslations()
    return (
        <div className='border-t-2 py-8 max-md:py-6 max-sm:py-3'>
            <div className='mx-auto w-4/5'>
                <div className='flex flex-col gap-3 max-sm:gap-2'>
                    <div className='grid grid-cols-3 border-b mb-5 max-md:mb-3 max-sm:mb-2 pb-5 max-lg:grid-cols-2 max-lg:gap-6 max-sm:grid-cols-1'>
                        <div className='flex flex-col gap-2 items-center'>
                            <div className='border rounded-lg p-2 border-gray-600'>
                                <Phone className="h-4 w-4 text-black dark:text-neutral-400" />
                            </div>
                            <p>{t("phone")}</p>
                            <Link href={"tel:+998911234567"}>+998 91 123 45 67</Link>
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <div className='border rounded-lg p-2 border-gray-600'>
                                <Mail className="h-4 w-4 text-black dark:text-neutral-400" />
                            </div>
                            <p>{t("email")}</p>
                            <Link target='_blank' href={"mailto:milliy.esim.uz@gmail.com"}>milliy.esim.uz@gmail.com</Link>
                        </div>
                        <div className='flex flex-col gap-4 items-center max-lg:col-span-2 max-lg:mx-auto max-sm:col-span-1'>
                            <p className='text-xl text-center'>{t("follow_us_on")}:</p>
                            <div className='flex gap-3'>
                                <Link href={'https://t.me/milliysim'} target='_blank'>
                                    <div className='border rounded-lg p-2 border-gray-600'>
                                        <IconBrandTelegram className="h-4 w-4 text-black dark:text-neutral-400" />
                                    </div></Link>
                                <Link href={'https://www.instagram.com/milliysim/'} target='_blank'>
                                    <div className='border rounded-lg p-2 border-gray-600'>
                                        <IconBrandInstagram className="h-4 w-4 text-black dark:text-neutral-400" />
                                    </div></Link>
                            </div>


                        </div>
                    </div>
                    <div className='flex justify-between max-lg:flex-col-reverse max-lg:gap-4 max-sm:gap-1 items-center'>
                        <div className='flex gap-3 max-sm:flex-col items-center'>
                            <Link className='font-medium hover:underline' href={'/privacy_policy'}>
                                {t("privacy_policy")}
                            </Link>
                            <Link className='font-medium hover:underline' href={'/terms_conditions'}>
                                {t("terms_conditions")}
                            </Link>
                            <Link className='font-medium hover:underline' href={'/contact_us'}>
                                {t("contact_us")}
                            </Link>
                        </div>
                        <div className='flex items-center'>
                            <Image width={60} src={uzcard} alt='uzcard' className='-mr-1' />
                            <Image width={60} src={humo} alt='humo' />
                            <Image width={60} src={visa} alt='visa' className='mr-2' />
                            <Image width={60} height={30} src={master} alt='master' />
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