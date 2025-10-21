import { Button } from '@/components/ui/button';
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { Clock4, Signal } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link';
import React from 'react'

const fakeData = [
    { data: "50 GB", price: "155$", old_price: "222$", days: 30 },
    { data: "25 GB", price: "99$", old_price: "140$", days: 15 },
    { data: "10 GB", price: "45$", old_price: "70$", days: 7 },
    { data: "100 GB", price: "220$", old_price: "300$", days: 45 },
    { data: "200 GB", price: "390$", old_price: "470$", days: 60 },
    { data: "500 GB", price: "700$", old_price: "900$", days: 90 },
    { data: "5 GB", price: "25$", old_price: "40$", days: 5 },
    { data: "1 TB", price: "1200$", old_price: "1500$", days: 120 },
    { data: "2 TB", price: "2000$", old_price: "2500$", days: 180 },
    { data: "750 GB", price: "950$", old_price: "1100$", days: 100 }
];

const DataUnlimited = () => {
    const t = useTranslations("esim")
    const plansData = fakeData.map((item) => ({
        content: (
            <Link href={'/esim/1/1'}>     <div className="h-full overflow-hidden bg-white dark:hover:bg-neutral-800 dark:bg-black dark:border-white/[0.2] border group-hover:border-slate-700 z-20  relative rounded-2xl max-lg:rounded-2xl max-md:rounded-xl  p-4 w-full flex justify-between flex-col gap-3">
                <div className='flex justify-between'>
                    <div className="flex flex-col justify-between gap-2">
                        <p className='text-3xl'>{item.days}</p>
                        <div className="flex gap-1 items-center">
                            <Signal />
                            <p>{t("data")}</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <Clock4 />
                            <p>{t("validity")}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end text-end">
                        <p className='text-3xl text-orange-600 '>{item.price}</p>
                        <p className='line-through text-gray-400 text-sm'>{item.old_price}</p>
                        <p className='text-2xl max-md:text-xl'>{t("unlimited")} {t("data")}</p>
                        <p className='text-2xl max-md:text-xl'>{item.days} {t("days")}</p>
                    </div>
                </div>
                <Button className='w-fit max-sm:w-full justify-self-end self-end cursor-pointer hover:bg-orange-500 bg-orange-600 text-white'>{t("buy_now")}</Button>
            </div></Link>

        )
    }));
    return (
        <> <HoverEffect items={plansData} /></>
    )
}

export default DataUnlimited