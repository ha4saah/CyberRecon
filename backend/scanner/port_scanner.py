import socket

COMMON_PORTS = {
    21: "FTP",
    22: "SSH",
    23: "Telnet",
    25: "SMTP",
    53: "DNS",
    80: "HTTP",
    110: "POP3",
    143: "IMAP",
    443: "HTTPS",
    3306: "MySQL",
    3389: "RDP",
    8080: "HTTP Alternate",
}


def scan_ports(host: str):
    results = []

    for port, service in COMMON_PORTS.items():
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(0.4)

        try:
            if sock.connect_ex((host, port)) == 0:
                results.append({
                    "port": port,
                    "service": service
                })
        except Exception:
            pass
        finally:
            sock.close()

    return results