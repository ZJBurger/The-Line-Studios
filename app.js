/* ═══════════════════════════════════════════════════════════════════════════
   THE LINE STUDIOS — app.js
   Nav · scroll reveals · portfolio categories · process spine
   testimonials · contact form · cookies · legal modals
═══════════════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ── YEAR ── */
  const yr = $('#yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ── NAVBAR ── */
  const navbar     = $('#navbar');
  const hamburger  = $('#hamburger');
  const mobileMenu = $('#mobileMenu');
  let lastY = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 40);
    if (Math.abs(y - lastY) > 60 && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
    }
    lastY = y;
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  $$('a', mobileMenu).forEach(a => a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
  }));

  /* ── SMOOTH SCROLL ── */
  const navH = () => parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 82;

  function scrollToEl(el) {
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - navH() - 14, behavior: 'smooth' });
  }

  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href === '#' || a.dataset.legal !== undefined) return;
      const target = $(href);
      if (target) { e.preventDefault(); scrollToEl(target); }
    });
  });

  $$('.catalogue-scroll-link').forEach(l => {
    l.addEventListener('click', e => { e.preventDefault(); scrollToEl($('#online')); });
  });

  /* ── SCROLL REVEALS (bidirectional) ── */
  function makeObserver(selector, cls, stagger = 0) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add(cls);
        else if (entry.boundingClientRect.top > 0) entry.target.classList.remove(cls);
      });
    }, { threshold: 0.12 });

    $$(selector).forEach((el, i) => {
      if (stagger) el.style.transitionDelay = `${i * stagger}ms`;
      io.observe(el);
    });
    return io;
  }

  makeObserver('.service-card', 'visible', 80);
  makeObserver('.fade-in-up',   'visible');
  makeObserver('.process-step', 'visible', 70);

  /* ══════════════════════════════════════════════════════════════════
     PORTFOLIO — category → collage
  ══════════════════════════════════════════════════════════════════ */
  const PROJECTS = {
    commercial: {
      title: 'Commercial',
      blurb: 'Brand activations, showrooms, corporate lounges and retail environments.',
      subcats: {
        mahindra: {
          title: 'Mahindra',
          blurb: 'Brand activation stands and dealership environments for Mahindra — Festival of Motoring, NAMPO and permanent installations.',
          cover: 'Assets/Com_Portfolio/Mahindra/1786996651465-3c2d1ee2-ddb0-4e09-a9f4-2ed19c8068dd_1.jpg',
          items: [
            // ── Festival of Motoring 2025 ──
            { src: 'Assets/Com_Portfolio/Mahindra/1786996651465-3c2d1ee2-ddb0-4e09-a9f4-2ed19c8068dd_1.jpg', name: 'Elevate the Journey',        meta: 'Festival of Motoring · 2025', cls: 'wide fit' },
            { src: 'Assets/Com_Portfolio/Mahindra/1786996651465-3c2d1ee2-ddb0-4e09-a9f4-2ed19c8068dd_7.jpg', name: 'Stand Proposal Render',      meta: 'Festival of Motoring · 2025', cls: 'wide fit' },
            { src: 'Assets/Com_Portfolio/Mahindra/1786996651465-3c2d1ee2-ddb0-4e09-a9f4-2ed19c8068dd_8.jpg', name: 'Proposed Front Elevation',   meta: 'Festival of Motoring · 2025', cls: 'wide fit' },
            { src: 'Assets/Com_Portfolio/Mahindra/1786996651465-3c2d1ee2-ddb0-4e09-a9f4-2ed19c8068dd_4.jpg', name: 'Concept Behind Design',      meta: 'Festival of Motoring · 2025', cls: 'wide fit' },
            { src: 'Assets/Com_Portfolio/Mahindra/1786996651465-3c2d1ee2-ddb0-4e09-a9f4-2ed19c8068dd_6.jpg', name: 'Proposed Layout',            meta: 'Festival of Motoring · 2025', cls: 'wide fit' },

            // ── Built activation — on site ──
            { src: 'Assets/Com_Portfolio/Mahindra/WhatsApp Image 2026-05-13 at 22.01.40.jpeg', name: 'Monolith & Signage', meta: 'Mahindra Activation · 2025', cls: '' },
            { src: 'Assets/Com_Portfolio/Mahindra/WhatsApp Image 2026-05-13 at 22.01.41 (2).jpeg', name: 'Vehicle Display Platforms', meta: 'Mahindra Activation · 2025', cls: '' },
            { src: 'Assets/Com_Portfolio/Mahindra/WhatsApp Image 2026-05-13 at 22.01.42 (3).jpeg', name: 'Container Stand Build', meta: 'Mahindra Activation · 2025', cls: 'wide' },
            { src: 'Assets/Com_Portfolio/Mahindra/WhatsApp Image 2026-05-13 at 22.01.41 (4).jpeg', name: 'Arch Entrance', meta: 'Mahindra Activation · 2025', cls: '' },
            { src: 'Assets/Com_Portfolio/Mahindra/WhatsApp Image 2026-05-13 at 22.01.41 (1).jpeg', name: 'Entrance Walkway', meta: 'Mahindra Activation · 2025', cls: '' },
            { src: 'Assets/Com_Portfolio/Mahindra/WhatsApp Image 2026-05-13 at 22.01.43.jpeg', name: 'Arch & Pathway', meta: 'Mahindra Activation · 2025', cls: 'wide' },
            { src: 'Assets/Com_Portfolio/Mahindra/WhatsApp Image 2026-05-13 at 22.01.43 (2).jpeg', name: 'Container Lounge', meta: 'Mahindra Activation · 2025', cls: '' },
            { src: 'Assets/Com_Portfolio/Mahindra/WhatsApp Image 2026-05-13 at 22.01.43 (3).jpeg', name: 'Visitor Pathway', meta: 'Mahindra Activation · 2025', cls: '' },
            { src: 'Assets/Com_Portfolio/Mahindra/WhatsApp Image 2026-05-13 at 22.01.44.jpeg', name: 'Vehicle Line-Up', meta: 'Mahindra Activation · 2025', cls: 'wide' },
            { src: 'Assets/Com_Portfolio/Mahindra/WhatsApp Image 2026-05-13 at 22.01.45 (2).jpeg', name: 'Arch Entrance — Wide View', meta: 'Mahindra Activation · 2025', cls: '' },

            // ── NAMPO 2026 concept ──
            { src: 'Assets/Com_Portfolio/Mahindra/P2.png', name: 'Briefing — Concept Behind Design', meta: 'NAMPO 2026 · Custom Line', cls: 'wide fit' },
            { src: 'Assets/Com_Portfolio/Mahindra/P4.png', name: 'Proposed Layout',                  meta: 'NAMPO 2026 · Custom Line', cls: 'wide fit' },
            { src: 'Assets/Com_Portfolio/Mahindra/P5.png', name: 'Proposed Render & Entrance',        meta: 'NAMPO 2026 · Custom Line', cls: 'wide fit' },
            { src: 'Assets/Com_Portfolio/Mahindra/P6.png', name: 'Proposed Entrance & Palette',        meta: 'NAMPO 2026 · Custom Line', cls: 'wide fit' }
          ]
        },
        studio: {
          title: 'Studio & Corporate',
          blurb: 'Çava The Studio fit-out and Bidvest executive lounges.',
          cover: 'Assets/Com_Portfolio/Cava/Cava Mood board-images-4.jpg',
          items: [
            // ── Çava The Studio ──
            { src: 'Assets/Com_Portfolio/Cava/Cava Mood board-images-4.jpg', name: 'Çava The Studio — Storefront', meta: 'Studio Fit-Out · 2025', cls: 'tall' },
            { src: 'Assets/Com_Portfolio/Cava/Cava Mood board-images-0.jpg', name: 'Entrance & Selfie Bench', meta: 'Çava The Studio · 2025', cls: 'tall' },
            { src: 'Assets/Com_Portfolio/Cava/Cava Mood board-images-8.jpg', name: 'Studio & Event Space', meta: 'Çava The Studio · 2025', cls: 'wide fit' },
            { src: 'Assets/Com_Portfolio/Cava/Cava Mood board-images-6.jpg', name: 'Reception & Lounge', meta: 'Çava The Studio · 2025', cls: 'tall fit' },
            { src: 'Assets/Com_Portfolio/Cava/Cava Mood board-images-2.jpg', name: 'Floor Plan & Scope of Work', meta: 'Çava The Studio · 2025', cls: 'tall fit' },
            { src: 'Assets/Com_Portfolio/Cava/Cava_Dresser.png', name: 'Dresser Detail', meta: 'Çava The Studio · 2025', cls: 'tall' },
            { src: 'Assets/Com_Portfolio/Cava/Cava_Extra.png', name: 'Interior Detail', meta: 'Çava The Studio · 2025', cls: 'wide' },
            { src: 'Assets/Com_Portfolio/Cava/Couch_Cava.png', name: 'Lounge Seating', meta: 'Çava The Studio · 2025', cls: 'wide' },

            // ── Bidvest ──
            { src: 'Assets/bidvest2.jpg',            name: 'Bidvest Lounge',                 meta: 'South Africa · 2024', cls: 'wide' },
            { src: 'Assets/bidvest.jpeg',            name: 'Executive Lounge',               meta: 'Limpopo · 2024',      cls: '' }
          ]
        }
      }
    },
    hospitality: {
      title: 'Hospitality',
      blurb: 'Lodges, bars, guest suites and outdoor living built for atmosphere.',
      subcats: {
        chacma: {
          title: 'Chacma Bush Camp',
          blurb: 'Warm lodge interiors and relaxed outdoor spaces for Chacma Bush Camp.',
          cover: 'Assets/Hos_Portfolio/Chacma/chacma.jpeg',
          items: [
            { src: 'Assets/Hos_Portfolio/Chacma/chacma.jpeg', name: 'Thatched Bar & Deck', meta: 'Chacma Bush Camp', cls: 'wide' },
            { src: 'Assets/Hos_Portfolio/Chacma/bar.jpeg', name: 'Bar Detail', meta: 'Chacma Bush Camp', cls: '' },
            { src: 'Assets/Hos_Portfolio/Chacma/dining1.jpeg', name: 'Dining Area', meta: 'Chacma Bush Camp', cls: '' },
            { src: 'Assets/Hos_Portfolio/Chacma/dining2.jpeg', name: 'Tented Dining', meta: 'Chacma Bush Camp', cls: '' },
            { src: 'Assets/Hos_Portfolio/Chacma/bedroom.jpeg', name: 'Guest Bedroom', meta: 'Chacma Bush Camp', cls: 'tall' },
            { src: 'Assets/Hos_Portfolio/Chacma/pool.jpeg', name: 'Pool Area', meta: 'Chacma Bush Camp', cls: 'wide' }
          ]
        },
        nthambo: {
          title: 'Nthambo Tree Camp',
          blurb: 'A collection of lodge bars, suites, pools and welcoming spaces for Nthambo Tree Camp.',
          cover: 'Assets/Hos_Portfolio/Nthambo/nThambo Tree Camp Facade.jpg',
          items: [
            { src: 'Assets/Hos_Portfolio/Nthambo/nThambo Tree Camp Facade.jpg', name: 'Tree Camp Facade', meta: 'Nthambo Tree Camp', cls: 'wide' },
            { src: 'Assets/Hos_Portfolio/Nthambo/9a-nthambo-tree-camp-accommodation7.jpg', name: 'Camp Accommodation', meta: 'Nthambo Tree Camp', cls: 'wide' },
            { src: 'Assets/Hos_Portfolio/Nthambo/bar.jpeg', name: 'Bar Detail', meta: 'Nthambo Tree Camp', cls: '' },
            { src: 'Assets/Hos_Portfolio/Nthambo/bar2.jpeg', name: 'Bar Interior', meta: 'Nthambo Tree Camp', cls: '' },
            { src: 'Assets/Hos_Portfolio/Nthambo/barpro.jpeg', name: 'Bar Proposal', meta: 'Nthambo Tree Camp', cls: 'tall' },
            { src: 'Assets/Hos_Portfolio/Nthambo/barpro2.jpeg', name: 'Bar & Counter Seating', meta: 'Nthambo Tree Camp', cls: 'tall' },
            { src: 'Assets/Hos_Portfolio/Nthambo/Beautiful Bar Area.jpg', name: 'Beautiful Bar Area', meta: 'Nthambo Tree Camp', cls: 'wide' },
            { src: 'Assets/Hos_Portfolio/Nthambo/Lounge Welcoming Area.jpg', name: 'Lounge & Welcoming Area', meta: 'Nthambo Tree Camp', cls: 'wide' },
            { src: 'Assets/Hos_Portfolio/Nthambo/room2.jpeg', name: 'Stone Suite', meta: 'Nthambo Tree Camp', cls: 'tall' },
            { src: 'Assets/Hos_Portfolio/Nthambo/room3.jpeg', name: 'Guest Suite', meta: 'Nthambo Tree Camp', cls: 'tall' },
            { src: 'Assets/Hos_Portfolio/Nthambo/room5.jpeg', name: 'Guest Suite Detail', meta: 'Nthambo Tree Camp', cls: 'tall fit' },
            { src: 'Assets/Hos_Portfolio/Nthambo/room6.jpeg', name: 'Bedroom Detail', meta: 'Nthambo Tree Camp', cls: 'tall fit' },
            { src: 'Assets/Hos_Portfolio/Nthambo/stools.jpeg', name: 'Stools & Seating', meta: 'Nthambo Tree Camp', cls: '' },
            { src: 'Assets/Hos_Portfolio/Nthambo/Swimming Pool and Deck.jpg', name: 'Swimming Pool & Deck', meta: 'Nthambo Tree Camp', cls: 'wide' },
            { src: 'Assets/Hos_Portfolio/Nthambo/Swimming Pool and Deck_1.jpg', name: 'Pool & Sun Deck', meta: 'Nthambo Tree Camp', cls: 'wide' },
            { src: 'Assets/Hos_Portfolio/Nthambo/Bar and Pool Area.jpg', name: 'Bar & Pool Area', meta: 'Nthambo Tree Camp', cls: 'wide' },
            { src: 'Assets/Hos_Portfolio/Nthambo/WhatsApp Image 2026-05-21 at 15.34.54.jpeg', name: 'Camp Detail', meta: 'Nthambo Tree Camp', cls: '' }
          ]
        }
      }
    },
    retail: {
      title: 'Retail',
      blurb: 'Salons, spas and showrooms — brand environments built to move product.',
      items: [
        // ── Nude Society Salon & Spa · Lynnridge Walk, Pretoria ──
        { src: 'Assets/Ret_Portfolio/Nude society_page-0001.jpg', name: 'Nude Society — Salon & Spa', meta: 'Lynnwood Ridge, Pretoria', cls: 'wide fit' },
        { src: 'Assets/Ret_Portfolio/Nude society_page-0004.jpg', name: 'Project Overview',          meta: '800sqm · Design & Shopfitting', cls: 'wide fit' },
        { src: 'Assets/Ret_Portfolio/Nude society_page-0005.jpg', name: 'Design Process',            meta: 'Nude Society', cls: 'wide fit' },
        { src: 'Assets/Ret_Portfolio/Nude society_page-0007.jpg', name: 'Project Timeline',          meta: 'Nude Society', cls: 'wide fit' },
        { src: 'Assets/Ret_Portfolio/Nude society_page-0008.jpg', name: 'Project Inspiration',       meta: 'Nude Society', cls: 'wide fit' },
        { src: 'Assets/Ret_Portfolio/Nude society_page-0009.jpg', name: 'Proposed Layout',           meta: 'Ground Floor Plan', cls: 'wide fit' },
        { src: 'Assets/Ret_Portfolio/Nude society_page-0010.jpg', name: 'Entrance, Reception & Café',meta: 'Section Inspiration', cls: 'wide fit' },
        { src: 'Assets/Ret_Portfolio/Nude society_page-0011.jpg', name: 'Nail, Hair & Bathrooms',    meta: 'Section Inspiration', cls: 'wide fit' },
        { src: 'Assets/Ret_Portfolio/Nude society_page-0012.jpg', name: 'Treatment & Recovery Rooms',meta: 'Section Inspiration', cls: 'wide fit' },
        { src: 'Assets/Ret_Portfolio/Nude society_page-0013.jpg', name: 'Back of House & Lounge',    meta: 'Section Inspiration', cls: 'wide fit' }
      ]
    },
    private: {
      title: 'Private Residences',
      blurb: 'Homes designed, furnished and styled from concept to installation.',
      subcats: {
        lynnwoodManor: {
          title: 'Lynnwood Manor',
          blurb: 'A family home shaped around warm materials, practical detail and everyday living.',
          cover: 'Assets/Res_Portfolio/Lynnwood Manor/20221111_163429-01.jpeg',
          items: [
            { src: 'Assets/Res_Portfolio/Lynnwood Manor/20221111_163429-01.jpeg', name: 'Living & Lounge', meta: 'Lynnwood Manor · 2022', cls: 'wide' },
            { src: 'Assets/Res_Portfolio/Lynnwood Manor/20221111_163328-01.jpeg', name: 'Dining Room', meta: 'Lynnwood Manor · 2022', cls: '' },
            { src: 'Assets/Res_Portfolio/Lynnwood Manor/20221111_163352-01.jpeg', name: 'Dining & Kitchen View', meta: 'Lynnwood Manor · 2022', cls: '' },
            { src: 'Assets/Res_Portfolio/Lynnwood Manor/20221111_163335-01.jpeg', name: 'Shaker Kitchen', meta: 'Lynnwood Manor · 2022', cls: 'wide' },
            { src: 'Assets/Res_Portfolio/Lynnwood Manor/20221111_160212-01.jpeg', name: 'Master Bedroom', meta: 'Lynnwood Manor · 2022', cls: 'wide' },
            { src: 'Assets/Res_Portfolio/Lynnwood Manor/20221111_160207-01.jpeg', name: 'Bedroom Detail', meta: 'Lynnwood Manor · 2022', cls: '' },
            { src: 'Assets/Res_Portfolio/Lynnwood Manor/20221111_160234-01.jpeg', name: 'Bedroom View', meta: 'Lynnwood Manor · 2022', cls: '' },
            { src: 'Assets/Res_Portfolio/Lynnwood Manor/20221111_160241-01.jpeg', name: 'Bedroom Styling', meta: 'Lynnwood Manor · 2022', cls: '' },
            { src: 'Assets/Res_Portfolio/Lynnwood Manor/20221111_160522-01.jpeg', name: 'Interior Detail', meta: 'Lynnwood Manor · 2022', cls: '' },
            { src: 'Assets/Res_Portfolio/Lynnwood Manor/20221111_162649-01.jpeg', name: 'Living Detail', meta: 'Lynnwood Manor · 2022', cls: '' },
            { src: 'Assets/Res_Portfolio/Lynnwood Manor/20221111_163345-01.jpeg', name: 'Kitchen Detail', meta: 'Lynnwood Manor · 2022', cls: '' },
            { src: 'Assets/Res_Portfolio/Lynnwood Manor/20221111_163411-01.jpeg', name: 'Dining Detail', meta: 'Lynnwood Manor · 2022', cls: '' },
            { src: 'Assets/Res_Portfolio/Lynnwood Manor/20221111_163416-01.jpeg', name: 'Living Space', meta: 'Lynnwood Manor · 2022', cls: 'wide' }
          ]
        },
        naidoo: {
          title: 'Naidoo Residence',
          blurb: 'A contemporary residence with considered living spaces, custom joinery and layered finishes.',
          cover: 'Assets/Res_Portfolio/Naidoo/Living area.png',
          items: [
            { src: 'Assets/Res_Portfolio/Naidoo/Living area.png', name: 'Open-Plan Living & Dining', meta: 'Naidoo Residence', cls: 'wide' },
            { src: 'Assets/Res_Portfolio/Naidoo/Kitchen.png', name: 'Walnut & Marble Kitchen', meta: 'Naidoo Residence', cls: 'wide' },
            { src: 'Assets/Res_Portfolio/Naidoo/Bathroom.png', name: 'Guest Bathroom', meta: 'Naidoo Residence', cls: 'tall' },
            { src: 'Assets/Res_Portfolio/Naidoo/walkin.png', name: 'Walk-In Dressing Room', meta: 'Naidoo Residence', cls: 'tall' },
            { src: 'Assets/Res_Portfolio/Naidoo/kids bedroom.jpeg', name: "Children's Bedroom", meta: 'Naidoo Residence', cls: 'tall' },
            { src: 'Assets/Res_Portfolio/Naidoo/server.jpeg', name: 'Server Detail', meta: 'Naidoo Residence', cls: '' },
            { src: 'Assets/Res_Portfolio/Naidoo/tv room.jpeg', name: 'TV Room', meta: 'Naidoo Residence', cls: 'wide' },
            { src: 'Assets/Res_Portfolio/Naidoo/Gemini_Generated_Image_z85cryz85cryz85c.jpeg', name: 'Interior Render', meta: 'Naidoo Residence', cls: 'wide fit' }
          ]
        }
      }
    }
  };

  const pfCats    = $('#pfCategories');
  const pfDetail  = $('#pfDetail');
  const pfCollage = $('#pfCollage');
  const pfSubcats = $('#pfSubcats');
  const pfTitle   = $('#pfDetailTitle');
  const pfSub     = $('#pfSub');
  const pfBack    = $('#pfBack');
  const pfSubText = pfSub ? pfSub.textContent : '';

  let navStack = []; // holds parent nodes so "back" can step up one level at a time

  function renderNode(node) {
    pfTitle.textContent = node.title;
    if (pfSub) pfSub.textContent = node.blurb;

    if (node.items) {
      // Leaf node — show the image collage
      if (pfSubcats) { pfSubcats.hidden = true; pfSubcats.innerHTML = ''; }
      pfCollage.hidden = false;
      pfCollage.innerHTML = node.items.map((it, i) => `
        <figure class="pf-tile ${it.cls}" style="animation-delay:${i * 90}ms">
          <img src="${it.src}" alt="${it.name}" loading="lazy" />
          <figcaption class="pf-tile-cap">
            <strong>${it.name}</strong>
            <span>${it.meta}</span>
          </figcaption>
        </figure>`).join('');
    } else if (node.subcats) {
      // Branch node — show sub-folder tiles
      pfCollage.hidden = true;
      pfCollage.innerHTML = '';
      if (pfSubcats) {
        pfSubcats.hidden = false;
        pfSubcats.innerHTML = Object.entries(node.subcats).map(([key, sc], i) => `
          <button class="pf-cat" data-subcat="${key}" type="button" style="animation-delay:${i * 110}ms">
            <img src="${sc.cover}" alt="${sc.title}" loading="lazy" />
            <span class="pf-cat-veil"></span>
            <span class="pf-cat-body">
              <span class="pf-cat-name">${sc.title}</span>
              <span class="pf-cat-count">${sc.items.length} Projects</span>
              <span class="pf-cat-cta">Click Me</span>
            </span>
          </button>`).join('');

        $$('.pf-cat', pfSubcats).forEach(btn => {
          btn.addEventListener('click', () => {
            navStack.push(node);
            renderNode(node.subcats[btn.dataset.subcat]);
          });
        });
      }
    }
  }

  function openCategory(key) {
    const data = PROJECTS[key];
    if (!data || !pfCats || !pfDetail) return;

    navStack = [];

    // Fade the category tiles out, then swap
    pfCats.classList.add('is-hiding');

    setTimeout(() => {
      pfCats.hidden = true;
      pfCats.classList.remove('is-hiding');

      renderNode(data);

      pfDetail.hidden = false;
      scrollToEl($('#portfolio'));
    }, 420);
  }

  function closeCategory() {
    if (!pfCats || !pfDetail) return;
    navStack = [];
    pfDetail.hidden = true;
    pfCollage.innerHTML = '';
    if (pfSubcats) pfSubcats.innerHTML = '';
    if (pfSub) pfSub.textContent = pfSubText;
    pfCats.hidden = false;
    // Re-trigger the entrance animation
    $$('.pf-cat', pfCats).forEach(c => {
      c.style.animation = 'none';
      void c.offsetWidth;
      c.style.animation = '';
    });
    scrollToEl($('#portfolio'));
  }

  function backOneLevel() {
    if (navStack.length > 0) {
      renderNode(navStack.pop());
      scrollToEl($('#portfolio'));
    } else {
      closeCategory();
    }
  }

  $$('.pf-cat', pfCats).forEach(btn => btn.addEventListener('click', () => openCategory(btn.dataset.cat)));
  if (pfBack) pfBack.addEventListener('click', backOneLevel);

  /* ── PROCESS SPINE ── */
  const spineFill = $('#processSpineFill');
  const spineGlow = $('#processSpineGlow');
  const spineWrap = $('#processSpine');
  let curPct = 0, tgtPct = 0;

  function calcSpine() {
    if (!spineWrap) return 0;
    const rect = spineWrap.getBoundingClientRect();
    const vh   = window.innerHeight;
    const scrolled = vh - rect.top;
    return Math.min(100, Math.max(0, (scrolled / (spineWrap.offsetHeight + vh * 0.6)) * 130));
  }
  function animSpine() {
    curPct += (tgtPct - curPct) * 0.05;
    if (spineFill) spineFill.style.height = curPct + '%';
    if (spineGlow) spineGlow.style.top    = curPct + '%';
    requestAnimationFrame(animSpine);
  }
  if (spineWrap) {
    window.addEventListener('scroll', () => { tgtPct = calcSpine(); }, { passive: true });
    tgtPct = calcSpine();
    animSpine();
  }

  /* ── HERO: pause scene off-screen ── */
  const heroScene = $('.hero-scene');
  if (heroScene) {
    new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const state = entry.isIntersecting ? 'running' : 'paused';
        heroScene.style.animationPlayState = state;
        $$('*', heroScene).forEach(el => { el.style.animationPlayState = state; });
      });
    }, { threshold: 0 }).observe(heroScene);
  }

  /* ── HERO PARALLAX (desktop only) ── */
  const heroContent = $('.hero-content');
  if (heroContent && window.matchMedia('(min-width: 821px)').matches) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroContent.style.transform = `translateY(${y * 0.16}px)`;
        heroContent.style.opacity   = String(1 - y / (window.innerHeight * 0.85));
      }
    }, { passive: true });
  }

  /* ── ACTIVE NAV LINK ── */
  const navAnchors = $$('.nav-links a[href^="#"]');
  $$('section[id]').forEach(sec => {
    new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navAnchors.forEach(a => {
          a.style.color = '';
          if (a.getAttribute('href') === `#${entry.target.id}` && !a.classList.contains('nav-cta')) {
            a.style.color = 'var(--limestone)';
          }
        });
      });
    }, { threshold: 0.35 }).observe(sec);
  });

  /* ── TESTIMONIALS (mobile slider) ── */
  const tCards = $$('.testimonial-card');
  const tDots  = $$('.testimonial-dots .dot');
  let slide = 0;

  function showSlide(i) {
    if (window.innerWidth <= 900) {
      tCards.forEach((c, n) => c.classList.toggle('active-slide', n === i));
      tDots.forEach((d, n)  => d.classList.toggle('active', n === i));
    } else {
      tCards.forEach(c => c.classList.add('active-slide'));
    }
    slide = i;
  }
  tDots.forEach(d => d.addEventListener('click', () => showSlide(parseInt(d.dataset.idx))));
  setInterval(() => { if (window.innerWidth <= 900) showSlide((slide + 1) % tCards.length); }, 5600);

  function initT() {
    if (window.innerWidth <= 900) showSlide(0);
    else tCards.forEach(c => c.classList.add('active-slide'));
  }
  initT();
  window.addEventListener('resize', initT);

  /* ── CONTACT FORM ── */
  const form    = $('#contactForm');
  const success = $('#formSuccess');
  const submit  = $('#submitBtn');

  // ── EmailJS config ──
  // Fill these in from your EmailJS account (emailjs.com → Account → General
  // for the Public Key; Email Services for the Service ID; Email Templates
  // for the Template ID), then this form will send real emails.
  const EMAILJS_PUBLIC_KEY  = 'lrlPQMcTLzCdsZuEo';
  const EMAILJS_SERVICE_ID  = 'service_dws43ab';
  const EMAILJS_TEMPLATE_ID = 'template_ztr95vg';

  if (window.emailjs && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      // Honeypot — bots fill every field, real users never see or fill this one
      const hp = $('#hp_website', form);
      if (hp && hp.value.trim()) {
        form.reset();
        submit.style.display = 'none';
        success.classList.add('show');
        return;
      }

      $$('.error', form).forEach(el => el.classList.remove('error'));
      let ok = true;

      $$('[required]', form).forEach(f => {
        if (!f.value.trim()) { f.classList.add('error'); ok = false; }
      });
      const email = $('#email', form);
      if (email?.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add('error'); ok = false;
      }
      if (!ok) {
        submit.style.animation = 'shake .4s ease';
        setTimeout(() => submit.style.animation = '', 420);
        $('.error', form)?.focus();
        return;
      }

      submit.disabled = true;
      $('.btn-label', submit).textContent = 'Sending…';
      $('.btn-icon',  submit).textContent = '⟳';

      const finish = () => {
        submit.style.display = 'none';
        success.classList.add('show');
        form.reset();
      };
      const fail = () => {
        submit.disabled = false;
        $('.btn-label', submit).textContent = 'Send Enquiry';
        $('.btn-icon',  submit).textContent = '→';
        alert('Sorry — something went wrong sending your enquiry. Please email us directly or try again.');
      };

      if (window.emailjs && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
          .then(finish)
          .catch(err => { console.error('EmailJS error:', err); fail(); });
      } else {
        console.warn('EmailJS is not configured yet — see the EMAILJS_* constants in app.js.');
        setTimeout(finish, 1200);
      }
    });

    $$('input, select, textarea', form).forEach(f => {
      f.addEventListener('input', () => f.classList.remove('error'));
    });
  }

  /* ══════════════════════════════════════════════════════════════════
     COOKIE CONSENT
  ══════════════════════════════════════════════════════════════════ */
  const KEY = 'tls_cookie_consent';
  const bar = $('#cookieBar');

  // ── Google Analytics (GA4) config ──
  // Paste your Measurement ID from analytics.google.com (Admin → Data
  // Streams → your stream → Measurement ID, looks like "G-XXXXXXXXXX").
  // Analytics only ever loads if the visitor has accepted optional cookies.
  const GA_MEASUREMENT_ID = 'G-MRVQ304YS9';

  function loadAnalytics() {
    if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
      console.warn('Google Analytics is not configured yet — see GA_MEASUREMENT_ID in app.js.');
      return;
    }
    if (window.gtagLoaded) return;
    window.gtagLoaded = true;

    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
  }

  function getConsent() {
    try { return JSON.parse(localStorage.getItem(KEY)); } catch { return null; }
  }
  function setConsent(analytics) {
    try {
      localStorage.setItem(KEY, JSON.stringify({
        essential: true,
        analytics,
        date: new Date().toISOString()
      }));
    } catch { /* storage blocked — banner will simply reappear */ }
    if (analytics) loadAnalytics();
  }
  function hideBar() {
    if (!bar) return;
    bar.classList.add('dismissing');
    setTimeout(() => { bar.hidden = true; bar.classList.remove('dismissing'); }, 450);
  }
  function showBar() {
    if (!bar) return;
    bar.hidden = false;
    bar.classList.remove('dismissing');
  }

  const existingConsent = getConsent();
  if (bar && !existingConsent) showBar();
  if (existingConsent?.analytics) loadAnalytics();

  $('#cookieAccept')?.addEventListener('click', () => { setConsent(true);  hideBar(); });
  $('#cookieReject')?.addEventListener('click', () => { setConsent(false); hideBar(); });
  $('#cookieSettings')?.addEventListener('click', e => { e.preventDefault(); showBar(); });

  /* ══════════════════════════════════════════════════════════════════
     LEGAL MODALS
  ══════════════════════════════════════════════════════════════════ */
  const UPDATED = 'Last updated: 12 August 2026';

  const LEGAL = {
    privacy: {
      title: 'Privacy Policy',
      body: `
        <p class="updated">${UPDATED}</p>
        <p>The Line Studios ("we", "us") respects your privacy and is committed to protecting your personal information in accordance with the Protection of Personal Information Act, 2013 (POPIA).</p>

        <h3>Information We Collect</h3>
        <p>We collect information you provide directly through our enquiry form — your name, email address, company name, project type and any details you choose to share. We also collect limited technical data such as browser type, device type and pages visited, where you have consented to analytics cookies.</p>

        <h3>How We Use It</h3>
        <ul>
          <li>To respond to your enquiry and provide quotations</li>
          <li>To manage projects and communicate about work in progress</li>
          <li>To improve our website and understand how visitors use it</li>
          <li>To comply with legal and accounting obligations</li>
        </ul>

        <h3>Sharing</h3>
        <p>We do not sell your personal information. We share it only with service providers who help us operate — such as email and hosting providers — and only to the extent needed. We may disclose information where required by South African law.</p>

        <h3>Retention</h3>
        <p>Enquiry records are kept for up to three years. Project and financial records are retained for five years as required by South African tax legislation.</p>

        <h3>Your Rights</h3>
        <p>Under POPIA you may request access to the personal information we hold about you, ask us to correct or delete it, object to processing, or lodge a complaint with the Information Regulator of South Africa.</p>

        <h3>Contact</h3>
        <p>For any privacy request, email <a href="mailto:info@thelineco.co.za">info@thelineco.co.za</a> or call 083 382 1738.</p>
      `
    },

    terms: {
      title: 'Terms of Service',
      body: `
        <p class="updated">${UPDATED}</p>
        <p>These terms govern your use of the The Line Studios website. By using this site you agree to them.</p>

        <h3>Use of This Site</h3>
        <p>You may browse and use this site for lawful purposes and for genuine enquiries about our services. You may not attempt to gain unauthorised access, disrupt the site, or scrape content for commercial reuse.</p>

        <h3>Intellectual Property</h3>
        <p>All content on this site — including project photography, designs, text, the logo and brand identity — belongs to The Line Studios or is used with permission. You may not reproduce or republish it without our written consent.</p>

        <h3>Enquiries and Quotations</h3>
        <p>Submitting the enquiry form does not create a contract. All work is subject to a written quotation and signed acceptance. Quoted prices are valid for 30 days unless stated otherwise.</p>

        <h3>Product Information</h3>
        <p>Prices and product details shown on this site are indicative and may change. Purchases made through our online store at thelineco.co.za are governed by the terms published on that store.</p>

        <h3>Third-Party Links</h3>
        <p>This site links to our online store and other external sites. We are not responsible for the content or practices of third-party websites.</p>

        <h3>Limitation of Liability</h3>
        <p>This website is provided "as is". To the extent permitted by South African law we are not liable for any indirect or consequential loss arising from use of this site or reliance on its content. Nothing here limits liability that cannot lawfully be excluded, including under the Consumer Protection Act.</p>

        <h3>Governing Law</h3>
        <p>These terms are governed by the laws of the Republic of South Africa.</p>
      `
    },

    cookies: {
      title: 'Cookie Policy',
      body: `
        <p class="updated">${UPDATED}</p>
        <p>Cookies are small text files placed on your device when you visit a website. This policy explains which ones we use and why.</p>

        <h3>Strictly Necessary</h3>
        <p>These are required for the site to function and cannot be switched off. We use one to remember your cookie preference so we don't ask on every visit. It is stored locally in your browser and contains no personal information.</p>

        <h3>Analytics (Optional)</h3>
        <p>With your consent we use analytics cookies to understand which pages are visited and how visitors navigate the site. This helps us improve the experience. The data is aggregated and does not identify you personally. If you reject optional cookies, none of these are set.</p>

        <h3>Managing Your Choice</h3>
        <p>You can change your decision at any time using the <strong>Cookie Settings</strong> link in the footer. You can also clear or block cookies through your browser settings, though blocking all cookies may affect how the site works.</p>

        <h3>Third-Party Cookies</h3>
        <p>Our online store at thelineco.co.za operates separately and sets its own cookies under its own policy.</p>

        <h3>Questions</h3>
        <p>Email <a href="mailto:info@thelineco.co.za">info@thelineco.co.za</a> with any questions about this policy.</p>
      `
    }
  };

  const modal      = $('#legalModal');
  const modalTitle = $('#legalTitle');
  const modalBody  = $('#legalBody');
  let lastFocus = null;

  function openLegal(key) {
    const doc = LEGAL[key];
    if (!doc || !modal) return;
    lastFocus = document.activeElement;
    modalTitle.textContent = doc.title;
    modalBody.innerHTML = doc.body;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    $('.modal-close', modal)?.focus();
  }
  function closeLegal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    lastFocus?.focus();
  }

  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-legal]');
    if (trigger) { e.preventDefault(); openLegal(trigger.dataset.legal); return; }
    if (e.target.closest('[data-close]')) closeLegal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal && !modal.hidden) closeLegal();
  });

});