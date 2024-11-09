export async function GET() {
    return new Response(
        JSON.stringify({
            games: [
                {
                    id: 1,
                    title: "Vampire Survivors",
                    thumbnail: "https://img.itch.zone/aW1nLzcyNTA5NDUucG5n/original/hIx2ds.png",
                    iframeUrl: "https://html-classic.itch.zone/html/5185382/index.html",
                    category: "Экшен"
                },
                {
                    id: 2,
                    title: "Шахматы ",
                    thumbnail: "https://play.chessbase.com/Images/PlayChessLogo.png",
                    iframeUrl: "https://fritz.chessbase.com/ru/Fritz",
                    category: "Логика"
                },
                {
                    id: 3,
                    title: "2048",
                    thumbnail: "https://images.crazygames.com/games/2048/cover_16x9-1707828856995.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
                    iframeUrl: "https://funhtml5games.com?embed=2048bit",
                    category: "Пазл"
                },
                {
                    id: 4,
                    title: "Марио ФПС",
                    thumbnail: "https://funhtml5games.com/images/mariofps.png",
                    iframeUrl: "https://funhtml5games.com?embed=mariofps",
                    category: "Экшен"
                },
                {
                    id: 5,
                    title: "Summer Maze",
                    thumbnail: "https://www.jopi.com/cdn-cgi/image/quality=70,width=256,height=256,f=auto/img/t/summer-maze.png",
                    iframeUrl: "https://jopi.com/gam/summer-maze",
                    category: "Пазл"

                },
                {
                    id: 6,
                    title: "Key Quest",
                    thumbnail: "https://www.jopi.com/cdn-cgi/image/quality=70,width=256,height=256,f=auto/img/t/key-quest.png",
                    iframeUrl: "https://jopi.com/gam/key-quest",
                    category: "Квест"
                },
                {
                    id: 7,
                    title: "Go Up Dash",
                    thumbnail: "https://www.jopi.com/cdn-cgi/image/quality=70,width=256,height=256,f=auto/img/t/go-up-dash.png",
                    iframeUrl: "https://jopi.com/gam/go-up-dash",
                    category: "Экшен"
                },
                {
                    id: 8,
                    title: "Солитёр",
                    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/FreeCell_%28Aisleriot_2.31.2%29_ru.png/300px-FreeCell_%28Aisleriot_2.31.2%29_ru.png",
                    iframeUrl: "https://solitaires-online.com/",
                    category: "Карты"
                }
            ]
        }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
                "Access-Control-Allow-Headers": "Content-Type, Authorization"
            }
        })
}