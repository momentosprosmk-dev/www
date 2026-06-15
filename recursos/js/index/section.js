  // Secciones
  const serviciosSection  = document.querySelector('#servicios');
  const visionSection     = document.querySelector('#vision');
  const solucionesSection = document.querySelector('#soluciones');
  const contactoSection   = document.querySelector('#contacto');

  // Elementos internos
  const cards   = document.querySelectorAll('#servicios .card');
  const pilares = document.querySelectorAll('#vision .card');
  const items   = document.querySelectorAll('#soluciones .solution');
  const contactos = document.querySelectorAll('#contacto .contacto');

  // Observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const visible = entry.isIntersecting;

      switch (entry.target.id) {
        case 'servicios':
          cards.forEach(card => card.classList.toggle('visible', visible));
          break;
        case 'vision':
          pilares.forEach(pilar => pilar.classList.toggle('visible', visible));
          break;
        case 'soluciones':
          items.forEach(item => item.classList.toggle('visible', visible));
          break;
        case 'contacto':
          contactos.forEach(c => c.classList.toggle('visible', visible));
          break;
      }
    });
  }, { threshold: 0.1 });

  // Observa cada sección
  [serviciosSection, visionSection, solucionesSection, contactoSection].forEach(section => {
    if (section) observer.observe(section);
  });