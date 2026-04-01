const nav = document.getElementById("siteNav");
const menuBtn = document.getElementById("menuBtn");
const themeBtn = document.getElementById("themeBtn");
const progBar = document.getElementById("progbar");

if (progBar) {
  const updateProgress = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    progBar.style.width = total > 0 ? (window.scrollY / total * 100) + "%" : "0%";
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
}

const storedTheme = localStorage.getItem("theme");
if (storedTheme === "light") {
  document.body.classList.add("theme-light");
}

const updateThemeButton = () => {
  if (!themeBtn) return;
  const isLight = document.body.classList.contains("theme-light");
  themeBtn.textContent = isLight ? "Dark" : "Light";
  themeBtn.setAttribute("aria-label", isLight ? "Enable dark theme" : "Enable light theme");
};

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("theme-light");
    localStorage.setItem("theme", document.body.classList.contains("theme-light") ? "light" : "dark");
    updateThemeButton();
  });
}

updateThemeButton();

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
  });
}

const navLinks = nav ? Array.from(nav.querySelectorAll("a[data-nav]")) : [];

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    event.preventDefault();
    const section = document.querySelector(href);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(undefined, "", href);

    if (nav && nav.classList.contains("open")) {
      nav.classList.remove("open");
      menuBtn?.setAttribute("aria-expanded", "false");
    }
  });
});

const setActiveNav = (id) => {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.nav === id);
  });
};

const sections = Array.from(document.querySelectorAll("main section[id]"));
if (sections.length > 0 && "IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.id);
        }
      });
    },
    { rootMargin: "-35% 0px -45% 0px", threshold: 0.1 }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  const initialHash = window.location.hash.replace("#", "");
  if (initialHash) setActiveNav(initialHash);
  else setActiveNav("home");
}

const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

if ("IntersectionObserver" in window) {
  const staggerObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const revealEls = Array.from(entry.target.querySelectorAll(".reveal:not(.in-view)"));
        revealEls.forEach((el, i) => {
          setTimeout(() => el.classList.add("in-view"), i * 90);
        });
        staggerObs.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll("main section[id]").forEach((s) => staggerObs.observe(s));
} else {
  document.querySelectorAll(".reveal").forEach((n) => n.classList.add("in-view"));
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", () => {
    const btn = contactForm.querySelector("button[type='submit']");
    if (!btn) return;
    btn.textContent = "Sending...";
    btn.disabled = true;
  });
}
