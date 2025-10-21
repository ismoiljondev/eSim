import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card-hover-effect";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconTag } from "@tabler/icons-react";
import {
    Banknote,
    CalendarDays,
    CardSim,
    CheckCircle,
    CircleCheck,
    CircleGauge,
    Clock4,
    FileText,
    Gauge,
    Globe,
    Globe2,
    Info,
    MapPinCheck,
    Signal,
    SignalHigh,
    Smartphone,
    WifiCog,
    X,
    XCircle,
} from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import ReactCountryFlag from "react-country-flag";

const SingleEsimCard = () => {
    const t = useTranslations("esim");
    const tr = useTranslations("countries");
    const item = {
        data: "50 GB",
        price: "155$",
        old_price: "222$",
        country: "Uzbekistan",
        esim_name: "Uzmobile",
        minute: 15,
        sms: 50,
        days: 30,
        details: {
            data: true,
            calls: false,
            sms: true,
            network: "5G/4G/LTE",
            ip_routing: "United Kingdom",
            speed: "Unrestricted",
            usage_tracking: "Realtime, in-app",
            activation_policy: "Package activates upon first data usage.",
            hotspot: "Available",
            top_up: "Available"
        },
    };
    return (
        <div className="my-30 container mx-auto">
            <div className="h-full overflow-hidden bg-white dark:hover:bg-neutral-800 dark:bg-black dark:border-white/[0.2] border group-hover:border-slate-700 z-20  relative rounded-2xl max-lg:rounded-2xl max-md:rounded-xl p-4 flex flex-col gap-6">
                <div className="flex gap-1 items-center">
                    <CardSim size={30} />
                    <div className="flex flex-col">
                        <p className="text-lg leading-4">{item?.country} {item?.data}</p>
                        <p className="text-base text-primary/50">{item?.esim_name}</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 w-full items-center">
                    <div className="flex  w-full justify-center gap-1  "> <p className="text-2xl max-md:text-xl max-sm:text-lg  text-right">{item.price}</p> <IconTag /></div>
                    <div className="flex  w-full justify-center   items-center gap-1  border-x-2 justify-self-center">
                        <CalendarDays />
                        <p className="text-2xl max-md:text-xl max-sm:text-lg text-center ">
                            {item.days} {t("days")}
                        </p>
                    </div>
                    <div className="flex  w-full justify-center gap-1 ">
                        <SignalHigh />
                        <p className="text-2xl max-md:text-xl max-sm:text-lg ">{item.data}</p>
                    </div>
                </div>
            </div>
            <Button className="mt-2 w-full py-3 text-xl h-auto hover:bg-orange-500 bg-orange-600 text-white cursor-pointer">
                {t("buy_now")}
            </Button>
            <div className="grid grid-cols-2 gap-3 mt-5 max-md:grid-cols-1">
                <div className="flex flex-col gap-4">
                    <p className="text-3xl font-medium">{t("details")}</p>
                    <div className="flex flex-col gap-2 rounded-xl border shadow">
                        <div className="grid grid-cols-3 py-4">
                            <div className="flex flex-col gap-1 items-center border-r max-sm:text-sm">
                                {item?.details?.data ? <CircleCheck /> : <XCircle />}
                                <p>{t("data")}</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center border-r">
                                {item?.details?.calls ? <CircleCheck /> : <XCircle />}
                                <p>{t("call")}</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center">
                                {item?.details?.sms ? <CircleCheck /> : <XCircle />}
                                <p>{t("sms")}</p>
                            </div>
                        </div>
                        <div className="flex justify-between border-t p-5">
                            <div className="flex flex-col gap-4 max-sm:text-sm">
                                <div className="flex items-center gap-3">
                                    <Signal size={25} />
                                    <div className="flex flex-col">
                                        <div className="flex gap-1 text-primary/50 font-medium">
                                            <p className="text-sm">{t("network")}</p>{" "}
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Info size={15} />
                                                </TooltipTrigger>
                                                <TooltipContent className="max-w-80 text-base font-medium">
                                                    <p>
                                                        {t("network_desc")}
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </div>
                                        <p className="font-medium">
                                            {item?.details?.network}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPinCheck size={25} />
                                    <div className="flex flex-col">
                                        <div className="flex gap-1 text-primary/50 font-medium">
                                            <p className="text-sm">{t("ip_routing")}</p>{" "}
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Info size={15} />
                                                </TooltipTrigger>
                                                <TooltipContent className="max-w-80 text-base font-medium">
                                                    <p>
                                                        {t("ip_routing_desc")}
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </div>
                                        <p className="font-medium">
                                            {item?.details?.ip_routing}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Globe size={25} />
                                    <div className="flex flex-col">
                                        <div className="flex gap-1 text-primary/50 font-medium">
                                            <p className="text-sm">{t("speed")}</p>{" "}
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Info size={15} />
                                                </TooltipTrigger>
                                                <TooltipContent className="max-w-80 text-base font-medium">
                                                    <p>
                                                        {t("speed_desc")}
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </div>
                                        <p className="font-medium">
                                            {item?.details?.speed}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CircleGauge size={25} />
                                    <div className="flex flex-col">
                                        <div className="flex gap-1 text-primary/50 font-medium">
                                            <p className="text-sm">{t("usage_tracking")}</p>{" "}

                                        </div>
                                        <p className="font-medium">
                                            {item?.details?.usage_tracking}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4  max-sm:text-sm">
                                <div className="flex items-center gap-3">
                                    <FileText size={25} />
                                    <div className="flex flex-col">
                                        <div className="flex gap-1 text-primary/50 font-medium">
                                            <p className="text-sm">{t("activation_policy")}</p>{" "}

                                        </div>
                                        <p className="font-medium">
                                            {item?.details?.activation_policy}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <WifiCog size={25} />
                                    <div className="flex flex-col">
                                        <div className="flex gap-1 text-primary/50 font-medium">
                                            <p className="text-sm">{t("hotspot")}</p>{" "}

                                        </div>
                                        <p className="font-medium">
                                            {item?.details?.hotspot}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Smartphone size={25} />
                                    <div className="flex flex-col">
                                        <div className="flex gap-1 text-primary/50 font-medium">
                                            <p className="text-sm">{t("top_up")}</p>{" "}

                                        </div>
                                        <p className="font-medium">
                                            {item?.details?.top_up}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Accordion type="single" collapsible className="border-t">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="px-4 underline-offset-0 text-xl">{t("full_product_information")}</AccordionTrigger>
                                <AccordionContent>
                                    <ul className="list-disc pl-10 space-y-1 text-lg">
                                        <li>{t("data_only_esim")}</li>
                                        <li>{t("scan_qr")}</li>
                                        <li>{t("validity_start")}</li>
                                        <li>{t("one_time_package")}</li>
                                        <li>{t("full_speed")}</li>
                                        <li>{t("connects_to_network")}</li>
                                        <li>{t("esim_compatible")}</li>
                                        <li>{t("esim_start")}</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-3xl font-medium">{t("faqs")}</p>
                    <Accordion type="multiple" className="border-t rounded-xl border shadow">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="px-4 underline-offset-0 text-xl">{t("faq1")}</AccordionTrigger>
                            <AccordionContent className="text-base p-3 font-normal">
                                {t("faq_answer1")}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="px-4 underline-offset-0 text-xl">{t("faq2")}</AccordionTrigger>
                            <AccordionContent className="text-base p-3 font-normal">
                                {t("faq_answer2")}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="px-4 underline-offset-0 text-xl">{t("faq3")}</AccordionTrigger>
                            <AccordionContent className="text-base p-3 font-normal">
                                {t("faq_answer3")}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="px-4 underline-offset-0 text-xl">{t("faq4")}</AccordionTrigger>
                            <AccordionContent className="text-base p-3 font-normal">
                                {t("faq_answer4")}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div className="flex flex-col gap-3 mt-8">
                <div className="flex flex-col gap-1">
                    <p className="text-xl font-medium">{t("destinations_networks")}</p>
                    <p className="">⚠ {t("destinations_networks_desc")}</p>
                </div>
                <div className="flex rounded-xl gap-3 items-center bg-white border shadow p-2">
                    <div className="flex gap-2 items-center border rounded-lg bg-secondary p-2 px-3">
                        <ReactCountryFlag
                            countryCode={"CN"}
                            svg
                            style={{ width: "1.5em", height: "1.5em" }}
                            aria-label={"CN"}
                        />
                        <CardTitle>{tr("CN")}</CardTitle>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleEsimCard;
