import socket
import dns.resolver


def lookup_dns(target: str):
    data = {
        "ip": None,
        "mx": [],
        "ns": [],
    }

    try:
        data["ip"] = socket.gethostbyname(target)
    except Exception:
        pass

    try:
        answers = dns.resolver.resolve(target, "MX")
        data["mx"] = [str(r.exchange) for r in answers]
    except Exception:
        pass

    try:
        answers = dns.resolver.resolve(target, "NS")
        data["ns"] = [str(r.target) for r in answers]
    except Exception:
        pass

    return data