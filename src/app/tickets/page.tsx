import { Ticket, AlertCircle, Clock, CheckCircle } from "lucide-react";
import { tickets } from "@/lib/data";
import { StatCard } from "@/components/StatCard";

const priorityConfig = {
  high: "bg-danger/15 text-danger",
  medium: "bg-warning/15 text-warning",
  low: "bg-accent/15 text-accent",
};

const ticketStatusConfig = {
  open: { label: "Open", className: "bg-danger/15 text-danger" },
  in_progress: {
    label: "In Progress",
    className: "bg-warning/15 text-warning",
  },
  resolved: { label: "Resolved", className: "bg-success/15 text-success" },
  closed: { label: "Closed", className: "bg-muted-bg text-muted" },
};

export default function TicketsPage() {
  const openCount = tickets.filter((t) => t.status === "open").length;
  const inProgressCount = tickets.filter(
    (t) => t.status === "in_progress"
  ).length;
  const resolvedCount = tickets.filter((t) => t.status === "resolved").length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Support Tickets</h1>
          <p className="text-sm text-muted mt-1">
            Track and manage customer support requests
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-lg transition-colors">
          <Ticket className="h-4 w-4" />
          New Ticket
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Open"
          value={String(openCount)}
          icon={AlertCircle}
          iconColor="text-danger"
        />
        <StatCard
          title="In Progress"
          value={String(inProgressCount)}
          icon={Clock}
          iconColor="text-warning"
        />
        <StatCard
          title="Resolved"
          value={String(resolvedCount)}
          icon={CheckCircle}
          iconColor="text-success"
        />
        <StatCard
          title="Avg. Response Time"
          value="2.4 hrs"
          change="-18% from last month"
          changeType="positive"
          icon={Clock}
          iconColor="text-accent"
        />
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-card-border text-muted">
                <th className="text-left px-5 py-3 font-medium">ID</th>
                <th className="text-left px-5 py-3 font-medium">Customer</th>
                <th className="text-left px-5 py-3 font-medium">Subject</th>
                <th className="text-left px-5 py-3 font-medium">Priority</th>
                <th className="text-left px-5 py-3 font-medium">Status</th>
                <th className="text-left px-5 py-3 font-medium">Assignee</th>
                <th className="text-left px-5 py-3 font-medium">Created</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => {
                const statusInfo = ticketStatusConfig[ticket.status];
                return (
                  <tr
                    key={ticket.id}
                    className="border-b border-card-border/50 hover:bg-card-border/20 transition-colors"
                  >
                    <td className="px-5 py-3 font-mono text-xs font-medium text-accent">
                      {ticket.id}
                    </td>
                    <td className="px-5 py-3">{ticket.customer}</td>
                    <td className="px-5 py-3 max-w-xs truncate">
                      {ticket.subject}
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                          priorityConfig[ticket.priority]
                        }`}
                      >
                        {ticket.priority.charAt(0).toUpperCase() +
                          ticket.priority.slice(1)}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusInfo.className}`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {statusInfo.label}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-muted">
                      {ticket.assignee}
                    </td>
                    <td className="px-5 py-3 text-muted text-xs">
                      {ticket.created}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
