"use client";

import { Bell, Search, User } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="flex items-center justify-between h-16 px-6 border-b border-card-border bg-sidebar-bg/50 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        {searchOpen ? (
          <div className="flex items-center gap-2 bg-card-bg border border-card-border rounded-lg px-3 py-1.5">
            <Search className="h-4 w-4 text-muted" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-sm w-64 text-foreground placeholder:text-muted"
              autoFocus
              onBlur={() => setSearchOpen(false)}
            />
          </div>
        ) : (
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
          >
            <Search className="h-4 w-4" />
            <span className="text-sm">Search...</span>
          </button>
        )}
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-lg text-muted hover:text-foreground hover:bg-card-bg transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-danger" />
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-card-border">
          <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
            <User className="h-4 w-4 text-accent" />
          </div>
          <div className="text-sm">
            <div className="font-medium">Admin</div>
            <div className="text-xs text-muted">admin@ops.local</div>
          </div>
        </div>
      </div>
    </header>
  );
}
