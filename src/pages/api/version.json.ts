export async function GET() {
    return new Response(
        JSON.stringify({
            "addons":
                {
                    "{abcd1234-1abc-1234-12ab-abcdef123456}":
                        {
                            "updates":
                                [
                                    {
                                        "version": "2.2",
                                        "update_link": "https://github.com/AuthFailed/domru-helper/releases/download/2.2/domhelper.xpi"
                                    },
                                    {
                                        "version": "2.3",
                                        "update_link": "https://github.com/AuthFailed/domru-helper/releases/download/2.3/domhelper.xpi",
                                        "update_hash": "sha256:fe93c2156f05f20621df1723b0f39c8ab28cdbeec342efa95535d3abff932096"
                                    },
                                    {
                                        "version": "2.6",
                                        "update_link": "https://github.com/AuthFailed/domru-helper/releases/download/2.6/domhelper.xpi",
                                        "applications": {
                                            "gecko": {"strict_min_version": "44"}
                                        }
                                    },
                                    {
                                        "version": "2.8.2",
                                        "update_link": "https://github.com/AuthFailed/domru-helper/releases/download/2.8.2/domhelper.xpi",
                                        "update_info_url": "https://helper.chrsnv.ru/wiki/versions/2-7"
                                    }
                                ]
                        }
                }
        }))
}
