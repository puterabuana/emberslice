/* Ember Slice — interactions (vanilla, no dependencies) */
(function () {
  "use strict";

  /* ---- Sticky header shadow ---- */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("is-stuck", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Mobile nav ---- */
  const toggle = document.querySelector(".nav-toggle");
  const body = document.body;
  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    document.querySelectorAll(".nav-links a").forEach((a) =>
      a.addEventListener("click", () => {
        body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---- Reveal on scroll ---- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* ---- Menu tabs ---- */
  const tabs = document.querySelectorAll("[data-menu-tab]");
  const panels = document.querySelectorAll("[data-menu-panel]");
  if (tabs.length) {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-menu-tab");
        tabs.forEach((t) => t.setAttribute("aria-selected", String(t === tab)));
        panels.forEach((p) => {
          p.hidden = p.getAttribute("data-menu-panel") !== target;
        });
      });
    });
  }

  /* ---- Highlight today's opening-hours row ---- */
  const hoursRows = document.querySelectorAll("[data-day]");
  if (hoursRows.length) {
    const today = new Date().getDay(); // 0 = Sun
    hoursRows.forEach((row) => {
      if (Number(row.getAttribute("data-day")) === today) row.classList.add("today");
    });
  }

  /* ---- Fake form submit (front-end only demo) ---- */
  document.querySelectorAll("[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const ok = form.querySelector(".form-success");
      if (ok) {
        ok.classList.add("show");
        ok.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      form.reset();
    });
  });

  /* ---- Current year in footer ---- */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
