import ipaddress
import re

DOMAIN_REGEX = re.compile(
    r"^(?:[a-zA-Z0-9]"
    r"(?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+"
    r"[A-Za-z]{2,}$"
)


def validate_target(target: str) -> bool:
    target = target.strip()

    if not target:
        return False

    try:
        ipaddress.ip_address(target)
        return True
    except ValueError:
        pass

    return bool(DOMAIN_REGEX.fullmatch(target))