import {
  Server,
  Wifi,
  AlertTriangle,
  Wrench,
} from "lucide-react";
import { networkNodes } from "@/lib/data";
import { StatusBadge } from "@/components/StatusBadge";
import { StatCard } from "@/components/StatCard";

export default function NetworkPage() {
  const onlineCount = networkNodes.filter((n) => n.status === "online").length;
  const warningCount = networkNodes.filter((n) => n.status === "warning").length;
  const offlineCount = networkNodes.filter((n) => n.status === "offline").length;
  const maintCount = networkNodes.filter(
    (n) => n.status === "maintenance"
  ).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Network Status</h1>
        <p className="text-sm text-muted mt-1">
          Monitor all network infrastructure nodes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Online"
          value={String(onlineCount)}
          icon={Server}
          iconColor="text-success"
        />
        <StatCard
          title="Warnings"
          value={String(warningCount)}
          icon={AlertTriangle}
          iconColor="text-warning"
        />
        <StatCard
          title="Offline"
          value={String(offlineCount)}
          icon={Wifi}
          iconColor="text-danger"
        />
        <StatCard
          title="Maintenance"
          value={String(maintCount)}
          icon={Wrench}
          iconColor="text-accent"
        />
      </div>

      {/* Nodes Table */}
      <div className="bg-card-bg border border-card-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-card-border text-muted">
                <th className="text-left px-5 py-3 font-medium">Node</th>
                <th className="text-left px-5 py-3 font-medium">Location</th>
                <th className="text-left px-5 py-3 font-medium">Status</th>
                <th className="text-left px-5 py-3 font-medium">Latency</th>
                <th className="text-left px-5 py-3 font-medium">Throughput</th>
                <th className="text-left px-5 py-3 font-medium">Uptime</th>
              </tr>
            </thead>
            <tbody>
              {networkNodes.map((node) => (
                <tr
                  key={node.id}
                  className="border-b border-card-border/50 hover:bg-card-border/20 transition-colors"
                >
                  <td className="px-5 py-3 font-medium">{node.name}</td>
                  <td className="px-5 py-3 text-muted">{node.location}</td>
                  <td className="px-5 py-3">
                    <StatusBadge status={node.status} />
                  </td>
                  <td className="px-5 py-3 font-mono text-xs">
                    {node.latency}
                  </td>
                  <td className="px-5 py-3 font-mono text-xs">
                    {node.throughput}
                  </td>
                  <td className="px-5 py-3 font-mono text-xs">
                    {node.uptime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
