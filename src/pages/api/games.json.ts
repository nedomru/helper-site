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
                },
                {
                    id: 9,
                    title: "Крестики-нолики",
                    thumbnail: "https://static.wikia.nocookie.net/pogod/images/9/90/%D0%9A%D1%80%D0%B5%D1%81%D1%82%D0%B8%D0%BA%D0%B8-%D0%BD%D0%BE%D0%BB%D0%B8%D0%BA%D0%B8.png/revision/latest?cb=20190715142427&path-prefix=ru",
                    iframeUrl: "https://solitaires-online.com/tic-tac-toe/#id=42nti8pdi7,no-nav,no-article,no-feedback,no-ads",
                    category: "Логика"
                },
                {
                    id: 10,
                    title: "Сапёр",
                    thumbnail: "https://static.wikia.nocookie.net/igromania/images/2/23/%D0%A1%D0%B0%D0%BF%D1%91%D1%80.JPG/revision/latest?cb=20140624162424&path-prefix=ru",
                    iframeUrl: "https://minesweeper.us/",
                    category: "Логика"
                },
                {
                    id: 11,
                    title: "Маджонг",
                    thumbnail: "https://маджонг.net/media/%D0%BC%D0%B0%D0%B4%D0%B6%D0%BE%D0%BD%D0%B3-%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9.png",
                    iframeUrl: "https://xn--80agci1ajg.net/",
                    category: "Логика"
                },
                {
                    id: 12,
                    title: "Реверси",
                    thumbnail: "https://www.igroved.ru/games/reversi/big/igroved_reversi_03.jpg",
                    iframeUrl: "https://logic-games.spb.ru/othello/?lang=ru",
                    category: "Логика"
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