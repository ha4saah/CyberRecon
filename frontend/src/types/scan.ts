export interface Summary {
  risk_score: number;
  risk_level: string;
  scan_time: number;
  open_ports: number;
}

export interface DNSData {
  ip: string | null;
  mx: string[];
  ns: string[];
}

export interface PortData {
  port: number;
  service: string;
}

export interface SecurityHeaders {
  "Strict-Transport-Security": boolean;
  "Content-Security-Policy": boolean;
  "X-Frame-Options": boolean;
  "X-Content-Type-Options": boolean;
  "Referrer-Policy": boolean;
}

export interface SSLData {
  valid: boolean;
  issuer: string | null;
  expires: string | null;
  days_remaining: number | null;
}

export interface WhoisData {
  domain_name: string | null;
  registrar: string | null;
  creation_date: string | null;
  expiration_date: string | null;
  country: string | null;
  organization: string | null;
}

export interface TechnologyData {
  server: string;
  powered_by: string;
  cdn: string;
  cms: string;
  framework: string;
}

export interface Finding {
  severity: string;
  title: string;
  description: string;
}

export interface Subdomain {
  subdomain: string;
  ip: string;
}

export interface ScanResponse {
  success: boolean;
  target: string;

  summary: Summary;

  dns: DNSData;

  ports: PortData[];

  headers: SecurityHeaders;

  ssl: SSLData;

  whois: WhoisData;

  technology: TechnologyData;

  findings: Finding[];

  recommendations: string[];

  subdomains: Subdomain[];
}