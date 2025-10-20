import { SetUpCarousel } from '@/components/setup-carousel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useTranslations } from 'next-intl'
import React from 'react'
import Iphone1 from '@/media/iphone_set_up_1.jpg'
import Iphone2 from '@/media/iphone_set_up_2.jpg'
import Iphone3 from '@/media/iphone_set_up_3.jpg'
import Iphone4 from '@/media/iphone_set_up_4.jpg'
import Iphone5 from '@/media/iphone_set_up_5.jpg'
import Iphone6 from '@/media/iphone_set_up_6.jpg'
import Iphone7 from '@/media/iphone_set_up_7.jpg'
import Iphone8 from '@/media/iphone_set_up_8.jpg'
import Android1 from '@/media/android_set_up_1.jpg'
import Android2 from '@/media/android_set_up_2.jpg'
import Android3 from '@/media/android_set_up_3.jpg'
import Android4 from '@/media/android_set_up_4.jpg'
import Android5 from '@/media/android_set_up_5.jpg'
import Android6 from '@/media/android_set_up_6.jpg'
import Android7 from '@/media/android_set_up_7.jpg'
import Android8 from '@/media/android_set_up_8.jpg'
import Android9 from '@/media/android_set_up_9.jpg'
import { IconBrandAndroid, IconBrandApple, IconBrandAppleFilled } from '@tabler/icons-react'
const SetUp = () => {
    const t = useTranslations("help");
    const dataiOS = [
        {
            image: Iphone1,
            title: t("go_to_settings")
        },
        {
            image: Iphone2,
            title: t("select_mobile_services")
        },
        {
            image: Iphone3,
            title: t("select_add_esim")
        },
        {
            image: Iphone4,
            title: t("select_use_qr_code")
        },
        {
            image: Iphone5,
            title: t("scan_qr")
        },
        {
            image: Iphone6,
            title: t("go_back_mobile")
        },
        {
            image: Iphone7,
            title: t("toggle_data_roaming")
        },
        {
            image: Iphone8,
            title: t("youre_good")
        },
    ]
    const dataAndroid = [
        {
            image: Android1,
            title: t("slide_two_fingers")
        },
        {
            image: Android2,
            title: t("select_settings_icon")
        },
        {
            image: Android3,
            title: t("select_connections")
        },
        {
            image: Android4,
            title: t("select_sim_manager")
        },
        {
            image: Android5,
            title: t("select_add_esim")
        },
        {
            image: Android6,
            title: t("select_qr_code")
        },
        {
            image: Android7,
            title: t("go_back_connections")
        },
        {
            image: Android8,
            title: t("toggle_data_roaming")
        },
        {
            image: Android9,
            title: t("youre_good")
        },
    ]
    return (
        <Tabs defaultValue="iOS" className="w-full mt-3">
            <TabsList className="p-2 h-11 mx-auto">
                <TabsTrigger className="text-lg px-3 h-full rounded-md cursor-pointer bg-white dark:bg-black mx-1" value="iOS"><IconBrandApple /> iOS</TabsTrigger>
                <TabsTrigger className="text-lg px-3 h-full rounded-md cursor-pointer bg-white dark:bg-black mx-1" value="Android"><IconBrandAndroid /> Android</TabsTrigger>
            </TabsList>
            <TabsContent value="iOS">
                <SetUpCarousel data={dataiOS} />
            </TabsContent>
            <TabsContent value="Android">  <SetUpCarousel data={dataAndroid} /></TabsContent>
        </Tabs>
    )
}

export default SetUp