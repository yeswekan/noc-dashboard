"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { uptimeData } from "@/lib/data";

export function UptimeChart() {
  return (
    <div className="bg-card-bg border border-card-border rounded-xl p-5">
      <h3 className="text-sm font-semibold mb-4">Uptime History (%)</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={uptimeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2d3a" />
            <XAxis
              dataKey="month"
              stroke="#71717a"
              fontSize={12}
              tickLine={false}
            />
            <YAxis
              stroke="#71717a"
              fontSize={12}
              tickLine={false}
              domain={[99.8, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a1d29",
                border: "1px solid #2a2d3a",
                borderRadius: "8px",
                fontSize: "12px",
              }}
              formatter={(value) => [`${value}%`, "Uptime"]}
            />
            <Bar dataKey="uptime" radius={[4, 4, 0, 0]}>
              {uptimeData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.uptime >= 99.95 ? "#22c55e" : "#f59e0b"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
