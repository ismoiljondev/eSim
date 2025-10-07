"use client";

import Countries from "../countries";
import Title from "../title";
import { HoverEffect } from "../ui/card-hover-effect";
import { Tabs } from "../ui/tabs";

export function Plans() {
    const tabs = [
        {
            title: "Product",
            value: "product",
            content: (
                <Countries />
            ),
        },
        {
            title: "Services",
            value: "services",
            content: (
                <Countries />
            ),
        },
        {
            title: "Playground",
            value: "playground",
            content: (
                <Countries />
            ),
        },

    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
            <Title title='travel_next' desc='popular_destinations' />
            <Tabs tabs={tabs} />
        </div>
    );
}

