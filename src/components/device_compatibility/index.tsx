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
import { Smartphone } from "lucide-react";


export function DeviceModal() {
    const t = useTranslations("device-modal")
    return (
        <Modal>
            <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex gap-1 cursor-pointer justify-center group/modal-btn max-sm:w-fit">
                <Smartphone />{" "} <p>{t("device_compatibility")}</p>
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
