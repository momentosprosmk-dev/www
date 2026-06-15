// banners_loader.js | Gestiona el cargue de los banners


document.addEventListener("DOMContentLoaded", () => {
  const path = typeof basePath !== "undefined" ? basePath : "";

  fetch(path + "recursos/html/opciones/banners/banners.html")
    .then(res => res.text())
    .then(html => {
      // Contenedor principal de banners
      const container = document.createElement("div");
      container.id = "banners-container";
      container.innerHTML = html;
      document.body.appendChild(container);

      // Lista de scripts de banners a cargar
      const bannerScripts = [
        "conecta_menu.js"
      ];

      // Cargar cada script dinámicamente
      bannerScripts.forEach(file => {
        const script = document.createElement("script");
        script.src = path + "recursos/js/opciones/banners/" + file;

        script.onload = () => {
          // Esperar a que el botón del menú exista
          const interval = setInterval(() => {
            const btnConecta = document.getElementById("btn-conecta");

            if (btnConecta) {
              clearInterval(interval);

              if (typeof initconectaBanner === "function") {
                initconectaBanner();
              }
            }
          }, 50);
        };

        document.body.appendChild(script);
      });
    })
    .catch(err => console.error("Error cargando banners:", err));
});
