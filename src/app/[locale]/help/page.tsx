import Title from '@/components/title'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useTranslations } from 'next-intl'
import React from 'react'
import SetUp from './set-up'
const HelpCenter = () => {
    const t = useTranslations("help")
    return (
        <div className="flex flex-col container mx-auto w-full  items-center justify-start my-30">
            <Title title={t("help_center")} desc='' className="mb-8 text-start w-full justify-start items-start border rounded-xl p-2" />
            <Tabs defaultValue="set_up" className="w-full ">
                <TabsList className="p-2 h-16">
                    <TabsTrigger className="text-lg px-4 h-full cursor-pointer bg-white dark:bg-black mx-1" value="set_up">{t("set_up")}</TabsTrigger>
                    <TabsTrigger className="text-lg px-4 h-full cursor-pointer bg-white dark:bg-black mx-1" value="troubleshooting">{t("troubleshooting")}</TabsTrigger>

                    <TabsTrigger className="text-lg px-4 h-full cursor-pointer bg-white dark:bg-black mx-1" value="device_compatibility">{t("device_compatibility")}</TabsTrigger>

                </TabsList>
                <TabsContent value="set_up"><SetUp /></TabsContent>
                <TabsContent value="troubleshooting"><></></TabsContent>
                <TabsContent value="device_compatibility"><></></TabsContent>
            </Tabs>
        </div>
    )
}

export default HelpCenter