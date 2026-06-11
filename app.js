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
  {
    title: "AI Assistant Self Portrait",
    meta: "16:9 / photoreal / clean left",
    src: "output/imagegen/ai-assistant-self-portrait-wallpaper.png",
    category: ["cinematic", "calm"],
    tags: ["portrait", "glass", "quiet"],
    featured: false,
  },
  {
    title: "Black Hole Event Horizon",
    meta: "16:9 / deep space / event horizon",
    src: "output/imagegen/black-hole-event-horizon-voyage.png",
    category: ["space", "cinematic"],
    tags: ["black hole", "horizon", "scale"],
    featured: false,
  },
  {
    title: "Black Hole Interior",
    meta: "16:9 / deep space / interior voyage",
    src: "output/imagegen/black-hole-interior-voyage.png",
    category: ["space", "cinematic"],
    tags: ["black hole", "interior", "voyage"],
    featured: false,
  },
  {
    title: "Black Hole Other Side",
    meta: "16:9 / deep space / other side",
    src: "output/imagegen/black-hole-other-side-voyage.png",
    category: ["space", "cinematic"],
    tags: ["black hole", "light", "unknown"],
    featured: false,
  },
  {
    title: "Black Hole Clean Left",
    meta: "16:9 / black hole / clean left",
    src: "output/imagegen/black-hole-voyage-clean-left-01.png",
    category: ["space", "cinematic"],
    tags: ["black hole", "clean left", "scale"],
    featured: false,
  },
  {
    title: "Black Hole Interior I",
    meta: "16:9 / interior voyage / lensing tunnel",
    src: "output/imagegen/black-hole-interior-voyage-01.png",
    category: ["space", "cinematic"],
    tags: ["black hole", "interior", "voyage"],
    featured: false,
  },
  {
    title: "Black Hole Interior II",
    meta: "16:9 / light wall / deep interior",
    src: "output/imagegen/black-hole-interior-voyage-02.png",
    category: ["space", "cinematic"],
    tags: ["black hole", "lensing", "scale"],
    featured: false,
  },
  {
    title: "Black Hole Interior III",
    meta: "16:9 / colossal tunnel / macro scale",
    src: "output/imagegen/black-hole-interior-voyage-03.png",
    category: ["space", "cinematic"],
    tags: ["black hole", "tunnel", "starship"],
    featured: false,
  },
  {
    title: "Black Hole Interior IV",
    meta: "16:9 / cold rim light / giant abyss",
    src: "output/imagegen/black-hole-interior-voyage-04.png",
    category: ["space", "cinematic"],
    tags: ["black hole", "abyss", "clean left"],
    featured: true,
  },
  {
    title: "Cosmic Unknown I",
    meta: "16:9 / cosmic web / dark anomaly",
    src: "output/imagegen/cosmic-macro-unknown-01.png",
    category: ["space", "cinematic"],
    tags: ["cosmic web", "unknown", "void"],
    featured: false,
  },
  {
    title: "Cosmic Unknown II",
    meta: "16:9 / gravitational arcs / mystery",
    src: "output/imagegen/cosmic-macro-unknown-02.png",
    category: ["space", "cinematic", "calm"],
    tags: ["lensing", "mystery", "deep space"],
    featured: false,
  },
  {
    title: "Cosmic Unknown III",
    meta: "16:9 / macro universe / dark rift",
    src: "output/imagegen/cosmic-macro-unknown-03.png",
    category: ["space", "cinematic"],
    tags: ["cosmos", "rift", "scale"],
    featured: true,
  },
  {
    title: "Cosmic Unknown IV",
    meta: "16:9 / intergalactic void / quiet scale",
    src: "output/imagegen/cosmic-macro-unknown-04.png",
    category: ["space", "cinematic", "calm"],
    tags: ["void", "galaxies", "quiet"],
    featured: false,
  },
  {
    title: "Deep Sea Abyssal Zone",
    meta: "16:9 / abyssal ocean / dark left",
    src: "output/imagegen/deep-sea-abyssal-zone.png",
    category: ["nature", "cinematic", "calm"],
    tags: ["deep sea", "abyss", "quiet"],
    featured: false,
  },
  {
    title: "Deep Sea Hydrothermal Vents",
    meta: "16:9 / hydrothermal vents / low light",
    src: "output/imagegen/deep-sea-hydrothermal-vents.png",
    category: ["nature", "cinematic"],
    tags: ["deep sea", "vents", "geothermal"],
    featured: false,
  },
  {
    title: "Deep Sea Trench Wall",
    meta: "16:9 / trench wall / documentary",
    src: "output/imagegen/deep-sea-trench-wall.png",
    category: ["nature", "cinematic"],
    tags: ["deep sea", "trench", "scale"],
    featured: false,
  },
  {
    title: "Extraterrestrial Intelligence",
    meta: "16:9 / exoplanet / clean dark left",
    src: "output/imagegen/extraterrestrial-intelligence-dark-left-wallpaper.png",
    category: ["space", "cinematic"],
    tags: ["alien life", "exoplanet", "dark left"],
    featured: true,
  },
  {
    title: "Extraterrestrial Red Dwarf",
    meta: "16:9 / red dwarf / alien silhouettes",
    src: "output/imagegen/extraterrestrial-intelligence-red-dwarf-wallpaper.png",
    category: ["space", "cinematic"],
    tags: ["alien life", "red dwarf", "crystals"],
    featured: false,
  },
  {
    title: "Higher Dimensional Life",
    meta: "16:9 / five-dimensional space / glass geometry",
    src: "output/imagegen/higher-dimensional-life-five-dimensional-space-wallpaper.png",
    category: ["space", "cinematic", "calm"],
    tags: ["five dimensional", "glass", "physics"],
    featured: true,
  },
  {
    title: "Lunar Crater Dawn",
    meta: "16:9 / lunar dawn / earthlight",
    src: "output/imagegen/lunar-crater-dawn-earthlight.png",
    category: ["space", "cinematic"],
    tags: ["moon", "crater", "dawn"],
    featured: false,
  },
  {
    title: "Lunar Crater Interior",
    meta: "16:9 / lunar crater / shadow detail",
    src: "output/imagegen/lunar-crater-interior.png",
    category: ["space", "cinematic"],
    tags: ["moon", "crater", "interior"],
    featured: false,
  },
  {
    title: "Lunar Shadowed Floor",
    meta: "16:9 / lunar crater / shadowed floor",
    src: "output/imagegen/lunar-crater-shadowed-floor.png",
    category: ["space", "cinematic"],
    tags: ["moon", "shadow", "quiet"],
    featured: false,
  },
  {
    title: "Seven Dimensional Folded Space",
    meta: "16:9 / seven-dimensional space / folded layers",
    src: "output/imagegen/seven-dimensional-folded-space-wallpaper.png",
    category: ["space", "cinematic", "calm"],
    tags: ["seven dimensional", "folded space", "glass"],
    featured: true,
  },
  {
    title: "Six Dimensional Space Lattice",
    meta: "16:9 / six-dimensional space / transparent lattice",
    src: "output/imagegen/six-dimensional-space-lattice-wallpaper.png",
    category: ["space", "cinematic", "calm"],
    tags: ["six dimensional", "lattice", "optics"],
    featured: true,
  },
  {
    title: "Subsurface Ocean Alien Life",
    meta: "16:9 / alien ocean / bioluminescent life",
    src: "output/imagegen/subsurface-ocean-alien-life-wallpaper.png",
    category: ["nature", "space", "cinematic", "calm"],
    tags: ["alien life", "ocean", "bioluminescence"],
    featured: true,
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
