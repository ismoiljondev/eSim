"use client"

import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image"
import { useTranslations } from "next-intl"

type Props = {
    data: {
        image: any,
        title: string
    }[]
}

export function SetUpCarousel({ data }: Props) {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    const t = useTranslations("help")
    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className="mx-auto max-w-xs mt-4">
            <Carousel setApi={setApi} className="w-full !pb-0">
                <CarouselContent className="!pb-0 !mb-0">
                    {data.map((item, index) => (
                        <CarouselItem key={index} className="">
                            <Image className="rounded-4xl" alt="image" src={item?.image} />
                            <p className="text-center font-medium text-lg mt-2 ">{item?.title}</p>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="text-muted-foreground text-center text-xl !mt-0">
                {t("step_of", { current: current, total: count })}
            </div>
        </div>
    )
}
