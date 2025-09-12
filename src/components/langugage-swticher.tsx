"use client";

import { usePathname, useRouter } from "next/navigation";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const languages = [
    { code: "uz", label: "O‘zbekcha" },
    { code: "ru", label: "Русский" },
    { code: "en", label: "English" },
];

export function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (value: string) => {
        const segments = pathname.split("/");
        segments[1] = value;
        router.push(segments.join("/"));
    };

    return (
        <Select onValueChange={handleChange} defaultValue={pathname.split("/")[1]}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
                {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                        {lang.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
