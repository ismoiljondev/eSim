import { Button } from '@/components/ui/button';
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { Clock4, MessageCircle, PhoneCall } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link';
import React from 'react'

const fakeData = [
    { data: "50 GB", price: "155$", old_price: "222$", minute: 15, sms: 50, days: 30 },

];

const CallCards = () => {
    const t = useTranslations("esim")
    const plansData = fakeData.map((item) => ({
        content: (
            <Link href={'/esim/1/1'}>
                <div className="h-full overflow-hidden bg-white dark:hover:bg-neutral-800 dark:bg-black dark:border-white/[0.2] border group-hover:border-slate-700 z-20  relative rounded-2xl max-lg:rounded-2xl max-md:rounded-xl  p-4 w-full flex justify-between flex-col gap-3">
                    <div className='flex justify-between'>
                        <div className="flex flex-col justify-between gap-2">
                            <p className='text-3xl'>{item.days} {t("days")}</p>

                            <div className="flex gap-1 items-center">
                                <PhoneCall />
                                <p>{t("call")}</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <MessageCircle />
                                <p>{t("sms")}</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <Clock4 />
                                <p>{t("validity")}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <p className='text-3xl'>{item.price}</p>
                            <p className='line-through text-gray-400 text-sm'>{item.old_price}</p>
                            <p className='text-2xl'>{item.minute} {t("minutes")}</p>
                            <p className='text-2xl'>{item.sms} {t("sms")}</p>
                            <p className='text-2xl'>{item.days} {t("days")}</p>
                        </div>
                    </div>
                    <Button className='w-fit justify-self-end self-end cursor-pointer'>{t("buy_now")}</Button>
                </div>
            </Link>
        )
    }));
    return (
        <><HoverEffect items={plansData} /></>
    )
}

export default CallCards