"use client";

import { useTranslations } from "next-intl";
import Title from "../title";
import { Tabs } from "../ui/tabs";
import Countries from "./countries";

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
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col container mx-auto w-full  items-start justify-start my-40">
            {/* <Title title='travel_next' desc='popular_destinations' /> */}
            <Tabs tabs={tabs} />
        </div>
    );
}

