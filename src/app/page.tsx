import { Activity, Users, Ticket, Wifi } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { TrafficChart } from "@/components/charts/TrafficChart";
import { UptimeChart } from "@/components/charts/UptimeChart";
import { TicketPieChart } from "@/components/charts/TicketPieChart";
import { AlertsList } from "@/components/AlertsList";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-muted mt-1">
          Network operations overview
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Network Uptime"
          value="99.96%"
          change="+0.01% from last month"
          changeType="positive"
          icon={Activity}
          iconColor="text-success"
        />
        <StatCard
          title="Active Customers"
          value="1,247"
          change="+23 this month"
          changeType="positive"
          icon={Users}
          iconColor="text-accent"
        />
        <StatCard
          title="Open Tickets"
          value="18"
          change="-5 from last week"
          changeType="positive"
          icon={Ticket}
          iconColor="text-warning"
        />
        <StatCard
          title="Active Nodes"
          value="142/148"
          change="4 nodes in maintenance"
          changeType="neutral"
          icon={Wifi}
          iconColor="text-accent"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TrafficChart />
        <UptimeChart />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TicketPieChart />
        <AlertsList />
      </div>
    </div>
  );
}
