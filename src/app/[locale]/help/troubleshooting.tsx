import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useTranslations } from 'next-intl'
import React from 'react'



const Troubleshooting = () => {
    const t = useTranslations("toubleshooting");
    const data = [
        {
            question: t("delete_esim_question"),
            answer: t("delete_esim_answer")
        },
        {
            question: t("lost_qr_question"),
            answer: t("lost_qr_answer")
        },
        {
            question: t("qr_not_working_question"),
            answer: t("qr_not_working_answer")
        },
        {
            question: t("esim_qr_arrival_question"),
            answer: t("esim_qr_arrival_answer")
        },
        {
            question: t("esim_usage_question"),
            answer: t("esim_usage_answer")
        },
        {
            question: t("delete_data_question"),
            answer: t("delete_data_answer")
        },
    ]
    return (
        <Accordion type="single" collapsible className="border-t">
            {
                data?.map((item, index) => (
                    <AccordionItem value={`item-${index + 1}`} key={index}>
                        <AccordionTrigger className="px-4 text-xl">{item?.question}</AccordionTrigger>
                        <AccordionContent className='text-lg pl-4'>
                            {item?.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}

export default Troubleshooting