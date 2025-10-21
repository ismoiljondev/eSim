"use client";

import { useTranslations } from "next-intl";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { cn } from "@/lib/utils";


type Props = {
    className?: string
}

export function SearchInput({ className }: Props) {
    const t = useTranslations("countries")
    const placeholders = [
        t("search_destination"),
        t("SA"),
        t("CN"),
        t("RU"),
        t("EG"),
        t("VN"),

    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (
        <div className={cn(`mb-4 max-md:w-4/5 w-full`, className)}>
            {/* <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
                Ask Aceternity UI Anything
            </h2> */}
            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}

            />
        </div>
    );
}
