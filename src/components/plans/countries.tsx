import React from 'react'
import { Card, CardTitle, HoverEffect } from '../ui/card-hover-effect'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'
import ReactCountryFlag from 'react-country-flag'

const Countries = () => {
    const t = useTranslations("countries"); const tr = useTranslations();

    const CountriesData = [
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <ReactCountryFlag
                    countryCode={"SA"}
                    svg
                    style={{ width: "2em", height: "2em" }}
                    aria-label={"SA"}
                />
                <CardTitle>{t("SA")}</CardTitle>
            </Card>,
        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <ReactCountryFlag
                    countryCode={"CN"}
                    svg
                    style={{ width: "2em", height: "2em" }}
                    aria-label={"CN"}
                />
                <CardTitle>{t("CN")}</CardTitle>
            </Card>,
        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <ReactCountryFlag
                    countryCode={"CN"}
                    svg
                    style={{ width: "2em", height: "2em" }}
                    aria-label={"CN"}
                />
                <CardTitle>{t("CN")}</CardTitle>
            </Card>,
        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <ReactCountryFlag
                    countryCode={"CN"}
                    svg
                    style={{ width: "2em", height: "2em" }}
                    aria-label={"CN"}
                />
                <CardTitle>{t("CN")}</CardTitle>
            </Card>,
        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <ReactCountryFlag
                    countryCode={"CN"}
                    svg
                    style={{ width: "2em", height: "2em" }}
                    aria-label={"CN"}
                />
                <CardTitle>{t("CN")}</CardTitle>
            </Card>,
        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <ReactCountryFlag
                    countryCode={"CN"}
                    svg
                    style={{ width: "2em", height: "2em" }}
                    aria-label={"CN"}
                />
                <CardTitle>{t("CN")}</CardTitle>
            </Card>,
        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <ReactCountryFlag
                    countryCode={"CN"}
                    svg
                    style={{ width: "2em", height: "2em" }}
                    aria-label={"CN"}
                />
                <CardTitle>{t("CN")}</CardTitle>
            </Card>,
        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <ReactCountryFlag
                    countryCode={"CN"}
                    svg
                    style={{ width: "2em", height: "2em" }}
                    aria-label={"CN"}
                />
                <CardTitle>{t("CN")}</CardTitle>
            </Card>,
        },
        {
            content: <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                <ReactCountryFlag
                    countryCode={"CN"}
                    svg
                    style={{ width: "2em", height: "2em" }}
                    aria-label={"CN"}
                />
                <CardTitle>{t("CN")}</CardTitle>
            </Card>,
        },

    ]
    return (
        <div className='bg-white dark:bg-black'>
            <div className='flex flex-col justify-center'>
                <HoverEffect items={CountriesData} />
                <Button className='w-fit mx-auto'>{tr("show_more")}</Button>
            </div>
        </div>
    )
}

export default Countries