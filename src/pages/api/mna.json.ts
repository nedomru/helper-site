export async function GET() {
    return new Response(
        JSON.stringify({
            mna: [
                {
                    "name": "Interzet",
                    "authorization": "IPoE Static",
                    "connection": "Ethernet",
                    "link": "https://clever.ertelecom.ru/content/space/4/folder/582/article/3289"
                },
                {
                    "name": "Акадо (СПБ)",
                    "authorization": "DHCP mac+vlan",
                    "connection": "Ethernet",
                    "link": "https://clever.ertelecom.ru/content/space/4/folder/582/article/3291"
                },
                {
                    "name": "Инфоцентр (Сосновый бор)",
                    "authorization": "IPoE Static",
                    "connection": "Ethernet",
                    "link": "https://clever.ertelecom.ru/content/space/4/folder/582/article/3285"
                },
                {
                    "name": "Конвекс/ТКС (ЕКБ)",
                    "authorization": "IPoE Static / PPTP (общежития)",
                    "connection": "Ethernet",
                    "link": "https://clever.ertelecom.ru/content/space/4/folder/582/article/2769"
                },
                {
                    "name": "Westcall (СПб)",
                    "authorization": "DHCP mac+vlan",
                    "connection": "Ethernet",
                    "link": "https://clever.ertelecom.ru/content/space/4/folder/582/article/3286"
                },
                {
                    "name": "Кредолинк (СПб)",
                    "authorization": "DHCP mac+vlan",
                    "connection": "Ethernet",
                    "link": "https://clever.ertelecom.ru/content/space/4/folder/582/article/3283"
                },
                {
                    "name": "MSNet (СПБ)",
                    "authorization": "DHCP mac+vlan",
                    "connection": "Ethernet",
                    "link": "https://clever.ertelecom.ru/content/space/4/folder/582/article/3287"
                },
                {
                    "name": "С-Телеком МСК (Самолет)",
                    "authorization": "DHCP / PPPoE",
                    "connection": "Ethernet",
                    "link": "https://clever.ertelecom.ru/content/space/4/folder/582/article/3238"
                },
                {
                    "name": "Дианэт (Барнаул и область)",
                    "authorization": "PPPoE / L2TP",
                    "connection": "Ethernet",
                    "link": "https://clever.ertelecom.ru/content/space/4/folder/582/article/2646"
                },
                {
                    "name": "НТС (Томск)",
                    "authorization": "IPoE DHCP",
                    "connection": "Ethernet",
                    "link": "https://clever.ertelecom.ru/content/space/4/article/3648"
                },
                {
                    "name": "Кроникс/Rinet",
                    "authorization": "DHCP / DHCP mac+vlan",
                    "connection": "Ethernet",
                    "link": "https://clever.ertelecom.ru/content/space/4/article/3246/page/3"
                }
            ],
        }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
                "Access-Control-Allow-Headers": "Content-Type, Authorization"
            }
        }
    );
}
