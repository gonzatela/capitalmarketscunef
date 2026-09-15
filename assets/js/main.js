// MODALS
function openModal(id) {
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id).classList.remove('active');
  document.body.style.overflow = '';
}
document.querySelectorAll('.modal-overlay').forEach(el => {
  el.addEventListener('click', function(e) {
    if (e.target === this) closeModal(this.id);
  });
});

// MOBILE NAV
const nav = document.querySelector('nav');
const navToggle = document.querySelector('.nav-menu-toggle');
if (nav && navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Abrir menú');
    });
  });
}

// MOBILE UPCOMING EVENTS
function updateMobileUpcomingEvents() {
  const cards = Array.from(document.querySelectorAll('[data-upcoming-event][data-event-date]'));
  if (!cards.length) return;

  const isMobile = window.matchMedia('(max-width: 640px)').matches;
  cards.forEach(card => {
    card.classList.remove('mobile-event-hidden');
    card.style.order = '';
  });
  if (!isMobile) return;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = cards
    .map(card => ({ card, date: new Date(`${card.dataset.eventDate}T00:00:00`) }))
    .filter(item => !Number.isNaN(item.date.getTime()) && item.date >= today)
    .sort((a, b) => a.date - b.date);

  const visibleCards = new Set(upcoming.slice(0, 2).map(item => item.card));
  cards.forEach(card => card.classList.toggle('mobile-event-hidden', !visibleCards.has(card)));
  upcoming.slice(0, 2).forEach((item, index) => {
    item.card.style.order = String(index + 1);
  });
}

updateMobileUpcomingEvents();
window.addEventListener('resize', updateMobileUpcomingEvents);

