const wallpapers = [
  {
    title: "Alpine Observatory",
    meta: "16:9 / 写实摄影 / 左侧留白",
    src: "output/imagegen/alpine-observatory-hero-wallpaper.png",
    category: ["nature", "calm"],
    tags: ["blue hour", "snow", "clean left"],
    featured: true,
  },
  {
    title: "Black Hole Voyage",
    meta: "16:9 / 深空黑 / 冷色反光",
    src: "output/imagegen/black-hole-voyage-wallpaper.png",
    category: ["space", "cinematic"],
    tags: ["black hole", "space", "scale"],
    featured: true,
  },
  {
    title: "Everest Summit",
    meta: "16:9 / 珠峰雪线 / 纪实质感",
    src: "output/imagegen/everest-summit-clean-left-wallpaper.png",
    category: ["nature", "cinematic"],
    tags: ["everest", "snow", "documentary"],
    featured: false,
  },
  {
    title: "Grassland Eye Care",
    meta: "16:9 / 低饱和绿色 / 护眼",
    src: "output/imagegen/green-grassland-eye-care-wallpaper.png",
    category: ["nature", "calm"],
    tags: ["green", "soft light", "calm"],
    featured: false,
  },
  {
    title: "Moon Surface Earthrise",
    meta: "16:9 / 月面细节 / 地球远景",
    src: "output/imagegen/moon-surface-earth-clean-left-wallpaper.png",
    category: ["space", "cinematic"],
    tags: ["moon", "earth", "quiet"],
    featured: false,
  },
  {
    title: "Solar Surface",
    meta: "16:9 / 太阳尺度 / 控制高光",
    src: "output/imagegen/solar-surface-clean-left-wallpaper.png",
    category: ["space", "cinematic"],
    tags: ["solar", "warm rim", "scale"],
    featured: false,
  },
  {
    title: "Black Hole Reverse",
    meta: "16:9 / 反向构图 / 图标区克制",
    src: "output/imagegen/black-hole-voyage-wallpaper-reverse.png",
    category: ["space"],
    tags: ["deep space", "contrast", "clean"],
    featured: false,
  },
  {
    title: "UFO Earth Apocalypse",
    meta: "16:9 / 宏大场景 / 中右焦点",
    src: "output/imagegen/ufo-earth-apocalypse-wallpaper.png",
    category: ["cinematic"],
    tags: ["earth", "dramatic", "wide"],
    featured: false,
  },
];

const hero = document.querySelector(".hero");
const heroImage = document.querySelector("#heroImage");
const heroTitle = document.querySelector("#heroTitle");
const heroMeta = document.querySelector("#heroMeta");
const randomHero = document.querySelector("#randomHero");
const galleryGrid = document.querySelector("#galleryGrid");
const filterButtons = document.querySelectorAll(".filter-button");
const previewDialog = document.querySelector("#previewDialog");
const previewImage = document.querySelector("#previewImage");
const previewTitle = document.querySelector("#previewTitle");
const previewMeta = document.querySelector("#previewMeta");
const downloadPreview = document.querySelector("#downloadPreview");
const closePreview = document.querySelector("#closePreview");
const setHeroFromPreview = document.querySelector("#setHeroFromPreview");

let activeFilter = "all";
let activePreview = wallpapers[0];
let heroIndex = 0;

function renderGallery() {
  const filtered = wallpapers.filter((wallpaper) => {
    return activeFilter === "all" || wallpaper.category.includes(activeFilter);
  });

  galleryGrid.innerHTML = filtered
    .map((wallpaper) => {
      const featuredClass = wallpaper.featured ? " featured-card" : "";
      const tags = wallpaper.tags.map((tag) => `<span>${tag}</span>`).join("");

      return `
        <article class="wallpaper-card${featuredClass}" data-title="${wallpaper.title}">
          <button class="wallpaper-media" type="button" data-action="preview" aria-label="预览 ${wallpaper.title}">
            <img src="${wallpaper.src}" alt="${wallpaper.title} 高清电脑壁纸" loading="lazy" />
          </button>
          <div class="wallpaper-body">
            <div class="wallpaper-title-row">
              <div>
                <h3>${wallpaper.title}</h3>
                <p class="wallpaper-meta">${wallpaper.meta}</p>
              </div>
            </div>
            <div class="wallpaper-tags">${tags}</div>
            <div class="wallpaper-actions">
              <button class="card-button" type="button" data-action="hero">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4zM8 22h8M12 18v4" /></svg>
                首屏
              </button>
              <a class="card-button" href="${wallpaper.src}" download>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" /></svg>
                下载
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function setHero(wallpaper) {
  hero.classList.add("is-changing");
  window.setTimeout(() => {
    heroImage.src = wallpaper.src;
    heroImage.alt = `${wallpaper.title} 高清电脑壁纸`;
    heroTitle.textContent = wallpaper.title;
    heroMeta.textContent = wallpaper.meta;
    hero.classList.remove("is-changing");
  }, 180);
}

function openPreview(wallpaper) {
  activePreview = wallpaper;
  previewImage.src = wallpaper.src;
  previewImage.alt = `${wallpaper.title} 高清电脑壁纸预览`;
  previewTitle.textContent = wallpaper.title;
  previewMeta.textContent = wallpaper.meta;
  downloadPreview.href = wallpaper.src;
  downloadPreview.setAttribute("download", `${wallpaper.title.toLowerCase().replaceAll(" ", "-")}.png`);
  previewDialog.showModal();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderGallery();
  });
});

galleryGrid.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  const card = target.closest(".wallpaper-card");
  const wallpaper = wallpapers.find((item) => item.title === card.dataset.title);
  if (!wallpaper) return;

  if (target.dataset.action === "preview") {
    openPreview(wallpaper);
  }

  if (target.dataset.action === "hero") {
    setHero(wallpaper);
  }
});

randomHero.addEventListener("click", () => {
  heroIndex = (heroIndex + 1) % wallpapers.length;
  setHero(wallpapers[heroIndex]);
});

closePreview.addEventListener("click", () => previewDialog.close());

setHeroFromPreview.addEventListener("click", () => {
  setHero(activePreview);
  previewDialog.close();
});

previewDialog.addEventListener("click", (event) => {
  if (event.target === previewDialog) {
    previewDialog.close();
  }
});

renderGallery();
