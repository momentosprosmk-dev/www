// menu_loader.js

document.addEventListener("DOMContentLoaded", () => {
  const path = typeof basePath !== "undefined" ? basePath : "";

  fetch(path + "recursos/html/opciones/menu/menu.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("menu-container").innerHTML = html;

      const scriptMenu = document.createElement("script");
      scriptMenu.src = path + "recursos/js/opciones/menu/menu.js";
      document.body.appendChild(scriptMenu);

      scriptMenu.onload = () => {
        if (typeof initMenu === "function") {
          initMenu();
        }
      };

      const scriptFooter = document.createElement("script");
      scriptFooter.src = path + "recursos/js/opciones/menu/footer.js";
      document.body.appendChild(scriptFooter);

      initModulesNavigation();
    })
    .catch(err => console.error("Error cargando el menú:", err));
});
