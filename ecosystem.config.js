module.exports = {
  apps: [
    {
      name: "operations-dashboard",
      script: "npm",
      args: "start",
      cwd: "/opt/operations-dashboard",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
    },
  ],
};
