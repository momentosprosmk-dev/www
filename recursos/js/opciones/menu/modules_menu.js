// modules_menu.js

function initModulesNavigation() {
  const path = typeof basePath !== "undefined" ? basePath : "";

  // Validar que window.enlaces exista y sea un objeto
  if (window.enlaces && typeof window.enlaces === "object") {
    Object.keys(window.enlaces).forEach(btnId => {
      const btn = document.getElementById(btnId);
      if (btn) {
        btn.addEventListener("click", () => {
          window.location.href = path + window.enlaces[btnId];
        });
      }
    });
  } else {
    console.warn("window.enlaces no está definido o no es un objeto válido.");
  }
}

initModulesNavigation();

