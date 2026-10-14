/* ==========================================================
   Cute Pink Cat Paradise — interaksi
   ========================================================== */
(function () {
  "use strict";

  // Tandai JS aktif (reveal-on-scroll hanya bekerja jika JS berjalan)
  document.documentElement.classList.add("js");

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Tahun otomatis ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Navbar: shadow saat scroll + tutup menu mobile ---------- */
  const nav = document.getElementById("mainNav");
  const navMenu = document.getElementById("navMenu");
  const backToTop = document.getElementById("backToTop");

  function onScroll() {
    const y = window.scrollY;
    if (nav) nav.classList.toggle("scrolled", y > 20);
    if (backToTop) backToTop.classList.toggle("show", y > 500);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (navMenu && window.bootstrap) {
    const collapse = bootstrap.Collapse.getOrCreateInstance(navMenu, { toggle: false });
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (navMenu.classList.contains("show")) collapse.hide();
      });
    });
  }

  /* ---------- Back to top ---------- */
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
      const brand = document.getElementById("brandLink");
      if (brand) brand.focus({ preventScroll: true });
    });
  }

  /* ---------- Active nav link (scrollspy ringan) ---------- */
  const navLinks = Array.from(document.querySelectorAll(".cute-nav .nav-link"));
  const sections = navLinks
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = "#" + entry.target.id;
          navLinks.forEach((l) => {
            const active = l.getAttribute("href") === id;
            l.classList.toggle("active", active);
            if (active) l.setAttribute("aria-current", "true");
            else l.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el, i) => {
      el.style.transitionDelay = (i % 4) * 70 + "ms";
      revealObs.observe(el);
    });
  }

  /* ---------- Fallback gambar gagal dimuat ---------- */
  document.querySelectorAll(".gallery-img img").forEach((img) => {
    const markFailed = () => img.parentElement.classList.add("img-failed");
    if (img.complete && img.naturalWidth === 0) markFailed();
    img.addEventListener("error", markFailed);
  });

  /* ---------- Filter galeri ---------- */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const items = Array.from(document.querySelectorAll(".gallery-item"));
  const emptyMsg = document.getElementById("galleryEmpty");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      filterBtns.forEach((b) => {
        const on = b === btn;
        b.classList.toggle("active", on);
        b.setAttribute("aria-pressed", String(on));
      });

      let visible = 0;
      items.forEach((item) => {
        const match = filter === "all" || item.dataset.category === filter;
        if (match) {
          visible++;
          item.classList.remove("is-hidden");
          requestAnimationFrame(() => item.classList.remove("is-hiding"));
        } else {
          item.classList.add("is-hiding");
          const delay = prefersReduced ? 0 : 300;
          setTimeout(() => {
            if (item.classList.contains("is-hiding")) item.classList.add("is-hidden");
          }, delay);
        }
      });
      if (emptyMsg) emptyMsg.hidden = visible > 0;
    });
  });

  /* ---------- Lightbox ---------- */
  const modalEl = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightboxImg");
  const lbTitle = document.getElementById("lightboxTitle");
  const lbCaption = document.getElementById("lightboxCaption");
  const lbPrev = document.getElementById("lbPrev");
  const lbNext = document.getElementById("lbNext");
  let currentIndex = 0;
  let lastTrigger = null;

  const visibleCards = () =>
    items.filter((i) => !i.classList.contains("is-hidden")).map((i) => i.querySelector(".gallery-card"));

  function showCard(card) {
    const img = card.querySelector("img");
    lbImg.src = img.getAttribute("src");
    lbImg.alt = img.getAttribute("alt");
    lbTitle.textContent = card.querySelector(".gallery-title").textContent;
    lbCaption.textContent = card.dataset.caption || "";
  }

  if (modalEl && window.bootstrap) {
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);

    document.querySelectorAll(".gallery-card").forEach((card) => {
      card.addEventListener("click", () => {
        const list = visibleCards();
        currentIndex = Math.max(0, list.indexOf(card));
        lastTrigger = card;
        showCard(card);
        modal.show();
      });
    });

    function step(dir) {
      const list = visibleCards();
      if (!list.length) return;
      currentIndex = (currentIndex + dir + list.length) % list.length;
      showCard(list[currentIndex]);
    }

    lbPrev.addEventListener("click", () => step(-1));
    lbNext.addEventListener("click", () => step(1));
    modalEl.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });
    modalEl.addEventListener("shown.bs.modal", () => {
      const toggle = visibleCards().length > 1;
      lbPrev.hidden = lbNext.hidden = !toggle;
    });
    // Kembalikan fokus ke kartu yang membuka modal
    modalEl.addEventListener("hidden.bs.modal", () => {
      if (lastTrigger) lastTrigger.focus();
    });
  }

  /* ---------- Kontak: email & instagram ---------- */
  const contact = document.getElementById("kontak");
  if (contact) {
    const email = (contact.dataset.email || "").trim();
    const insta = (contact.dataset.instagram || "").trim().replace(/^@/, "");
    const actions = document.getElementById("contactActions");
    const placeholder = document.getElementById("contactPlaceholder");
    const btnMail = document.getElementById("btnMail");
    const btnCopy = document.getElementById("btnCopy");
    const btnInsta = document.getElementById("btnInsta");
    const emailText = document.getElementById("emailText");
    const status = document.getElementById("copyStatus");

    if (email || insta) {
      actions.hidden = false;
      placeholder.hidden = true;
    }

    if (email) {
      emailText.textContent = email;
      btnMail.href = "mailto:" + email + "?subject=" + encodeURIComponent("Hai Suci! ♡");
    } else {
      emailText.parentElement.hidden = true;
      btnMail.hidden = true;
      btnCopy.hidden = true;
    }

    if (insta) {
      btnInsta.href = "https://instagram.com/" + encodeURIComponent(insta);
      btnInsta.hidden = false;
    }

    btnCopy.addEventListener("click", async () => {
      status.className = "copy-status";
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          const ta = document.createElement("textarea");
          ta.value = email;
          ta.setAttribute("readonly", "");
          ta.style.position = "absolute";
          ta.style.left = "-9999px";
          document.body.appendChild(ta);
          ta.select();
          const ok = document.execCommand("copy");
          document.body.removeChild(ta);
          if (!ok) throw new Error("copy failed");
        }
        status.textContent = "Yay! Email berhasil disalin ♡";
        status.classList.add("ok");
      } catch (err) {
        status.textContent = "Ups, gagal menyalin. Silakan salin manual ya.";
        status.classList.add("err");
      }
    });
  }
})();
