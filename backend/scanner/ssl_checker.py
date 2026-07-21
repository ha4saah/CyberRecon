import ssl
import socket
from datetime import datetime


def check_ssl(target: str):

    result = {
        "valid": False,
        "issuer": None,
        "expires": None,
        "days_remaining": None
    }

    try:

        context = ssl.create_default_context()

        with socket.create_connection(
            (target, 443),
            timeout=5
        ) as sock:

            with context.wrap_socket(
                sock,
                server_hostname=target
            ) as ssock:

                cert = ssock.getpeercert()


        expiry = cert["notAfter"]

        expiry_date = datetime.strptime(
            expiry,
            "%b %d %H:%M:%S %Y %Z"
        )


        days = (
            expiry_date - datetime.utcnow()
        ).days


        issuer = dict(
            x[0]
            for x in cert["issuer"]
        )


        result["valid"] = True
        result["issuer"] = issuer.get("organizationName")
        result["expires"] = expiry_date.strftime(
            "%Y-%m-%d"
        )
        result["days_remaining"] = days


    except Exception as e:
        pass


    return result