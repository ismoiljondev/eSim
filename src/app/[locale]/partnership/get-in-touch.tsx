"use client"
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Country, isValidPhoneNumber } from 'react-phone-number-input';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PhoneInput } from '@/components/ui/phone-input';
import { CountrySelect } from './countries';
import { Textarea } from '@/components/ui/textarea';
const FormSchema = z.object({
    phone_number: z
        .string()
        .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
    country: z.string()
});

const GetInTouch = () => {
    const t = useTranslations("partnership");
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            phone_number: "",
        },
    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div className='my-16 border rounded-xl w-full py-4'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <p className=''>
                    {t("contact_title")}
                </p>
                <p className='font-medium text-3xl'>
                    {t("partner_title")}
                </p>
                <p>{t("partner_desc")}</p>
            </div>
            <Form {...form}>
                <form className="my-8 grid grid-cols-2 gap-3 w-4/5 mx-auto" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="full_name" className='text-xl'>{t("full_name")}</Label>
                        <Input id="full_name" placeholder={t("full_name")} type="text" className='h-12' />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="email" className='text-xl'>{t("email")}</Label>
                        <Input id="email" placeholder={t("email")} type="text" className='h-12' />
                    </div>

                    <div className="flex flex-col gap-1">
                        <Label htmlFor="company" className='text-xl'>{t("company")}</Label>
                        <Input id="company" placeholder={t("company")} type="text" className='h-12' />
                    </div>
                    <div className="flex flex-col gap-1">
                        <FormField
                            control={form.control}
                            name="country"
                            render={() => (
                                <FormItem>
                                    <Label className="text-xl">{t("country")}</Label>
                                    <FormControl>
                                        <CountrySelect />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="job_role" className='text-xl'>{t("job_role")}</Label>
                        <Input id="job_role" placeholder={t("job_role")} type="text" className='h-12' />
                    </div>
                    <div className="flex flex-col gap-1">

                        <FormField
                            control={form.control}
                            name="phone_number"
                            render={({ field }) => (
                                <FormItem className="flex flex-col items-start h-full w-full">
                                    <Label htmlFor="phone_number" className='text-xl'>{t("phone_number")}</Label>
                                    <FormControl className="w-full">
                                        <PhoneInput defaultCountry='UZ' international={false} placeholder="Enter a phone number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex flex-col gap-1 col-span-2">
                        <Label htmlFor="message" className='text-xl'>{t("message")}</Label>
                        <Textarea id="message" placeholder={t("message")} className='h-12' />
                    </div>
                    <button
                        className="col-span-2 group/btn relative block h-12 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                        type="submit"
                    >
                        {t("send_message")}
                        <BottomGradient />
                    </button>



                </form>
            </Form>
        </div >

    )
}

export default GetInTouch


const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};