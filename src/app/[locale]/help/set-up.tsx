import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useTranslations } from 'next-intl'
import React from 'react'

const SetUp = () => {
    const t = useTranslations("help")
    return (
        <Tabs defaultValue="iOS" className="w-full mt-3">
            <TabsList className="p-2 h-11 mx-auto">
                <TabsTrigger className="text-lg px-3 h-full rounded-md cursor-pointer bg-white dark:bg-black mx-1" value="iOS">iOS</TabsTrigger>
                <TabsTrigger className="text-lg px-3 h-full rounded-md cursor-pointer bg-white dark:bg-black mx-1" value="Android">Android</TabsTrigger>
            </TabsList>
            <TabsContent value="iOS"><></></TabsContent>
            <TabsContent value="Android"><></></TabsContent>
        </Tabs>
    )
}

export default SetUp