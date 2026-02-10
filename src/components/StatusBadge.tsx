interface StatusBadgeProps {
  status: "online" | "offline" | "warning" | "maintenance";
}

const statusConfig = {
  online: { label: "Online", className: "bg-success/15 text-success" },
  offline: { label: "Offline", className: "bg-danger/15 text-danger" },
  warning: { label: "Warning", className: "bg-warning/15 text-warning" },
  maintenance: { label: "Maintenance", className: "bg-accent/15 text-accent" },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {config.label}
    </span>
  );
}
