import whois
from datetime import datetime


def format_date(value):

    if isinstance(value, list):

        value = value[0]


    if isinstance(value, datetime):

        return value.strftime("%d %B %Y")


    return str(value) if value else None



def lookup_whois(target: str):

    try:

        data = whois.whois(target)


        return {

            "domain_name": data.domain_name,

            "registrar": data.registrar,

            "creation_date": format_date(
                data.creation_date
            ),

            "expiration_date": format_date(
                data.expiration_date
            ),

            "country": data.country,

            "organization": data.org

        }


    except Exception as e:

        print("WHOIS Error:", e)

        return {

            "domain_name": None,

            "registrar": None,

            "creation_date": None,

            "expiration_date": None,

            "country": None,

            "organization": None

        }