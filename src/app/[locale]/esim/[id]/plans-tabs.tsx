import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import DataCards from './data-cards'
import { useTranslations } from 'next-intl'

const PlanTabs = () => {
    const t = useTranslations("esim")
    return (
        <>
            <Tabs defaultValue="data" className="w-full">
                <TabsList className="p-1 h-11">
                    <TabsTrigger className="text-lg p-2 h-9 cursor-pointer" value="data">{t("data")}</TabsTrigger>
                    <TabsTrigger className="text-lg p-2 h-9 cursor-pointer" value="call">{t("call")}</TabsTrigger>
                </TabsList>
                <TabsContent value="data"><DataCards /></TabsContent>
                <TabsContent value="call"><DataCards /></TabsContent>
            </Tabs></>
    )
}

export default PlanTabs