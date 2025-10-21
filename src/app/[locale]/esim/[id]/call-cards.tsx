import { Button } from '@/components/ui/button';
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { IconTag } from '@tabler/icons-react';
import { Clock4, MessageCircle, PhoneCall, Signal } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link';
import React from 'react'

const fakeData = [
    { data: "50 GB", price: "155$", old_price: "222$", minute: 15, sms: 50, days: 30 },
    { data: "20 GB", price: "55$", old_price: "222$", minute: 35, sms: 90, days: 15 },
    { data: "30 GB", price: "35$", old_price: "222$", minute: 55, sms: 40, days: 7 },
    { data: "10 GB", price: "100$", old_price: "222$", minute: 85, sms: 30, days: 5 },

];

const CallCards = () => {
    const t = useTranslations("esim")
    const plansData = fakeData.map((item) => ({
        content: (
            <Link href={'/esim/1/1'}>
                <div className="h-full overflow-hidden bg-white dark:hover:bg-neutral-800 dark:bg-black dark:border-white/[0.2] border group-hover:border-slate-700 z-20  relative rounded-2xl max-lg:rounded-2xl max-md:rounded-xl  p-4 w-full flex justify-between flex-col gap-3">
                    <div className="flex flex-col justify-between w-full gap-1">
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-1'>
                                <IconTag /> <p>{t("price")}</p>
                            </div>   <div className='flex flex-col items-end'>
                                <p className='text-3xl text-orange-600 '>{item.price}</p>
                                <p className='line-through text-gray-400 text-sm'>{item.old_price}</p>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className="flex gap-1 items-center">
                                <Signal />
                                <p>{t("data")}</p>
                            </div>
                            <p className='text-2xl max-md:text-xl text-end'>{item?.data}</p>
                        </div>
                        <div className='flex justify-between'>
                            <div className="flex gap-1 items-center">
                                <PhoneCall />
                                <p>{t("call")}</p>
                            </div>

                            <p className='text-2xl'>{item.minute} {t("minutes")}</p>
                        </div>

                        <div className='flex justify-between'>
                            <div className="flex gap-1 items-center">
                                <MessageCircle />
                                <p>{t("sms")}</p>
                            </div>

                            <p className='text-2xl'>{item.sms} {t("sms")}</p>
                        </div>    <div className='flex justify-between'>
                            <div className="flex gap-1 items-center">
                                <Clock4 />
                                <p>{t("validity")}</p>
                            </div>
                            <p className='text-2xl max-md:text-xl'>{item.days} {t("days")}</p>

                        </div>
                    </div>
                    <Button className='w-fit max-sm:w-full justify-self-end self-end cursor-pointer hover:bg-orange-500 bg-orange-600 text-white'>{t("buy_now")}</Button>
                </div>
            </Link>
        )
    }));
    return (
        <><HoverEffect items={plansData} /></>
    )
}

export default CallCards