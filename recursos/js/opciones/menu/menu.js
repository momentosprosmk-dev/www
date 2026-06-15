// menu.js

function initMenu() {
  const btnMenu = document.getElementById("btn-menu");
  const menuOpciones = document.getElementById("menu-opciones");
  const overlay = document.getElementById("overlay");
  const links = menuOpciones.querySelectorAll("a.bt-opc");

  if (btnMenu && menuOpciones && overlay) {
    btnMenu.classList.add("no-active");
    btnMenu.textContent = "☰";

    const cerrarMenu = () => {
      menuOpciones.classList.remove("visible");
      overlay.classList.remove("visible");
      btnMenu.classList.remove("active");
      btnMenu.classList.add("no-active");
      btnMenu.textContent = "☰";
    };

    btnMenu.addEventListener("click", () => {
      if (btnMenu.classList.contains("no-active")) {
        menuOpciones.classList.add("visible");
        overlay.classList.add("visible");
        btnMenu.classList.remove("no-active");
        btnMenu.classList.add("active");
        btnMenu.textContent = "✕";
      } else {
        cerrarMenu();
      }
    });

    overlay.addEventListener("click", cerrarMenu);

    links.forEach(link => {
      link.addEventListener("click", () => {
        if (!link.classList.contains("no-close")) {
          cerrarMenu();
        }
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        cerrarMenu();
      }
    });
  }
}

