"use client"
import Title from '@/components/title'
import { FormField, FormItem, Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl'
import React from 'react'
import { useForm } from 'react-hook-form';
import z from 'zod';

const FormSchema = z.object({

    country: z.string()
});

const FormContanct = () => {
    const t = useTranslations("contact");
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
        },
    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div className='flex flex-col gap-5 justify-self-end border rounded-xl p-6  w-full ml-8'>
            <Title desc={t("subtitle")} title={t("title")} className='justify-start items-start' />
            <Form {...form}>
                <form className="flex flex-col gap-3 w-full" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="full_name" className='text-xl max-md:text-base'>{t("full_name")}</Label>
                        <Input id="full_name" placeholder={t("full_name")} type="text" className='h-12 max-md:h-10' />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="email" className='text-xl max-md:text-base'>{t("email")}</Label>
                        <Input id="email" placeholder={t("email")} type="text" className='h-12 max-md:h-10' />
                    </div>

                    <div className="flex flex-col gap-1">
                        <Label htmlFor="subject" className='text-xl max-md:text-base'>{t("subject")}</Label>
                        <Input id="subject" placeholder={t("subject")} type="text" className='h-12 max-md:h-10' />
                    </div>
                    <div className="flex flex-col gap-1 col-span-2">
                        <Label htmlFor="message" className='text-xl max-md:text-base'>{t("message")}</Label>
                        <Textarea id="message" placeholder={t("message")} className='h-12 max-md:h-10' />
                    </div>
                    <button
                        className="col-span-2 group/btn relative block h-10 text-sm w-1/3 rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] max-sm:w-fit max-md:px-3 max-md:mx-auto"
                        type="submit"
                    >
                        {t("send_message")}
                        <BottomGradient />
                    </button>
                </form>
            </Form>
        </div>
    )
}

export default FormContanct


const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};