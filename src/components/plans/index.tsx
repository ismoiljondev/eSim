"use client";

import { useTranslations } from "next-intl";
import Title from "../title";
import { Tabs } from "../ui/tabs";
import Countries from "./countries";
import { SearchInput } from "./search-input";

export function Plans() {
    const t = useTranslations("esim")
    const tabs = [
        {
            title: t("country"),
            value: "country",
            content: (
                <Countries />
            ),
        },
        {
            title: t("regions"),
            value: "regions",
            content: (
                <Countries />
            ),
        },
        {
            title: t("global"),
            value: "global",
            content: (
                <Countries />
            ),
        },

    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col container mx-auto w-full  items-center justify-start my-40">
            <Title title={t("select_destination")} desc='' className="mb-8" />
            <SearchInput />
            <Tabs tabs={tabs} />
        </div>
    );
}