// EXPLORAR
const exploreItems = [
  // ── PRÓXIMOS EVENTOS ──
  {
    type: 'evento',
    label: 'Próximo evento',
    title: 'Renta fija en el nuevo ciclo de tipos',
    desc: 'Charla sobre estrategias de bonos y posicionamiento de carteras en el actual entorno macroeconómico.',
    meta: '15 May · Aula Magna',
    href: 'index.html#eventos',
    date: '2026-05-15'
  },
  {
    type: 'evento',
    label: 'Próximo evento',
    title: 'Construcción de un LBO model en Excel',
    desc: 'Workshop práctico para construir un modelo LBO completo usando datos de Capital IQ.',
    meta: '22 May · Sala 2.01',
    href: 'index.html#eventos',
    date: '2026-05-22'
  },
  // ── EVENTOS PASADOS (más reciente primero) ──
  {
    type: 'evento',
    label: 'Evento pasado',
    title: 'I CUNEF Universidad Finance Superday',
    desc: 'Paneles de investment banking, asset management y alternativos con profesionales de firmas globales.',
    meta: 'Abril 2026',
    href: 'explorar.html',
    modal: 'modal7',
    date: '2026-04-15'
  },
  {
    type: 'evento',
    label: 'Evento pasado',
    title: 'Wealth Management con UBS Madrid',
    desc: 'Sesión con Pablo Carrasco y Jaime Hernández Tallada sobre gestión patrimonial y carreras en wealth management.',
    meta: '2026 · UBS Madrid',
    href: 'explorar.html',
    modal: 'modal8',
    date: '2026-02-01'
  },
  {
    type: 'evento',
    label: 'Evento pasado',
    title: 'Macro global y posicionamiento de carteras',
    desc: 'Charla sobre escenario macro para 2025 y posicionamiento en renta fija, renta variable y divisas.',
    meta: 'Marzo 2025 · 62 asistentes',
    href: 'explorar.html',
    modal: 'modal1',
    date: '2025-03-15'
  },
  {
    type: 'evento',
    label: 'Evento pasado',
    title: 'Introducción a Bloomberg Terminal',
    desc: 'Workshop práctico sobre EQS, WACC, DCF, renta fija y extracción de datos financieros históricos.',
    meta: 'Febrero 2025',
    href: 'explorar.html',
    modal: 'modal2',
    date: '2025-02-15'
  },
  {
    type: 'evento',
    label: 'Evento pasado',
    title: 'Stock Pitch Competition — Edición Invierno 2025',
    desc: 'Ocho equipos presentaron tesis de inversión ante un jurado de profesionales del sector financiero.',
    meta: 'Enero 2025 · 8 equipos',
    href: 'explorar.html',
    modal: 'modal3',
    date: '2025-01-20'
  },
  {
    type: 'evento',
    label: 'Evento pasado',
    title: 'Comparables de mercado y precedent transactions',
    desc: 'Workshop sobre trading comps, precedent transactions y construcción de tablas de comparables con Capital IQ y Bloomberg.',
    meta: 'Noviembre 2024 · M&A',
    href: 'explorar.html',
    modal: 'modal4',
    date: '2024-11-15'
  },
  {
    type: 'evento',
    label: 'Evento pasado',
    title: 'Visita a la sala de mercados de BBVA',
    desc: 'Visita a la trading room de BBVA con Q&A con profesionales de renta variable, FX y productos estructurados.',
    meta: 'Octubre 2024 · BBVA',
    href: 'explorar.html',
    modal: 'modal5',
    date: '2024-10-10'
  },
  {
    type: 'evento',
    label: 'Evento pasado',
    title: 'Introducción al private equity',
    desc: 'Charla sobre sourcing, due diligence, negociación, value creation y salidas profesionales en private equity.',
    meta: 'Septiembre 2024 · Private Equity',
    href: 'explorar.html',
    modal: 'modal6',
    date: '2024-09-20'
  },
  // ── ARTÍCULOS ──
  {
    type: 'articulo',
    label: 'Artículo',
    title: 'Cómo empezar con Bloomberg Terminal',
    desc: 'Funciones esenciales para buscar compañías, crear screeners, consultar WACC y extraer datos financieros.',
    meta: 'Biblioteca CUNEF',
    href: 'index.html#biblioteca',
    date: '2026-01-10'
  },
  {
    type: 'articulo',
    label: 'Artículo',
    title: 'Guía rápida de comparables en M&A',
    desc: 'Qué múltiplos usar, cómo elegir peer group y cómo interpretar un football field chart.',
    meta: 'M&A y valoración',
    href: 'explorar.html',
    date: '2026-02-15'
  },
  // ── RECURSOS TÉCNICOS GRATUITOS ──
  {
    type: 'recurso',
    label: 'Recurso',
    title: 'Wall Street Prep',
    desc: 'Tutoriales gratuitos sobre financial modeling, valuation y Excel usados en banca de inversión.',
    meta: 'Modeling & Valuation',
    href: 'https://www.wallstreetprep.com/free-resources/',
    date: '2024-01-01'
  },
  {
    type: 'recurso',
    label: 'Recurso',
    title: 'CFI Free Guides',
    desc: 'Guías prácticas y plantillas sobre contabilidad, finanzas corporativas y análisis financiero.',
    meta: 'Finanzas corporativas',
    href: 'https://corporatefinanceinstitute.com/resources/',
    date: '2024-01-02'
  },
  {
    type: 'recurso',
    label: 'Recurso',
    title: 'Damodaran Online',
    desc: 'Datasets, plantillas y materiales de valoración de Stern NYU.',
    meta: 'Valoración',
    href: 'https://aswathdamodaran.blogspot.com/',
    date: '2024-01-03'
  },
  {
    type: 'recurso',
    label: 'Recurso',
    title: 'Mergers & Inquisitions',
    desc: 'Guías detalladas sobre procesos de selección en banca de inversión, private equity y hedge funds.',
    meta: 'Carreras & Procesos',
    href: 'https://mergersandinquisitions.com/articles/',
    date: '2024-01-04'
  },
  {
    type: 'recurso',
    label: 'Recurso',
    title: 'Breaking Into Wall Street',
    desc: 'Recursos gratuitos de modeling, LBO y análisis. Casos prácticos y plantillas de Excel.',
    meta: 'Banca de Inversión',
    href: 'https://breakingintowallstreet.com/resources/',
    date: '2024-01-05'
  },
  {
    type: 'recurso',
    label: 'Recurso',
    title: 'Street of Walls',
    desc: 'Cursos gratuitos de finance training: entrevistas de investment banking, valuation, modeling, private equity, hedge funds, quant y consulting.',
    meta: 'Finance Training',
    href: 'https://www.streetofwalls.com/finance-training-courses/',
    date: '2024-01-06'
  },
  {
    type: 'recurso',
    label: 'Recurso',
    title: 'Investopedia',
    desc: 'Diccionario financiero y guías sobre instrumentos, estrategias y conceptos del mercado.',
    meta: 'Referencia',
    href: 'https://www.investopedia.com/financial-term-dictionary-4769738',
    date: '2024-01-07'
  },
  {
    type: 'recurso',
    label: 'Recurso',
    title: 'PitchBook News',
    desc: 'Tendencias en private equity, venture capital y M&A con datos y análisis del sector.',
    meta: 'VC & Private Equity',
    href: 'https://pitchbook.com/news/articles',
    date: '2024-01-08'
  },
  {
    type: 'recurso',
    label: 'Recurso',
    title: 'Coursera — Finance',
    desc: 'Cursos gratuitos de universidades como Wharton, Columbia e IESE sobre finanzas y mercados.',
    meta: 'Online Learning',
    href: 'https://www.coursera.org/courses?query=financial%20modeling',
    date: '2024-01-09'
  },
  {
    type: 'recurso',
    label: 'Recurso',
    title: 'CFA Institute Research',
    desc: 'Papers, informes y materiales de estudio del CFA Institute. Referencia para el sector.',
    meta: 'Research & CFA',
    href: 'https://www.cfainstitute.org/en/research',
    date: '2024-01-10'
  },
  // ── BASES DE DATOS PROFESIONALES ──
  {
    type: 'base-datos',
    label: 'Base de datos',
    title: 'Bloomberg Terminal',
    desc: 'La plataforma de referencia global en datos financieros, análisis de mercados, fixed income, renta variable, derivados y economía macro.',
    meta: 'Acceso vía Biblioteca CUNEF',
    href: 'https://encuentra.cunef.edu/discovery/fulldisplay?context=L&vid=34CUNEF_INST:VU1&search_scope=MyInstitution&tab=LibraryCatalog&docid=alma991000191979708131',
    date: '2023-01-01'
  },
  {
    type: 'base-datos',
    label: 'Base de datos',
    title: 'Capital IQ',
    desc: 'Plataforma de S&P Global con datos de empresas, transacciones de M&A, financiación y análisis de crédito. Muy usada en private equity y banca de inversión.',
    meta: 'Acceso vía Biblioteca CUNEF',
    href: 'https://encuentra.cunef.edu/permalink/34CUNEF_INST/tmg4lg/alma991000208929708131',
    date: '2023-01-02'
  },
  {
    type: 'base-datos',
    label: 'Base de datos',
    title: 'Wharton Research Data Services (WRDS)',
    desc: 'Plataforma de investigación financiera de Wharton con datasets profesionales para mercados, compañías y research académico.',
    meta: 'Acceso vía Biblioteca CUNEF',
    href: 'https://encuentra.cunef.edu/discovery/fulldisplay?context=L&vid=34CUNEF_INST:VU1&search_scope=MyInstitution&tab=LibraryCatalog&docid=alma991000544209308131',
    date: '2023-01-03'
  },
  {
    type: 'base-datos',
    label: 'Base de datos',
    title: 'LSEG (Refinitiv)',
    desc: 'London Stock Exchange Group ofrece datos de mercados globales, análisis de derivados y herramientas de trading profesional.',
    meta: 'Acceso vía Biblioteca CUNEF',
    href: 'https://encuentra.cunef.edu/permalink/34CUNEF_INST/tmg4lg/alma991000542709608131',
    date: '2023-01-04'
  },
  {
    type: 'base-datos',
    label: 'Base de datos',
    title: 'LSEG IBES Guidance',
    desc: 'Base de datos de estimaciones de analistas y guidance de empresas. Fundamental para análisis de renta variable y modelos de valoración.',
    meta: 'Acceso vía Biblioteca CUNEF',
    href: 'https://encuentra.cunef.edu/permalink/34CUNEF_INST/tmg4lg/alma991000558773908131',
    date: '2023-01-05'
  },
  {
    type: 'base-datos',
    label: 'Base de datos',
    title: 'SABI',
    desc: 'Información financiera de empresas españolas y portuguesas. Cuentas anuales, balances y datos sectoriales de más de 2,5 millones de compañías.',
    meta: 'Acceso vía CUNEF SSO',
    href: 'https://login.cunef.idm.oclc.org/login?url=https://sabi.informa.es/ip',
    date: '2023-01-06'
  },
];
let activeExploreFilter = 'todos';
let activeExploreSector = 'todos';

