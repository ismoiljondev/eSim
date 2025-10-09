"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { ReactNode, useState } from "react";
import ReactCountryFlag from "react-country-flag";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        content?: ReactNode
        link: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10 max-md:py-3",
                className
            )}
        >
            {items.map((item, idx) => (
                <Link
                    href={item?.link}
                    key={item?.link}
                    className="relative group block p-2 h-full w-full max-sm:p-1"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl max-lg:rounded-2xl max-md:rounded-xl"
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
                    <Card className="rounded-2xl max-lg:rounded-2xl max-md:rounded-xl border">
                        <>{item?.content}
                        </>
                        <CardTitle>{item.title}</CardTitle>
                    </Card>
                </Link>
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
                "rounded-2xl h-full w-full overflow-hidden bg-white dark:hover:bg-neutral-800 dark:bg-black dark:border-white/[0.2] border group-hover:border-slate-700 relative z-20 ",
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
        <h4 className={cn("font-bold tracking-wide  dark:text-zinc-100 dark:group-hover:text-white", className)}>
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
