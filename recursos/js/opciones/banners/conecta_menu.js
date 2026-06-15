// conecta_menu.js | Gestiona el banner conecta
function initconectaBanner() {
  const banner = document.getElementById("conecta-banner");
  if (!banner) return;

  const cerrar = document.getElementById("cerrar-conecta");

  document.getElementById("btn-conecta")?.addEventListener("click", () => {
    banner.classList.add("visible");
  });

  cerrar?.addEventListener("click", () => {
    banner.classList.remove("visible");
  });

  banner.addEventListener("click", (e) => {
    if (!e.target.closest(".banner-content")) {
      banner.classList.remove("visible");
    }
  });

  // Botones de WhatsApp usando clase común
  document.querySelectorAll(".btn-whatsapp").forEach(boton => {
    boton.addEventListener("click", () => {
      console.log("WhatsApp:", window.enlaces?.["btn-whatsapp"]);
      if (window.enlaces?.["btn-whatsapp"]) {
        location.href = window.enlaces["btn-whatsapp"];
      }
    });
  });
}

initconectaBanner();
