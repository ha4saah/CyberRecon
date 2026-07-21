import requests


def detect_technology(target):

    try:

        if not target.startswith("http"):
            url = "https://" + target
        else:
            url = target


        response = requests.get(
            url,
            timeout=5,
            headers={
                "User-Agent": "CyberRecon Scanner"
            }
        )


        headers = response.headers


        technology = {

            "server": headers.get(
                "Server",
                "Unknown"
            ),

            "powered_by": headers.get(
                "X-Powered-By",
                "Unknown"
            ),

            "cdn": "Unknown",

            "cms": "Unknown",

            "framework": "Unknown"

        }



        # CDN detection

        if "cloudflare" in str(headers).lower():

            technology["cdn"] = "Cloudflare"


        elif "akamai" in str(headers).lower():

            technology["cdn"] = "Akamai"



        # CMS detection

        body = response.text.lower()


        if "wp-content" in body:

            technology["cms"] = "WordPress"



        # Framework detection

        if "react" in body:

            technology["framework"] = "React"



        elif "vue" in body:

            technology["framework"] = "Vue"



        elif "angular" in body:

            technology["framework"] = "Angular"



        return technology



    except Exception as e:

        return {

            "server": "Unknown",

            "powered_by": "Unknown",

            "cdn": "Unknown",

            "cms": "Unknown",

            "framework": "Unknown"

        }