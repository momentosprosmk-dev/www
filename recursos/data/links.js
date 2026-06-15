(function () {
  window.enlaces = {
    
    "btn-whatsapp": "https://wa.me/573011529382?text=Hola.%20Quiero%20conocer%20las%20soluciones%20digitales%20de%20MomentosPro.%20%C2%BFMe%20pueden%20orientar%3F"
    
  };


  const dominiosExternos = new Set();
  Object.values(window.enlaces).forEach(valor => {
    if (typeof valor === "string" && valor.startsWith("https")) {
      try {
        const url = new URL(valor);
        dominiosExternos.add(url.origin);
      } catch (e) {}
    }
  });

  dominiosExternos.forEach(href => {
    ["preconnect", "dns-prefetch"].forEach(rel => {
      const link = document.createElement("link");
      link.rel = rel;
      link.href = href;
      document.head.appendChild(link);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    Object.keys(window.enlaces).forEach(id => {
      const valor = window.enlaces[id];
      const elemento = document.getElementById(id);

      if (!elemento || !valor) return;

      if (elemento.tagName === "A") {
        elemento.setAttribute("href", valor);
      } else {
        elemento.addEventListener("click", () => {
          window.location.href = valor;
        });
      }
    });
  });
})();

