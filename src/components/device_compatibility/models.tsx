import React, { useMemo, useState } from 'react'

const ModelsData = {
    "ack": "success",
    "data": [
        {
            "type": "Other devices",
            "brands": [
                {
                    "title": "ASUS",
                    "models": [
                        "ASUS Mini Transformer T103HAF",
                        "ASUS NovaGo TP370QL",
                        "ASUS VivoBook Flip 14 TP401NA"
                    ],
                    "exceptions": [
                        "PC with Windows 10 version earlier than 1703 and not LTE-disabled"
                    ]
                },
                {
                    "title": "Acer",
                    "models": [
                        "Acer Chromebook Spin 511/ 513",
                        "Acer Swift 3",
                        "Acer Swift 7",
                        "Acer Travelmate P2",
                        "Acer TravelMate Spin P4",
                        "Acer TravelMate P6"
                    ],
                    "exceptions": [
                        "PC with Windows 10 version earlier than 1703 and not LTE-disabled"
                    ]
                },
                {
                    "title": "Apple",
                    "models": [
                        "iPad Pro 13",
                        "iPad Pro 11 (1st Gen or later)",
                        "iPad Pro 12.9 (3rd Gen or later)",
                        "iPad Air (3rd Gen or later)",
                        "iPad (7th Gen or later)",
                        "iPad mini (5th Gen or later)"
                    ],
                    "exceptions": [
                        "PC with Windows 10 version earlier than 1703 and not LTE-disabled"
                    ]
                },
                {
                    "title": "Dell",
                    "models": [
                        "Dell Latitude 7210 2-in-1",
                        "Dell Latitude 9440 2-in-1",
                        "Dell Latitude 9410",
                        "Dell Latitude 7310",
                        "Dell Latitude 7410",
                        "Dell Latitude 7440",
                        "Dell Latitude 9420",
                        "Dell Latitude 9510",
                        "Dell Latitude 5410",
                        "Dell Latitude 5411",
                        "Dell Latitude 5511"
                    ],
                    "exceptions": [
                        "PC with Windows 10 version earlier than 1703 and not LTE-disabled"
                    ]
                },
                {
                    "title": "HP",
                    "models": [
                        "HP Elite x2 1012 G2",
                        "HP Elite x2 1013 G3",
                        "HP Elite Dragonfly G4",
                        "HP Elite Dragonfly G3",
                        "HP Elite Dragonfly 2",
                        "HP Elite Folio 13 – 5G",
                        "HP Envy x2",
                        "HP Elitebook G4",
                        "HP Elitebook G5",
                        "HP Elitebook x360 G2",
                        "HP Elitebook x360 G3",
                        "HP Elitebook x360 G5",
                        "HP Elitebook x360 G6",
                        "HP EliteBook 840 Aero G8",
                        "HP Probook G3",
                        "HP Probook G4",
                        "HP Probook G5",
                        "HP ZBook Firefly 14 (G10)",
                        "HP Zbook Studio G5",
                        "HP Zbook G4",
                        "HP Zbook G5",
                        "HP Spectre x360",
                        "HP Spectre Folio 13",
                        "HP Elite Folio 2-in-1 Notebook PC",
                        "HP mt32 Mobile Thin Client",
                        "HP mt45 Mobile Thin Client",
                        "HP mt46 Mobile Thin Client"
                    ],
                    "exceptions": [
                        "PC with Windows 10 version earlier than 1703 and not LTE-disabled"
                    ]
                },
                {
                    "title": "Huawei",
                    "models": [
                        "Huawei dtab Compact d-02K"
                    ],
                    "exceptions": [
                        "PC with Windows 10 version earlier than 1703 and not LTE-disabled"
                    ]
                },
                {
                    "title": "Lenovo",
                    "models": [
                        "ThinkPad X1 Titanium Yoga 2 in 1",
                        "ThinkPad X1 Carbon (Gen 9 and above)",
                        "ThinkPad X1 Fold",
                        "ThinkPad X1 Nano",
                        "ThinkPad X12 Detachable",
                        "Lenovo Flex 5G",
                        "Lenovo X1 Fold",
                        "Lenovo Yoga C630",
                        "Lenovo Miix 630",
                        "Lenovo Yoga 520",
                        "Lenovo Yoga 720 convertible laptops"
                    ],
                    "exceptions": [
                        "PC with Windows 10 version earlier than 1703 and not LTE-disabled"
                    ]
                },
                {
                    "title": "Microsoft",
                    "models": [
                        "Surface Go 2/ Go 3",
                        "Surface Duo/ Duo 2",
                        "Surface Pro 9",
                        "Surface Pro 8",
                        "Surface Pro 7+",
                        "Surface Pro LTE",
                        "Surface Pro X",
                        "Surface Pro 5 LTE Advanced"
                    ],
                    "exceptions": [
                        "PC with Windows 10 version earlier than 1703 and not LTE-disabled"
                    ]
                },
                {
                    "title": "Panasonic",
                    "models": [
                        "Panasonic Toughbook 40/ G2/ 55"
                    ],
                    "exceptions": []
                },
                {
                    "title": "Samsung",
                    "models": [
                        "Samsung Tab S10/ S10+",
                        "Samsung Tab S10 FE/ FE+",
                        "Samsung Tab S9/ S9+/ S9 Ultra",
                        "Samsung Tab S9 FE/ FE+",
                        "Samsung Active 5 *",
                        "Samsung Galaxy Book 2"
                    ],
                    "exceptions": [
                        "PC with Windows 10 version earlier than 1703 and not LTE-disabled",
                        "* eSIM availability varies by market with Samsung Active 5"
                    ]
                },
                {
                    "title": "Other",
                    "models": [
                        "T-Mobile REVVL Tab 2",
                        "Mobile WiFi TCL Link Zone MW63*",
                        "Mobile WiFi eSunFi SHFiEL40"
                    ],
                    "exceptions": [
                        "* An eSIM service varies by country, region and carrier"
                    ]
                }
            ]
        },
        {
            "type": "Smartphones",
            "brands": [
                {
                    "title": "Apple",
                    "models": [
                        "iPhone 17/ 17 Pro/ 17 Pro Max",
                        "iPhone Air",
                        "iPhone 16/ 16 Plus/ 16 Pro/ 16 Pro Max/ 16e",
                        "iPhone 15/ 15 Plus/ 15 Pro/ 15 Pro Max",
                        "iPhone 14/ 14 Plus/ 14 Pro/ 14 Pro Max",
                        "iPhone 13/ 13 mini/ 13 Pro/ 13 Pro Max",
                        "iPhone 12/ 12 mini/ 12 Pro/ 12 Pro Max",
                        "iPhone SE 2020/ SE 2022",
                        "iPhone 11/ 11 Pro/ 11 Pro Max",
                        "iPhone XR/ XS/ XS Max"
                    ],
                    "exceptions": [
                        "iPhone devices from China, Hong Kong and Macao might not support eSIM technology"
                    ]
                },
                {
                    "title": "Google",
                    "models": [
                        "Google Pixel 9/ 9a/ 9 Pro/ 9 Pro XL/ 9 Pro Fold",
                        "Google Pixel 8/ 8a/ 8 Pro",
                        "Google Pixel 7/ 7a/ Pro",
                        "Google Pixel 6/ 6a/ 6 Pro",
                        "Google Pixel 5/ 5a 5G",
                        "Google Pixel 4/ 4 XL/ 4a/ 4a XL/ 4a 5G"
                    ],
                    "exceptions": []
                },
                {
                    "title": "Hammer",
                    "models": [
                        "Hammer Blade 5G",
                        "Hammer Explorer Pro",
                        "Hammer Blade 3"
                    ],
                    "exceptions": []
                },
                {
                    "title": "Honor",
                    "models": [
                        "Honor 400/ 400 Lite/ 400 Pro",
                        "Honor 200/ 200 Pro",
                        "Honor 90 (dual SIM)",
                        "Honor Magic 4 Pro",
                        "Honor Magic 5 Pro",
                        "Honor Magic 6 Pro/ Ultimate/ RSR Porsche",
                        "Honor Magic 7 Lite"
                    ],
                    "exceptions": [
                        "Honor 400 Lite, Magic 4 Pro, Honor Magic4 Ultimate, Honor Magic 5 /6/7, Honor 90 — Only dual SIM model supports eSIM.  eSIM availability may vary depending on country and carrier",
                        "Honor 200 Lite version doesn't support eSIM"
                    ]
                },
                {
                    "title": "Huawei",
                    "models": [
                        "Huawei P40",
                        "Huawei P40 Pro",
                        "Huawei P40 4G",
                        "Huawei Mate 40/ 40 Pro",
                        "Huawei Pura 80 Ultra",
                        "Huawei Pura 70 Pro"
                    ],
                    "exceptions": [
                        "Huawei P40 Pro+"
                    ]
                },
                {
                    "title": "Motorola",
                    "models": [
                        "Motorola ThinkPhone 25",
                        "Motorola Razr 60/ Ultra 2025",
                        "Motorola Razr 50/ 50 Ultra",
                        "Motorola Razr 40/ 40 Ultra",
                        "Motorola Razr 5G/ 2019/ 2022/ 2024",
                        "Motorola Edge 60 Fusion/ 60 Stylus/ 60 Pro",
                        "Motorola Edge 50 Fusion/ 50 Pro/ 50 Ultra",
                        "Motorola Edge Plus 2023",
                        "Motorola Edge 40/ 40 Neo/ 40 Pro",
                        "Motorola G56",
                        "Motorola G85",
                        "Motorola G86/ G86 power",
                        "Motorola Moto G Power (2024/ 2025)"
                    ],
                    "exceptions": [
                        "Motorola Edge 60 Stylus - eSIM availability may vary depending on country/region and carrier"
                    ]
                },
                {
                    "title": "OPPO",
                    "models": [
                        "Oppo Reno 14/ 14 Pro",
                        "Oppo Reno6 Pro 5G",
                        "Oppo Reno5 A",
                        "Oppo Find N5",
                        "Oppo Find X8/ X8 Pro",
                        "Oppo Find X5/ X5 Pro",
                        "Oppo Find X3/ X3 Pro"
                    ],
                    "exceptions": [
                        "Oppo Find X5 Lite",
                        "for Oppo Reno6 Pro 5G, Find X8 & X8 Pro eSIM technology is not available in some regions. Please contact Oppo Support Team for more information"
                    ]
                },
                {
                    "title": "Rakuten",
                    "models": [
                        "Rakuten Mini",
                        "Rakuten Big-S",
                        "Rakuten Big",
                        "Rakuten Hand 5G",
                        "Rakuten Hand"
                    ],
                    "exceptions": []
                },
                {
                    "title": "Samsung",
                    "models": [
                        "Samsung Galaxy S25/ S25+/ S25 Edge/ S25 Ultra",
                        "Samsung Galaxy S24+/ S24 Ultra",
                        "Samsung Galaxy S24/ S24 FE",
                        "Samsung Galaxy S23+/ S23 Ultra",
                        "Samsung Galaxy S23/ S23 FE",
                        "Samsung Galaxy S22/ S22+/ S22 Ultra 5G",
                        "Samsung Galaxy S21+/ S21 Ultra 5G",
                        "Samsung Galaxy S21 5G",
                        "Samsung Galaxy S20/ S20+/ S20 Ultra 5G",
                        "Samsung Galaxy Z Fold7",
                        "Samsung Galaxy Z Fold Special Edition",
                        "Samsung Galaxy Z Fold6",
                        "Samsung Galaxy Z Fold5",
                        "Samsung Galaxy Z Fold4",
                        "Samsung Galaxy Z Fold3 5G",
                        "Samsung Galaxy Z Fold2 5G",
                        "Samsung Galaxy Fold",
                        "Samsung Galaxy Z Flip 7",
                        "Samsung Galaxy Z Flip 6",
                        "Samsung Galaxy Z Flip 5",
                        "Samsung Galaxy Z Flip 4",
                        "Samsung Galaxy Z Flip3 5G",
                        "Samsung Galaxy Z Flip/ Flip 5G",
                        "Samsung Galaxy Note20 Ultra 5G",
                        "Samsung  Galaxy Note20 5G",
                        "Samsung Galaxy Xcover7 *",
                        "Samsung  Galaxy A56/ A55/ A54/ A36/ A35 *"
                    ],
                    "exceptions": [
                        "Please check the IMEI (eSIM) to ensure that your Samsung device is eSIM capable",
                        "Samsung S20/S21, Note 20 Ultra, Z Fold 2 and Z Flip 5G from the USA might not be eSIM compatible",
                        "Samsung Galaxy/ Note/ Fold/ Flip series from Hongkong and China might not be eSIM compatible",
                        "* eSIM availability varies by market with Samsung Xcover 7 and Galaxy A series (SCG21 (Japanese Model), SC-53D (Japanese Model), SM-A546B/DS (International Model), SM-A546S (Korean Model), SM-A546U1 (International Model))"
                    ]
                },
                {
                    "title": "Sharp",
                    "models": [
                        "Sharp Aquos R10",
                        "Sharp Aquos R9/ R9 pro",
                        "Sharp Aquos R8/ R8s pro",
                        "Sharp Aquos Sense 8",
                        "Sharp Aquos Sense 6s",
                        "Sharp Aquos Wish/ Wish 5"
                    ],
                    "exceptions": []
                },
                {
                    "title": "Sony",
                    "models": [
                        "Sony Xperia 5 IV",
                        "Sony Xperia 10 IV",
                        "Sony Xperia 10 III Lite",
                        "Sony Xperia 1 IV"
                    ],
                    "exceptions": [
                        "Sony Xperia 1/5/10 V and VI don't support eSIM except Europe version"
                    ]
                },
                {
                    "title": "Xiaomi",
                    "models": [
                        "Xiaomi Poco X7",
                        "Xiaomi 15 Ultra",
                        "Xiaomi Redmi Note 14 Pro/ Pro+ 5G (Global)",
                        "Xiaomi 14/ 14 Pro/ 14T/ 14T Pro",
                        "Xiaomi 13 Lite/ 13T/ 13T Pro",
                        "Xiaomi 12T Pro"
                    ],
                    "exceptions": [
                        "Xiaomi 12T Pro/ 13T/ 13T Pro/ 14/ 14 Pro/ Pro+/15 Ultra and Xiaomi Poco X7 — eSIM availability may vary depending on country/region and carrier (https://www.mi.com/global/support/esim)"
                    ]
                },
                {
                    "title": "Other",
                    "models": [
                        "Fairphone 4",
                        "Fairphone 5",
                        "Fairphone 6",
                        "Asus Zenfone 12 Ultra",
                        "Gemini PDA",
                        "Microsoft Surface Duo",
                        "Microsoft Surface Duo 2",
                        "TCL 60/ 60 XE NxtPaper",
                        "TCL 50/ 50 Pro NxtPaper (T803D model)",
                        "TCL 50 5G",
                        "TCL 40 XL",
                        "HMD Fuse",
                        "HMD Fusion",
                        "Nokia XR21/ HMD XR21",
                        "Nokia X30",
                        "Nokia G60",
                        "Nothing phone 3",
                        "Nuu Mobile X5",
                        "Vivo V40",
                        "Vivo X90 Pro",
                        "Vivo V29 Lite 5G ",
                        "Vivo X200 Pro (global version)/ X200s",
                        "Oukitel WP30 Pro",
                        "Oukitel WP33 Pro",
                        "UP phone",
                        "Alcatel V3 Ultra",
                        "Oneplus Open",
                        "Oneplus 11 5G",
                        "Oneplus 12",
                        "Oneplus 13/ 13s"
                    ],
                    "exceptions": [
                        "Only Europe version of Vivo X90 Pro and Vivo V29 Lite 5G support eSIMs",
                        "TCL 50 5G * Only T613K model features the eSIM"
                    ]
                }
            ]
        }
    ]
}

const Models = () => {
    const [search, setSearch] = useState("");

    const allModels = useMemo(() => {
        return ModelsData.data.flatMap((item) =>
            item.brands.flatMap((brand) =>
                brand.models.map((model) => ({
                    type: item.type,
                    brand: brand.title,
                    model,
                }))
            )
        );
    }, []);

    const filteredModels = useMemo(() => {
        return allModels.filter((item) =>
            item.model.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, allModels]);
    return (
        <div className="">

            <input
                type="text"
                placeholder="Search for a model..."
                className="w-full p-2 border rounded-md mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="flex-1 h-screen overflow-y-auto rounded-lg border p-3 space-y-3 scroll-smooth">
                {filteredModels.length > 0 ? (
                    filteredModels.map((item, i) => (
                        <div
                            key={i}
                            className="border rounded-xl p-3 hover:bg-gray-50 transition"
                        >
                            <p className="font-medium">{item.model}</p>
                            <p className="text-sm text-gray-500">
                                {item.brand} — {item.type}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No models found.</p>
                )}
            </div>
        </div>

    )
}

export default Models