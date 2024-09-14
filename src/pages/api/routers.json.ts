export async function GET({ params, request }) {
  return new Response(
    JSON.stringify({
      routers: [
        {
          name: "TP-Link Зеленка",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Green_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Green_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Green_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Green_010",
          Интерфейс: "0.1/tplinkwifi.net",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2312?text=Зеленый+интерфейс",
          Эмулятор: [
            "https://www.tp-link.com/resources/simulator/TL-WR1045ND(RU)_2.0/Index.htm",
            "https://www.tp-link.com/resources/simulator/TL-WR750N(UN)_V5.0/Index.htm",
          ],
        },
        {
          name: "TP-Link Archer С5/С9/EC220",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_014",
          Интерфейс: "0.1/tplinkwifi.net",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2312?text=TP-Link+Archer+С5,+С9,+EC220",
          Эмулятор:
            "https://emulator.tp-link.com/Archer_C5(RUS)v4_Router_Emulator/web/index.htm",
        },
        {
          name: "TP-Link Archer C20/C2/A5/C50/AC750",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_v2_C20_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_v2_C20_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_v2_C20_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_v2_C20_010",
          Интерфейс: "0.1/tplinkwifi.net",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2312?text=Archer+C20,+C2,+A5,+C50,+AC750",
          Эмулятор:
            "https://emulator.tp-link.com/Emulator_ArcherC20_RU_v4/index.htm",
        },
        {
          name: "TP-Link Archer A6/C7/C60/A9",
          PPPoE:
            "http://kbn.ertelecom.ru/download/attachments/27963307/%D0%BC%D0%BE%D0%B9%20tp-link%20%D0%A0%D0%A0%D0%A0%D0%BE%D0%95.pdf",
          DHCP: "http://kbn.ertelecom.ru/download/attachments/27963307/DHCP%20opt%2082%20%D0%B1%D0%B8%D1%80%D1%8E%D0%B7%D0%BE%D0%B2%D0%B0%D1%8F%20%28v2%29.pdf",
          IPoE: "http://kbn.ertelecom.ru/download/attachments/27963307/Static%20ip%20%D0%B1%D0%B8%D1%80%D1%8E%D0%B7%D0%BE%D0%B2%D0%B0%D1%8F%20%28v2%29.pdf",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_v2_C20_010",
          Интерфейс: "0.1/tplinkwifi.net",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2312?text=TP-Link+Archer+A6,+C7,+C60,+A9",
          Эмулятор: "https://emulator.tp-link.com/c7v5_ru/index.html",
        },
        {
          name: "TP-Link Archer C80",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_C80_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_C80_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_C80_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_C80_009",
          Интерфейс: "0.1/tplinkwifi.net",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2312?text=Archer+C80",
          Эмулятор:
            "https://emulator.tp-link.com/c80-ru-router/index.html#networkMap",
        },
        {
          name: "TP-Link Archer АХ20/C54",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_AX20_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_AX20_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_AX20_004",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_AX20_009",
          Интерфейс: "0.1/tplinkwifi.net",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2312?text=Archer+АХ20+/+Archer+C54",
          Эмулятор:
            "https://emulator.tp-link.com/Archer_AX90v1_EU_simulator/index.html#tpLinkCloud",
        },
        {
          name: "D-Link DIR-300NRU/DIR-615 Темная",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_Grey_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_Grey_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_Grey_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_Grey_009",
          Интерфейс: "0.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2275?text=DIR-300NRU+/+DIR-615",
          Эмулятор: "http://em.dlink.ru/emul/DIR-300AD_gray/",
        },
        {
          name: "D-Link DIR-300/DIR-615 Желтая",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_Grey-orange_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_Grey-orange_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_Grey-orange_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_Grey-orange_009",
          Интерфейс: "0.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2275?text=D-Link+DIR-300+/+DIR-615",
          Эмулятор: "http://linserv.ru/dlink-DIR-615/",
        },
        {
          name: "D-Link DIR-615 Белая",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White_009",
          Интерфейс: "0.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2275?text=DIR-615",
          Эмулятор: "http://em.dlink.ru/emul/DIR-615KR1/#start/storInfo",
        },
        {
          name: "D-Link DIR-300NRU/DIR-620",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White-turquoise_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White-turquoise_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White-turquoise_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White-turquoise_009",
          Интерфейс: "0.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2275?text=DIR-300NRU+/+DIR-620",
          Эмулятор: "Нет",
        },
        {
          name: "D-Link DIR300NRU B5/DIR320NRU/DIR-620",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White-blue_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White-blue_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White-blue_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White-blue_009",
          Интерфейс: "0.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2275?text=DIR300NRU+B5+/+DIR320NRU+/+DIR-620",
          Эмулятор: "Нет",
        },
        {
          name: "D-Link DIR-2150/DIR-825/DIR-X1530/DIR-842",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_V3_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_V3_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_V3_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_V3_009",
          Интерфейс: "0.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2275?text=DIR+2150+/+DIR+825+/+DIR-X1530",
          Эмулятор: "https://anweb.dlink.ru",
        },
        {
          name: "Keenetic Lite II-III/Lite NDMS 2.0",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Dark-blue_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Dark-blue_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Dark-blue_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Dark-blue_009",
          Интерфейс: "1.1/my.keenetic.net",
          БЗ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2510?text=Keenetic+Lite+II-III+/+Lite+NDMS+2.0",
          Эмулятор: "http://routers.nvbs.ru/zyxel/NDMSv2_by_Anna/status.html",
        },
        {
          name: "Keenetic Lite/ZyXel NBG334W EE",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Blue_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Blue_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Blue_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Blue_009",
          Интерфейс: "1.1/my.keenetic.net",
          БЗ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2510?text=Keenetic+Lite+/+ZyXel+NBG334W EE",
          Эмулятор:
            "https://itel.ua/emulations/zyxel_keenetic_giga/default.htm",
        },
        {
          name: "Keenetic Ultra/Giga/Viva/Speedster",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Giga_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Giga_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Giga_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Giga_010",
          Интерфейс: "1.1/my.keenetic.net",
          БЗ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2510?text=Keenetic+Ultra/Giga/Viva/+Speedster",
          Эмулятор: "https://giga.demo.keenetic.pro/dashboard",
        },
        {
          name: "Keenetic AlR/Zyxel VIVA/Zyxel CITY/Zyxel START",
          PPPoE:
            "http://kbn.ertelecom.ru/download/attachments/27963307/Zyxel%20%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0.pdf",
          DHCP: "нет",
          IPoE: "http://kbn.ertelecom.ru/download/attachments/27963307/Zyxel%20Air%20%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0.pdf?version=1&modificationDate=1558793480808&api=v2",
          Каналы: "Нет",
          Интерфейс: "1.1/my.keenetic.net",
          БЗ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2510?text=Zyxel+AlR+/+Zyxel+VIVA+/+Zyxel+CITY+/+Zyxel+START",
          Эмулятор: "https://giga.demo.keenetic.pro/dashboard",
        },
        {
          name: "Xiaomi Белая",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Xiaomi_Mi-Router3_004",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Xiaomi_Mi-Router3_005",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Xiaomi_Mi-Router3_006",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Xiaomi_Mi-Router3_009",
          Интерфейс: "31.1/miwifi.com/router.miwifi.com",
          БЗ: "https://clever.ertelecom.ru/content/space/4/bookmark/34/article/2509?text=Xiaomi+Mi+Wi-Fi+Router+3",
          Эмулятор: "http://linserv.ru/Xiaomi/cgi-bin/luci/home",
        },
        {
          name: "Xiaomi Черная",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Xiaomi_Mi-Router_004",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Xiaomi_Mi-Router_005",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Xiaomi_Mi-Router_006",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Xiaomi_Mi-Router_008",
          Интерфейс: "31.1/miwifi.com/router.miwifi.com",
          БЗ: "https://clever.ertelecom.ru/content/space/4/bookmark/34/article/2509?text=Xiaomi+Mi+Wi-Fi+Router",
          Эмулятор: "нет",
        },
        {
          name: "ASUS RT-AC66U/RT-N66U/RT-N65U Темная",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_RT_6xxx_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_RT_6xxx_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_RT_6xxx_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_RT_6xxx_011",
          Интерфейс: "1.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/bookmark/34/article/2520?text=ASUS+RT-AC66U+/+RT-N66U+/+RT-N65U",
          Эмулятор: "https://demoui.asus.com/",
        },
        {
          name: "ASUS RT-N10/RT-G32/RT32G Голубая",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_RT_3xxx_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_RT_3xxx_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_RT_3xxx_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_RT_3xxx_011",
          Интерфейс: "1.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/bookmark/34/article/2520?text=ASUS+RT-N10+/+RT-G32+/+RT32G",
          Эмулятор: "https://routers.wtf/emul/ASUS1%20OFFLINE/index.html",
        },
        {
          name: "ASUS WL-520GC Розовая",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_WL_5xxx__003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_WL_5xxx__004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_WL_5xxx__004",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_WL_5xxx__010",
          Интерфейс: "1.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/bookmark/34/article/2520?text=ASUS+WL-520GC",
          Эмулятор:
            "https://routers.wtf/emul/ASUS%20VIOLET%20OFFLINE/index-2.html",
        },
        {
          name: "Rotek",
          PPPoE:
            "https://clever.ertelecom.ru/content/space/4/bookmark/34/article/8178?fileView=47495",
          DHCP: "https://clever.ertelecom.ru/content/space/4/bookmark/34/article/8178?fileView=47494",
          IPoE: "https://clever.ertelecom.ru/content/space/4/bookmark/34/article/8178?fileView=47492",
          Каналы: "Нет",
          Интерфейс: "0.1/user/connect5.html",
          БЗ: "https://clever.ertelecom.ru/content/space/4/bookmark/34/article/8178?text=Rotek+RX22301/22200",
          Эмулятор: "Нет",
        },
        {
          name: "Mercusys",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Mercusys_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Mercusys_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Mercusys_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Mercusys_007",
          Интерфейс: "1.1/mwlogin.net",
          БЗ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2076?text=Mercusys",
          Эмулятор: "https://www.mercusys.com/ru/support/simulator",
        },
        {
          name: "Huawei HG231F",
          PPPoE:
            "https://clever.ertelecom.ru/content/space/4/folder/631/article/8179?fileView=47530",
          DHCP: "Нет",
          IPoE: "Нет",
          Каналы: "Нет",
          Интерфейс: "3.1/1.100",
          БЗ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/8179?text=Huawei+HG231F",
          Эмулятор: "Нет",
        },
        {
          name: "Huawei WS880",
          PPPoE:
            "https://clever.ertelecom.ru/content/space/4/folder/631/article/8179?fileView=47539",
          DHCP: "Нет",
          IPoE: "Нет",
          Каналы: "Нет",
          Интерфейс: "3.1/1.100",
          БЗ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/8179?text=Huawei+ws880",
          Эмулятор: "Нет",
        },
        {
          name: "Huawei HG532e",
          PPPoE:
            "https://clever.ertelecom.ru/content/space/4/folder/631/article/8179?fileView=47549",
          DHCP: "Нет",
          IPoE: "Нет",
          Каналы: "Нет",
          Интерфейс: "3.1/1.100",
          БЗ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/8179?text=Huawei+HG532e",
          Эмулятор: "Нет",
        },
        {
          name: "Huawei AX(2,3)",
          PPPoE:
            "https://clever.ertelecom.ru/content/space/4/folder/631/article/8179?fileView=47560",
          DHCP: "https://clever.ertelecom.ru/content/space/4/folder/631/article/8179?fileView=47562",
          IPoE: "https://clever.ertelecom.ru/content/space/4/folder/631/article/8179?fileView=47561",
          Каналы: "Нет",
          Интерфейс: "3.1/1.100",
          БЗ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/8179?text=Huawei+AX3",
          Эмулятор: "Нет",
        },
        {
          name: "SNR-CPE-W4N",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__SNR-CPE-W4N_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__SNR-CPE-W4N_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__SNR-CPE-W4N_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__SNR-CPE-W4N_009",
          Интерфейс: "1.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2515?text=SNR-CPE-W4N",
          Эмулятор: "http://linserv.ru/SNR-CPE-W4n/home.html",
        },
        {
          name: "SNR-CPE-W4N ревизия M",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__SNR-CPE-W4N-revM_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__SNR-CPE-W4N-revM_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__SNR-CPE-W4N-revM_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__SNR-CPE-W4N-revM_009",
          Интерфейс: "1.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2515?text=SNR-CPE-W4N+ревизия+M",
          Эмулятор: "http://linserv.ru/SNR-CPE-W4n/home.html",
        },
        {
          name: "Tenda new AC/F300",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_AC_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_AC_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_AC_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_AC_008",
          Интерфейс: "0.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2598?text=Tenda+New+AC+/+F300",
          Эмулятор: "http://simulator.tendacn.com/F300v2/",
        },
        {
          name: "Tenda W303R/W309R/W316R",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_W303R_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_W303R_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_W303R_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_W303R_008",
          Интерфейс: "0.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2598?text=Tenda+W303R/W309R/W316R",
          Эмулятор: "Нет",
        },
        {
          name: "Tenda W311R",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_W311R_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_W311R_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_W311R_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_W311R_008",
          Интерфейс: "0.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2598?text=Tenda+W311R",
          Эмулятор: "Нет",
        },
        {
          name: "Tenda F300",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_F300_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_F300_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_F300_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_F300_008",
          Интерфейс: "0.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2598?text=Tenda+F300",
          Эмулятор: "http://simulator.tendacn.com/F300v2/",
        },
        {
          name: "Tenda new",
          PPPoE:
            "http://kbn.ertelecom.ru/download/attachments/27963307/Tenda%20%28%D0%BE%D1%80%D0%B0%D0%BD%D0%B6%D0%B5%D0%B2%D0%B0%D1%8F%20%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0%29%20PPPoE.pdf",
          DHCP: "http://kbn.ertelecom.ru/download/attachments/27963307/Tenda%20New%20%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0.pdf",
          IPoE: "http://kbn.ertelecom.ru/download/attachments/27963307/Tenda%20%28%D0%BE%D1%80%D0%B0%D0%BD%D0%B6%D0%B5%D0%B2%D0%B0%D1%8F%20%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0%29%20static.pdf",
          Каналы: "Нет",
          Интерфейс: "0.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2598?text=Tenda+new",
          Эмулятор: "http://simulator.tendacn.com/F300v2/",
        },
        {
          name: "Mikrotik",
          PPPoE:
            "http://kbn.ertelecom.ru/download/attachments/27963307/Nastroyka_PPPoE.pdf",
          DHCP: "http://kbn.ertelecom.ru/download/attachments/27963307/Nastroyka_DHCP.pdf?version=1&modificationDate=1597212858405",
          IPoE: "Нет",
          Каналы: "Нет",
          Интерфейс: "88.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2082?text=Mikrotik",
          Эмулятор: "Нет",
        },
        {
          name: "MikroTik hAP Lite",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Mikrotik_hAP-Lite-TC_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Mikrotik_hAP-Lite-TC_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Mikrotik_hAP-Lite-TC_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Mikrotik_011",
          Интерфейс: "88.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2082?text=MikroTik+hAP+Lite+TC",
          Эмулятор: "Нет",
        },
        {
          name: "NetGear WNR3500L (серый)",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__NetGear_Grey_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__NetGear_Grey_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__NetGear_Grey_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__NetGear_Grey_009",
          Интерфейс: "1.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2507?text=NetGear+WNR3500L+(серый)",
          Эмулятор: "http://routeremulator.com/netgear_genie/start.html",
        },
        {
          name: "NetGear (синий)",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__NetGear_Blue_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__NetGear_Blue_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__NetGear_Blue_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__NetGear_Blue_009",
          Интерфейс: "1.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2507?text=NetGear+(синий)",
          Эмулятор: "http://routeremulator.com/netgear_genie/start.html",
        },
        {
          name: "Netgear EVG-1500 (Дом.ru)",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__NetgearDomru_003",
          DHCP: "Нет",
          IPoE: "Нет",
          Каналы: "Нет",
          Интерфейс: "1.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2507?text=Netgear+EVG-1500+(Дом.ru)",
          Эмулятор: "Нет",
        },
        {
          name: "Sagemcom f@st 2804 v7",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Sagemcom_003",
          DHCP: "Нет",
          IPoE: "Нет",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Sagemcom_006",
          Интерфейс: "1.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2513?text=Sagemcom+f@st+2804+v7",
          Эмулятор: "http://linserv.ru/FAST-2804v7/",
        },
        {
          name: "Linksys Smart Wi-Fi",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Linksys_SmartWiFi_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Linksys_SmartWiFi_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Linksys_SmartWiFi_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Linksys_SmartWiFi_007",
          Интерфейс: "1.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2080?text=Linksys+Smart+Wi-Fi",
          Эмулятор:
            "https://ui.linksys.com/SmartWi-FiFamilyRouters/WRT1200AC/1.0.99.166464/",
        },
        {
          name: "Linksys e1200",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Linksys_E1200_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Linksys_E1200_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Linksys_E1200_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Linksys_E1200_008",
          Интерфейс: "1.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2080?text=Linksys+e1200",
          Эмулятор: "https://ui.linksys.com/ExpertFamily/E1200/2.0.04",
        },
        {
          name: "Netis Белый",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Netis_White_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Netis_White_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Netis_White_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Netis_White_009",
          Интерфейс: "1.1/netis.cc",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2078?text=Netis+(Белый+интерфейс)",
          Эмулятор:
            "https://www.netisru.com/Uploads/Support/Emulators/WF2780_EN/index.htm",
        },
        {
          name: "Netis Синий",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Netis_Blue_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Netis_Blue_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Netis_Blue_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Netis_Blue_008",
          Интерфейс: "1.1/netis.cc",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2078?text=Netis+(Синий+интерфейс)",
          Эмулятор: "http://linserv.ru/Netis-WF2501/",
        },
        {
          name: "Apple AirPort",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router_AirPort_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router_AirPort_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router_AirPort_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router_AirPort_007",
          Интерфейс: "Нет",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2069?text=Настройка+роутеров",
          Эмулятор: "Нет",
        },
        {
          name: "Honor",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Honor_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Honor_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Honor_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Honor_007",
          Интерфейс: "3.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2075?text=Настройка+роутеров",
          Эмулятор: "Нет",
        },
        {
          name: "Totolink",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Totolink_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Totolink_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Totolink_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Totolink_008",
          Интерфейс: "1.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2084?text=Настройка+роутеров",
          Эмулятор:
            "https://www.totolink.net/data/popwin/web/A5004NS.9.38/index.htm",
        },
        {
          name: "TRENDnet TEW-652BRP",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TRENDnet_TEW-652BRP_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TRENDnet_TEW-652BRP_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TRENDnet_TEW-652BRP_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TRENDnet_TEW-652BRP_007",
          Интерфейс: "10.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2081?text=TRENDnet+TEW-652BRP",
          Эмулятор:
            "https://www.trendnet.com/emulators/TEW-652BRP_V3.2R/wireless_basic.htm",
        },
        {
          name: "TRENDnet New (TEW-827DRU)",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TRENDnet_TEW-827DRU_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TRENDnet_TEW-827DRU_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TRENDnet_TEW-827DRU_004",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TRENDnet_TEW-827DRU_007",
          Интерфейс: "10.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2081?text=TRENDnet+New+(TEW-827DRU)",
          Эмулятор:
            "https://www.trendnet.com/emulators/TEW-827DRU_v2.0R/adm_status.html",
        },
        {
          name: "Upvel UR-354AN4G",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-354AN4G_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-354AN4G_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-354AN4G_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-354AN4G_007",
          Интерфейс: "10.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2521?text=Upvel+UR-354AN4G",
          Эмулятор: "http://linserv.ru/Upvel-UR-314AWN/",
        },
        {
          name: "Upvel UR-315BN",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-315BN_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-315BN_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-315BN_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-315BN_008",
          Интерфейс: "10.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2521?text=Upvel+UR-315BN",
          Эмулятор: "Нет",
        },
        {
          name: "Upvel UR-325BN/UR-322N4G",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-325BN_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-325BN_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-325BN_005",
          Каналы:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-325BN_008",
          Интерфейс: "10.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2521?text=Upvel+UR-325BN+/+UR-322N4G",
          Эмулятор: "http://linserv.ru/Upvel-UR-447N4G/",
        },
        {
          name: "UPVEl UR-312N4G",
          PPPoE:
            "http://kbn.ertelecom.ru/download/attachments/27963307/Upvel%20UR-312N4G%20%D0%BC%D0%B0%D0%BD%D1%83%D0%B0%D0%BB%20%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9.pdf",
          DHCP: "Нет",
          IPoE: "http://kbn.ertelecom.ru/download/attachments/27132203/Upvel%20%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9.pdf",
          Каналы: "Нет",
          Интерфейс: "10.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2521?text=UPVEl+UR-312N4G",
          Эмулятор: "http://linserv.ru/Upvel-UR825AC/",
        },
        {
          name: "Tenda Nova MW3, MW6",
          PPPoE:
            "http://kbn.ertelecom.ru/download/attachments/27963307/%D0%BC%D1%8D%D1%88%20%D1%80%D1%80%D1%80%D0%BE%D0%B5.pdf",
          DHCP: "http://kbn.ertelecom.ru/download/attachments/27963307/mash%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0.pdf",
          IPoE: "http://kbn.ertelecom.ru/download/attachments/27963307/static%20mesh.pdf",
          Каналы: "Нет",
          Интерфейс: "0.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2072?text=Tenda+Nova+MW3,+MW6",
          Эмулятор: "Нет",
        },
        {
          name: "Tp-Link DECO M4",
          PPPoE:
            "http://kbn.ertelecom.ru/download/attachments/27963307/meshup1%20%281%29.pdf",
          DHCP: "http://kbn.ertelecom.ru/download/attachments/27963307/mesh%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0%20%D1%82%D0%bf%20%D0%BB%D0%B8%D0%BD%D0%BA.pdf",
          IPoE: "http://kbn.ertelecom.ru/download/attachments/27963307/meshup1%20%281%29.pdf",
          Каналы: "Нет",
          Интерфейс: "68.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2072?text=Tp-Link+DECO+M4",
          Эмулятор: "Нет",
        },
        {
          name: "Nokia Wifi Beacon",
          PPPoE:
            "http://kbn.ertelecom.ru/download/attachments/27963307/%D0%9D%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0_Nokia_Beacon_%D1%87%D0%B5%D1%80%D0%B5%D0%B7_web_%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81.pdf",
          DHCP: "http://kbn.ertelecom.ru/download/attachments/27963307/%D0%9D%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0_Nokia_Beacon_%D1%87%D0%B5%D1%80%D0%B5%D0%B7_web_%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81.pdf",
          IPoE: "Нет",
          Каналы: "Нет",
          Интерфейс: "18.1",
          БЗ: "https://clever.ertelecom.ru/content/space/4/article/2072?text=Nokia+Wifi+Beacon",
          Эмулятор: "Нет",
        },
      ],
    })
  );
}
