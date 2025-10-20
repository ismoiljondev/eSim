"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const currencies = [
    { symbol: "$", label: "USD" },
    { symbol: "£", label: "GBP" },
    { symbol: "so'm", label: "UZS" },
    { symbol: "₽", label: "RUB" },
    { symbol: "€", label: "EURO" },
];

export function CurrencySwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const [selectedCurrency, setSelectedCurrency] = useState("USD"); // default USD

    // Load from localStorage on mount
    useEffect(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("currency");
            if (saved) {
                setSelectedCurrency(saved);
            }
        }
    }, []);

    // When currency changes -> save to localStorage
    const handleChange = (value: string) => {
        setSelectedCurrency(value);
        localStorage.setItem("currency", value);
        // Optional: If you want to refresh page or refetch data based on currency:
        // router.refresh();
    };

    const currentCurrency = currencies.find(
        (c) => c.label === selectedCurrency
    ) || currencies[0];

    return (
        <Select value={selectedCurrency} onValueChange={handleChange}>
            <SelectTrigger hideTrigger className="justify-center">
                <SelectValue>
                    <span>
                        {currentCurrency.symbol} {currentCurrency.label}
                    </span>
                </SelectValue>
            </SelectTrigger>

            <SelectContent>
                {currencies.map((currency) => (
                    <SelectItem key={currency.label} value={currency.label}>
                        <div className="flex items-center gap-2">
                            <span>
                                {currency.symbol} {currency.label}
                            </span>
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
