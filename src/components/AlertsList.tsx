import { AlertTriangle, AlertCircle, Info } from "lucide-react";
import { recentAlerts } from "@/lib/data";

const severityConfig = {
  critical: {
    icon: AlertCircle,
    className: "text-danger bg-danger/10 border-danger/20",
  },
  warning: {
    icon: AlertTriangle,
    className: "text-warning bg-warning/10 border-warning/20",
  },
  info: {
    icon: Info,
    className: "text-accent bg-accent/10 border-accent/20",
  },
};

export function AlertsList() {
  return (
    <div className="bg-card-bg border border-card-border rounded-xl p-5">
      <h3 className="text-sm font-semibold mb-4">Recent Alerts</h3>
      <div className="space-y-3">
        {recentAlerts.map((alert) => {
          const config = severityConfig[alert.severity];
          const Icon = config.icon;
          return (
            <div
              key={alert.id}
              className={`flex items-start gap-3 p-3 rounded-lg border ${config.className}`}
            >
              <Icon className="h-4 w-4 mt-0.5 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm">{alert.message}</p>
                <p className="text-xs opacity-60 mt-1">{alert.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
