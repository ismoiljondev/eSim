import Title from '@/components/title'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useTranslations } from 'next-intl'
import React from 'react'
import SetUp from './set-up'
import Troubleshooting from './troubleshooting'
import Models from '@/components/device_compatibility/models'
import { CardSim, Settings, Settings2, Smartphone } from 'lucide-react'
const HelpCenter = () => {
    const t = useTranslations("help");
    const tmodel = useTranslations("device-modal")
    return (
        <div className="flex flex-col container mx-auto w-full  items-center justify-start my-30">
            <Title title={t("help_center")} desc='' className="mb-8 text-start w-full justify-start items-start border rounded-xl p-2 max-md:items-center max-md:text-center" />
            <Tabs defaultValue="set_up" className="w-full ">
                <TabsList className="p-2 h-16 max-md:flex max-md:flex-col max-md:h-auto max-md:w-full max-md:gap-2">
                    <TabsTrigger className="text-lg px-4 h-full max-md:w-full cursor-pointer bg-white dark:bg-black mx-1" value="set_up"><CardSim /> {t("set_up")}</TabsTrigger>
                    <TabsTrigger className="text-lg px-4 h-full max-md:w-full cursor-pointer bg-white dark:bg-black mx-1" value="troubleshooting"><Settings /> {t("troubleshooting")}</TabsTrigger>

                    <TabsTrigger className="text-lg px-4 h-full max-md:w-full cursor-pointer bg-white dark:bg-black mx-1" value="device_compatibility"><Smartphone /> {t("device_compatibility")}</TabsTrigger>

                </TabsList>
                <TabsContent value="set_up"><SetUp /></TabsContent>
                <TabsContent value="troubleshooting"><Troubleshooting /></TabsContent>
                <TabsContent value="device_compatibility"> <p className="text-xl font-medium">{tmodel("compatible_device_search")}</p>
                    <p>{tmodel("compatible_device_search_desc")}</p>
                    <ol className="pl-3 list-decimal text-destructive font-medium">
                        <li>{tmodel("locked_devices")}</li>
                        <li>{tmodel("china_devices")}</li>
                    </ol>
                    <p className="text-2xl font-medium text-center">{tmodel("or")}</p>
                    <Models />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default HelpCenter