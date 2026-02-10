// Mock data for the dashboard

export const trafficData = [
  { time: "00:00", inbound: 2.4, outbound: 1.8 },
  { time: "02:00", inbound: 1.8, outbound: 1.2 },
  { time: "04:00", inbound: 1.2, outbound: 0.8 },
  { time: "06:00", inbound: 2.1, outbound: 1.5 },
  { time: "08:00", inbound: 4.8, outbound: 3.2 },
  { time: "10:00", inbound: 6.2, outbound: 4.5 },
  { time: "12:00", inbound: 7.1, outbound: 5.8 },
  { time: "14:00", inbound: 6.8, outbound: 5.2 },
  { time: "16:00", inbound: 7.5, outbound: 6.1 },
  { time: "18:00", inbound: 8.2, outbound: 6.8 },
  { time: "20:00", inbound: 9.1, outbound: 7.2 },
  { time: "22:00", inbound: 5.4, outbound: 4.1 },
];

export const uptimeData = [
  { month: "Sep", uptime: 99.95 },
  { month: "Oct", uptime: 99.98 },
  { month: "Nov", uptime: 99.91 },
  { month: "Dec", uptime: 99.99 },
  { month: "Jan", uptime: 99.97 },
  { month: "Feb", uptime: 99.96 },
];

export const ticketsByCategory = [
  { name: "Connectivity", value: 35, fill: "#3b82f6" },
  { name: "Billing", value: 25, fill: "#22c55e" },
  { name: "Speed", value: 20, fill: "#f59e0b" },
  { name: "Hardware", value: 12, fill: "#ef4444" },
  { name: "Other", value: 8, fill: "#8b5cf6" },
];

export const networkNodes = [
  { id: 1, name: "Core Router 1", location: "DC-East", status: "online" as const, latency: "1.2ms", throughput: "45.2 Gbps", uptime: "99.99%" },
  { id: 2, name: "Core Router 2", location: "DC-West", status: "online" as const, latency: "1.5ms", throughput: "42.8 Gbps", uptime: "99.98%" },
  { id: 3, name: "Edge Switch A", location: "POP-North", status: "online" as const, latency: "3.2ms", throughput: "18.5 Gbps", uptime: "99.95%" },
  { id: 4, name: "Edge Switch B", location: "POP-South", status: "warning" as const, latency: "8.7ms", throughput: "12.1 Gbps", uptime: "99.87%" },
  { id: 5, name: "Edge Switch C", location: "POP-East", status: "online" as const, latency: "2.8ms", throughput: "15.3 Gbps", uptime: "99.96%" },
  { id: 6, name: "Distribution SW 1", location: "Hub-Central", status: "online" as const, latency: "2.1ms", throughput: "22.4 Gbps", uptime: "99.97%" },
  { id: 7, name: "Distribution SW 2", location: "Hub-West", status: "maintenance" as const, latency: "-", throughput: "-", uptime: "99.92%" },
  { id: 8, name: "Access Point AP-01", location: "Zone A", status: "online" as const, latency: "4.5ms", throughput: "1.2 Gbps", uptime: "99.90%" },
  { id: 9, name: "Access Point AP-02", location: "Zone B", status: "offline" as const, latency: "-", throughput: "-", uptime: "98.50%" },
  { id: 10, name: "Firewall FW-01", location: "DC-East", status: "online" as const, latency: "0.8ms", throughput: "38.7 Gbps", uptime: "99.99%" },
];

