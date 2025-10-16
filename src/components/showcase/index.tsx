"use client";
import { useTranslations } from "next-intl";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { SearchInput } from "../plans/search-input";
export function Showcase() {
    const t = useTranslations("showcase");
    const words = [
        { text: t("word1") },
        { text: t("word2") },
        { text: t("word3") },
        { text: t("word4") },
        {
            text: t("word5"),
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <div className="flex flex-col gap-3 items-center justify-center h-[40rem] max-lg:h-[30rem] max-md:h-[20rem] max-sm:h-[15rem] max-sm:mt-10 max-sm:gap-1">
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
                {t("freedom")}
            </p>
            <TypewriterEffectSmooth words={words} />
            {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                    Join now
                </button>
                <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                    Signup
                </button>
            </div> */}
            <SearchInput className="mt-5" />
        </div>
    );
}