const exploreSectorLabels = {
  'todos': 'Todos',
  'investment-banking': 'Investment Banking',
  'asset-management': 'Asset Management',
  'private-equity': 'Private Equity',
  'trading': 'Trading',
  'macro-research': 'Macro & Research'
};

function getExploreSector(item) {
  const title = item.title.toLowerCase();
  const meta = item.meta.toLowerCase();
  if (title.includes('private equity') || title.includes('pitchbook') || title.includes('lbo') || meta.includes('private equity')) {
    return { key: 'private-equity', label: exploreSectorLabels['private-equity'] };
  }
  if (title.includes('bloomberg') || title.includes('trading') || title.includes('lseg') || title.includes('investopedia') || meta.includes('trading')) {
    return { key: 'trading', label: exploreSectorLabels.trading };
  }
  if (title.includes('macro') || title.includes('cfa') || title.includes('ibes') || title.includes('damodaran') || title.includes('wrds') || title.includes('wharton') || meta.includes('research')) {
    return { key: 'macro-research', label: exploreSectorLabels['macro-research'] };
  }
  if (title.includes('renta fija') || title.includes('wealth management') || title.includes('coursera') || meta.includes('asset')) {
    return { key: 'asset-management', label: exploreSectorLabels['asset-management'] };
  }
  return { key: 'investment-banking', label: exploreSectorLabels['investment-banking'] };
}

