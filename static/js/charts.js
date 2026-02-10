// Chart initialization for the dashboard page
document.addEventListener("DOMContentLoaded", function () {
  initTrafficChart();
  initUptimeChart();
  initTicketPieChart();
});

function initTrafficChart() {
  const ctx = document.getElementById("trafficChart");
  if (!ctx) return;

  fetch("/api/traffic")
    .then((r) => r.json())
    .then(function (data) {
      new Chart(ctx, {
        type: "line",
        data: {
          labels: data.map((d) => d.time),
          datasets: [
            {
              label: "Inbound",
              data: data.map((d) => d.inbound),
              borderColor: "#3b82f6",
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              fill: true,
              tension: 0.4,
              borderWidth: 2,
              pointRadius: 0,
              pointHoverRadius: 4,
            },
            {
              label: "Outbound",
              data: data.map((d) => d.outbound),
              borderColor: "#22c55e",
              backgroundColor: "rgba(34, 197, 94, 0.1)",
              fill: true,
              tension: 0.4,
              borderWidth: 2,
              pointRadius: 0,
              pointHoverRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: "#1a1d29",
              borderColor: "#2a2d3a",
              borderWidth: 1,
              titleColor: "#e4e4e7",
              bodyColor: "#e4e4e7",
              padding: 12,
              cornerRadius: 8,
            },
          },
          scales: {
            x: {
              grid: { color: "#2a2d3a" },
              ticks: { color: "#71717a", font: { size: 12 } },
            },
            y: {
              grid: { color: "#2a2d3a" },
              ticks: { color: "#71717a", font: { size: 12 } },
            },
          },
        },
      });
    });
}

function initUptimeChart() {
  const ctx = document.getElementById("uptimeChart");
  if (!ctx) return;

  fetch("/api/uptime")
    .then((r) => r.json())
    .then(function (data) {
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: data.map((d) => d.month),
          datasets: [
            {
              label: "Uptime",
              data: data.map((d) => d.uptime),
              backgroundColor: data.map((d) =>
                d.uptime >= 99.95 ? "#22c55e" : "#f59e0b"
              ),
              borderRadius: 4,
              borderSkipped: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: "#1a1d29",
              borderColor: "#2a2d3a",
              borderWidth: 1,
              titleColor: "#e4e4e7",
              bodyColor: "#e4e4e7",
              padding: 12,
              cornerRadius: 8,
              callbacks: {
                label: function (ctx) {
                  return "Uptime: " + ctx.parsed.y + "%";
                },
              },
            },
          },
          scales: {
            x: {
              grid: { color: "#2a2d3a" },
              ticks: { color: "#71717a", font: { size: 12 } },
            },
            y: {
              min: 99.8,
              max: 100,
              grid: { color: "#2a2d3a" },
              ticks: { color: "#71717a", font: { size: 12 } },
            },
          },
        },
      });
    });
}

function initTicketPieChart() {
  const ctx = document.getElementById("ticketPieChart");
  if (!ctx) return;

  fetch("/api/tickets-by-category")
    .then((r) => r.json())
    .then(function (data) {
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: data.map((d) => d.name),
          datasets: [
            {
              data: data.map((d) => d.value),
              backgroundColor: data.map((d) => d.color),
              borderWidth: 0,
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: "60%",
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: "#1a1d29",
              borderColor: "#2a2d3a",
              borderWidth: 1,
              titleColor: "#e4e4e7",
              bodyColor: "#e4e4e7",
              padding: 12,
              cornerRadius: 8,
              callbacks: {
                label: function (ctx) {
                  return ctx.label + ": " + ctx.parsed + "%";
                },
              },
            },
          },
        },
      });
    });
}
