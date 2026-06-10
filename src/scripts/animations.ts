import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------------------------------------- scroll reveals -- */
function initReveals() {
  const els = gsap.utils.toArray<HTMLElement>('[data-reveal]');
  els.forEach((el) => {
    const delay = parseFloat(el.dataset.revealDelay || '0');
    const y = parseFloat(el.dataset.revealY || '28');
    gsap.fromTo(
      el,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      }
    );
  });
}

/* staggered groups: parent [data-reveal-group], children animate in sequence */
function initRevealGroups() {
  gsap.utils.toArray<HTMLElement>('[data-reveal-group]').forEach((group) => {
    const children = group.querySelectorAll<HTMLElement>('[data-reveal-item]');
    gsap.fromTo(
      children,
      { opacity: 0, y: 34 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: { trigger: group, start: 'top 80%', once: true },
      }
    );
  });
}

/* ------------------------------------------------------ parallax -- */
function initParallax() {
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    const speed = parseFloat(el.dataset.parallax || '0.2');
    gsap.to(el, {
      yPercent: -speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
}

/* ------------------------------------------------------ count-up -- */
function initCounters() {
  gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
    const end = parseFloat(el.dataset.count || '0');
    const decimals = parseInt(el.dataset.countDecimals || '0', 10);
    const obj = { val: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: end,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = obj.val.toFixed(decimals);
          },
        });
      },
    });
  });
}

/* The hero intro (headline clip-reveal + staggered fades) is CSS-driven in
   Hero.astro so it never depends on JS/GSAP to become visible. */

/* ----------------------------------------------- magnetic buttons -- */
function initMagnetic() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  gsap.utils.toArray<HTMLElement>('[data-magnetic]').forEach((el) => {
    const strength = parseFloat(el.dataset.magnetic || '0.4');
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      gsap.to(el, { x: x * strength, y: y * strength, duration: 0.5, ease: 'power3.out' });
    };
    const onLeave = () =>
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
  });
}

/* --------------------------------------------------- custom cursor -- */
let cursorReady = false;
function initCursor() {
  if (cursorReady) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;
  const dot = document.querySelector<HTMLElement>('.cursor-dot');
  const ring = document.querySelector<HTMLElement>('.cursor-ring');
  if (!dot || !ring) return;
  cursorReady = true;

  const dotX = gsap.quickTo(dot, 'x', { duration: 0.15, ease: 'power3' });
  const dotY = gsap.quickTo(dot, 'y', { duration: 0.15, ease: 'power3' });
  const ringX = gsap.quickTo(ring, 'x', { duration: 0.4, ease: 'power3' });
  const ringY = gsap.quickTo(ring, 'y', { duration: 0.4, ease: 'power3' });

  window.addEventListener('mousemove', (e) => {
    dotX(e.clientX);
    dotY(e.clientY);
    ringX(e.clientX);
    ringY(e.clientY);
  });

  // Grow ring over interactive elements
  document.addEventListener('mouseover', (e) => {
    const t = e.target as HTMLElement;
    if (t.closest('a, button, [data-magnetic], input, textarea, [data-cursor]')) {
      ring.classList.add('is-active');
    }
  });
  document.addEventListener('mouseout', (e) => {
    const t = e.target as HTMLElement;
    if (t.closest('a, button, [data-magnetic], input, textarea, [data-cursor]')) {
      ring.classList.remove('is-active');
    }
  });
}

/* ------------------------------------------------------- nav state -- */
function initNav() {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav) return;
  ScrollTrigger.create({
    start: 'top -80',
    onUpdate: (self) => {
      nav.classList.toggle('is-scrolled', self.scroll() > 80);
    },
  });
  // run once for initial state
  nav.classList.toggle('is-scrolled', window.scrollY > 80);
}

function revealAll() {
  document
    .querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-item]')
    .forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
}

// Wrap each init so a single failure can never block the rest (especially the hero).
function safe(fn: () => void, onError?: () => void) {
  try {
    fn();
  } catch (err) {
    console.error('[animations]', err);
    onError?.();
  }
}

let pageInit = false;
function run() {
  if (pageInit) return;
  pageInit = true;
  // Flag the head-level fallback that the engine has started.
  (window as unknown as { __twsAnimated?: boolean }).__twsAnimated = true;
  document.documentElement.classList.add('js');

  // Cursor + nav persist; (re)build the rest per page.
  safe(initCursor);
  safe(initNav);

  if (reduceMotion) {
    revealAll();
    safe(initCounters); // counters still snap via toFixed; harmless
    return;
  }

  safe(initReveals, revealAll);
  safe(initRevealGroups);
  safe(initParallax);
  safe(initCounters);
  safe(initMagnetic);

  safe(() => ScrollTrigger.refresh());
}

// Run on first load and after every Astro View Transition navigation.
document.addEventListener('astro:page-load', run);

// Reset the per-page guard after a navigation swap so the next page re-inits.
document.addEventListener('astro:after-swap', () => {
  pageInit = false;
});

// Clean up triggers before swapping pages to avoid leaks/duplicates.
document.addEventListener('astro:before-swap', () => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
});

// Belt-and-suspenders: if this module evaluates after the DOM is already
// ready (and astro:page-load was missed), kick off immediately. The pageInit
// guard makes this a no-op if astro:page-load also fires.
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run, { once: true });
}
