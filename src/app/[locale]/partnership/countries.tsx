"use client"

import * as React from "react"
import { useFormContext, Controller } from "react-hook-form"
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover"
import {
    Command,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import countries from "i18n-iso-countries"
import enLocale from "i18n-iso-countries/langs/en.json"

countries.registerLocale(enLocale)

const countryOptions = Object.entries(countries.getNames("en")).map(
    ([code, name]) => ({
        label: name,
        value: code,
    })
)

export function CountrySelect() {
    const { control } = useFormContext()

    return (
        <Controller
            name="country"
            control={control}
            render={({ field }) => (
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                                "w-full justify-between h-12 text-left",
                                !field.value && "text-muted-foreground"
                            )}
                        >
                            {field.value
                                ? countryOptions.find(c => c.value === field.value)?.label
                                : "Select country..."}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 w-[300px]">
                        <Command>
                            <CommandInput placeholder="Search country..." />
                            <CommandList>
                                <CommandEmpty>No country found.</CommandEmpty>
                                <CommandGroup>
                                    {countryOptions.map(country => (
                                        <CommandItem
                                            key={country.value}
                                            value={country.label}
                                            onSelect={() => field.onChange(country.value)}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    country.value === field.value
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                )}
                                            />
                                            {country.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            )}
        />
    )
}