export const customers = [
  { id: 1, name: "Acme Corporation", plan: "Enterprise 10G", status: "active" as const, bandwidth: "8.2 Gbps", monthlyRevenue: "$4,500", joinDate: "2023-03-15" },
  { id: 2, name: "TechStart Inc.", plan: "Business 1G", status: "active" as const, bandwidth: "720 Mbps", monthlyRevenue: "$899", joinDate: "2023-06-22" },
  { id: 3, name: "City Hospital", plan: "Enterprise 5G", status: "active" as const, bandwidth: "3.8 Gbps", monthlyRevenue: "$2,800", joinDate: "2022-11-01" },
  { id: 4, name: "Summit Schools", plan: "Business 1G", status: "active" as const, bandwidth: "650 Mbps", monthlyRevenue: "$799", joinDate: "2023-01-10" },
  { id: 5, name: "Riverside Mall", plan: "Enterprise 2G", status: "suspended" as const, bandwidth: "0 Mbps", monthlyRevenue: "$1,200", joinDate: "2023-04-18" },
  { id: 6, name: "Green Valley HOA", plan: "Residential Pro", status: "active" as const, bandwidth: "450 Mbps", monthlyRevenue: "$299", joinDate: "2024-01-05" },
  { id: 7, name: "Metro PD HQ", plan: "Enterprise 5G", status: "active" as const, bandwidth: "4.1 Gbps", monthlyRevenue: "$3,200", joinDate: "2022-08-20" },
  { id: 8, name: "DataVault LLC", plan: "Enterprise 10G", status: "active" as const, bandwidth: "9.5 Gbps", monthlyRevenue: "$5,500", joinDate: "2022-05-12" },
  { id: 9, name: "CafeConnect", plan: "Business 500M", status: "active" as const, bandwidth: "380 Mbps", monthlyRevenue: "$499", joinDate: "2024-02-28" },
  { id: 10, name: "Atlas Logistics", plan: "Business 1G", status: "pending" as const, bandwidth: "-", monthlyRevenue: "$899", joinDate: "2025-01-30" },
];

export const tickets = [
  { id: "TKT-1042", customer: "Acme Corporation", subject: "Intermittent packet loss on primary link", priority: "high" as const, status: "open" as const, created: "2025-02-08 09:15", assignee: "Mike Chen" },
  { id: "TKT-1041", customer: "City Hospital", subject: "Request for bandwidth upgrade", priority: "medium" as const, status: "in_progress" as const, created: "2025-02-07 14:30", assignee: "Sarah Kim" },
  { id: "TKT-1040", customer: "Summit Schools", subject: "DNS resolution failures", priority: "high" as const, status: "open" as const, created: "2025-02-07 11:20", assignee: "Unassigned" },
  { id: "TKT-1039", customer: "CafeConnect", subject: "Billing discrepancy for January", priority: "low" as const, status: "in_progress" as const, created: "2025-02-06 16:45", assignee: "Lisa Park" },
  { id: "TKT-1038", customer: "Green Valley HOA", subject: "New installation scheduling", priority: "medium" as const, status: "open" as const, created: "2025-02-06 10:00", assignee: "Sarah Kim" },
  { id: "TKT-1037", customer: "TechStart Inc.", subject: "VPN tunnel connectivity issue", priority: "high" as const, status: "resolved" as const, created: "2025-02-05 08:30", assignee: "Mike Chen" },
  { id: "TKT-1036", customer: "Metro PD HQ", subject: "Redundancy failover test request", priority: "medium" as const, status: "resolved" as const, created: "2025-02-04 13:15", assignee: "Alex Rivera" },
  { id: "TKT-1035", customer: "DataVault LLC", subject: "SLA report for Q4 2024", priority: "low" as const, status: "closed" as const, created: "2025-02-03 09:00", assignee: "Lisa Park" },
  { id: "TKT-1034", customer: "Riverside Mall", subject: "Service restoration after payment", priority: "medium" as const, status: "open" as const, created: "2025-02-02 15:30", assignee: "Unassigned" },
  { id: "TKT-1033", customer: "Atlas Logistics", subject: "Pre-installation site survey", priority: "low" as const, status: "in_progress" as const, created: "2025-02-01 11:00", assignee: "Alex Rivera" },
];

export const recentAlerts = [
  { id: 1, message: "Edge Switch B: High latency detected (8.7ms)", severity: "warning" as const, time: "12 min ago" },
  { id: 2, message: "Access Point AP-02: Device unreachable", severity: "critical" as const, time: "45 min ago" },
  { id: 3, message: "Distribution SW 2: Maintenance window started", severity: "info" as const, time: "2 hrs ago" },
  { id: 4, message: "Core Router 1: Firmware update available (v4.2.1)", severity: "info" as const, time: "5 hrs ago" },
  { id: 5, message: "Firewall FW-01: 234 blocked intrusion attempts", severity: "warning" as const, time: "6 hrs ago" },
];
