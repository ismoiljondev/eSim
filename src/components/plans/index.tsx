"use client";

import { useTranslations } from "next-intl";
import Title from "../title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Countries from "./countries";
import { SearchInput } from "./search-input";
import Regions from "./regions";

export function Plans() {
    const t = useTranslations("esim")
    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col container mx-auto w-full  items-center justify-start my-40">
            <Title title={t("select_destination")} desc='' className="mb-8" />
            <SearchInput />
            <Tabs defaultValue="country" className="w-full">
                <TabsList className="mx-auto p-1 h-11">
                    <TabsTrigger className="text-lg p-2 h-9 cursor-pointer" value="country">{t("country")}</TabsTrigger>
                    <TabsTrigger className="text-lg p-2 h-9 cursor-pointer" value="regions">{t("regions")}</TabsTrigger>
                    <TabsTrigger className="text-lg p-2 h-9 cursor-pointer" value="global">{t("global")}</TabsTrigger>
                </TabsList>
                <TabsContent value="country"><Countries /></TabsContent>
                <TabsContent value="regions"><Regions /></TabsContent>
                <TabsContent value="global"><Countries /></TabsContent>
            </Tabs>
        </div>
    );
}

