import React from "react";
import japan from "@/media/japan.webp";
import { Card, CardTitle, HoverEffect } from "../ui/card-hover-effect";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import Title from "../title";
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";

const Countries = () => {
    const t = useTranslations("countries");
    const tr = useTranslations();
    const CountriesData = [
        {
            content: (
                <Link href={'/esim/1'}>
                    <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                        <ReactCountryFlag
                            countryCode={"SA"}
                            svg
                            style={{ width: "2em", height: "2em" }}
                            aria-label={"SA"}
                        />
                        <CardTitle>{t("SA")}</CardTitle>
                    </Card></Link>
            ),
        },
        {
            content: (
                <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                    <ReactCountryFlag
                        countryCode={"CN"}
                        svg
                        style={{ width: "2em", height: "2em" }}
                        aria-label={"CN"}
                    />
                    <CardTitle>{t("CN")}</CardTitle>
                </Card>
            ),
        },
        {
            content: (
                <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                    <ReactCountryFlag
                        countryCode={"CN"}
                        svg
                        style={{ width: "2em", height: "2em" }}
                        aria-label={"CN"}
                    />
                    <CardTitle>{t("CN")}</CardTitle>
                </Card>
            ),
        },
        {
            content: (
                <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                    <ReactCountryFlag
                        countryCode={"CN"}
                        svg
                        style={{ width: "2em", height: "2em" }}
                        aria-label={"CN"}
                    />
                    <CardTitle>{t("CN")}</CardTitle>
                </Card>
            ),
        },
        {
            content: (
                <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                    <ReactCountryFlag
                        countryCode={"CN"}
                        svg
                        style={{ width: "2em", height: "2em" }}
                        aria-label={"CN"}
                    />
                    <CardTitle>{t("CN")}</CardTitle>
                </Card>
            ),
        },
        {
            content: (
                <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                    <ReactCountryFlag
                        countryCode={"CN"}
                        svg
                        style={{ width: "2em", height: "2em" }}
                        aria-label={"CN"}
                    />
                    <CardTitle>{t("CN")}</CardTitle>
                </Card>
            ),
        },
        {
            content: (
                <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                    <ReactCountryFlag
                        countryCode={"CN"}
                        svg
                        style={{ width: "2em", height: "2em" }}
                        aria-label={"CN"}
                    />
                    <CardTitle>{t("CN")}</CardTitle>
                </Card>
            ),
        },
        {
            content: (
                <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                    <ReactCountryFlag
                        countryCode={"CN"}
                        svg
                        style={{ width: "2em", height: "2em" }}
                        aria-label={"CN"}
                    />
                    <CardTitle>{t("CN")}</CardTitle>
                </Card>
            ),
        },
        {
            content: (
                <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                    <ReactCountryFlag
                        countryCode={"CN"}
                        svg
                        style={{ width: "2em", height: "2em" }}
                        aria-label={"CN"}
                    />
                    <CardTitle>{t("CN")}</CardTitle>
                </Card>
            ),
        },
    ];
    return (
        <div className="bg-white dark:bg-black">
            <div className="flex flex-col justify-center container mx-auto">
                <Title title={tr("travel_next")} desc={tr("popular_destinations")} />
                <HoverEffect items={CountriesData} />
                <Button className="w-fit mx-auto">{tr("show_more")}</Button>
            </div>
        </div>
    );
};

export default Countries;
