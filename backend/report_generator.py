from reportlab.lib.pagesizes import letter
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer
)
from reportlab.lib.styles import getSampleStyleSheet
from datetime import datetime



def generate_report(data):

    filename = "CyberRecon_Security_Report.pdf"


    doc = SimpleDocTemplate(
        filename,
        pagesize=letter
    )


    styles = getSampleStyleSheet()

    content = []



    def add_title(text):

        content.append(
            Paragraph(
                text,
                styles["Heading2"]
            )
        )

        content.append(
            Spacer(1, 12)
        )



    def add_text(text):

        content.append(
            Paragraph(
                text,
                styles["Normal"]
            )
        )

        content.append(
            Spacer(1, 8)
        )



    # Title

    content.append(
        Paragraph(
            "CyberRecon Security Assessment Report",
            styles["Title"]
        )
    )

    content.append(
        Spacer(1,20)
    )



    add_text(
        f"""
        Generated:
        {datetime.now().strftime("%d %B %Y %H:%M")}
        """
    )



    # Target

    add_title("Target Information")


    add_text(
        f"""
        Target:
        {data.get("target")}
        """
    )



    # Summary

    add_title("Risk Assessment")


    summary = data.get(
        "summary",
        {}
    )


    add_text(
        f"""
        Risk Score:
        {summary.get("risk_score")}/100
        <br/>
        Risk Level:
        {summary.get("risk_level")}
        <br/>
        Open Ports:
        {summary.get("open_ports")}
        <br/>
        Scan Time:
        {summary.get("scan_time")} seconds
        """
    )



    # DNS

    add_title("DNS Intelligence")


    dns = data.get(
        "dns",
        {}
    )


    add_text(
        f"""
        IP:
        {dns.get("ip")}
        <br/>
        MX:
        {dns.get("mx")}
        <br/>
        Name Servers:
        {dns.get("ns")}
        """
    )



    # SSL

    add_title("SSL Analysis")


    ssl = data.get(
        "ssl",
        {}
    )


    add_text(
        f"""
        Status:
        {ssl.get("valid")}
        <br/>
        Issuer:
        {ssl.get("issuer")}
        <br/>
        Expiry:
        {ssl.get("expiry")}
        """
    )



    # WHOIS

    add_title("WHOIS Intelligence")


    whois = data.get(
        "whois",
        {}
    )


    add_text(
        f"""
        Registrar:
        {whois.get("registrar")}
        <br/>
        Organization:
        {whois.get("organization")}
        <br/>
        Created:
        {whois.get("creation_date")}
        <br/>
        Expires:
        {whois.get("expiration_date")}
        """
    )



    # Technology

    add_title("Technology Fingerprinting")


    tech = data.get(
        "technology",
        {}
    )


    add_text(
        f"""
        Server:
        {tech.get("server")}
        <br/>
        CDN:
        {tech.get("cdn")}
        <br/>
        CMS:
        {tech.get("cms")}
        <br/>
        Framework:
        {tech.get("framework")}
        """
    )



    # Ports

    add_title("Open Ports")


    for port in data.get(
        "ports",
        []
    ):

        add_text(
            f"""
            Port:
            {port.get("port")}
            -
            {port.get("service")}
            """
        )



    # Recommendations

    add_title(
        "Security Recommendations"
    )


    for item in data.get(
        "recommendations",
        []
    ):

        add_text(
            "• " + item
        )



    doc.build(content)


    return filename