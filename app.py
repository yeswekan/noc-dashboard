from flask import Flask, render_template, jsonify

app = Flask(__name__)

# --- Mock Data ---

TRAFFIC_DATA = [
    {"time": "00:00", "inbound": 2.4, "outbound": 1.8},
    {"time": "02:00", "inbound": 1.8, "outbound": 1.2},
    {"time": "04:00", "inbound": 1.2, "outbound": 0.8},
    {"time": "06:00", "inbound": 2.1, "outbound": 1.5},
    {"time": "08:00", "inbound": 4.8, "outbound": 3.2},
    {"time": "10:00", "inbound": 6.2, "outbound": 4.5},
    {"time": "12:00", "inbound": 7.1, "outbound": 5.8},
    {"time": "14:00", "inbound": 6.8, "outbound": 5.2},
    {"time": "16:00", "inbound": 7.5, "outbound": 6.1},
    {"time": "18:00", "inbound": 8.2, "outbound": 6.8},
    {"time": "20:00", "inbound": 9.1, "outbound": 7.2},
    {"time": "22:00", "inbound": 5.4, "outbound": 4.1},
]

UPTIME_DATA = [
    {"month": "Sep", "uptime": 99.95},
    {"month": "Oct", "uptime": 99.98},
    {"month": "Nov", "uptime": 99.91},
    {"month": "Dec", "uptime": 99.99},
    {"month": "Jan", "uptime": 99.97},
    {"month": "Feb", "uptime": 99.96},
]

TICKETS_BY_CATEGORY = [
    {"name": "Connectivity", "value": 35, "color": "#3b82f6"},
    {"name": "Billing", "value": 25, "color": "#22c55e"},
    {"name": "Speed", "value": 20, "color": "#f59e0b"},
    {"name": "Hardware", "value": 12, "color": "#ef4444"},
    {"name": "Other", "value": 8, "color": "#8b5cf6"},
]

NETWORK_NODES = [
    {"id": 1, "name": "Core Router 1", "location": "DC-East", "status": "online", "latency": "1.2ms", "throughput": "45.2 Gbps", "uptime": "99.99%"},
    {"id": 2, "name": "Core Router 2", "location": "DC-West", "status": "online", "latency": "1.5ms", "throughput": "42.8 Gbps", "uptime": "99.98%"},
    {"id": 3, "name": "Edge Switch A", "location": "POP-North", "status": "online", "latency": "3.2ms", "throughput": "18.5 Gbps", "uptime": "99.95%"},
    {"id": 4, "name": "Edge Switch B", "location": "POP-South", "status": "warning", "latency": "8.7ms", "throughput": "12.1 Gbps", "uptime": "99.87%"},
    {"id": 5, "name": "Edge Switch C", "location": "POP-East", "status": "online", "latency": "2.8ms", "throughput": "15.3 Gbps", "uptime": "99.96%"},
    {"id": 6, "name": "Distribution SW 1", "location": "Hub-Central", "status": "online", "latency": "2.1ms", "throughput": "22.4 Gbps", "uptime": "99.97%"},
    {"id": 7, "name": "Distribution SW 2", "location": "Hub-West", "status": "maintenance", "latency": "-", "throughput": "-", "uptime": "99.92%"},
    {"id": 8, "name": "Access Point AP-01", "location": "Zone A", "status": "online", "latency": "4.5ms", "throughput": "1.2 Gbps", "uptime": "99.90%"},
    {"id": 9, "name": "Access Point AP-02", "location": "Zone B", "status": "offline", "latency": "-", "throughput": "-", "uptime": "98.50%"},
    {"id": 10, "name": "Firewall FW-01", "location": "DC-East", "status": "online", "latency": "0.8ms", "throughput": "38.7 Gbps", "uptime": "99.99%"},
]

CUSTOMERS = [
    {"id": 1, "name": "Acme Corporation", "plan": "Enterprise 10G", "status": "active", "bandwidth": "8.2 Gbps", "revenue": "$4,500", "join_date": "2023-03-15"},
    {"id": 2, "name": "TechStart Inc.", "plan": "Business 1G", "status": "active", "bandwidth": "720 Mbps", "revenue": "$899", "join_date": "2023-06-22"},
    {"id": 3, "name": "City Hospital", "plan": "Enterprise 5G", "status": "active", "bandwidth": "3.8 Gbps", "revenue": "$2,800", "join_date": "2022-11-01"},
    {"id": 4, "name": "Summit Schools", "plan": "Business 1G", "status": "active", "bandwidth": "650 Mbps", "revenue": "$799", "join_date": "2023-01-10"},
    {"id": 5, "name": "Riverside Mall", "plan": "Enterprise 2G", "status": "suspended", "bandwidth": "0 Mbps", "revenue": "$1,200", "join_date": "2023-04-18"},
    {"id": 6, "name": "Green Valley HOA", "plan": "Residential Pro", "status": "active", "bandwidth": "450 Mbps", "revenue": "$299", "join_date": "2024-01-05"},
    {"id": 7, "name": "Metro PD HQ", "plan": "Enterprise 5G", "status": "active", "bandwidth": "4.1 Gbps", "revenue": "$3,200", "join_date": "2022-08-20"},
    {"id": 8, "name": "DataVault LLC", "plan": "Enterprise 10G", "status": "active", "bandwidth": "9.5 Gbps", "revenue": "$5,500", "join_date": "2022-05-12"},
    {"id": 9, "name": "CafeConnect", "plan": "Business 500M", "status": "active", "bandwidth": "380 Mbps", "revenue": "$499", "join_date": "2024-02-28"},
    {"id": 10, "name": "Atlas Logistics", "plan": "Business 1G", "status": "pending", "bandwidth": "-", "revenue": "$899", "join_date": "2025-01-30"},
]

