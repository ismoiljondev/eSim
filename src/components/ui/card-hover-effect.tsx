"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

import { useState } from "react";
import ReactCountryFlag from "react-country-flag";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        link: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const t = useTranslations("countries")
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <a
                    href={item?.link}
                    key={item?.link}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <ReactCountryFlag
                            countryCode={item.title}
                            svg
                            style={{ width: "2em", height: "2em" }}
                            aria-label={item.title}
                        />
                        <CardTitle>{t(item.title)}</CardTitle>
                    </Card>
                </a>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full overflow-hidden  bg-white dark:hover:bg-white dark:bg-black dark:border-white/[0.2] border border-black group-hover:border-slate-700 relative z-20 ",
                className
            )}
        >
            <div className="relative z-50 ">
                <div className="p-4 flex items-center gap-2">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("font-bold tracking-wide dark:text-zinc-100 dark:group-hover:text-black", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
