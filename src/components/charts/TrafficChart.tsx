"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { trafficData } from "@/lib/data";

export function TrafficChart() {
  return (
    <div className="bg-card-bg border border-card-border rounded-xl p-5">
      <h3 className="text-sm font-semibold mb-4">Network Traffic (Gbps)</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={trafficData}>
            <defs>
              <linearGradient id="inboundGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="outboundGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2d3a" />
            <XAxis
              dataKey="time"
              stroke="#71717a"
              fontSize={12}
              tickLine={false}
            />
            <YAxis stroke="#71717a" fontSize={12} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a1d29",
                border: "1px solid #2a2d3a",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <Area
              type="monotone"
              dataKey="inbound"
              stroke="#3b82f6"
              fill="url(#inboundGrad)"
              strokeWidth={2}
              name="Inbound"
            />
            <Area
              type="monotone"
              dataKey="outbound"
              stroke="#22c55e"
              fill="url(#outboundGrad)"
              strokeWidth={2}
              name="Outbound"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center gap-6 mt-3 text-xs text-muted">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Inbound
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-success" />
          Outbound
        </div>
      </div>
    </div>
  );
}
