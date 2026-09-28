import { site } from "./data.js";

function renderNav(): void {
  const navContainer = document.querySelector<HTMLElement>(".header__nav");
  if (!navContainer) return;

  const navHTML = site.nav
    .map((link) => `<a class="header__link" href="${link.href}">${link.label}</a>`)
    .join("");
  navContainer.innerHTML = navHTML;
}

function renderHero(): void {
  const titleEl = document.querySelector<HTMLElement>("#hero-title");
  const descriptionEl = document.querySelector<HTMLElement>(".hero__description");
  const ctaEl = document.querySelector<HTMLElement>("#hero__btn");
  const legalEl = document.querySelector<HTMLElement>(".hero__legal");
  const heroImg = document.querySelector<HTMLImageElement>(".hero__image img");

  if (titleEl) titleEl.textContent = site.hero.title;
  if (descriptionEl) descriptionEl.textContent = site.hero.description;
  if (ctaEl) ctaEl.textContent = site.hero.cta;
  if (legalEl) legalEl.textContent = site.hero.legalNote;
  if (heroImg) {
    heroImg.src = site.hero.imageSrc;
    heroImg.alt = site.hero.imageAlt;
  }
}

function renderStats(): void {
  const statsContainer = document.querySelector<HTMLElement>(".stats");
  if (!statsContainer) return;

  const statsHTML = site.stats
    .map(
      (stat) => `<div class="stat-item">
    <i class="${stat.iconClass} stat-item__icon"></i>
    <span class="stat-item__value">${stat.value}</span>
    <span class="stat-item__label">${stat.label}</span>
    </div>`,
    )
    .join("");
  statsContainer.innerHTML = `<h2 id="stats-title" class="sr-only">Estadísticas de la plataforma</h2>${statsHTML}`;
}

function renderValues(): void {
  const valuesContainer = document.querySelector<HTMLElement>("#values");
  if (!valuesContainer) return;

  const valuesHTML = site.values
    .map(
      (section) => `
    <article class="value-section" style="--blob-color: ${section.blobColor || "transparent"}">
      <div class="value-section__content">
        <h2 class="value-section__title">${section.title}</h2>
        <p class="value-section__body">${section.body}</p>
        <a href="${section.buttonHref}" class="btn btn--outline">${section.buttonLabel}</a>
        
        <div class="collaborator">
          <div class="collaborator__avatar" aria-hidden="true">${section.collaborator.initials}</div>
          <div class="collaborator__info">
            <strong>${section.collaborator.name}</strong>
            <span>${section.collaborator.role}</span>
          </div>
        </div>
      </div>
      <div class="value-section__image">
        <img src="${section.imageSrc}" alt="${section.imageAlt}" loading="lazy" width="600" height="400" />
      </div>
    </article>
  `,
    )
    .join("");

  valuesContainer.innerHTML = `<h2 id="values-title" class="sr-only">Propuestas de valor</h2>${valuesHTML}`;
}

function renderGlobalStats(): void {
  const globalStatsContainer = document.querySelector<HTMLElement>("#global-stats");
  if (!globalStatsContainer) return;

  const globalGridHTML = site.globalStats
    .map(
      (stat) => `<div class="stat-item">
  <span class="stat-item__value">${stat.value}</span>
  <span class="stat-item__label">${stat.label}</span>
  </div>`,
    )
    .join("");
  globalStatsContainer.insertAdjacentHTML("beforeend", `<div class="global-stats__grid">${globalGridHTML}</div>`);
}

function renderServices(): void {
  const servicesContainer = document.querySelector<HTMLElement>("#services");
  if (!servicesContainer) return;

  const servicesHTML = site.services
    .map(
      (service) => `
    <article class="service-card">
      <i class="${service.iconClass} service-card__icon" aria-hidden="true"></i>
      <h3 class="service-card__title">${service.title}</h3>
      <p class="service-card__description">${service.description}</p>
      <a href="${service.linkHref}" class="service-card__link">${service.linkLabel}</a>
    </article>`,
    )
    .join("");

  servicesContainer.innerHTML = `<h2 id="services-title" class="sr-only">Nuestros servicios</h2>${servicesHTML}`;
}

function renderFooter(): void {
  const columnsContainer = document.querySelector<HTMLElement>(".footer__columns");
  const socialContainer = document.querySelector<HTMLElement>(".footer__social");

  if (columnsContainer) {
    const columnsHTML = site.footerColumns
      .map(
        (column) => `
      <div class="footer__column">
        <h4 class="footer__column-title">${column.title}</h4>
        <ul class="footer__links">
          ${column.links.map((link) => `<li><a href="${link.href}">${link.label}</a></li>`).join("")}
        </ul>
      </div>
    `,
      )
      .join("");
    columnsContainer.innerHTML = columnsHTML;
  }

  if (socialContainer) {
    const socialHTML = site.socialLinks
      .map(
        (social) => `
      <a href="${social.href}" class="footer__social-link" aria-label="Síguenos en ${social.platform}" target="_blank" rel="noopener noreferrer">
        <i class="${social.iconClass}" aria-hidden="true"></i>
      </a>
    `,
      )
      .join("");
    socialContainer.innerHTML = socialHTML;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderHero();
  renderStats();
  renderValues();
  renderServices();
  renderGlobalStats();
  renderFooter();
});
