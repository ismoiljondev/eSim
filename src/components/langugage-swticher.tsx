"use client";

import { usePathname, useRouter } from "next/navigation";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import ReactCountryFlag from "react-country-flag";
import { cn } from "@/lib/utils"; // optional if you use className merging (Tailwind helper)

const languages = [
    { code: "uz", countryCode: "UZ", label: "O‘zbekcha" },
    { code: "ru", countryCode: "RU", label: "Русский" },
    { code: "en", countryCode: "GB", label: "English" },
];

export function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (value: string) => {
        const segments = pathname.split("/");
        segments[1] = value;
        router.push(segments.join("/"));
    };

    const currentLang = pathname.split("/")[1];
    const currentLanguage = languages.find((l) => l.code === currentLang) || languages[0];

    return (
        <Select onValueChange={handleChange} defaultValue={currentLang}>
            <SelectTrigger hideTrigger className="justify-center">
                <SelectValue className="">
                    <ReactCountryFlag
                        countryCode={currentLanguage.countryCode}
                        svg
                        style={{
                            width: "1.3em",
                            height: "1.3em",
                            borderRadius: "30%",
                        }}
                        title={currentLanguage.label}
                    />
                </SelectValue>
            </SelectTrigger>

            <SelectContent>
                {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                        <div className="flex items-center gap-2">
                            <ReactCountryFlag
                                countryCode={lang.countryCode}
                                svg
                                style={{
                                    width: "1.3em",
                                    height: "1.3em",
                                    borderRadius: "10%",
                                }}
                                title={lang.label}
                            />
                            <span>{lang.label}</span>
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
