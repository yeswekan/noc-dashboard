"use client";

import { Save, Bell, Shield, Monitor, Database } from "lucide-react";

function SettingSection({
  title,
  description,
  icon: Icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card-bg border border-card-border rounded-xl p-6">
      <div className="flex items-start gap-4 mb-5">
        <div className="p-2 rounded-lg bg-accent/10 text-accent">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted mt-0.5">{description}</p>
        </div>
      </div>
      <div className="space-y-4 pl-12">{children}</div>
    </div>
  );
}

function ToggleRow({
  label,
  description,
  defaultOn = false,
}: {
  label: string;
  description: string;
  defaultOn?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-muted">{description}</p>
      </div>
      <button
        className={`relative w-10 h-5 rounded-full transition-colors ${
          defaultOn ? "bg-accent" : "bg-card-border"
        }`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform ${
            defaultOn ? "left-[22px]" : "left-0.5"
          }`}
        />
      </button>
    </div>
  );
}

function InputRow({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 bg-background border border-card-border rounded-lg text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-accent"
      />
    </div>
  );
}

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-sm text-muted mt-1">
          Configure your dashboard and system preferences
        </p>
      </div>

      <SettingSection
        title="Notifications"
        description="Configure how you receive alerts"
        icon={Bell}
      >
        <ToggleRow
          label="Email Notifications"
          description="Receive alerts via email"
          defaultOn
        />
        <ToggleRow
          label="Critical Alerts Only"
          description="Only notify on critical events"
        />
        <ToggleRow
          label="Weekly Digest"
          description="Receive a weekly summary report"
          defaultOn
        />
      </SettingSection>

      <SettingSection
        title="Monitoring"
        description="Network monitoring preferences"
        icon={Monitor}
      >
        <InputRow
          label="Polling Interval (seconds)"
          placeholder="30"
          type="number"
        />
        <InputRow
          label="Latency Threshold (ms)"
          placeholder="50"
          type="number"
        />
        <InputRow
          label="Packet Loss Alert Threshold (%)"
          placeholder="1"
          type="number"
        />
      </SettingSection>

      <SettingSection
        title="Security"
        description="Authentication and access settings"
        icon={Shield}
      >
        <ToggleRow
          label="Two-Factor Authentication"
          description="Require 2FA for all admin accounts"
          defaultOn
        />
        <ToggleRow
          label="Session Timeout"
          description="Auto-logout after 30 minutes of inactivity"
          defaultOn
        />
        <InputRow label="Allowed IP Ranges" placeholder="0.0.0.0/0" />
      </SettingSection>

      <SettingSection
        title="Data Retention"
        description="Configure data storage policies"
        icon={Database}
      >
        <InputRow
          label="Log Retention (days)"
          placeholder="90"
          type="number"
        />
        <InputRow
          label="Metrics Retention (days)"
          placeholder="365"
          type="number"
        />
        <ToggleRow
          label="Auto-archive Resolved Tickets"
          description="Archive tickets after 30 days"
          defaultOn
        />
      </SettingSection>

      <div className="flex justify-end">
        <button className="flex items-center gap-2 px-6 py-2.5 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-lg transition-colors">
          <Save className="h-4 w-4" />
          Save Changes
        </button>
      </div>
    </div>
  );
}
