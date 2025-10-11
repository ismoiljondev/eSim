"use client";
import React from "react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "../ui/animated-modal";
import { useTranslations } from "next-intl";
import Models from "./models";


export function DeviceModal() {
    const t = useTranslations("device-modal")
    return (
        <Modal>
            <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                    {t("device_compatibility")}
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                    📱📱📱
                </div>
            </ModalTrigger>
            <ModalBody>
                <ModalContent className="flex flex-col gap-2">
                    <p className="text-xl font-medium">{t("compatible_device_search")}</p>
                    <p>{t("compatible_device_search_desc")}</p>
                    <ol className="pl-3 list-decimal text-destructive font-medium">
                        <li>{t("locked_devices")}</li>
                        <li>{t("china_devices")}</li>
                    </ol>
                    <p className="text-2xl font-medium text-center">{t("or")}</p>
                    <Models />
                </ModalContent>

            </ModalBody>
        </Modal>
    );
}
