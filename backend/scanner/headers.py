import requests


SECURITY_HEADERS = [
    "Strict-Transport-Security",
    "Content-Security-Policy",
    "X-Frame-Options",
    "X-Content-Type-Options",
    "Referrer-Policy",
]


def analyze_headers(target: str):
    try:
        response = requests.get(
            f"https://{target}",
            timeout=5,
            allow_redirects=True,
        )

        headers = response.headers

        results = {}

        for header in SECURITY_HEADERS:
            results[header] = header in headers

        return results

    except Exception:
        return {
            header: False
            for header in SECURITY_HEADERS
        }