function renderExplore() {
  const grid = document.getElementById('explorarGrid');
  const search = document.getElementById('explorarSearch');
  const count = document.getElementById('explorarCount');
  const empty = document.getElementById('explorarEmpty');
  const sortSelect = document.getElementById('explorarSort');
  if (!grid || !search || !count || !empty) return;

  const query = search.value.trim().toLowerCase();
  const sortBy = sortSelect ? sortSelect.value : 'recent';

  let results = exploreItems.filter(item => {
    const sector = getExploreSector(item);
    const matchesFilter = activeExploreFilter === 'todos' || item.type === activeExploreFilter;
    const matchesSector = activeExploreSector === 'todos' || sector.key === activeExploreSector;
    const text = `${item.label} ${item.title} ${item.desc} ${item.meta} ${sector.label}`.toLowerCase();
    return matchesFilter && matchesSector && (!query || text.includes(query));
  });

  // Apply Sorting
  results.sort((a, b) => {
    if (sortBy === 'recent') return new Date(b.date) - new Date(a.date);
    if (sortBy === 'oldest') return new Date(a.date) - new Date(b.date);
    if (sortBy === 'az') return a.title.localeCompare(b.title);
    if (sortBy === 'za') return b.title.localeCompare(a.title);
    return 0;
  });

  grid.innerHTML = results.map(item => {
    const sector = getExploreSector(item);
    const canOpenModal = item.modal && document.getElementById(item.modal);
    const action = canOpenModal
      ? `<button class="explorar-link" type="button" onclick="openModal('${item.modal}')" style="border:0;background:transparent;padding:0;cursor:pointer;font-family:'Inter',sans-serif;">Ver detalle</button>`
      : `<a class="explorar-link" href="${item.href}" ${item.href.startsWith('http') ? 'target="_blank"' : ''}>Abrir →</a>`;
    return `<article class="explorar-card">
      <div class="explorar-type">${item.label}</div>
      <h3 class="explorar-title">${item.title}</h3>
      <p class="explorar-desc">${item.desc}</p>
      <div class="explorar-meta">
        <span>${item.meta} · ${sector.label}</span>
        ${action}
      </div>
    </article>`;
  }).join('');

  count.textContent = `${results.length} contenidos encontrados`;
  empty.style.display = results.length ? 'none' : 'block';

  // Re-attach fade-in observer to newly rendered cards
  grid.querySelectorAll('.explorar-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

function toggleFilterGroup(type) {
  const group = type === 'type' ? 'filterGroupType' : 'filterGroupSector';
  const el = document.getElementById(group);
  const btn = el.previousElementSibling; // The mobile label button
  if (el) el.classList.toggle('active');
  if (btn) btn.classList.toggle('active');
}

// SCROLL FADE IN (must be before renderExplore so cards can use it)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });

document.querySelectorAll('.filter-chip[data-filter]').forEach(chip => {
  chip.addEventListener('click', () => {
    activeExploreFilter = chip.dataset.filter;
    document.querySelectorAll('.filter-chip[data-filter]').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    renderExplore();
  });
});
document.querySelectorAll('.filter-chip[data-sector]').forEach(chip => {
  chip.addEventListener('click', () => {
    activeExploreSector = chip.dataset.sector;
    document.querySelectorAll('.filter-chip[data-sector]').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    renderExplore();
  });
});
const exploreSearch = document.getElementById('explorarSearch');
if (exploreSearch) exploreSearch.addEventListener('input', renderExplore);
const exploreSort = document.getElementById('explorarSort');
if (exploreSort) exploreSort.addEventListener('change', renderExplore);
renderExplore();

// Observe static cards on index.html
document.querySelectorAll('.market-widget-card, .db-card, .recurso-card, .evento-card, .testimonial-card, .team-card, .join-panel').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// COOKIE CONSENT
document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem('cookieChoice')) {
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML = `
      <div class="cookie-text">
        Utilizamos cookies para mejorar tu experiencia en nuestra web. Puedes aceptar todas las cookies, solo las necesarias, o denegarlas. Lee más en nuestra <a href="https://www.cunef.edu/politica-de-cookies/" target="_blank" rel="noopener" style="color: var(--orange); text-decoration: underline; font-weight: 500;">política de cookies</a>.
      </div>
      <div class="cookie-actions">
        <button class="cookie-btn cookie-btn-primary" id="acceptAllCookies">Aceptar todas</button>
        <button class="cookie-btn cookie-btn-secondary" id="acceptNecessaryCookies">Solo necesarias</button>
        <button class="cookie-btn cookie-btn-ghost" id="denyCookies">Denegar</button>
      </div>
    `;
    document.body.appendChild(banner);
    
    // Fade in banner after a slight delay
    setTimeout(() => {
      banner.classList.add('show');
    }, 500);

    const closeBanner = (choice) => {
      localStorage.setItem('cookieChoice', choice);
      banner.classList.remove('show');
      setTimeout(() => banner.remove(), 400); // Wait for transition
    };

    document.getElementById('acceptAllCookies').addEventListener('click', () => closeBanner('all'));
    document.getElementById('acceptNecessaryCookies').addEventListener('click', () => closeBanner('necessary'));
    document.getElementById('denyCookies').addEventListener('click', () => closeBanner('denied'));
  }
});

// STATS COUNTER ANIMATION
document.addEventListener("DOMContentLoaded", () => {
  const statElements = document.querySelectorAll('.hero-stat-num');
  
  if (statElements.length > 0) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          
          if (!el.hasAttribute('data-original-text')) {
            el.setAttribute('data-original-text', el.innerText.trim());
          }
          
          const text = el.getAttribute('data-original-text');
          const isPlus = text.includes('+');
          const target = parseInt(text.replace(/\D/g, ''), 10);
          
          if (!isNaN(target)) {
            el.innerText = isPlus ? '+0' : '0';
            
            const duration = 2000; // ms
            const start = performance.now();
            
            const animate = (timestamp) => {
              const progress = Math.min((timestamp - start) / duration, 1);
              const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              const current = Math.ceil(easeOutProgress * target);
              
              el.innerText = (isPlus ? '+' : '') + current;
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                el.innerText = text;
              }
            };
            
            requestAnimationFrame(animate);
          }
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1 });
    
    statElements.forEach(el => {
      statsObserver.observe(el);
    });
  }
});