TICKETS = [
    {"id": "TKT-1042", "customer": "Acme Corporation", "subject": "Intermittent packet loss on primary link", "priority": "high", "status": "open", "created": "2025-02-08 09:15", "assignee": "Mike Chen"},
    {"id": "TKT-1041", "customer": "City Hospital", "subject": "Request for bandwidth upgrade", "priority": "medium", "status": "in_progress", "created": "2025-02-07 14:30", "assignee": "Sarah Kim"},
    {"id": "TKT-1040", "customer": "Summit Schools", "subject": "DNS resolution failures", "priority": "high", "status": "open", "created": "2025-02-07 11:20", "assignee": "Unassigned"},
    {"id": "TKT-1039", "customer": "CafeConnect", "subject": "Billing discrepancy for January", "priority": "low", "status": "in_progress", "created": "2025-02-06 16:45", "assignee": "Lisa Park"},
    {"id": "TKT-1038", "customer": "Green Valley HOA", "subject": "New installation scheduling", "priority": "medium", "status": "open", "created": "2025-02-06 10:00", "assignee": "Sarah Kim"},
    {"id": "TKT-1037", "customer": "TechStart Inc.", "subject": "VPN tunnel connectivity issue", "priority": "high", "status": "resolved", "created": "2025-02-05 08:30", "assignee": "Mike Chen"},
    {"id": "TKT-1036", "customer": "Metro PD HQ", "subject": "Redundancy failover test request", "priority": "medium", "status": "resolved", "created": "2025-02-04 13:15", "assignee": "Alex Rivera"},
    {"id": "TKT-1035", "customer": "DataVault LLC", "subject": "SLA report for Q4 2024", "priority": "low", "status": "closed", "created": "2025-02-03 09:00", "assignee": "Lisa Park"},
    {"id": "TKT-1034", "customer": "Riverside Mall", "subject": "Service restoration after payment", "priority": "medium", "status": "open", "created": "2025-02-02 15:30", "assignee": "Unassigned"},
    {"id": "TKT-1033", "customer": "Atlas Logistics", "subject": "Pre-installation site survey", "priority": "low", "status": "in_progress", "created": "2025-02-01 11:00", "assignee": "Alex Rivera"},
]

ALERTS = [
    {"id": 1, "message": "Edge Switch B: High latency detected (8.7ms)", "severity": "warning", "time": "12 min ago"},
    {"id": 2, "message": "Access Point AP-02: Device unreachable", "severity": "critical", "time": "45 min ago"},
    {"id": 3, "message": "Distribution SW 2: Maintenance window started", "severity": "info", "time": "2 hrs ago"},
    {"id": 4, "message": "Core Router 1: Firmware update available (v4.2.1)", "severity": "info", "time": "5 hrs ago"},
    {"id": 5, "message": "Firewall FW-01: 234 blocked intrusion attempts", "severity": "warning", "time": "6 hrs ago"},
]


# --- Routes ---

@app.route("/")
def dashboard():
    stats = {
        "uptime": "99.96%",
        "customers": "1,247",
        "open_tickets": "18",
        "active_nodes": "142/148",
    }
    return render_template("dashboard.html", stats=stats, alerts=ALERTS)


@app.route("/network")
def network():
    counts = {
        "online": sum(1 for n in NETWORK_NODES if n["status"] == "online"),
        "warning": sum(1 for n in NETWORK_NODES if n["status"] == "warning"),
        "offline": sum(1 for n in NETWORK_NODES if n["status"] == "offline"),
        "maintenance": sum(1 for n in NETWORK_NODES if n["status"] == "maintenance"),
    }
    return render_template("network.html", nodes=NETWORK_NODES, counts=counts)


@app.route("/customers")
def customers():
    counts = {
        "total": len(CUSTOMERS),
        "active": sum(1 for c in CUSTOMERS if c["status"] == "active"),
        "suspended": sum(1 for c in CUSTOMERS if c["status"] == "suspended"),
    }
    return render_template("customers.html", customers=CUSTOMERS, counts=counts)


@app.route("/tickets")
def tickets():
    counts = {
        "open": sum(1 for t in TICKETS if t["status"] == "open"),
        "in_progress": sum(1 for t in TICKETS if t["status"] == "in_progress"),
        "resolved": sum(1 for t in TICKETS if t["status"] == "resolved"),
    }
    return render_template("tickets.html", tickets=TICKETS, counts=counts)


@app.route("/settings")
def settings():
    return render_template("settings.html")


# --- API endpoints for chart data ---

@app.route("/api/traffic")
def api_traffic():
    return jsonify(TRAFFIC_DATA)


@app.route("/api/uptime")
def api_uptime():
    return jsonify(UPTIME_DATA)


@app.route("/api/tickets-by-category")
def api_tickets_by_category():
    return jsonify(TICKETS_BY_CATEGORY)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, debug=True)
