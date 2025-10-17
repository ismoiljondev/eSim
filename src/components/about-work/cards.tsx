"use client";

import { AirplayIcon, Bot, Box, Clock12, Clock7, FastForwardIcon, Globe, GlobeLock, Lock, Plane, Search, Settings, Sparkles, Timer, TimerResetIcon } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useTranslations } from "next-intl";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
    ssr: false,
});

export function Cards() {
    const t = useTranslations("about_us");
    const globeConfig = {
        pointSize: 4,
        globeColor: "#062056",
        showAtmosphere: true,
        atmosphereColor: "#FFFFFF",
        atmosphereAltitude: 0.1,
        emissive: "#062056",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.7)",
        ambientLight: "#38bdf8",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
    };
    const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
    const sampleArcs = [
        {
            order: 1,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -22.9068,
            endLng: -43.1729,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 1,
            startLat: 28.6139,
            startLng: 77.209,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 1,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -1.303396,
            endLng: 36.852443,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: -15.785493,
            startLng: -47.909029,
            endLat: 36.162809,
            endLng: -115.119411,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 3,
            startLat: -33.8688,
            startLng: 151.2093,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 3,
            startLat: 21.3099,
            startLng: -157.8581,
            endLat: 40.7128,
            endLng: -74.006,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 3,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 4,
            startLat: 11.986597,
            startLng: 8.571831,
            endLat: -15.595412,
            endLng: -56.05918,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 4,
            startLat: -34.6037,
            startLng: -58.3816,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 4,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 48.8566,
            endLng: -2.3522,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 5,
            startLat: 14.5995,
            startLng: 120.9842,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 5,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: -33.8688,
            endLng: 151.2093,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 5,
            startLat: 34.0522,
            startLng: -118.2437,
            endLat: 48.8566,
            endLng: -2.3522,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 6,
            startLat: -15.432563,
            startLng: 28.315853,
            endLat: 1.094136,
            endLng: -63.34546,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 6,
            startLat: 37.5665,
            startLng: 126.978,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 6,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 7,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -15.595412,
            endLng: -56.05918,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 7,
            startLat: 48.8566,
            startLng: -2.3522,
            endLat: 52.52,
            endLng: 13.405,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 7,
            startLat: 52.52,
            startLng: 13.405,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 8,
            startLat: -8.833221,
            startLng: 13.264837,
            endLat: -33.936138,
            endLng: 18.436529,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 8,
            startLat: 49.2827,
            startLng: -123.1207,
            endLat: 52.3676,
            endLng: 4.9041,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 8,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: 40.7128,
            endLng: -74.006,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 9,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 9,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: -22.9068,
            endLng: -43.1729,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 9,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: -34.6037,
            endLng: -58.3816,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 10,
            startLat: -22.9068,
            startLng: -43.1729,
            endLat: 28.6139,
            endLng: 77.209,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 10,
            startLat: 34.0522,
            startLng: -118.2437,
            endLat: 31.2304,
            endLng: 121.4737,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 10,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 52.3676,
            endLng: 4.9041,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 11,
            startLat: 41.9028,
            startLng: 12.4964,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 11,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 31.2304,
            endLng: 121.4737,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 11,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: 1.3521,
            endLng: 103.8198,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 12,
            startLat: 34.0522,
            startLng: -118.2437,
            endLat: 37.7749,
            endLng: -122.4194,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 12,
            startLat: 35.6762,
            startLng: 139.6503,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 12,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 13,
            startLat: 52.52,
            startLng: 13.405,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 13,
            startLat: 11.986597,
            startLng: 8.571831,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 13,
            startLat: -22.9068,
            startLng: -43.1729,
            endLat: -34.6037,
            endLng: -58.3816,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 14,
            startLat: -33.936138,
            startLng: 18.436529,
            endLat: 21.395643,
            endLng: 39.883798,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
    ];
    return (
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <GridItem
                area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                icon={<Timer className="h-4 w-4 text-black dark:text-neutral-400" />}
                title={t("step1.title")}
                description={t("step1.desc")}
            />

            <GridItem
                area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                icon={<Plane className="h-4 w-4 text-black dark:text-neutral-400" />}
                title={t("step2.title")}
                description={t("step2.desc")}
            />

            <GridItem
                area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                icon={<Globe className="h-4 w-4 text-black dark:text-neutral-400" />}
                title={t("step3.title")}
                description={t("step3.desc")}
                children={<World data={sampleArcs} globeConfig={globeConfig} />}
            />


            <GridItem
                area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                icon={<Bot className="h-4 w-4 text-black dark:text-neutral-400" />}
                title={t("step4.title")}
                description={t("step4.desc")}
                href="https://t.me/milliysim_bot"

            />

            <GridItem
                area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                icon={<Clock7 className="h-4 w-4 text-black dark:text-neutral-400" />}
                title={t("step5.title")}
                description={t("step5.desc")}
                href="https://t.me/milliysim_admin"
            />
        </ul>
    );
}

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
    children?: React.ReactNode;
    href?: string
}

const GridItem = ({ area, icon, title, description, children, href }: GridItemProps) => {
    return (
        <Link href={href ?? "#"} target="_blank" className={`min-h-[14rem] list-none ${area}`}>
            <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border border-gray-600 p-2">
                            {icon}
                        </div>
                        {children}
                        <div className="space-y-3">
                            <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                                {title}
                            </h3>
                            <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
