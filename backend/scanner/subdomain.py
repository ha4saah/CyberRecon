import dns.resolver


COMMON_SUBDOMAINS = [
    "www",
    "mail",
    "api",
    "dev",
    "test",
    "admin",
    "portal",
    "vpn",
    "staging",
    "blog"
]


def find_subdomains(domain):

    found = []


    for sub in COMMON_SUBDOMAINS:

        target = f"{sub}.{domain}"


        try:

            answers = dns.resolver.resolve(
                target,
                "A"
            )


            for answer in answers:

                found.append({

                    "subdomain": target,

                    "ip": answer.to_text()

                })


        except:

            pass


    return found