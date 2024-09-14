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
      ],
    })
  );
}
