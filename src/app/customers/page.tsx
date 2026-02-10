import { Users, UserPlus, UserX, DollarSign } from "lucide-react";
import { customers } from "@/lib/data";
import { StatCard } from "@/components/StatCard";

const customerStatusConfig = {
  active: "bg-success/15 text-success",
  suspended: "bg-danger/15 text-danger",
  pending: "bg-warning/15 text-warning",
};

export default function CustomersPage() {
  const activeCount = customers.filter((c) => c.status === "active").length;
  const suspendedCount = customers.filter(
    (c) => c.status === "suspended"
  ).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Customers</h1>
          <p className="text-sm text-muted mt-1">
            Manage customer accounts and subscriptions
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-lg transition-colors">
          <UserPlus className="h-4 w-4" />
          Add Customer
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Customers"
          value={String(customers.length)}
          icon={Users}
          iconColor="text-accent"
        />
        <StatCard
          title="Active"
          value={String(activeCount)}
          icon={Users}
          iconColor="text-success"
        />
        <StatCard
          title="Suspended"
          value={String(suspendedCount)}
          icon={UserX}
          iconColor="text-danger"
        />
        <StatCard
          title="Monthly Revenue"
          value="$20,594"
          change="+12% from last month"
          changeType="positive"
          icon={DollarSign}
          iconColor="text-success"
        />
      </div>

      <div className="bg-card-bg border border-card-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-card-border text-muted">
                <th className="text-left px-5 py-3 font-medium">Customer</th>
                <th className="text-left px-5 py-3 font-medium">Plan</th>
                <th className="text-left px-5 py-3 font-medium">Status</th>
                <th className="text-left px-5 py-3 font-medium">Bandwidth</th>
                <th className="text-left px-5 py-3 font-medium">Revenue</th>
                <th className="text-left px-5 py-3 font-medium">Join Date</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-b border-card-border/50 hover:bg-card-border/20 transition-colors"
                >
                  <td className="px-5 py-3 font-medium">{customer.name}</td>
                  <td className="px-5 py-3 text-muted">{customer.plan}</td>
                  <td className="px-5 py-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                        customerStatusConfig[customer.status]
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {customer.status.charAt(0).toUpperCase() +
                        customer.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-5 py-3 font-mono text-xs">
                    {customer.bandwidth}
                  </td>
                  <td className="px-5 py-3 font-medium">
                    {customer.monthlyRevenue}
                  </td>
                  <td className="px-5 py-3 text-muted">{customer.joinDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
