// Sidebar collapse toggle
document.addEventListener("DOMContentLoaded", function () {
  const collapseBtn = document.getElementById("collapse-btn");
  const sidebar = document.getElementById("sidebar");

  if (collapseBtn && sidebar) {
    collapseBtn.addEventListener("click", function () {
      sidebar.classList.toggle("collapsed");
    });
  }

  // Search toggle
  const searchToggle = document.getElementById("search-toggle");
  const searchBox = document.getElementById("search-box");
  const searchInput = document.getElementById("search-input");

  if (searchToggle && searchBox) {
    searchToggle.addEventListener("click", function () {
      searchToggle.style.display = "none";
      searchBox.classList.add("active");
      if (searchInput) searchInput.focus();
    });

    if (searchInput) {
      searchInput.addEventListener("blur", function () {
        searchBox.classList.remove("active");
        searchToggle.style.display = "flex";
      });
    }
  }

  // Toggle switches
  document.querySelectorAll(".toggle-switch").forEach(function (btn) {
    btn.addEventListener("click", function () {
      this.classList.toggle("on");
    });
  });
});
