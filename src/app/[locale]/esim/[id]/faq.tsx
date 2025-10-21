import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useTranslations } from 'next-intl'
import React from 'react'

const Faq = () => {
    const t = useTranslations("faq");
    const data = [
        {
            question: t("q1"),
            answer: t("a1")
        },
        {
            question: t("q2"),
            answer: t("a2")
        },
        {
            question: t("q3"),
            answer: t("a3")
        },
        {
            question: t("q4"),
            answer: t("a4")
        },
        {
            question: t("q5"),
            answer: t("a5")
        },
        {
            question: t("q6"),
            answer: t("a6")
        }, {
            question: t("q7"),
            answer: t("a7")
        },
    ]
    const data2 = [
        {
            question: t("q8"),
            answer: t("a8")
        },
        {
            question: t("q9"),
            answer: t("a9")
        },
        {
            question: t("q10"),
            answer: t("a10")
        },
        {
            question: t("q11"),
            answer: t("a11")
        },
        {
            question: t("q12"),
            answer: t("a12")
        },
        {
            question: t("q13"),
            answer: t("a13")
        },
    ]
    return (
        <div className='flex flex-col gap-5 my-10 max-md:mb-0'>
            <p className='text-2xl font-medium'>{t("title")}</p>
            <div className='grid grid-cols-2 gap-6 max-sm:grid-cols-1'>
                <Accordion type="multiple" className="border-t rounded-xl border shadow">
                    {
                        data?.map((item, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="px-4 text-xl max-lg:text-lg max-sm:text-base max-lg:px-3">{item?.question}</AccordionTrigger>
                                <AccordionContent className="text-base p-3 font-normal max-sm:text-sm">
                                    {item?.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
                <Accordion type="multiple" className="border-t rounded-xl border shadow">
                    {
                        data2?.map((item, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="px-4 text-xl max-lg:text-lg max-sm:text-base max-lg:px-3">{item?.question}</AccordionTrigger>
                                <AccordionContent className="text-base p-3 font-normal max-sm:text-sm">
                                    {item?.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </div>
        </div>
    )
}

export default Faq