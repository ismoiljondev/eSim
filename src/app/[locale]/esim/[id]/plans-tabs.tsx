import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import DataCards from './data-cards'
import { useTranslations } from 'next-intl'
import CallCards from './call-cards'
import { Infinity, PhoneCall, Wifi } from 'lucide-react'
import DataUnlimited from './data-cards-umlimited'

const PlanTabs = () => {
    const t = useTranslations("esim")
    return (
        <>
            <Tabs defaultValue="data" className="w-full">
                <TabsList className="p-1 h-11">
                    <TabsTrigger className="text-lg p-2 h-9 cursor-pointer" value="unlimited"><Infinity /> {t("unlimited")}</TabsTrigger>
                    <TabsTrigger className="text-lg p-2 h-9 cursor-pointer" value="data"><Wifi /> {t("data")}</TabsTrigger>
                    <TabsTrigger className="text-lg p-2 h-9 cursor-pointer" value="call"><PhoneCall /> {t("call")}</TabsTrigger>
                </TabsList>
                <TabsContent value="unlimited"><DataUnlimited /></TabsContent>
                <TabsContent value="data"><DataCards /></TabsContent>
                <TabsContent value="call"><CallCards /></TabsContent>
            </Tabs></>
    )
}

export default PlanTabs