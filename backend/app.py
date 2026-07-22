import os
import time

from flask import Flask, request, jsonify, send_file
from flask_cors import CORS

from scanner.validator import validate_target
from scanner.dns_lookup import lookup_dns
from scanner.port_scanner import scan_ports
from scanner.headers import analyze_headers
from scanner.ssl_checker import check_ssl
from scanner.whois_lookup import lookup_whois
from scanner.technology import detect_technology
from scanner.vulnerability import analyze_vulnerabilities
from scanner.subdomain import find_subdomains
from report_generator import generate_report

app = Flask(__name__)

CORS(app)

@app.get("/")
def home():

    return jsonify({
        "project": "CyberRecon API",
        "status": "running"
    })



def calculate_risk(
    ports,
    headers,
    ssl_info,
    findings
):

    risk_score = 100


    if any(
        port["port"] == 80
        for port in ports
    ):

        risk_score -= 5



    missing_headers = [

        header

        for header, enabled in headers.items()

        if not enabled

    ]


    risk_score -= len(missing_headers) * 5



    if not ssl_info.get("valid"):

        risk_score -= 15



    for finding in findings:

        if finding["severity"] == "HIGH":

            risk_score -= 20

        elif finding["severity"] == "MEDIUM":

            risk_score -= 10



    risk_score = max(
        risk_score,
        0
    )



    if risk_score >= 80:

        risk_level = "Low"

    elif risk_score >= 60:

        risk_level = "Medium"

    else:

        risk_level = "High"



    return risk_score, risk_level




@app.post("/api/scan")
def scan():

    start = time.perf_counter()


    data = request.get_json()

    target = data.get(
        "target",
        ""
    ).strip()



    if not validate_target(target):

        return jsonify({

            "success": False,

            "message": "Invalid target."

        }), 400



    # Recon modules

    dns = lookup_dns(target)

    ports = scan_ports(target)

    headers = analyze_headers(target)

    ssl_info = check_ssl(target)

    whois_info = lookup_whois(target)

    technology = detect_technology(target)

    subdomains = find_subdomains(target)



    # Vulnerability analysis

    findings = analyze_vulnerabilities(

        ports,

        headers,

        ssl_info,

        technology

    )



    scan_time = round(

        time.perf_counter() - start,

        2

    )



    risk_score, risk_level = calculate_risk(

        ports,

        headers,

        ssl_info,

        findings

    )



    recommendations = []



    for finding in findings:

        recommendations.append(

            finding["description"]

        )



    if not recommendations:

        recommendations.append(

            "No security issues detected."

        )



    result = {


        "success": True,


        "target": target,



        "summary": {

            "risk_score": risk_score,

            "risk_level": risk_level,

            "scan_time": scan_time,

            "open_ports": len(ports)

        },



        "dns": dns,

        "ports": ports,

        "headers": headers,

        "ssl": ssl_info,

        "whois": whois_info,

        "technology": technology,

        "findings": findings,

        "recommendations": recommendations,

        "subdomains": subdomains

    }



    return jsonify(result)





@app.post("/api/report")
def create_report():

    data = request.get_json()


    filename = generate_report(data)


    return send_file(

        filename,

        as_attachment=True,

        download_name="CyberRecon_Security_Report.pdf"

    )





if __name__ == "__main__":

    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 5000)),
        debug=False
    )