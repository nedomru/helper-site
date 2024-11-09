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
                    title: "2048",
                    thumbnail: "https://images.crazygames.com/games/2048/cover_16x9-1707828856995.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
                    iframeUrl: "https://funhtml5games.com?embed=2048bit",
                    category: "Пазл"
                },
                {
                    id: 3,
                    title: "Марио ФПС",
                    thumbnail: "https://funhtml5games.com/images/mariofps.png",
                    iframeUrl: "https://funhtml5games.com?embed=mariofps",
                    category: "Экшен"
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